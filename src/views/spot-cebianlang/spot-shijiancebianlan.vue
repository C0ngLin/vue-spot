<template>
  <div class="diqudaohanglan">
    <div class="caidanzizujian" @click="jump2bangdan('/home/spotshijianbang/spotReDuRiBang')">时间天分析</div>
    <div class="caidanzizujian" @click="jump2bangdan('/home/spotshijianbang/spotreduzhoubang')">时间周分析</div>
    <div class="caidanzizujian" @click="jump2bangdan('/home/spotshijianbang/spotreduyuebang')">时间月分析</div>
    <div class="caidanzizujian" @click="jump2bangdan('/home/spotshijianbang/spotredujibang')">时间季分析</div>
    <div class="caidanzizujian" @click="jump2bangdan('/home/spotshijianbang/spotredunianbang')">时间年分析</div>
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
  background-color: #54d923;
  margin-bottom: 1vh;
  padding-left: 1vw;
  padding-top: 1vh;
}
</style>
