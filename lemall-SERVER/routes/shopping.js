const express = require('express'),
    route = express.Router();
//首页数据
route.get('/home', (req, res) => {
    let {idlx}=req.query;
    let data = req.shoppingDATA.filter(item=>idlx===item.idlx);
    if(data.length!==0){
        res.send({
            code: 0,
            msg: 'OK',
            data
        });
    }else{
        res.send({
            code:1,
            msg:"NO",
            data:null
        })
    }

});



//首页详细数据
route.get('/info', (req, res) => {
    let {idlx,id} = req.query;
    id = parseFloat(id);

    let item = req.shoppingDATA.find(item => {
        return (idlx===item.idlx)&&parseFloat(item.id) === id;
    });
    if (item) {
        res.send({
            code: 0,
            msg: 'OK!',
            data: item
        });
        return;
    }
    res.send({
        code: 1,
        msg: 'NO!',
        data: null
    });
});


//列表数据
route.get('/list', (req, res) => {
    //=>接收客户端传递的参数值，不传的给默认值：limit每页展示条数，page是第几页，type是筛选的类型
    let {limit = 6, page = 1} = req.query;
    limit = parseFloat(limit);
    page = parseFloat(page);

    //=>分页处理：就是在所有筛选出来的数据中，找到某一页的那几条数据，然后就把这几条返回给客户端即可
    // console.log(req.listDATA);
    let total = Math.ceil(req.listDATA.length / limit),//=>总页数
        result = [];

    if (page <= total) {
        /*
         *  999条  每页10条(limit)  =>总页数100页
         *    page=1  返回索引 0~9
         *    page=2  返回索引 10~19
         *    page=n  返回索引 (n-1)*limit ~ n*limit-1
         */
        for (let i = (page - 1) * limit; i <= (page * limit - 1); i++) {
            let item = req.listDATA[i];
            if (!item) break;
            result.push(item);
        }
    }
    res.send({
        code: 0,
        msg: 'OK!',
        total,
        limit,
        page,
        data: result
    });
});

//分类
route.get("/fenlei",(req,res)=>{
    let data = req.classDATA;
    res.send({
        code: 0,
        msg: 'OK',
        data
    });
})

module.exports = route;