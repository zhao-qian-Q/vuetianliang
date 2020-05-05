<template>
  <div>
    <div class="mui-card"  v-for="(item,i) in getGoodsLists" :key='item.id'>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div class="shopCarGoods">
            <mt-switch v-model="$store.getters.getGoodsSelected"></mt-switch>
            <ul class="mui-table-view">
              <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                  <img class="mui-media-object mui-pull-left" src="/../images/menu1.png" />
                  <div class="mui-media-body">
                    <h4>{{item.title}}</h4>
                    <p class="mui-ellipsis">￥{{item.now_price}}</p>
                    <shopcarNumBox
                      :getCounts="$store.getters.getGoodsCount[item.id]"
                      :goodsid="item.id"
                    ></shopcarNumBox>
                  </div>
                </a>
              </li>
            </ul>
            <div class="deleteShopdoods" @click="del(item.id,i)">删除</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 计算区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div class="countC">
            <div>
              <div>总计:</div>
              <span>已勾选数量:{{$store.getters.getAllCountANDAmount.m}}件</span>
              <span>总价:￥{{$store.getters.getAllCountANDAmount.n}}</span>
            </div>
            <mt-button type="danger">去结算</mt-button>
            <p>{{$store.getters.getGoodsSelected}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import shopcarNumBox from "../numberBox/ShopCarnumBox.vue";
export default {
  data() {
    return {
      getGoodsLists: [] //保存请求回来的数据
    };
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    getGoodsList() {
      var isArr = [];
      this.$store.state.car.forEach(item => {
        isArr.push(item.id);
      });
      console.log(isArr);
      this.$http
        .get(
          "http://yapi.shangyuninfo.com/mock/121/api/shopcarlist/" +
            isArr.join(",")
        )
        .then(res => {
          console.log(res.body.message);
          this.getGoodsLists = res.body.message;
        })
        .catch();
    },
    del(id, index) {
      this.getGoodsLists.splice(index, 1);
      this.$store.commit("remove", id);
    }
  },
  components: {
    shopcarNumBox
  }
};
</script>
<style scoped>
.shopCarGoods {
  display: flex;
}
.shopCarGoods > .mui-switch {
  margin: auto;
  flex: 2;
}
.shopCarGoods > .mui-table-view {
  flex: 9;
}
.deleteShopdoods {
  flex: 1;
  margin: auto;
}
</style>