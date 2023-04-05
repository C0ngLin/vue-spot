<template>
  <div class="daohanglan">
    <div class="caidanzizujian" @click="jump2bangdan('/home/zongbang')">平台分析</div>
    <div class="caidanzizujian" @click="jump2bangdan('/home/spotshijianbang/spotReDuRiBang')">时间分析</div>
    <div class="caidanzizujian" @click="jump2bangdan('/home/spotdiqubang/spotdiquribang')">空间分析</div>
    <div class="caidanzizujian" @click="jump2bangdan('/home/spotfenleibang/spotfenleiribang')">品类分析</div>
    <div class="caidanzizujian" @click="jump2bangdan('/home/spotpinglunbang/spotpinglunrbang')">讨论分析</div>
    <div class="caidanzizujian" @click="jump2bangdan('/home/spotzhuanfabang/spotzhuanfarbang')">传播分析</div>
    <div class="caidanzizujian" @click="jump2bangdan('/home/spotdianzanbang/spotdianzanrbang')">关注分析</div>
  </div>
</template>
<script lang="ts">
export default {
  name: "spot-cebianlan",
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
.daohanglan{
  width: 10vw;
}
.caidanzizujian {
  height: 4vh;
  width: 100%;
  font-size: 20px;
  background-color: #f5f2f2;
  margin-bottom: 1vh;
  padding-left: 1vw;
  padding-top: 1vh;
}
</style>
