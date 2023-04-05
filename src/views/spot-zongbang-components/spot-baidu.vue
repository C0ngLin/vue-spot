<template>
  <div class="clblock">
    <div class="clblocktitle">百度热榜</div>
    <div class="clmainmain">
      <div class="clyh">
        <span class="clorder">1</span>
        <span class="cltile" @click="this.jumpPage(baidutop10list[29].spotBaiduUrl)">{{ baidutop10list[29].spotBaiduTitle }}</span>
        <span class="clheat">{{ baidutop10list[29].spotBaiduHot }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">2</span>
        <span class="cltile" @click="this.jumpPage(baidutop10list[28].spotBaiduUrl)">{{ baidutop10list[28].spotBaiduTitle }}</span>
        <span class="clheat">{{ baidutop10list[28].spotBaiduHot }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">3</span>
        <span class="cltile" @click="this.jumpPage(baidutop10list[27].spotBaiduUrl)">{{ baidutop10list[27].spotBaiduTitle }}</span>
        <span class="clheat">{{ baidutop10list[27].spotBaiduHot }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">4</span>
        <span class="cltile" @click="this.jumpPage(baidutop10list[26].spotBaiduUrl)">{{ baidutop10list[26].spotBaiduTitle }}</span>
        <span class="clheat">{{ baidutop10list[26].spotBaiduHot }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">5</span>
        <span class="cltile" @click="this.jumpPage(baidutop10list[25].spotBaiduUrl)">{{ baidutop10list[25].spotBaiduTitle }}</span>
        <span class="clheat">{{ baidutop10list[25].spotBaiduHot }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">6</span>
        <span class="cltile" @click="this.jumpPage(baidutop10list[24].spotBaiduUrl)">{{ baidutop10list[24].spotBaiduTitle }}</span>
        <span class="clheat">{{ baidutop10list[24].spotBaiduHot }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">7</span>
        <span class="cltile" @click="this.jumpPage(baidutop10list[23].spotBaiduUrl)">{{ baidutop10list[23].spotBaiduTitle }}</span>
        <span class="clheat">{{ baidutop10list[23].spotBaiduHot }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">8</span>
        <span class="cltile" @click="this.jumpPage(baidutop10list[22].spotBaiduUrl)">{{ baidutop10list[22].spotBaiduTitle }}</span>
        <span class="clheat">{{ baidutop10list[22].spotBaiduHot }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">9</span>
        <span class="cltile" @click="this.jumpPage(baidutop10list[21].spotBaiduUrl)">{{ baidutop10list[21].spotBaiduTitle }}</span>
        <span class="clheat">{{ baidutop10list[21].spotBaiduHot }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">10</span>
        <span class="cltile" @click="this.jumpPage(baidutop10list[20].spotBaiduUrl)">{{ baidutop10list[20].spotBaiduTitle }}</span>
        <span class="clheat">{{ baidutop10list[20].spotBaiduHot }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">11</span>
        <span class="cltile" @click="this.jumpPage(baidutop10list[19].spotBaiduUrl)">{{ baidutop10list[19].spotBaiduTitle }}</span>
        <span class="clheat">{{ baidutop10list[19].spotBaiduHot }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">12</span>
        <span class="cltile" @click="this.jumpPage(baidutop10list[18].spotBaiduUrl)">{{ baidutop10list[18].spotBaiduTitle }}</span>
        <span class="clheat">{{ baidutop10list[18].spotBaiduHot }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">13</span>
        <span class="cltile" @click="this.jumpPage(baidutop10list[17].spotBaiduUrl)">{{ baidutop10list[17].spotBaiduTitle }}</span>
        <span class="clheat">{{ baidutop10list[17].spotBaiduHot }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">14</span>
        <span class="cltile" @click="this.jumpPage(baidutop10list[16].spotBaiduUrl)">{{ baidutop10list[16].spotBaiduTitle }}</span>
        <span class="clheat">{{ baidutop10list[16].spotBaiduHot }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">15</span>
        <span class="cltile" @click="this.jumpPage(baidutop10list[15].spotBaiduUrl)">{{ baidutop10list[15].spotBaiduTitle }}</span>
        <span class="clheat">{{ baidutop10list[15].spotBaiduHot }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">16</span>
        <span class="cltile" @click="this.jumpPage(baidutop10list[14].spotBaiduUrl)">{{ baidutop10list[14].spotBaiduTitle }}</span>
        <span class="clheat">{{ baidutop10list[14].spotBaiduHot }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">17</span>
        <span class="cltile" @click="this.jumpPage(baidutop10list[13].spotBaiduUrl)">{{ baidutop10list[13].spotBaiduTitle }}</span>
        <span class="clheat">{{ baidutop10list[13].spotBaiduHot }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">18</span>
        <span class="cltile" @click="this.jumpPage(baidutop10list[12].spotBaiduUrl)">{{ baidutop10list[12].spotBaiduTitle }}</span>
        <span class="clheat">{{ baidutop10list[12].spotBaiduHot }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">19</span>
        <span class="cltile" @click="this.jumpPage(baidutop10list[11].spotBaiduUrl)">{{ baidutop10list[11].spotBaiduTitle }}</span>
        <span class="clheat">{{ baidutop10list[11].spotBaiduHot }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">20</span>
        <span class="cltile" @click="this.jumpPage(baidutop10list[10].spotBaiduUrl)">{{ baidutop10list[10].spotBaiduTitle }}</span>
        <span class="clheat">{{ baidutop10list[10].spotBaiduHot }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">21</span>
        <span class="cltile" @click="this.jumpPage(baidutop10list[9].spotBaiduUrl)">{{ baidutop10list[9].spotBaiduTitle }}</span>
        <span class="clheat">{{ baidutop10list[9].spotBaiduHot }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">22</span>
        <span class="cltile" @click="this.jumpPage(baidutop10list[8].spotBaiduUrl)">{{ baidutop10list[8].spotBaiduTitle }}</span>
        <span class="clheat">{{ baidutop10list[8].spotBaiduHot }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">23</span>
        <span class="cltile" @click="this.jumpPage(baidutop10list[7].spotBaiduUrl)">{{ baidutop10list[7].spotBaiduTitle }}</span>
        <span class="clheat">{{ baidutop10list[7].spotBaiduHot }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">24</span>
        <span class="cltile" @click="this.jumpPage(baidutop10list[6].spotBaiduUrl)">{{ baidutop10list[6].spotBaiduTitle }}</span>
        <span class="clheat">{{ baidutop10list[6].spotBaiduHot }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">25</span>
        <span class="cltile" @click="this.jumpPage(baidutop10list[5].spotBaiduUrl)">{{ baidutop10list[5].spotBaiduTitle }}</span>
        <span class="clheat">{{ baidutop10list[5].spotBaiduHot }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">26</span>
        <span class="cltile" @click="this.jumpPage(baidutop10list[4].spotBaiduUrl)">{{ baidutop10list[4].spotBaiduTitle }}</span>
        <span class="clheat">{{ baidutop10list[4].spotBaiduHot }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">27</span>
        <span class="cltile" @click="this.jumpPage(baidutop10list[3].spotBaiduUrl)">{{ baidutop10list[3].spotBaiduTitle }}</span>
        <span class="clheat">{{ baidutop10list[3].spotBaiduHot }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">28</span>
        <span class="cltile" @click="this.jumpPage(baidutop10list[2].spotBaiduUrl)">{{ baidutop10list[2].spotBaiduTitle }}</span>
        <span class="clheat">{{ baidutop10list[2].spotBaiduHot }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">29</span>
        <span class="cltile" @click="this.jumpPage(baidutop10list[1].spotBaiduUrl)">{{ baidutop10list[1].spotBaiduTitle }}</span>
        <span class="clheat">{{ baidutop10list[1].spotBaiduHot }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">30</span>
        <span class="cltile" @click="this.jumpPage(baidutop10list[0].spotBaiduUrl)">{{ baidutop10list[0].spotBaiduTitle }}</span>
        <span class="clheat">{{ baidutop10list[0].spotBaiduHot }}</span>
      </div>
    </div>
  </div>
</template>
<style>
.clyh {
  display: flex;
  justify-content: space-around;
  margin-bottom: 3px;
}

.clmainmain {
  overflow-y: auto;
  width: 100%;
  height: 90%;
}
.clheat{
  width: 20%;
}
.cltile {
  width: 60%;
  cursor: pointer;
}

.clblock {
  width: 100%;
  height: 100%;
}

.clblocktitle {
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  height: 10%;
}
</style>
<script lang="ts">
import axios from "axios";

export default {
  data() {
    return {
      baidutop10list: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {},
        {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
        {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
    };
  },
  methods: {
    getlist() {
      axios.get("http://spot:8089/spot/baidu/list").then(({ data }) => {
        for (let i = 0; i < 30; i++) {
          this.baidutop10list[i] = data.baidu[i];
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
