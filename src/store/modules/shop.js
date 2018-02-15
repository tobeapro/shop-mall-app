 const shop={
    state:{
        goodsDetail:{},
        goodsStatus:false,
        shopCar:{}
    },
    mutations:{
        setGoodsDetail(state,val){
            state.goodsDetail=val
        },
        changeGoodsStatus(state){
            state.goodsStatus=!state.goodsStatus
        }
    },
    actions:{
        set_goodsDetail({commit},val){
            commit('setGoodsDetail',val)  
        },
        change_goodsStatus({commit}){
            commit('changeGoodsStatus')  
        }
    },
    getters:{

    }
}
export default shop