<template>
  <div class="AppContainer">
    <!-- 我是header部分 -->
    <mt-header fixed title="赵倩"></mt-header>

    <!-- 我是contenter部分 -->
    <transition mode="out-in">
      <router-view></router-view>
    </transition>

    <!-- 我是footer部分 -->

    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopCar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">0</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "abc"
    };
  }
};
</script>
<style scoped>
.AppContainer {
  padding-top: 40px;
  overflow-x: hidden;
}
.v-enter.v-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  transform: translateX(-100%);
}
.v-enter-active.v-leave-active {
  transition: all 0.5s ease;
  position: absolute;
}
</style>