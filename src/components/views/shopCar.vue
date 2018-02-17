<template lang="pug">
  .shopCar
    p(class="shopCar-title") 购物车
    p(class="shopCar-remind",v-if="canChosenList.length===0") 空空如也
    ul(class="goods-list")
      li(v-for="(item,index) in canChosenList",:key="index",v-if="item.num>0")
        span(@click.stop="changeChooseStatus",class="choose-icon")
          icon(:name="chooseStatus?'check-circle-o':'circle-o'")
        img(:src="item.img[0]")
        .name {{item.name}}
        .price 
          .single 单价:¥{{item.price}}
          .all 合计:¥{{item.price*item.num}}
        .add
          span(@click.stop="reduceCartNum(item)",:class="item.num===0?'none':''")
              icon(name="minus",scale=".8")
          span(class="num") {{item.num}}
          span(@click.stop="addCartNum(item)")
              icon(name="plus",scale=".8")
        .remove(@click.stop="removeCartNum(item.id)") 删除
    .total
       .content 合计
        span(class="price") ¥ {{totalNum}}
      
</template>
<script>

export default {
  name:'shopCar',
  data(){
    return{
      canChosenList:[],
      chooseList:[],
      chooseStatus:false
    }
  },
  mounted(){
    let cartList=this.$store.getters.getshopCar
    let canChosenList=[]
    cartList.forEach((item)=>{
      item.chooseStatus=false
      if(item.num>0){
        canChosenList.push(item)
      }
    })
    this.canChosenList=canChosenList
  },
  computed:{
    cartList(){
      return Object.assign({},this.$store.getters.getshopCar)
    },
    totalNum(){
      let num=0
      this.chooseList.forEach((item)=>{
        num+=item.price*item.num
      })
      return num
    }
  },
  methods:{
    reduceCartNum(item){
      if(item.num===0){
        return
      }
      this.$store.commit("reduceCartNum",item.id)
    },
    addCartNum(item){
      this.$store.commit("addCartNum",item.id)
    },
    removeCartNum(id){
      this.$store.dispatch("remove_cartNum",id)
    },
    changeChooseStatus(){
      this.chooseStatus=!this.chooseStatus
    }
  },
  watch:{
    chooseAll(val){
      if(val==1){
        this.chooseList=this.canChosenList
      }else{
        this.chooseList=[]
      }
    }
  }
}
</script>
<style lang="scss">
  .shopCar{
    position:fixed;
    top:0;
    bottom:100px;
    width:100%;
    overflow-y:auto;
    .shopCar-title{
      padding-left:10px;
      font-size:14px;
      line-height:40px;
      color:#fff;
      background-color:#1296db;
    }
    .goods-list{
      li{
        position:relative;
        display:flex;
        align-items:center;
        width:100%;
        border-bottom:1px solid #ddd;
        .choose-icon{
          padding:0 6px;
          color:#1296db;
        }
        img{
          margin:4px 10px;
          width:40px;
          height:41px;
          border-radius:50%;
        }
        .name{
          width:80px;
          white-space: nowrap;
          overflow:hidden;
          text-overflow: ellipsis;     
        }
        .price{
          margin-left:10px;
          color:#e8380d;
          .single{
            margin-top:8px;
            line-height:20px;
          }
          .all{
            line-height:20px;
          }
        }
        .add{
          position: absolute;
          top: 50%;
          right: 60px;
          transform: translateY(-50%);
          span{
            float:left;                        
            .fa-icon{
                padding:2px;
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
                margin:0 6px; 
                line-height:20px;                      
                font-size:14px;
            }
          }
        }
        .remove{
          position: absolute;
          top:0;
          bottom:-1px;
          right:0;
          width:50px;
          line-height:50px;
          text-align:center;
          color:#fff;
          background-color:#e8380d;
        }
      }
    }
    .total{
      position:fixed;
      bottom:60px;
      width:100%;
      height:40px;
      border-top:1px solid #ddd;
      .mint-checkbox-core{
        top:-4px;
      }
      .content{
        position: absolute;
        left:40px;
        top:0;
        line-height:40px;
        .price{
          margin-left:10px;
          font-size:14px;
          color:#e8380d;
        }
      }
    }
    .mint-checklist-title{
      margin:0;
      padding-left:20px;
      font-size:14px;
      line-height:40px;
      color:#fff;
      background-color:#26a2ff;
    }
    .mint-cell{
      border-bottom:1px solid #ddd;
      .mint-checklist-label{
        padding:0;
      }
      .mint-checkbox-label{
        display:none;
      }
    }
  }
</style>


