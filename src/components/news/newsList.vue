<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for='item in newsList' :key='item.id'>
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" :src="item.img_url" />
          <div class="mui-media-body">
            {{item.title}}
            <p class="mui-ellipsis">
              <span>{{item.add_time}}</span>
              <span>点击{{item.click}}次</span>
            </p>
          </div>
        </a>
      </li>
     
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
    //   newslistImg1: "../../images/menu2.png",
      newsList:[]
    };
  },
  created() {
      this.getNews()
  },
  methods: {
    getNews() {
      this.$http
        .get("http://yapi.shangyuninfo.com/mock/121/api/getnewslist")
        .then(result=>{
            console.log(result)
            this.newsList = result.body.message,
            console.log(this.newList)
            })
        .catch();
    }
  }
};
</script>
<style scoped>
.mui-media-body {
  font-size: 14px;
}
.mui-ellipsis {
  /* font-size:14px; */
  display: flex;
}
.mui-ellipsis span:nth-of-type(1) {
  font-size: 12px;
  color: aqua;
  flex: 10;
}
.mui-ellipsis span:nth-of-type(2) {
  font-size: 12px;
  color: aqua;
  flex: 2;
}
</style>