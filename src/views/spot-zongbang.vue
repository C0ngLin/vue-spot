<script setup lang="ts">
import SpotBaidu from "@/views/spot-zongbang-components/spot-baidu.vue";
import SpotTieBa from "@/views/spot-zongbang-components/spot-tieba.vue";
import SpotWeibo from "@/views/spot-zongbang-components/spot-weibo.vue";
import SpotWeiXin from "@/views/spot-zongbang-components/spot-weixin.vue";
import SpotZhiHu from "@/views/spot-zongbang-components/spot-zhihu.vue";
import SpotBiLiBiLi from "@/views/spot-zongbang-components/spot-bilibili.vue";
import SpotKe from "@/views/spot-zongbang-components/spot-ke.vue";
import SpotDouYin from "@/views/spot-zongbang-components/spot-douyin.vue";
import SpotTouTiao from "@/views/spot-zongbang-components/spot-touitiao.vue";
import SpotPengPai from "@/views/spot-zongbang-components/spot-pengpai.vue";
import SpotToDay from "@/views/spot-zongbang-components/spot-today.vue";
import SpotSleep from "@/views/spot-zongbang-components/spot-sleep.vue";
import SpotDouBan from "@/views/spot-zongbang-components/spot-douban.vue";
import SpotCebianlan from "@/views/spot-cebianlang/spot-cebianlan.vue";

// import { useRouter, useRoute } from "vue-router";
// const router = useRouter()
// const route = useRoute()
// function jump2login() {
//   router.push({ path: "/" })
// }

</script>
<template>
<!--  <button @click="jump2login"></button>-->
  <spot-cebianlan></spot-cebianlan>
  <div class="clall">
    <div class="clheader">平台分析</div>
    <div class="clmain">
      <div class="clmainblock" id="baidu">
        <SpotBaidu />
      </div>
      <div class="clmainblock" id="tieba">
        <SpotTieBa />
      </div>
      <div class="clmainblock" id="weibo">
        <spot-weibo />
      </div>
      <div class="clmainblock" id="weixin">
        <SpotWeiXin />
      </div>
      <div class="clmainblock" id="zhihu">
        <SpotZhiHu />
      </div>
      <div class="clmainblock" id="bilibili">
        <SpotBiLiBiLi />
      </div>
      <div class="clmainblock" id="ke">
        <SpotKe />
      </div>
      <div class="clmainblock" id="douyin">
        <SpotDouYin />
      </div>
      <!--标志是头条实际是天涯-->
      <div class="clmainblock" id="toutiao">
        <SpotTouTiao />
      </div>
      <!--标志是澎湃新闻实际是虎嗅网-->
      <div class="clmainblock" id="pengpai">
        <SpotPengPai />
      </div>
      <div class="clmainblock" id="today">
        <SpotToDay />
      </div>
      <!--      -->
      <div class="clmainblock" id="sleep">
        <SpotSleep />
      </div>
      <div class="clmainblock" id="douban">
        <SpotDouBan />
      </div>
    </div>
    <div class="clfoot">我是有底线的！</div>
  </div>
</template>
<style scoped>
.clmain {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.clmainblock {
  width: 18vw;
  height: 30vh;
  background-color: white;
  margin: 1vw;
}

/*#zhihu {*/
/*  clear: both;*/
/*}*/

.clall {
  width: 90vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: #f7f8fa;
}

.clheader {
  text-align: center;
  padding: 20px;
  margin: 10px;
  font-size: 40px;
}

.clfoot {
  position: fixed;
  bottom: 3vh;
  left: 50vw;
}
</style>
