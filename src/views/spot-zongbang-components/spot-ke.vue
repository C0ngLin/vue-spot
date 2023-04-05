<template>
  <div class="clblock">
    <div class="clblocktitle">36氪热榜</div>
    <div class="clmainmain">
      <div class="clyh">
        <span class="clorder">1</span>
        <span class="cltile" @click="jumpPage(ketop5list[4].spotKeUrl)">{{ ketop5list[4].spotKeTitle }}</span>
<!--        <span class="clheat">{{ ketop5list[9].spotKeZhishu }}</span>-->
      </div>
      <div class="clyh">
        <span class="clorder">2</span>
        <span class="cltile" @click="jumpPage(ketop5list[3].spotKeUrl)">{{ ketop5list[3].spotKeTitle }}</span>
<!--        <span class="clheat">{{ ketop5list[8].spotKeZhishu }}</span>-->
      </div>
      <div class="clyh">
        <span class="clorder">3</span>
        <span class="cltile" @click="jumpPage(ketop5list[2].spotKeUrl)">{{ ketop5list[2].spotKeTitle }}</span>
<!--        <span class="clheat">{{ ketop5list[7].spotKeZhishu }}</span>-->
      </div>
      <div class="clyh">
        <span class="clorder">4</span>
        <span class="cltile" @click="jumpPage(ketop5list[1].spotKeUrl)">{{ ketop5list[1].spotKeTitle }}</span>
<!--        <span class="clheat">{{ ketop5list[6].spotKeZhishu }}</span>-->
      </div>
      <div class="clyh">
        <span class="clorder">5</span>
        <span class="cltile" @click="jumpPage(ketop5list[0].spotKeUrl)">{{ ketop5list[0].spotKeTitle }}</span>
<!--        <span class="clheat">{{ ketop5list[5].spotKeZhishu }}</span>-->
      </div>
<!--      <div class="clyh">-->
<!--        <span class="clorder">6</span>-->
<!--        <span class="cltile" @click="jumpPage(ketop5list[4].spotKeUrl)">{{ ketop5list[4].spotKeTitle }}</span>-->
<!--        <span class="clheat">{{ ketop5list[4].spotKeZhishu }}</span>-->
<!--      </div>-->
<!--      <div class="clyh">-->
<!--        <span class="clorder">7</span>-->
<!--        <span class="cltile" @click="jumpPage(ketop5list[3].spotKeUrl)">{{ ketop5list[3].spotKeTitle }}</span>-->
<!--        <span class="clheat">{{ ketop5list[3].spotKeZhishu }}</span>-->
<!--      </div>-->
<!--      <div class="clyh">-->
<!--        <span class="clorder">8</span>-->
<!--        <span class="cltile" @click="jumpPage(ketop5list[2].spotKeUrl)">{{ ketop5list[2].spotKeTitle }}</span>-->
<!--        <span class="clheat">{{ ketop5list[2].spotKeZhishu }}</span>-->
<!--      </div>-->
<!--      <div class="clyh">-->
<!--        <span class="clorder">9</span>-->
<!--        <span class="cltile" @click="jumpPage(ketop5list[1].spotKeUrl)">{{ ketop5list[1].spotKeTitle }}</span>-->
<!--        <span class="clheat">{{ ketop5list[1].spotKeZhishu }}</span>-->
<!--      </div>-->
<!--      <div class="clyh">-->
<!--        <span class="clorder">10</span>-->
<!--        <span class="cltile" @click="jumpPage(ketop5list[0].spotKeUrl)">{{ ketop5list[0].spotKeTitle }}</span>-->
<!--        <span class="clheat">{{ ketop5list[0].spotKeZhishu }}</span>-->
<!--      </div>-->
    </div>
  </div>
</template>
<style></style>
<script lang="ts">
import axios from "axios";

export default {
  data() {
    return {
      ketop5list: [{}, {}, {}, {}, {}]
    };
  },
  methods: {
    getlist() {
      axios.get("http://spot:8089/spot/ke/list").then(({ data }) => {
        for (let i = 0; i < 5; i++) {
          this.ketop5list[i] = data.ke[i];
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
