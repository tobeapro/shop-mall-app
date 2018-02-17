<template lang="pug">
    transition(name="fade")
        .add-cart(v-if="cartStatus")
            .cart-mask(@click="changeCartStatus")
            .cart-content
                .detail
                    img(:src="cartDetail.img[0]")
                    .info
                        .name {{cartDetail.name}}
                        .price ¥{{cartDetail.price}}
                        .add
                            span(@click="reduceCartNum(cartDetail.id)",:class="cartNum===0?'none':''")
                                icon(name="minus")
                            span(class="num") {{cartNum}}
                            span(@click="addCartNum(cartDetail.id)")
                                icon(name="plus")
                .handle 
                    .total 合计:
                        span(class="price") ¥{{cartDetail.price*cartNum}}
                    .order 立即购买
                        
</template>
<script>
export default {
  name:'addCart',
  data(){
      return{
         cartNum:0 
      }
  },
  props:{
      cartDetail:{
          type:Object
      }
  },
  computed:{
      cartStatus(){
          return this.$store.state.shop.cartStatus
      },
      detail(){
          return this.cartDetail
      }
  },
  beforeUpdate(){
      this.$store.commit("setCartNum",this.detail)
      this.cartNum=this.$store.getters.getCartNum(this.detail.id).num
  },
  methods:{
      changeCartStatus(){
          this.$store.commit("changeCartStatus")
      },
      reduceCartNum(id){
          if(this.cartNum===0){
              return
          }
          this.$store.commit("reduceCartNum",id)
          this.cartNum=this.$store.getters.getCartNum(id).num
      },
      addCartNum(id){
          this.$store.commit("addCartNum",id)
          this.cartNum=this.$store.getters.getCartNum(id).num
      }
  }
}
</script>
<style lang="scss" scoped>
    .fade-enter-active, .fade-leave-active{
        transition: all .2s;
    }
    .fade-enter, .fade-leave-to{
        transform:translateY(100%);
        opacity:.4;
    }
    .add-cart{
        position:fixed;
        z-index:10;
        top:0;
        bottom:0;
        width:100%;
        .cart-mask{
            position:absolute;;
            top:0;
            bottom:0;
            width:100%;
            background-color:rgba(0,0,0,.6);  
        }
        .cart-content{
            position:fixed;
            bottom:0;
            width:100%;
            background-color:#fff;
            .detail{
                display:flex;
                align-items:center;
                img{
                    margin:0 10px;
                    width:60px;
                    height:60px;
                    border-radius: 50%;
                }
                .info{
                    position: relative;
                    width:100%;
                    .name{
                        line-height:30px;
                    }
                    .price{
                        font-size:14px;
                        line-height:20px;
                        color:#e8380d;
                    }
                    .add{
                        position: absolute;
                        top:50%;
                        right:10px;
                        transform:translateY(-50%); 
                        span{
                            float:left;                        
                            .fa-icon{
                                padding:6px;
                                color:#fff;
                                background-color:#1296db;
                                border-radius: 50%;
                            }
                            &.none{
                                .fa-icon{
                                    background-color:#eee;
                                }
                            }
                            &.num{
                                margin:0 10px; 
                                line-height:30px;                      
                                font-size:20px;
                            }
                        }
                    }
                }               
            }
            .handle{
                margin-top:10px;
                line-height:36px;
                font-size:14px;
                .total{
                    padding-left:20px;
                    float:left;
                    width:50%;
                    .price{
                        font-size:16px;
                        color:#e8380d;
                    }
                }
                .order{
                    float:right;
                    width:50%;
                    text-align:center;
                    color:#fff;
                    background-color:#e8380d;
                }
            }
        }
    }
</style>

