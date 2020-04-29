<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in getloops" :key="item.id">
        <img :src="item.img_url" alt />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  methods: {},
  props: ["getloops"],
  filters: {},
  directives: {}
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
</style>