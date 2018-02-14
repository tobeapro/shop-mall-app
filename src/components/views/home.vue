<template lang="pug">
  .home
    Search
    Banner(:imgList="imgList") 
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
          li(v-for="(val,inx) in item.goods.list" :key="inx")
            img(:src="val.img")
            span(class="price") ¥:{{val.price}}
            span(class="name")  {{val.name}}
          
</template>
<script>
import img1 from '../../assets/img/banner_1.jpg'
import img2 from '../../assets/img/banner_2.jpg'
import img3 from '../../assets/img/banner_3.jpg'
import img4 from '../../assets/img/banner_4.jpg'
import img5 from '../../assets/img/banner_5.jpg'
import Search from '../common/search.vue'
import Banner from '../common/banner.vue'
import market from '../../assets/img/market.svg'
import shop from '../../assets/img/shop.svg'
import clothes from '../../assets/img/clothes.svg'
import xian from '../../assets/img/xian.svg'
import tohome from '../../assets/img/tohome.svg'
import recharge from '../../assets/img/recharge.svg'
import beans from '../../assets/img/beans.svg'
import ticket from '../../assets/img/ticket.svg'
import money from '../../assets/img/money.svg'
import all from '../../assets/img/all.svg'
import food1 from '../../assets/img/food1.png'
import food2 from '../../assets/img/food2.png'
import clothes1 from '../../assets/img/clothes1.png'
import clothes2 from '../../assets/img/clothes2.png'
import digital1 from '../../assets/img/digital1.png'
import digital2 from '../../assets/img/digital2.png'
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
      typeList:[
        {name:'京东超市',url:market,link:'#market'},
        {name:'全球购',url:shop,link:'#shop'},
        {name:'服装城',url:clothes,link:'#clothes'},
        {name:'生鲜',url:xian,link:'#xian'},
        {name:'到家',url:tohome,link:'#tohome'},
        {name:'充值中心',url:recharge,link:'#recharge'},
        {name:'领京豆',url:beans,link:'#beans'},
        {name:'领券',url:ticket,link:'#ticket'},
        {name:'惠赚钱',url:money,link:'#money'},
        {name:'全部',url:all,link:'#all'}
      ],
      goodsList:[
        {goods:{
          type:"休闲零食",
          list:[
            {name:'夏威夷果',price:'20',img:food1},
            {name:'好吃的糖果',price:'40',img:food2}
            ]
          }
        },
        {goods:{
          type:"精品服饰",
          list:[
            {name:'卡通T恤',price:'120',img:clothes1},
            {name:'直男衬衫',price:'140',img:clothes2}
            ]
          }
        },
        {goods:{
          type:"手机数码",
          list:[
            {name:'笔记本电脑',price:'5020',img:digital1},
            {name:'酷炫耳机',price:'1140',img:digital2}
            ]
          }
        }
      ]
    }
  },
  components:{
    Banner,
    Search
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
        li{
          float:left;
          padding:6px 0;
          display:flex;
          flex-direction:column;
          width:50%;
          img{
            margin:10px 0;
            width:100%;
            height:100px;
          }
          .price{
            text-align:center;
            font-size:14px;
            color:#e8380d;
          }
          .name{
            text-align:center;
          }
        }
      }
    }
  }
</style>


