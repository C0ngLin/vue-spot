<template>
  <div class="clblock">
    <div class="clblocktitle">抖音热榜</div>
    <div class="clmainmain">
      <div class="clyh">
        <span class="clorder">1</span>
        <span class="cltile" @click="jumpPage(douyintop30list[29].spotDouyinUrl)">{{ douyintop30list[29].spotDouyinTitle }}</span>
        <span class="clheat">{{ douyintop30list[29].spotDouyinZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">2</span>
        <span class="cltile" @click="jumpPage(douyintop30list[28].spotDouyinUrl)">{{ douyintop30list[28].spotDouyinTitle }}</span>
        <span class="clheat">{{ douyintop30list[28].spotDouyinZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">3</span>
        <span class="cltile" @click="jumpPage(douyintop30list[27].spotDouyinUrl)">{{ douyintop30list[27].spotDouyinTitle }}</span>
        <span class="clheat">{{ douyintop30list[27].spotDouyinZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">4</span>
        <span class="cltile" @click="jumpPage(douyintop30list[26].spotDouyinUrl)">{{ douyintop30list[26].spotDouyinTitle }}</span>
        <span class="clheat">{{ douyintop30list[26].spotDouyinZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">5</span>
        <span class="cltile" @click="jumpPage(douyintop30list[25].spotDouyinUrl)">{{ douyintop30list[25].spotDouyinTitle }}</span>
        <span class="clheat">{{ douyintop30list[25].spotDouyinZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">6</span>
        <span class="cltile" @click="jumpPage(douyintop30list[24].spotDouyinUrl)">{{ douyintop30list[24].spotDouyinTitle }}</span>
        <span class="clheat">{{ douyintop30list[24].spotDouyinZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">7</span>
        <span class="cltile" @click="jumpPage(douyintop30list[23].spotDouyinUrl)">{{ douyintop30list[23].spotDouyinTitle }}</span>
        <span class="clheat">{{ douyintop30list[23].spotDouyinZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">8</span>
        <span class="cltile" @click="jumpPage(douyintop30list[22].spotDouyinUrl)">{{ douyintop30list[22].spotDouyinTitle }}</span>
        <span class="clheat">{{ douyintop30list[22].spotDouyinZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">9</span>
        <span class="cltile" @click="jumpPage(douyintop30list[21].spotDouyinUrl)">{{ douyintop30list[21].spotDouyinTitle }}</span>
        <span class="clheat">{{ douyintop30list[21].spotDouyinZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">10</span>
        <span class="cltile" @click="jumpPage(douyintop30list[20].spotDouyinUrl)">{{ douyintop30list[20].spotDouyinTitle }}</span>
        <span class="clheat">{{ douyintop30list[20].spotDouyinZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">11</span>
        <span class="cltile" @click="jumpPage(douyintop30list[19].spotDouyinUrl)">{{ douyintop30list[19].spotDouyinTitle }}</span>
        <span class="clheat">{{ douyintop30list[19].spotDouyinZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">12</span>
        <span class="cltile" @click="jumpPage(douyintop30list[18].spotDouyinUrl)">{{ douyintop30list[18].spotDouyinTitle }}</span>
        <span class="clheat">{{ douyintop30list[18].spotDouyinZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">13</span>
        <span class="cltile" @click="jumpPage(douyintop30list[17].spotDouyinUrl)">{{ douyintop30list[17].spotDouyinTitle }}</span>
        <span class="clheat">{{ douyintop30list[17].spotDouyinZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">14</span>
        <span class="cltile" @click="jumpPage(douyintop30list[16].spotDouyinUrl)">{{ douyintop30list[16].spotDouyinTitle }}</span>
        <span class="clheat">{{ douyintop30list[16].spotDouyinZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">15</span>
        <span class="cltile" @click="jumpPage(douyintop30list[15].spotDouyinUrl)">{{ douyintop30list[15].spotDouyinTitle }}</span>
        <span class="clheat">{{ douyintop30list[15].spotDouyinZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">16</span>
        <span class="cltile" @click="jumpPage(douyintop30list[14].spotDouyinUrl)">{{ douyintop30list[14].spotDouyinTitle }}</span>
        <span class="clheat">{{ douyintop30list[14].spotDouyinZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">17</span>
        <span class="cltile" @click="jumpPage(douyintop30list[13].spotDouyinUrl)">{{ douyintop30list[13].spotDouyinTitle }}</span>
        <span class="clheat">{{ douyintop30list[13].spotDouyinZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">18</span>
        <span class="cltile" @click="jumpPage(douyintop30list[12].spotDouyinUrl)">{{ douyintop30list[12].spotDouyinTitle }}</span>
        <span class="clheat">{{ douyintop30list[12].spotDouyinZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">19</span>
        <span class="cltile" @click="jumpPage(douyintop30list[11].spotDouyinUrl)">{{ douyintop30list[11].spotDouyinTitle }}</span>
        <span class="clheat">{{ douyintop30list[11].spotDouyinZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">20</span>
        <span class="cltile" @click="jumpPage(douyintop30list[10].spotDouyinUrl)">{{ douyintop30list[10].spotDouyinTitle }}</span>
        <span class="clheat">{{ douyintop30list[10].spotDouyinZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">21</span>
        <span class="cltile" @click="jumpPage(douyintop30list[9].spotDouyinUrl)">{{ douyintop30list[9].spotDouyinTitle }}</span>
        <span class="clheat">{{ douyintop30list[9].spotDouyinZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">22</span>
        <span class="cltile" @click="jumpPage(douyintop30list[8].spotDouyinUrl)">{{ douyintop30list[8].spotDouyinTitle }}</span>
        <span class="clheat">{{ douyintop30list[8].spotDouyinZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">23</span>
        <span class="cltile" @click="jumpPage(douyintop30list[7].spotDouyinUrl)">{{ douyintop30list[7].spotDouyinTitle }}</span>
        <span class="clheat">{{ douyintop30list[7].spotDouyinZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">24</span>
        <span class="cltile" @click="jumpPage(douyintop30list[6].spotDouyinUrl)">{{ douyintop30list[6].spotDouyinTitle }}</span>
        <span class="clheat">{{ douyintop30list[6].spotDouyinZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">25</span>
        <span class="cltile" @click="jumpPage(douyintop30list[5].spotDouyinUrl)">{{ douyintop30list[5].spotDouyinTitle }}</span>
        <span class="clheat">{{ douyintop30list[5].spotDouyinZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">26</span>
        <span class="cltile" @click="jumpPage(douyintop30list[4].spotDouyinUrl)">{{ douyintop30list[4].spotDouyinTitle }}</span>
        <span class="clheat">{{ douyintop30list[4].spotDouyinZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">27</span>
        <span class="cltile" @click="jumpPage(douyintop30list[3].spotDouyinUrl)">{{ douyintop30list[3].spotDouyinTitle }}</span>
        <span class="clheat">{{ douyintop30list[3].spotDouyinZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">28</span>
        <span class="cltile" @click="jumpPage(douyintop30list[2].spotDouyinUrl)">{{ douyintop30list[2].spotDouyinTitle }}</span>
        <span class="clheat">{{ douyintop30list[2].spotDouyinZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">29</span>
        <span class="cltile" @click="jumpPage(douyintop30list[1].spotDouyinUrl)">{{ douyintop30list[1].spotDouyinTitle }}</span>
        <span class="clheat">{{ douyintop30list[1].spotDouyinZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">30</span>
        <span class="cltile" @click="jumpPage(douyintop30list[0].spotDouyinUrl)">{{ douyintop30list[0].spotDouyinTitle }}</span>
        <span class="clheat">{{ douyintop30list[0].spotDouyinZhishu }}</span>
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
      douyintop30list: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {},
        {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
        {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
    };
  },
  methods: {
    getlist() {
      axios.get("http://spot:8089/spot/douyin/list").then(({ data }) => {
        for (let i = 0; i < 30; i++) {
          this.douyintop30list[i] = data.douyin[i];
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
