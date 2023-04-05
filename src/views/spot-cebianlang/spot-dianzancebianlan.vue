<template>
  <div class="diqudaohanglan">
    <div class="caidanzizujian" @click="jump2bangdan('/home/spotdianzanbang/spotdianzanrbang')">关注度日分析</div>
    <div class="caidanzizujian" @click="jump2bangdan('/home/spotdianzanbang/spotdianzanybang')">关注度月分析</div>
    <div class="caidanzizujian" @click="jump2bangdan('/home/spotdianzanbang/spotdianzannbang')">关注度年分析</div>
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
  background-color: #8a8ad0;
  margin-bottom: 1vh;
  padding-left: 1vw;
  padding-top: 1vh;
}
</style>
