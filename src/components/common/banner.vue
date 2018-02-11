<template>
  <mt-swipe :auto="4000">
    <mt-swipe-item v-for="(item,index) in imgList" :key="index">
      <img :src="item.url">
      <span>{{item.name}}</span>
    </mt-swipe-item>
  </mt-swipe>
</template>
<script>
export default {
  name:'Banner',
  props:{
    imgList:{
      type:Array
    }
  }
}
</script>
<style lang="scss">
  .mint-swipe{
    height:200px;
    img{
      width:100%;
      height:200px;
    }
    .mint-swipe-indicator{
      opacity:.6;
    }
  }
</style>

