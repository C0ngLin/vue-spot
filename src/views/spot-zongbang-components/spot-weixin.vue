<template>
  <div class="clblock">
    <div class="clblocktitle">微信热榜</div>
    <div class="clmainmain">
      <div class="clyh">
        <span class="clorder">1</span>
        <span class="cltile" @click="jumpPage(weixintop25list[24].spotWeixinUrl)">{{ weixintop25list[24].spotWeixinTitle }}</span>
        <span class="clheat">{{ weixintop25list[24].spotWeixinZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">2</span>
        <span class="cltile" @click="jumpPage(weixintop25list[23].spotWeixinUrl)">{{ weixintop25list[23].spotWeixinTitle }}</span>
        <span class="clheat">{{ weixintop25list[23].spotWeixinZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">3</span>
        <span class="cltile" @click="jumpPage(weixintop25list[22].spotWeixinUrl)">{{ weixintop25list[22].spotWeixinTitle }}</span>
        <span class="clheat">{{ weixintop25list[22].spotWeixinZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">4</span>
        <span class="cltile" @click="jumpPage(weixintop25list[21].spotWeixinUrl)">{{ weixintop25list[21].spotWeixinTitle }}</span>
        <span class="clheat">{{ weixintop25list[21].spotWeixinZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">5</span>
        <span class="cltile" @click="jumpPage(weixintop25list[20].spotWeixinUrl)">{{ weixintop25list[20].spotWeixinTitle }}</span>
        <span class="clheat">{{ weixintop25list[20].spotWeixinZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">6</span>
        <span class="cltile" @click="jumpPage(weixintop25list[19].spotWeixinUrl)">{{ weixintop25list[19].spotWeixinTitle }}</span>
        <span class="clheat">{{ weixintop25list[19].spotWeixinZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">7</span>
        <span class="cltile" @click="jumpPage(weixintop25list[18].spotWeixinUrl)">{{ weixintop25list[18].spotWeixinTitle }}</span>
        <span class="clheat">{{ weixintop25list[18].spotWeixinZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">8</span>
        <span class="cltile" @click="jumpPage(weixintop25list[17].spotWeixinUrl)">{{ weixintop25list[17].spotWeixinTitle }}</span>
        <span class="clheat">{{ weixintop25list[17].spotWeixinZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">9</span>
        <span class="cltile" @click="jumpPage(weixintop25list[16].spotWeixinUrl)">{{ weixintop25list[16].spotWeixinTitle }}</span>
        <span class="clheat">{{ weixintop25list[16].spotWeixinZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">10</span>
        <span class="cltile" @click="jumpPage(weixintop25list[15].spotWeixinUrl)">{{ weixintop25list[15].spotWeixinTitle }}</span>
        <span class="clheat">{{ weixintop25list[15].spotWeixinZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">11</span>
        <span class="cltile" @click="jumpPage(weixintop25list[14].spotWeixinUrl)">{{ weixintop25list[14].spotWeixinTitle }}</span>
        <span class="clheat">{{ weixintop25list[14].spotWeixinZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">12</span>
        <span class="cltile" @click="jumpPage(weixintop25list[13].spotWeixinUrl)">{{ weixintop25list[13].spotWeixinTitle }}</span>
        <span class="clheat">{{ weixintop25list[13].spotWeixinZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">13</span>
        <span class="cltile" @click="jumpPage(weixintop25list[12].spotWeixinUrl)">{{ weixintop25list[12].spotWeixinTitle }}</span>
        <span class="clheat">{{ weixintop25list[12].spotWeixinZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">14</span>
        <span class="cltile" @click="jumpPage(weixintop25list[11].spotWeixinUrl)">{{ weixintop25list[11].spotWeixinTitle }}</span>
        <span class="clheat">{{ weixintop25list[11].spotWeixinZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">15</span>
        <span class="cltile" @click="jumpPage(weixintop25list[10].spotWeixinUrl)">{{ weixintop25list[10].spotWeixinTitle }}</span>
        <span class="clheat">{{ weixintop25list[10].spotWeixinZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">16</span>
        <span class="cltile" @click="jumpPage(weixintop25list[9].spotWeixinUrl)">{{ weixintop25list[9].spotWeixinTitle }}</span>
        <span class="clheat">{{ weixintop25list[9].spotWeixinZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">17</span>
        <span class="cltile" @click="jumpPage(weixintop25list[8].spotWeixinUrl)">{{ weixintop25list[8].spotWeixinTitle }}</span>
        <span class="clheat">{{ weixintop25list[8].spotWeixinZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">18</span>
        <span class="cltile" @click="jumpPage(weixintop25list[7].spotWeixinUrl)">{{ weixintop25list[7].spotWeixinTitle }}</span>
        <span class="clheat">{{ weixintop25list[7].spotWeixinZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">19</span>
        <span class="cltile" @click="jumpPage(weixintop25list[6].spotWeixinUrl)">{{ weixintop25list[6].spotWeixinTitle }}</span>
        <span class="clheat">{{ weixintop25list[6].spotWeixinZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">20</span>
        <span class="cltile" @click="jumpPage(weixintop25list[5].spotWeixinUrl)">{{ weixintop25list[5].spotWeixinTitle }}</span>
        <span class="clheat">{{ weixintop25list[5].spotWeixinZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">21</span>
        <span class="cltile" @click="jumpPage(weixintop25list[4].spotWeixinUrl)">{{ weixintop25list[4].spotWeixinTitle }}</span>
        <span class="clheat">{{ weixintop25list[4].spotWeixinZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">22</span>
        <span class="cltile" @click="jumpPage(weixintop25list[3].spotWeixinUrl)">{{ weixintop25list[3].spotWeixinTitle }}</span>
        <span class="clheat">{{ weixintop25list[3].spotWeixinZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">23</span>
        <span class="cltile" @click="jumpPage(weixintop25list[2].spotWeixinUrl)">{{ weixintop25list[2].spotWeixinTitle }}</span>
        <span class="clheat">{{ weixintop25list[2].spotWeixinZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">24</span>
        <span class="cltile" @click="jumpPage(weixintop25list[1].spotWeixinUrl)">{{ weixintop25list[1].spotWeixinTitle }}</span>
        <span class="clheat">{{ weixintop25list[1].spotWeixinZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">25</span>
        <span class="cltile" @click="jumpPage(weixintop25list[0].spotWeixinUrl)">{{ weixintop25list[0].spotWeixinTitle }}</span>
        <span class="clheat">{{ weixintop25list[0].spotWeixinZhishu }}</span>
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
      weixintop25list: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {},
        {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
    };
  },
  methods: {
    getlist() {
      axios.get("http://spot:8089/spot/weixin/list").then(({ data }) => {
        for (let i = 0; i < 25; i++) {
          this.weixintop25list[i] = data.weixin[i];
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
