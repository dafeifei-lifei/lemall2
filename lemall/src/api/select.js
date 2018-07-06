import axios from "./index.js"


//获取分类结构
export function fenleiData(){
    return axios.get("/shopping/fenlei");
}


//获取分类数据
export function selectData(){
    return axios.get("/shopping/home",{params:{idlx:"classify"}});
}

