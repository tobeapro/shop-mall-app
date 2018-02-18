<template lang="pug">
  .shopCar
    p(class="shopCar-title",v-if="canChosenList.length>0") 购物车
    p(class="shopCar-remind",v-if="canChosenList.length===0") 
      img(:src="emptyImg")
    ul(class="goods-list")
      li(v-for="(item,index) in canChosenList",:key="index",v-if="item.num>0")
        span(@click.stop="changeChooseStatus(item,index)",class="choose-icon")
          icon(:name="item.chooseStatus?'check-circle-o':'circle-o'",scale="1.4")
        img(:src="item.img[0]")
        .name {{item.name}}
        .price 
          .single 单价:¥{{item.price}}
          .all 合计:¥{{item.price*item.num}}
        .add
          span(@click.stop="reduceCartNum(item,index)",:class="item.num<=1?'none':''")
              icon(name="minus",scale=".8")
          span(class="num") {{item.num}}
          span(@click.stop="addCartNum(item,index)")
              icon(name="plus",scale=".8")
        .remove(@click.stop="removeCartNum(item.id,index)") 删除
    .total
      span(@click.stop="changeChooseAll",class="choose-icon")
        icon(:name="chooseAllStatus&&canChosenList.length>0?'check-circle-o':'circle-o'",scale="1.4")
      .content 合计      
        span(class="price") ¥ {{totalNum}}
        span(class="order",@click.stop="confirmOrder") 结算
      
</template>
<script>
import empty from '../../assets/img/empty.jpg'
import { MessageBox } from 'mint-ui'
export default {
  name:'shopCar',
  data(){
    return{
      canChosenList:[],
      emptyImg:empty
    }
  },
  mounted(){
    let cartList=this.$store.getters.getshopCar
    let canChosenList=[]
    cartList.forEach((item)=>{
      if(item.num>0){
        canChosenList.push(item)
      }
    })
    this.canChosenList=canChosenList
  },
  computed:{
    chooseList(){
      let chooseList=[]
      this.canChosenList.forEach((item)=>{
        if(item.chooseStatus){
          chooseList.push(item)
        }
      })
      return chooseList
    },
    chooseAllStatus(){
      if(this.canChosenList.length===0){
        return
      }
      for(let i=0;i<this.canChosenList.length;i++){
        if(!this.canChosenList[i].chooseStatus){
          return false
        }
      }
      return true
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
    reduceCartNum(item,index){
      if(item.num===1){
        return
      }
      this.$store.commit("reduceCartNum",item.id)
      this.$set(this.canChosenList,index,item)
    },
    addCartNum(item,index){
      this.$store.commit("addCartNum",item.id)
      this.$set(this.canChosenList,index,item)
    },
    removeCartNum(id,index){
      this.$store.commit("removeCartNum",id)
      this.canChosenList.splice(index,1)
    },
    changeChooseStatus(item,index){
      item.chooseStatus=!item.chooseStatus
      this.$store.commit("changeChooseStatus",item)
      this.$set(this.canChosenList,index,item)
    },
    changeChooseAll(){
      if(this.chooseAllStatus){
        this.canChosenList.forEach((item,index)=>{
          item.chooseStatus=false
          this.$set(this.canChosenList,index,item)
        })
      }else{
        this.canChosenList.forEach((item,index)=>{
          item.chooseStatus=true
          this.$set(this.canChosenList,index,item)
        })
      }
    },
    confirmOrder(){
      if(this.chooseList.length===0){
        MessageBox('提示','请先选购商品!')
        return 
      }
      MessageBox.confirm('确认购买共:'+this.totalNum+'元').then(() => {
        this.$store.commit("addNewOrder",this.chooseList)
        MessageBox.alert('购买成功')
        this.$router.push('/user')
      })
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
    .shopCar-remind{
      img{
        display:block;
        width:100%;
      }
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
      z-index:10;
      display:flex;
      align-items:center;
      bottom:60px;
      width:100%;
      height:40px;
      background-color:#fff;
      border-top:1px solid #ddd;
      .choose-icon{
        padding:0 6px;
        color:#1296db;
      }
      .content{
        margin-left:10px;
        width:100%;
        line-height:40px;
        .price{
          margin-left:10px;
          font-size:14px;
          color:#e8380d;
        }
        .order{
          float: right;
          width: 50%;
          font-size:14px;
          text-align: center;
          color: #fff;
          background-color: #e8380d;
        }
      }
    }
  }
</style>


