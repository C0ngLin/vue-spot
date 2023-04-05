<template>
  <div class="clblock">
    <div class="clblocktitle">虎嗅网热榜</div>
    <div class="clmainmain">
      <div class="clyh">
        <span class="clorder">1</span>
        <span class="cltile" @click="this.jumpPage(pengpaitop20list[14].spotPengpaiUrl)">{{ pengpaitop20list[14].spotPengpaiTitle }}</span>
        <span class="clheat">{{pengpaitop20list[14].spotPengpaiZhishu}}</span>
      </div>
      <div class="clyh">
        <span class="clorder">2</span>
        <span class="cltile" @click="this.jumpPage(pengpaitop20list[13].spotPengpaiUrl)">{{ pengpaitop20list[13].spotPengpaiTitle }}</span>
        <span class="clheat">{{pengpaitop20list[13].spotPengpaiZhishu}}</span>
      </div>
      <div class="clyh">
        <span class="clorder">3</span>
        <span class="cltile" @click="this.jumpPage(pengpaitop20list[12].spotPengpaiUrl)">{{ pengpaitop20list[12].spotPengpaiTitle }}</span>
        <span class="clheat">{{pengpaitop20list[12].spotPengpaiZhishu}}</span>
      </div>
      <div class="clyh">
        <span class="clorder">4</span>
        <span class="cltile" @click="this.jumpPage(pengpaitop20list[11].spotPengpaiUrl)">{{ pengpaitop20list[11].spotPengpaiTitle }}</span>
        <span class="clheat">{{pengpaitop20list[11].spotPengpaiZhishu}}</span>
      </div>
      <div class="clyh">
        <span class="clorder">5</span>
        <span class="cltile" @click="this.jumpPage(pengpaitop20list[10].spotPengpaiUrl)">{{ pengpaitop20list[10].spotPengpaiTitle }}</span>
        <span class="clheat">{{pengpaitop20list[10].spotPengpaiZhishu}}</span>
      </div>
      <div class="clyh">
        <span class="clorder">6</span>
        <span class="cltile" @click="this.jumpPage(pengpaitop20list[9].spotPengpaiUrl)">{{ pengpaitop20list[9].spotPengpaiTitle }}</span>
        <span class="clheat">{{pengpaitop20list[9].spotPengpaiZhishu}}</span>
      </div>
      <div class="clyh">
        <span class="clorder">7</span>
        <span class="cltile" @click="this.jumpPage(pengpaitop20list[8].spotPengpaiUrl)">{{ pengpaitop20list[8].spotPengpaiTitle }}</span>
        <span class="clheat">{{pengpaitop20list[8].spotPengpaiZhishu}}</span>
      </div>
      <div class="clyh">
        <span class="clorder">8</span>
        <span class="cltile" @click="this.jumpPage(pengpaitop20list[7].spotPengpaiUrl)">{{ pengpaitop20list[7].spotPengpaiTitle }}</span>
        <span class="clheat">{{pengpaitop20list[7].spotPengpaiZhishu}}</span>
      </div>
      <div class="clyh">
        <span class="clorder">9</span>
        <span class="cltile" @click="this.jumpPage(pengpaitop20list[6].spotPengpaiUrl)">{{ pengpaitop20list[6].spotPengpaiTitle }}</span>
        <span class="clheat">{{pengpaitop20list[6].spotPengpaiZhishu}}</span>
      </div>
      <div class="clyh">
        <span class="clorder">10</span>
        <span class="cltile" @click="this.jumpPage(pengpaitop20list[5].spotPengpaiUrl)">{{ pengpaitop20list[5].spotPengpaiTitle }}</span>
        <span class="clheat">{{pengpaitop20list[5].spotPengpaiZhishu}}</span>
      </div>
      <div class="clyh">
        <span class="clorder">11</span>
        <span class="cltile" @click="this.jumpPage(pengpaitop20list[4].spotPengpaiUrl)">{{ pengpaitop20list[4].spotPengpaiTitle }}</span>
                <span class="clheat">{{pengpaitop20list[4].spotPengpaiZhishu}}</span>
      </div>
      <div class="clyh">
        <span class="clorder">12</span>
        <span class="cltile" @click="this.jumpPage(pengpaitop20list[3].spotPengpaiUrl)">{{ pengpaitop20list[3].spotPengpaiTitle }}</span>
                <span class="clheat">{{pengpaitop20list[3].spotPengpaiZhishu}}</span>
      </div>
      <div class="clyh">
        <span class="clorder">13</span>
        <span class="cltile" @click="this.jumpPage(pengpaitop20list[2].spotPengpaiUrl)">{{ pengpaitop20list[2].spotPengpaiTitle }}</span>
                <span class="clheat">{{pengpaitop20list[2].spotPengpaiZhishu}}</span>
      </div>
      <div class="clyh">
        <span class="clorder">14</span>
        <span class="cltile" @click="this.jumpPage(pengpaitop20list[1].spotPengpaiUrl)">{{ pengpaitop20list[1].spotPengpaiTitle }}</span>
                <span class="clheat">{{pengpaitop20list[1].spotPengpaiZhishu}}</span>
      </div>
      <div class="clyh">
        <span class="clorder">15</span>
        <span class="cltile" @click="this.jumpPage(pengpaitop20list[0].spotPengpaiUrl)">{{ pengpaitop20list[0].spotPengpaiTitle }}</span>
                <span class="clheat">{{pengpaitop20list[0].spotPengpaiZhishu}}</span>
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
      pengpaitop20list: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {},
        {}, {}, {}, {}, {}]
    };
  },
  methods: {
    getlist() {
      axios.get("http://spot:8089/spot/pengpai/list").then(({ data }) => {
        for (let i = 0; i < 15; i++) {
          this.pengpaitop20list[i] = data.pengpai[i];
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
