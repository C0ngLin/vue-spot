<template>
  <div class="clblock">
    <div class="clblocktitle">历史上的今天</div>
    <div class="clmainmain">
      <div class="clyh">
        <span class="clorder">1</span>
        <span class="cltile" @click="jumpPage(todaytop25list[24].spotTodayUrl)">{{ todaytop25list[24].spotTodayTitle }}</span>
<!--        <span class="clheat">{{ todaytop25list[1].spotBaiduTitle }}</span>-->
      </div>
      <div class="clyh">
        <span class="clorder">2</span>
        <span class="cltile" @click="jumpPage(todaytop25list[23].spotTodayUrl)">{{ todaytop25list[23].spotTodayTitle }}</span>
<!--        <span class="clheat">热度</span>-->
      </div>
      <div class="clyh">
        <span class="clorder">3</span>
        <span class="cltile" @click="jumpPage(todaytop25list[22].spotTodayUrl)">{{ todaytop25list[22].spotTodayTitle }}</span>
<!--        <span class="clheat">热度</span>-->
      </div>
      <div class="clyh">
        <span class="clorder">4</span>
        <span class="cltile" @click="jumpPage(todaytop25list[21].spotTodayUrl)">{{ todaytop25list[21].spotTodayTitle }}</span>
<!--        <span class="clheat">热度</span>-->
      </div>
      <div class="clyh">
        <span class="clorder">5</span>
        <span class="cltile" @click="jumpPage(todaytop25list[20].spotTodayUrl)">{{ todaytop25list[20].spotTodayTitle }}</span>
<!--        <span class="clheat">热度</span>-->
      </div>
      <div class="clyh">
        <span class="clorder">6</span>
        <span class="cltile" @click="jumpPage(todaytop25list[19].spotTodayUrl)">{{ todaytop25list[19].spotTodayTitle }}</span>
<!--        <span class="clheat">热度</span>-->
      </div>
      <div class="clyh">
        <span class="clorder">7</span>
        <span class="cltile" @click="jumpPage(todaytop25list[18].spotTodayUrl)">{{ todaytop25list[18].spotTodayTitle }}</span>
<!--        <span class="clheat">热度</span>-->
      </div>
      <div class="clyh">
        <span class="clorder">8</span>
        <span class="cltile" @click="jumpPage(todaytop25list[17].spotTodayUrl)">{{ todaytop25list[17].spotTodayTitle }}</span>
<!--        <span class="clheat">热度</span>-->
      </div>
      <div class="clyh">
        <span class="clorder">9</span>
        <span class="cltile" @click="jumpPage(todaytop25list[16].spotTodayUrl)">{{ todaytop25list[16].spotTodayTitle }}</span>
<!--        <span class="clheat">热度</span>-->
      </div>
      <div class="clyh">
        <span class="clorder">10</span>
        <span class="cltile" @click="jumpPage(todaytop25list[15].spotTodayUrl)">{{ todaytop25list[15].spotTodayTitle }}</span>
