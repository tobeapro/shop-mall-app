<template lang="pug">
    transition(name="fade")
        .goods-detail(v-if="goodsStatus")
            .show
                .title(@click="changeStatus") 
                    icon(name="angle-left",scale="2")
                    span(class="name") {{goodsDetail.name}}
                .detail
                    mt-swipe(:auto="4000")
                        mt-swipe-item(v-for="(item,index) in goodsDetail.img" :key="index")
                            img(:src="item")
                .intro
                    .name {{goodsDetail.name}}
                    .explain {{goodsDetail.explain}}
                    .price ¥:{{goodsDetail.price}}
                .others
                    span 商品详情
                    span 评价
                .info 无
            .handle 
                .cart(@click="addCart(goodsDetail)") 加入购物车
                .order(@click="toShopCar(goodsDetail)") 立即购买
</template>
<script>
export default {
  name:'goodsDetail',
  data(){
      return{

      }
  },
  computed:{
      goodsDetail(){
          return this.$store.state.shop.goodsDetail
      },
      goodsStatus(){
          return this.$store.state.shop.goodsStatus
      }
  },
  methods:{
      changeStatus(){
          this.$store.commit("changeGoodsStatus")
      },
      addCart(val){
          this.$emit("cartHandle",val)
      },
      toShopCar(goodsDetail){
          this.changeStatus()
          this.$store.commit("toShopCar",goodsDetail)
          this.$router.push('/shopCar')
      }
  }
}
</script>
<style lang="scss" scoped>
    .fade-enter-active, .fade-leave-active{
        transition: all .2s;
    }
    .fade-enter, .fade-leave-to{
        transform:translateX(-100%);
        opacity:.4;
    }
    .goods-detail{
        position:fixed;
        z-index:2;
        top:0;
        bottom:0;
        width:100%;
        background-color:#fff;
        .show{
            position:fixed;
            top:0;
            bottom:50px;
            width:100%;
            overflow-y:auto;
            .title{
                padding-left:10px;
                line-height:36px;
                font-size:14px;
                text-align:center;
                color:#fff;
                background-color:#1296db;
                cursor:pointer;
                .fa-icon{
                    float:left;
                }
            }
            .detail{
                height:40vh;
                .mint-swipe-item{
                    img{
                        width:100%;
                        height:40vh;
                    }
                }
            }
            .intro{
                padding-left:10px;
                .name{
                    line-height:40px;
                    font-size:22px;
                }
                .explain{
                    color:#555;
                }
                .price{
                    font-size:18px;
                    font-weight:bold;
                    line-height:36px;
                    color:#e8380d;
                }
            }
            .others{
                margin-top:10px;
                display:flex;
                text-align:center;
                background-color:#f6f6f6;
                span{
                    flex:1;
                    margin:10px 0;
                    line-height:20px;
                    &:not(:last-child){
                        border-right:1px solid #aaa;
                    }
                }
            }
        }
        .handle{
            position:fixed;
            bottom:0;
            width:100%;
            height:50px;
            line-height:50px;
            font-size:14px;
            text-align:center;
            color:#fff;
            box-shadow: 0 -1px 10px 1px #ddd;
            .cart{
                float:left;
                width:50%;
                background-color:#1296db;
            }
            .order{
                float:right;
                width:50%;
                background-color:#e8380d;
            }
        }
    }
</style>
