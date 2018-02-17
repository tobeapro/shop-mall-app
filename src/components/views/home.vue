<template lang="pug">
  .home
    Search
    Banner(:imgList="imgList") 
    goodsDetail(@cartHandle="cartHandle")
    addCart(:cartDetail="cartDetail")
    .type
      ul.type-list.clearfix
        li(v-for="(item,index) in typeList" :key="index")
          a(:href="item.link")
            i(class="type-img" :style="{background:'url('+item.url+')',backgroundSize:'cover'}")
            span(class="type-name") {{item.name}}
    .goods
      .goods-item(v-for="(item,index) in goodsList" :key="index")
        h4 {{item.goods.type}}
          span(style="float:right") P{{index+1}}
        ul.clearfix
          li(v-for="(val,inx) in item.goods.list" :key="inx",@click="goodsDetail(val)")
            img(:src="val.img[0]")
            span(class="price") ¥{{val.price}}
            span(class="name")  {{val.name}}
            span(class="shop-car",@click.stop="addCart(val)")
              icon(name="shopping-cart",scale="1.2")         
</template>
<script>
import { MessageBox } from 'mint-ui'
import img1 from '../../assets/img/banner_1.jpg'
import img2 from '../../assets/img/banner_2.jpg'
import img3 from '../../assets/img/banner_3.jpg'
import img4 from '../../assets/img/banner_4.jpg'
import img5 from '../../assets/img/banner_5.jpg'
import Search from '../common/search.vue'
import Banner from '../common/banner.vue'
import goodsDetail from '../common/goodsDetail.vue'
import addCart from '../common/addCart.vue'
export default {
  name:'home',
  data(){
    return{
      imgList:[
        {name:'banner_1',url:img1},
        {name:'banner_2',url:img2},
        {name:'banner_3',url:img3},
        {name:'banner_4',url:img4},
        {name:'banner_5',url:img5}
      ],
      typeList:[],
      goodsList:[],
      cartDetail:{}
    }
  },
  mounted(){   
    this.$axios.get('/data.json')
    .then((res)=>{
      this.typeList=res.data.typeList
      this.goodsList=res.data.goodsList
    })
    .catch((err)=>{
      console.log(err)
      MessageBox.alert("请求失败！", "提示")
    })
  },
  components:{
    Banner,
    Search,
    goodsDetail,
    addCart
  },
  methods:{
    goodsDetail(val){
      this.$store.dispatch("set_goodsDetail",val)
      this.$store.commit("changeGoodsStatus")
    },
    addCart(val){
      this.cartDetail=val
      this.$store.commit("changeCartStatus")
    },
    cartHandle(val){
      this.cartDetail=val
      this.$store.commit("changeCartStatus")
    }
  }
}
</script>
<style lang="scss" scoped>
  .home{
    position: absolute;
    top:0;
    bottom:60px;
    width:100%;
    overflow-y:auto;
    .type{
      background-color:#f3f3f3;
      .type-list{
        li{       
          float:left;
          padding:6px 0;
          width:20%;
          text-align:center;
          font-size:0;
          a{
            display:flex;
            flex-direction: column;
            align-items:center;
            .type-img{
              display:inline-block;
              width:40px;
              height:40px;
            }
            .type-name{
              font-size:12px;
              color:#555;
            }
          }
        }
      }
    }
    .goods{
      background-color:#f6f6f6;
      .goods-item{
        h4{
          padding:0 10px;
          line-height:36px;
          font-size:14px;
          background-color:#fff;
          &:before{
            content:"";
            display:inline-block;
            margin-right:6px;
            width:4px;
            height:12px;
            background-color:#e8380d;
          }
        }
        ul{
          border-top:1px solid #ddd;
          border-bottom:1px solid #ddd;
          li{
            position: relative;
            float:left;
            padding:6px 0;
            display:flex;
            flex-direction:column;
            width:50%;
            &:not(:last-child){
              border-right:1px solid #ddd;
            }
            img{
              margin:10px 0;
              width:100%;
              height:100px;
            }
            .price{
              padding-left:10px;
              font-size:14px;
              color:#e8380d;
            }
            .name{
              padding-left:10px;
            }
            .shop-car{
              position: absolute;
              right:10px;
              bottom:4px;
              color:#1296db;
              cursor:pointer;
            }
          }
        }
      }
    }
  }
</style>


