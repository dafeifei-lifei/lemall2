import axios from "./index.js";
export function queryBanner() {
    return axios.get('/shopping/home',{
        params:{
            idlx:"banner"
        }
    });
}
export function queryBanner2() {
    return axios.get('/shopping/home',{
        params:{
            idlx:'banner2'
        }
    });

}


export function queryHot() {
    return axios.get('/shopping/home',{
        params:{
            idlx:'hotSale'
        }
    });

}
export function queryBig() {
    return axios.get('/shopping/home',{
        params:{
            idlx:'bigScreen'
        }
    });

}
export function queryFitting() {
    return axios.get('/shopping/home',{
        params:{
            idlx:'fitting'
        }
    });

}

export function mallSort(payload){
    return axios.get("shopping/list",{
        params:payload
    })
}