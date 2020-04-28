<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in loopList" :key="item.id">
        <img :src="item.img_url" alt />
      </mt-swipe-item>
      <!-- <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>-->
    </mt-swipe>
    <router-view></router-view>

    <!-- 六宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9" id='menuImg'>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newsList">
          <img src='/../../images/menu1.png' alt="">
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="#">
          <img src='/../../images/menu2.png' alt="">
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goodsList">
          <img src='/../../images/menu3.png' alt="">
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src='/../../images/menu4.png' alt="">
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src='/../../images/menu5.png' alt="">
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src='/../../images/menu6.png' alt="">
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
// import menu1 from '../../images/menu1.png'
// import menu2 from '../../images/menu2.png'
// import menu3 from '../../images/menu3.png'
// import menu4 from '../../images/menu4.png'
// import menu5 from '../../images/menu5.png'
// import menu6 from '../../images/menu5.png'

export default {
  data() {
    return {
      loopList: [], //存放数据读出来的图片
      // menuImg1:menu1,
      // menuImg2:menu2,
      // menuImg3:menu3,
      // menuImg4:menu4,
      // menuImg5:menu5,
      // menuImg6:menu6,
    };
  },
  created() {
    this.getLoop();
  },
  methods: {
    getLoop() {
      this.$http
        .get("http://yapi.shangyuninfo.com/mock/121/api/getLoop")
        .then(result => {
          console.log(result);
          this.loopList = result.body.message;
          console.log(this.loopList);
        })
        .catch();
    }
  }
};
</script>
<style scoped>
.mint-swipe {
  height: 200px;
}
.mint-swipe-item img {
  width: 100%;
  height: 100%;
}
#menuImg img {
  width: 50px;
  height: 50px;
}

</style>