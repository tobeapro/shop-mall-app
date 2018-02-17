<template lang="pug">
  .category
    goodsDetail(@cartHandle="cartHandle")
    addCart(:cartDetail="cartDetail")
    .category-title
      ul
        li(:class="chooseIndex===0?'active':''",@click="chooseType(0)") 全部
        li(v-for="(item,index) in goodsList",:class="chooseIndex===index+1?'active':''",@click="chooseType(index+1)",v-text="item.goods.type",:key="index")
    .category-content
      .item(:class="chooseIndex===0?'active':''")
        ul(v-for="(item,index) in goodsList",:key="index")
          li(v-for="(val,inx) in item.goods.list",:key="inx",@click="goodsDetail(val)",class="clearfix")
            img(:src="val.img[0]")
            span(class="name") {{val.name}}
      .item(v-for="(item,index) in goodsList",:class="chooseIndex===index+1?'active':''",:key="index")
        ul
          li(v-for="(val,inx) in item.goods.list",:key="inx",@click="goodsDetail(val)",class="clearfix")
            img(:src="val.img[0]")
            span(class="name") {{val.name}}

</template>
<script>
import goodsDetail from '../common/goodsDetail.vue'
import addCart from '../common/addCart.vue'
export default {
  name:'category',
  data(){
    return{
      goodsList:[],
      cartDetail:{},
      chooseIndex:0
    }
  },
  mounted(){
    this.$axios.get("/data.json")
    .then((res)=>{
      this.goodsList=res.data.goodsList
    })
    .catch((err)=>{
      console.log(err)
    })
  },
  components:{
    goodsDetail,
    addCart
  },
  methods:{
    chooseType(index){
      this.chooseIndex=index
    },
    goodsDetail(val){
      this.$store.dispatch("set_goodsDetail",val)
      this.$store.commit("changeGoodsStatus")
    },
    cartHandle(val){
      this.cartDetail=val
      this.$store.commit("changeCartStatus")
    }
  }
}
</script>
<style lang="scss" scoped>
  .category{
    position:fixed;
    z-index:10;
    top:0;
    bottom:60px;
    width:100%;
    .category-title{
      position: absolute;
      top:0;
      bottom:0;
      width:100px;
      border-right:1px solid #ddd;
      overflow-y:auto;
      li{
        font-size:14px;
        line-height:50px;
        text-align:center;
        border-bottom:1px solid #ddd;
        &.active{
          color:#e8380d;
        }
      }
    }
    .category-content{
      position: absolute;
      top:0;
      bottom:0;
      left:100px;
      right:0;
      overflow-y:auto;
      .item{
        display:none;
        &.active{
          display:block;
        }
        li{
          border-bottom:1px solid #ddd;
          img{
            float:left;
            margin:10px;
            width:50px;
            height:50px;
            border-radius: 50%;
          }
          .name{
            line-height:70px;
          }
        }
      }
    }
  }
</style>


