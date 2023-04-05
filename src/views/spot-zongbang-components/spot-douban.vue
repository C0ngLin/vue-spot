<template>
  <div class="clblock">
    <div class="clblocktitle">豆瓣热榜</div>
    <div class="clmainmain">
      <div class="clyh">
        <span class="clorder">1</span>
        <span class="cltile" @click="this.jumpPage(doubantop10list[9].spotDoubanUrl)">{{ doubantop10list[9].spotDoubanTitle }}</span>
        <span class="clheat">{{ doubantop10list[9].spotDoubanZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">2</span>
        <span class="cltile">{{ doubantop10list[8].spotDoubanTitle }}</span>
        <span class="clheat">{{ doubantop10list[8].spotDoubanZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">3</span>
        <span class="cltile">{{ doubantop10list[7].spotDoubanTitle }}</span>
        <span class="clheat">{{ doubantop10list[7].spotDoubanZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">4</span>
        <span class="cltile">{{ doubantop10list[6].spotDoubanTitle }}</span>
        <span class="clheat">{{ doubantop10list[6].spotDoubanZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">5</span>
        <span class="cltile">{{ doubantop10list[5].spotDoubanTitle }}</span>
        <span class="clheat">{{ doubantop10list[5].spotDoubanZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">6</span>
        <span class="cltile">{{ doubantop10list[4].spotDoubanTitle }}</span>
        <span class="clheat">{{ doubantop10list[4].spotDoubanZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">7</span>
        <span class="cltile">{{ doubantop10list[3].spotDoubanTitle }}</span>
        <span class="clheat">{{ doubantop10list[3].spotDoubanZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">8</span>
        <span class="cltile">{{ doubantop10list[2].spotDoubanTitle }}</span>
        <span class="clheat">{{ doubantop10list[2].spotDoubanZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">9</span>
        <span class="cltile">{{ doubantop10list[1].spotDoubanTitle }}</span>
        <span class="clheat">{{ doubantop10list[1].spotDoubanZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">10</span>
        <span class="cltile">{{ doubantop10list[0].spotDoubanTitle }}</span>
        <span class="clheat">{{ doubantop10list[0].spotDoubanZhishu }}</span>
      </div>
    </div>
  </div>
</template>
<style></style>
<script lang="ts">
import axios from "axios";

export default {
  data() {
    return {
      doubantop10list: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
    };
  },
  methods: {
    getlist() {
      axios.get("http://spot:8089/spot/douban/list").then(({ data }) => {
        for (let i = 0; i < 10; i++) {
          this.doubantop10list[i] = data.douban[i];
        }
      });
    },
    jumpPage(url) {
      window.open(url,'_blank')
    }
  },
  props: {},
  created() {
    this.getlist();
  }
};
</script>