<!--        <span class="clheat">热度</span>-->
      </div>
      <div class="clyh">
        <span class="clorder">11</span>
        <span class="cltile" @click="jumpPage(todaytop25list[14].spotTodayUrl)">{{ todaytop25list[14].spotTodayTitle }}</span>
        <!--        <span class="clheat">{{ todaytop25list[1].spotBaiduTitle }}</span>-->
      </div>
      <div class="clyh">
        <span class="clorder">12</span>
        <span class="cltile" @click="jumpPage(todaytop25list[13].spotTodayUrl)">{{ todaytop25list[13].spotTodayTitle }}</span>
        <!--        <span class="clheat">热度</span>-->
      </div>
      <div class="clyh">
        <span class="clorder">13</span>
        <span class="cltile" @click="jumpPage(todaytop25list[12].spotTodayUrl)">{{ todaytop25list[12].spotTodayTitle }}</span>
        <!--        <span class="clheat">热度</span>-->
      </div>
      <div class="clyh">
        <span class="clorder">14</span>
        <span class="cltile" @click="jumpPage(todaytop25list[11].spotTodayUrl)">{{ todaytop25list[11].spotTodayTitle }}</span>
        <!--        <span class="clheat">热度</span>-->
      </div>
      <div class="clyh">
        <span class="clorder">15</span>
        <span class="cltile" @click="jumpPage(todaytop25list[10].spotTodayUrl)">{{ todaytop25list[10].spotTodayTitle }}</span>
        <!--        <span class="clheat">热度</span>-->
      </div>
      <div class="clyh">
        <span class="clorder">16</span>
        <span class="cltile" @click="jumpPage(todaytop25list[9].spotTodayUrl)">{{ todaytop25list[9].spotTodayTitle }}</span>
        <!--        <span class="clheat">热度</span>-->
      </div>
      <div class="clyh">
        <span class="clorder">17</span>
        <span class="cltile" @click="jumpPage(todaytop25list[8].spotTodayUrl)">{{ todaytop25list[8].spotTodayTitle }}</span>
        <!--        <span class="clheat">热度</span>-->
      </div>
      <div class="clyh">
        <span class="clorder">18</span>
        <span class="cltile" @click="jumpPage(todaytop25list[7].spotTodayUrl)">{{ todaytop25list[7].spotTodayTitle }}</span>
        <!--        <span class="clheat">热度</span>-->
      </div>
      <div class="clyh">
        <span class="clorder">19</span>
        <span class="cltile" @click="jumpPage(todaytop25list[6].spotTodayUrl)">{{ todaytop25list[6].spotTodayTitle }}</span>
        <!--        <span class="clheat">热度</span>-->
      </div>
      <div class="clyh">
        <span class="clorder">20</span>
        <span class="cltile" @click="jumpPage(todaytop25list[5].spotTodayUrl)">{{ todaytop25list[5].spotTodayTitle }}</span>
        <!--        <span class="clheat">热度</span>-->
      </div>
      <div class="clyh">
        <span class="clorder">21</span>
        <span class="cltile" @click="jumpPage(todaytop25list[4].spotTodayUrl)">{{ todaytop25list[4].spotTodayTitle }}</span>
        <!--        <span class="clheat">{{ todaytop25list[1].spotBaiduTitle }}</span>-->
      </div>
      <div class="clyh">
        <span class="clorder">22</span>
        <span class="cltile" @click="jumpPage(todaytop25list[3].spotTodayUrl)">{{ todaytop25list[3].spotTodayTitle }}</span>
        <!--        <span class="clheat">热度</span>-->
      </div>
      <div class="clyh">
        <span class="clorder">23</span>
        <span class="cltile" @click="jumpPage(todaytop25list[2].spotTodayUrl)">{{ todaytop25list[2].spotTodayTitle }}</span>
        <!--        <span class="clheat">热度</span>-->
      </div>
      <div class="clyh">
        <span class="clorder">24</span>
        <span class="cltile" @click="jumpPage(todaytop25list[1].spotTodayUrl)">{{ todaytop25list[1].spotTodayTitle }}</span>
        <!--        <span class="clheat">热度</span>-->
      </div>
      <div class="clyh">
        <span class="clorder">25</span>
        <span class="cltile" @click="jumpPage(todaytop25list[0].spotTodayUrl)">{{ todaytop25list[0].spotTodayTitle }}</span>
        <!--        <span class="clheat">热度</span>-->
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
      todaytop25list: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {},
        {}, {}, {}, {}, {}, {}, {}, {}, {}, {},{},{},{},{},{}
      ]
    };
  },
  methods: {
    getlist() {
      axios.get("http://spot:8089/spot/today/list").then(({ data }) => {
        for (let i = 0; i < 25; i++) {
          this.todaytop25list[i] = data.today[i];
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
