 const shop={
    state:{
        goodsDetail:{},
        goodsStatus:false,
        shopCar:[],
        cartStatus:false,
        orderList:[]
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
            val.chooseStatus=false
            shopCar.push(val)
        },
        toShopCar(state,val){
            let shopCar=state.shopCar;
            for(let i=0;i<shopCar.length;i++){
                if(shopCar[i].id===val.id){
                    if(shopCar[i].num>0){
                        return
                    }else{
                        shopCar[i].num=1
                        return
                    }
                }else{
                    continue
                }
            }
            val.num=1
            val.chooseStatus=false
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
        },
        changeChooseStatus(state,item){
            let shopCar=state.shopCar;
            for(let i=0;i<shopCar.length;i++){
                if(shopCar[i].id===item.id){
                    shopCar[i].chooseStatus=item.chooseStatus
                    return
                }else{
                    continue
                }
            }
        },
        addNewOrder(state,item){
            state.orderList.push(item)
            let shopCar=state.shopCar   
            for(let i=0;i<shopCar.length;i++){
                if(shopCar[i].chooseStatus){
                    shopCar.splice(i,1)          
                    i--       
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