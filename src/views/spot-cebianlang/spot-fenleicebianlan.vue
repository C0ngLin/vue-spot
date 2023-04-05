<template>
  <div class="diqudaohanglan">
    <div class="caidanzizujian" @click="jump2bangdan('/home/spotfenleibang/spotfenleiribang')">分类日分析</div>
    <div class="caidanzizujian" @click="jump2bangdan('/home/spotfenleibang/spotfenleiyuebang')">分类月分析</div>
    <div class="caidanzizujian" @click="jump2bangdan('/home/spotfenleibang/spotfenleinianbang')">分类年分析</div>
  </div>
</template>
<script lang="ts">
export default {
  name: "spot-diqucebianlan.vue",
  data() {
    return {};
  },
  methods: {
    jump2bangdan(bangdan) {
      this.$router.push({ path: bangdan });
    }
  }
};
</script>

<style scoped>
.diqudaohanglan{
  width: 10vw;
}
.caidanzizujian {
  height: 4vh;
  width: 100%;
  font-size: 20px;
  background-color: #9f1b1b;
  margin-bottom: 1vh;
  padding-left: 1vw;
  padding-top: 1vh;
}
</style>
