<template>
  <div>
    <!-- 轮播图组件 -->
    <loopBox :getloops="loopList"></loopBox>

    <router-view></router-view>

    <!-- 六宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9" id="menuImg">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newsList">
          <img src="/../../images/menu1.png" alt />
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/shareImg">
          <img src="/../../images/menu2.png" alt />
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goodsList">
          <img src="/../../images/menu3.png" alt />
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/leaveMessage">
          <img src="/../../images/menu4.png" alt />
          <div class="mui-media-body">留言反馈</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link  to="/home/videos">
          <img src="/../../images/menu5.png" alt />
          <div class="mui-media-body">视频专区</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/contactUs">
          <img src="/../../images/menu6.png" alt />
          <div class="mui-media-body">联系我们</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import loopBox from "../loopcompontent/LoopCompontent.vue";
export default {
  data() {
    return {
      loopList: [] //存放数据读出来的图片
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
          // console.log(result);
          this.loopList = result.body.message;
          // console.log(this.loopList);
        })
        .catch();
    }
  },
  components: {
    loopBox
  }
};
</script>
<style scoped>
#menuImg img {
  width: 80%;
  height: 80%;
}
</style>