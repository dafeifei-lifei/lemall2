const express = require('express'),
    route = express.Router(),
    {writeFile} = require('../utils/promiseFS'),
    STORE_PATH = './json/store.json',
    utils = require('../utils/utils');

//=>增加购物车信息
route.post('/add', (req, res) => {
    console.log(req.session.personID);
    // let personID = req.session.personID,//=>登录用户的ID
    let personID =1,
        {id,idlx} = req.body;//=>传递的课程ID，我就是要把这个课程加入购物车
    id = parseFloat(id);

    //=>已经登录状态下，把信息直接存储到JSON中即可（用户在其它平台上登录，也可以从JSON中获取到数据，实现信息跨平台）
    if (personID) {
        utils.ADD_STORE(req, res, id,idlx).then(() => {
            res.send({code: 0, msg: 'OK!'});
        }).catch(() => {
            res.send({code: 1, msg: 'NO!'});
        });
        return;
    }

    //=>未登录状态下，临时存储到SESSION中(等到下一次登录成功，也要把SESSION中存储的信息，直接存储到文件中（并且清空SESSION中的信息）
    !req.session.storeList ? req.session.storeList = [] : null;
    req.session.storeList.push(id,idlx);
    res.send({code: 0, msg: 'OK!'});
});

route.post('/remove', (req, res) => {
    let personID = req.session.personID,
        {idlx,id = 0} = req.body;
    id = parseFloat(id);

    if (personID) {
        req.storeDATA = req.storeDATA.filter(item => {
            return !(parseFloat(item.currentId) === id && parseFloat(item.personID) === personID);
        });
        writeFile(STORE_PATH, req.storeDATA).then(() => {
            res.send({code: 0, msg: 'OK!'});
        }).catch(() => {
            res.send({code: 1, msg: 'NO!'});
        });
        return;
    }

    !req.session.storeList ? req.session.storeList = [] : null;
    req.session.storeList = req.session.storeList.filter(item => {
        return parseFloat(item) !== id;
    });
    res.send({code: 0, msg: 'OK!'});
});

route.get('/info', (req, res) => {
    let state = parseFloat(req.query.state) || 0,
        idlx = req.query.idlx,
        personID = req.session.personID,
        storeList = [];
    if (personID) {
        //=>登录状态下是从JSON文件中获取：在STORE.JSON中找到所有personID和登录用户相同的(服务器从SESSION中可以获取用户ID的)
        req.storeDATA.forEach(item => {
            if (parseFloat(item.personID) === personID && parseFloat(item.state) === state) {
                storeList.push({
                    currentId: parseFloat(item.currentId),
                    storeID: parseFloat(item.id),
                    idlx:idlx
                });
            }
        });
    } else {
        if (state === 0) {
            storeList = req.session.storeList || [];
            storeList = storeList.map(item => {
                return {currentId: item, storeID: 0};
            });
        }
    }
    console.log(storeList);
    //=>根据上面查找到的课程ID（storeList），把每一个课程的详细信息获取到，返回给客户端
    let data = [];
    storeList.forEach(({currentId, storeID} = {}) => {
        console.log(storeList);
        console.log(idlx);

        let item = req.shoppingDATA.find(item => {
            return parseFloat(item.id) === parseFloat(currentId)&&item.idlx===idlx
        });
        console.log(storeID);
        item.storeID = storeID;
        data.push(item);
    });
    res.send({
        code: 0,
        msg: 'OK!',
        data
    });
});

route.post('/pay', (req, res) => {
    //=>把某一个课程的STATE修改为1（改完后也是需要把原始JSON文件替换的）
    console.log(req.body);
    let {storeID,idlx} = req.body,
        personID = req.session.personID,
        // personID=2;
        isUpdate = false;
    if (personID) {
        req.storeDATA = req.storeDATA.map(item => {
            if (parseFloat(item.id) === parseFloat(storeID)&&idlx===item.idlx && parseFloat(item.personID) === parseFloat(personID)) {
                isUpdate = true;
                return {...item, state: 1};
            }
            return item;
        });
        if (isUpdate) {
            writeFile(STORE_PATH, req.storeDATA).then(() => {

                res.send({code: 0, msg: 'OK!'});
            }).catch(() => {
                res.send({code: 1, msg: 'NO!'});
            });
        } else {
            res.send({code: 1, msg: 'NO!'});
        }
        return;
    }
    res.send({code: 1, msg: 'NO LOGIN!'});
});

module.exports = route;