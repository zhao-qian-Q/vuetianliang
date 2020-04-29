<template>
  <div>
    <!-- 轮播图 -->
    <loopBox :getloops="loopList"></loopBox>
  </div>
</template>
<script>
import loopBox from "../loopcompontent/LoopCompontent.vue";
export default {
  data() {
    return {
      loopList: []
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
<style lang="">
</style>