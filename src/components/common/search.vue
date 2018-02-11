<template>
  <div class="search-part">
    <icon class="search-icon" name="search"></icon>
    <div class="cancel-icon" @click="emptyInfo">
      <icon name="times"></icon>
    </div>
    <input class="search-input" placeholder="请输入..." v-model="searchInfo" @keyup.enter="searchGoods">
  </div>  
</template>
<script>
import { MessageBox } from 'mint-ui'
export default {
  name:'search',
  data(){
    return{
      searchInfo:''
    }
  },
  methods:{
    emptyInfo(){
      this.searchInfo=''
    },
    searchGoods(){
      let val=this.searchInfo;
      MessageBox('提示', '搜索内容为:'+val)
    }
  }
}
</script>
<style lang="scss" scoped>
.search-part{
  position: absolute;
  z-index:1;
  top:0;
  left:0;
  width:100%;
  padding:6px 12px;
  .search-icon{
    position: absolute; 
    color:#fff;
    left:20px;
    top:10px;
  }
  .cancel-icon{
    position: absolute;
    right:20px;
    top:10px;
    .fa-icon{
      transition:all .2s linear;
      color:#eee;
      cursor: pointer;
      &:hover{
        transform: scale(1.1);
        color:#fff;
      }
    }
  }
  .search-input{
    padding:0 26px;
    width:100%;
    line-height:26px;
    color:#fff;
    background-color:rgba(200,200,200,.6);
    border-radius: 6px;
  }
}
</style>