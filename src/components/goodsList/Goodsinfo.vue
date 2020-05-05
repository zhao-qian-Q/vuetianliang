<template>
  <div class="goodsInfoContainer">
    <!-- 放入购物车小球 -->
    <!-- 这是动画小球 -->
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-show="flag" ref="ball"></div>
    </transition>

    <!-- 轮播图 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <!-- 轮播图组件 -->
          <!-- <loopBox :getloops="loopList"></loopBox> -->
          <img :src="this.goodsList.img_url" alt="" class="goodsImg">
        </div>
      </div>
    </div>
    <!-- 商品价格信息 -->
    <div class="mui-card">
      <div class="mui-card-header">{{this.goodsList.title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>
            <del>市场价：￥{{this.goodsList.old_price}}</del>
            <span>销售价：￥{{this.goodsList.now_price}}</span>
          </p>
          <p>
            <span>购买数量</span>
            <numberBox @getCount="getSelectdCount"></numberBox>
          </p>
          <p>
            <mt-button type="primary" size="small">点击购买</mt-button>
            <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>
    <!--第三部分  -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{this.goodsList.goodsnum}}</p>
          <p>库存数量：{{this.goodsList.own}}件</p>
          <p>上架时间：{{this.goodsList.add_time}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import numberBox from "../numberBox/NumberBox.vue";
import loopBox from "../loopcompontent/LoopCompontent.vue";

// 加入购物车车功能
// 点击加入购物车
export default {
  data() {
    return {
      id: this.$route.params.id, //回去当前页面的id
      loopList: [], //存放轮播图的
      flag: false,
      getSelectCount: "1",
      goodsList: {}
    };
  },
  created() {
    this.getLoopImg();
    this.getgoodsList();
  },
  methods: {
    // 获取商品信息
    getgoodsList() {
      this.$http
        .get("http://yapi.shangyuninfo.com/mock/121/api/goodsinfo")
        .then(result => {
          console.log(result.body.message);
          var res = result.body.message;
          console.log(res.length)

          // 当商品id=当前页面id时，显示商品信息
          for(var i=0;i<res.length;i++){
            if(res[i].id ==this.id){
              this.goodsList = res[i]
            }else{}
            console.log(this.goodsList)
          }
         
        })
        .catch();
    },
    getLoopImg() {
      this.$http
        .get("http://yapi.shangyuninfo.com/mock/121/api/getLoop_1587914991785")
        .then(result => {
          console.log(result.body.message),
            (this.loopList = result.body.message);
        })
        .catch();
    },
    // 加入购物车
    addToShopCar() {
      this.flag = !this.flag;
      var goodsinfos = {
        id:this.id,
        price:this.goodsList.now_price,
        count:this.getSelectCount,
        selected:true  //这是指购物车页面的开关是否开启，true代表选择商品

      }
    },
    // 小球运动钩子函数
    beforeEnter(el) {
      el.style.transform = "translate(0,0)";
    },
    enter(el, done) {
      el.offsetWidth;
      // 获取小球位置
      const ballPosition = this.$refs.ball.getBoundingClientRect();
      // 获取徽标位置
      // getBoundingClientRect()Element.getBoundingClientRect() 方法返回元素的大小及其相对于视口的位置
      const badgePosition = document
        .getElementById("badge")
        .getBoundingClientRect();
      const xPosition = badgePosition.left - ballPosition.left;
      const yPosition = badgePosition.top - ballPosition.top;
      // 小球位置以及徽标位置
      // console.log('ball'+ballPosition);
      // console.log('badge'+badgePosition);
      // console.log(xPosition,yPosition)
      el.style.transform = `translate(${xPosition}px,${yPosition}px)`;
      el.style.transition = "all 1s ease";
      done();
    },
    afterEnter(el) {
      this.flag = !this.flag;
    },
    // 父子组件传值
    getSelectdCount(count) {
      this.getSelectCount = count;
      console.log("sss" + count);
      // console.log(this.id)
    }
  },
  components: {
    numberBox,
    loopBox
  }
};
</script>
<style scoped>
.ball {
  width: 20px;
  height: 20px;
  background: red;
  border-radius: 50%;
  position: absolute;
  top: 390px;
  left: 139px;
  z-index: 999;
}
.goodsImg {
  width: 100%;
  height: 100%;
}
</style>