 const shop={
    state:{
        goodsDetail:{},
        goodsStatus:false,
        shopCar:[],
        cartStatus:false
    },
    mutations:{
        setGoodsDetail(state,val){
            state.goodsDetail=val
        },
        changeGoodsStatus(state){
            state.goodsStatus=!state.goodsStatus
        },
        changeCartStatus(state){
            state.cartStatus=!state.cartStatus
        },
        setCartNum(state,val){
            let shopCar=state.shopCar;
            for(let i=0;i<shopCar.length;i++){
                if(shopCar[i].id===val.id){
                    return
                }else{
                    continue
                }
            }
            val.num=0
            shopCar.push(val)
        },
        reduceCartNum(state,id){
            let shopCar=state.shopCar;
            for(let i=0;i<shopCar.length;i++){
                if(shopCar[i].id===id){
                    shopCar[i].num--
                    return
                }else{
                    continue
                }
            }
        },
        addCartNum(state,id){
            let shopCar=state.shopCar;
            for(let i=0;i<shopCar.length;i++){
                if(shopCar[i].id===id){
                    shopCar[i].num++
                    return
                }else{
                    continue
                }
            }
        },
        removeCartNum(state,id){
            let shopCar=state.shopCar;
            for(let i=0;i<shopCar.length;i++){
                if(shopCar[i].id===id){
                    shopCar[i].num=0
                    return
                }else{
                    continue
                }
            }
        }
    },
    actions:{
        set_goodsDetail({commit},val){
            commit('setGoodsDetail',val)  
        },
        change_goodsStatus({commit}){
            commit('changeGoodsStatus')  
        },
        remove_cartNum({commit},id){
            commit('removeCartNum',id)
        }
    },
    getters:{
        getCartNum: (state) => (id) => {
            return state.shopCar.find(item => item.id === id)
        },
        getshopCar(state){
            return state.shopCar
        }
    }
}
export default shop