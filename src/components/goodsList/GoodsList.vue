<template>
  <div class="goodsContainer">
    <div class="goodsBox" v-for='item in goodsList' :key='item.id'>
      <div class="goodsHead">
        <img :src="item.img_url" alt />
        <p>{{item.title}}</p>
      </div>
      <div class="goodsBody">
        <div class="goodsPrice">
          <span>￥{{item.now_price}}</span>
          <del>￥{{item.old_price}}</del>
        </div>
        <div class="goodsButtom">
          <span>热卖中</span>
          <span>剩余{{item.own}}件</span>
        </div>
      </div>
    </div>
   
  </div>
</template>
<script>
export default {
  data() {
    return {
        goodsList:[]
    }
  },
  created() {
    this.getGoods();
  },
  methods: {
    getGoods() {
      this.$http
        .get("http://yapi.shangyuninfo.com/mock/121/api/goodslist?pageindex=1")
        .then(result => {
          console.log(result);
          this.goodsList = result.body.message;
          console.log( this.goodsList)
        })
        .catch();
    }
  }
};
</script>
<style scoped>
.goodsBox {
  width: 47%;
  height: 250px;
  float: left;
  margin: 5px 4px;
  padding: 0 5px;
  background: white;
  position: relative;
}
.goodsBox img {
  width: 100%;
  height: 140px;
}
.goodsHead p {
  font-size: 16px;
  font-weight: 800;
  color: black;
}
.goodsBody {
  position: absolute;
  bottom: 3px;
  width: 94%;
  background: #ddd;
}
.goodsPrice span {
  font-size: 14px;
  font-weight: 800;
  color: red;
}
.goodsPrice del {
  font-size: 12px;
  color: #aaa;
}
.goodsButtom span:nth-of-type(1) {
  font-size: 12px;
  color: #aaa;
}
.goodsButtom span:nth-of-type(2) {
  font-size: 12px;
  color: #aaa;
  float: right;
}


</style>