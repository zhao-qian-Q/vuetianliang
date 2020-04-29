<template>
  <div>
   
    <div class="mui-card" v-for='item in shareImgList' :key='item.id'>
				<div class="mui-card-header mui-card-media">
					<img src="/../images/menu1.png" />
					<div class="mui-media-body">
						小M
						<p>发表于{{item.passtime}}</p>
					</div>
				</div>
				<div class="mui-card-content" >
					<img :src="item.img_url" alt="" width="100%"/>
				</div>
				<div class="mui-card-footer">
					<a class="mui-card-link">分享</a>
					<a class="mui-card-link">点赞</a>
					<a class="mui-card-link">下载</a>
				</div>
			</div>
  </div>
</template>
<script>
// import loopBox from "../loopcompontent/LoopCompontent.vue";
export default {
  data() {
    return {
      shareImgList:[]
    };
  },
  created() {
    this.getshareImg();
  },
  methods: {
    getshareImg() {
      this.$http
        .get("http://yapi.shangyuninfo.com/mock/121/api/getnewslist")
        .then(result => {
          console.log(result.body.message);
          this.shareImgList = result.body.message;
          // console.log(this.loopList);
        })
        .catch();
    }
  },
  components: {
    // loopBox
  }
};
</script>
<style lang="">
</style>