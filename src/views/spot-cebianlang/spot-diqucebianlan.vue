<template>
  <div class="diqudaohanglan">
    <div class="caidanzizujian" @click="jump2bangdan('/home/spotdiqubang/spotdiquribang')">空间日分析</div>
    <div class="caidanzizujian" @click="jump2bangdan('/home/spotdiqubang/spotdiquyuebang')">空间月分析</div>
    <div class="caidanzizujian" @click="jump2bangdan('/home/spotdiqubang/spotdiqunianbang')">空间年分析</div>
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
