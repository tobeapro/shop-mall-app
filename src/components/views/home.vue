<template lang="pug">
  .home
    Search
    Banner(:imgList="imgList") 
    .type
      ul
        li(v-for="(item,index) in typeList" :key="index")
          icon(:name="item.icon")
          span {{item.name}}
</template>
<script>
import img1 from '../../assets/img/banner_1.jpg'
import img2 from '../../assets/img/banner_2.jpg'
import img3 from '../../assets/img/banner_3.jpg'
import img4 from '../../assets/img/banner_4.jpg'
import img5 from '../../assets/img/banner_5.jpg'
import Search from '../common/search.vue'
import Banner from '../common/banner.vue'
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
        {name:'超市',icon:'shopping-bag'}
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
    }
  }
</style>


