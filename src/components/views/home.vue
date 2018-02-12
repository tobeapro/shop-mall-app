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
  }
</style>


