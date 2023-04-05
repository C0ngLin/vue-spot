<template>
  <div class="clblock">
    <div class="clblocktitle">贴吧热榜</div>
    <div class="clmainmain">
      <div class="clyh">
        <span class="clorder">1</span>
        <span class="cltile" @click="jumpPage(tiebatop30list[29].spotTiebaUrl)">{{ tiebatop30list[29].spotTiebaTitle
          }}</span>
        <span class="clheat">{{ tiebatop30list[29].spotTiebaZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">2</span>
        <span class="cltile" @click="jumpPage(tiebatop30list[28].spotTiebaUrl)">{{ tiebatop30list[28].spotTiebaTitle
          }}</span>
        <span class="clheat">{{ tiebatop30list[28].spotTiebaZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">3</span>
        <span class="cltile" @click="jumpPage(tiebatop30list[27].spotTiebaUrl)">{{ tiebatop30list[27].spotTiebaTitle
          }}</span>
        <span class="clheat">{{ tiebatop30list[27].spotTiebaZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">4</span>
        <span class="cltile" @click="jumpPage(tiebatop30list[26].spotTiebaUrl)">{{ tiebatop30list[26].spotTiebaTitle
          }}</span>
        <span class="clheat">{{ tiebatop30list[26].spotTiebaZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">5</span>
        <span class="cltile" @click="jumpPage(tiebatop30list[25].spotTiebaUrl)">{{ tiebatop30list[25].spotTiebaTitle
          }}</span>
        <span class="clheat">{{ tiebatop30list[25].spotTiebaZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">6</span>
        <span class="cltile" @click="jumpPage(tiebatop30list[24].spotTiebaUrl)">{{ tiebatop30list[24].spotTiebaTitle
          }}</span>
        <span class="clheat">{{ tiebatop30list[24].spotTiebaZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">7</span>
        <span class="cltile" @click="jumpPage(tiebatop30list[23].spotTiebaUrl)">{{ tiebatop30list[23].spotTiebaTitle
          }}</span>
        <span class="clheat">{{ tiebatop30list[23].spotTiebaZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">8</span>
        <span class="cltile" @click="jumpPage(tiebatop30list[22].spotTiebaUrl)">{{ tiebatop30list[22].spotTiebaTitle
          }}</span>
        <span class="clheat">{{ tiebatop30list[22].spotTiebaZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">9</span>
        <span class="cltile" @click="jumpPage(tiebatop30list[21].spotTiebaUrl)">{{ tiebatop30list[21].spotTiebaTitle
          }}</span>
        <span class="clheat">{{ tiebatop30list[21].spotTiebaZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">10</span>
        <span class="cltile" @click="jumpPage(tiebatop30list[20].spotTiebaUrl)">{{ tiebatop30list[20].spotTiebaTitle
          }}</span>
        <span class="clheat">{{ tiebatop30list[20].spotTiebaZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">11</span>
        <span class="cltile" @click="jumpPage(tiebatop30list[19].spotTiebaUrl)">{{ tiebatop30list[19].spotTiebaTitle
          }}</span>
        <span class="clheat">{{ tiebatop30list[19].spotTiebaZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">12</span>
        <span class="cltile" @click="jumpPage(tiebatop30list[18].spotTiebaUrl)">{{ tiebatop30list[18].spotTiebaTitle
          }}</span>
        <span class="clheat">{{ tiebatop30list[18].spotTiebaZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">13</span>
        <span class="cltile" @click="jumpPage(tiebatop30list[17].spotTiebaUrl)">{{ tiebatop30list[17].spotTiebaTitle
          }}</span>
        <span class="clheat">{{ tiebatop30list[17].spotTiebaZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">14</span>
        <span class="cltile" @click="jumpPage(tiebatop30list[16].spotTiebaUrl)">{{ tiebatop30list[16].spotTiebaTitle
          }}</span>
        <span class="clheat">{{ tiebatop30list[16].spotTiebaZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">15</span>
        <span class="cltile" @click="jumpPage(tiebatop30list[15].spotTiebaUrl)">{{ tiebatop30list[15].spotTiebaTitle
          }}</span>
        <span class="clheat">{{ tiebatop30list[15].spotTiebaZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">16</span>
        <span class="cltile" @click="jumpPage(tiebatop30list[14].spotTiebaUrl)">{{ tiebatop30list[14].spotTiebaTitle
          }}</span>
        <span class="clheat">{{ tiebatop30list[14].spotTiebaZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">17</span>
        <span class="cltile" @click="jumpPage(tiebatop30list[13].spotTiebaUrl)">{{ tiebatop30list[13].spotTiebaTitle
          }}</span>
        <span class="clheat">{{ tiebatop30list[13].spotTiebaZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">18</span>
        <span class="cltile" @click="jumpPage(tiebatop30list[12].spotTiebaUrl)">{{ tiebatop30list[12].spotTiebaTitle
          }}</span>
        <span class="clheat">{{ tiebatop30list[12].spotTiebaZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">19</span>
        <span class="cltile" @click="jumpPage(tiebatop30list[11].spotTiebaUrl)">{{ tiebatop30list[11].spotTiebaTitle
          }}</span>
        <span class="clheat">{{ tiebatop30list[11].spotTiebaZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">20</span>
        <span class="cltile" @click="jumpPage(tiebatop30list[10].spotTiebaUrl)">{{ tiebatop30list[10].spotTiebaTitle
          }}</span>
        <span class="clheat">{{ tiebatop30list[10].spotTiebaZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">21</span>
        <span class="cltile" @click="jumpPage(tiebatop30list[9].spotTiebaUrl)">{{ tiebatop30list[9].spotTiebaTitle
          }}</span>
        <span class="clheat">{{ tiebatop30list[9].spotTiebaZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">22</span>
        <span class="cltile" @click="jumpPage(tiebatop30list[8].spotTiebaUrl)">{{ tiebatop30list[8].spotTiebaTitle
          }}</span>
        <span class="clheat">{{ tiebatop30list[8].spotTiebaZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">23</span>
        <span class="cltile" @click="jumpPage(tiebatop30list[7].spotTiebaUrl)">{{ tiebatop30list[7].spotTiebaTitle
          }}</span>
        <span class="clheat">{{ tiebatop30list[7].spotTiebaZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">24</span>
        <span class="cltile" @click="jumpPage(tiebatop30list[6].spotTiebaUrl)">{{ tiebatop30list[6].spotTiebaTitle
          }}</span>
        <span class="clheat">{{ tiebatop30list[6].spotTiebaZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">25</span>
        <span class="cltile" @click="jumpPage(tiebatop30list[5].spotTiebaUrl)">{{ tiebatop30list[5].spotTiebaTitle
          }}</span>
        <span class="clheat">{{ tiebatop30list[5].spotTiebaZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">26</span>
        <span class="cltile" @click="jumpPage(tiebatop30list[4].spotTiebaUrl)">{{ tiebatop30list[4].spotTiebaTitle
          }}</span>
        <span class="clheat">{{ tiebatop30list[4].spotTiebaZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">27</span>
        <span class="cltile" @click="jumpPage(tiebatop30list[3].spotTiebaUrl)">{{ tiebatop30list[3].spotTiebaTitle
          }}</span>
        <span class="clheat">{{ tiebatop30list[3].spotTiebaZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">28</span>
        <span class="cltile" @click="jumpPage(tiebatop30list[2].spotTiebaUrl)">{{ tiebatop30list[2].spotTiebaTitle
          }}</span>
        <span class="clheat">{{ tiebatop30list[2].spotTiebaZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">29</span>
        <span class="cltile" @click="jumpPage(tiebatop30list[1].spotTiebaUrl)">{{ tiebatop30list[1].spotTiebaTitle
          }}</span>
        <span class="clheat">{{ tiebatop30list[1].spotTiebaZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">30</span>
        <span class="cltile" @click="jumpPage(tiebatop30list[0].spotTiebaUrl)">{{ tiebatop30list[0].spotTiebaTitle
          }}</span>
        <span class="clheat">{{ tiebatop30list[0].spotTiebaZhishu }}</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import axios from "axios";

export default {
  data() {
    return {
      tiebatop30list: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {},
        {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
        {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
    };
  },
  methods: {
    getlist() {
      axios.get("http://spot:8089/spot/tieba/list").then(({ data }) => {
        for (let i = 0; i < 30; i++) {
          this.tiebatop30list[i] = data.tieba[i];
        }
      });
    },
    jumpPage(url) {
      window.open(url, "_blank");
    }
  },
  props: {},
  created() {
    this.getlist();
  }
};
</script>
<style></style>
