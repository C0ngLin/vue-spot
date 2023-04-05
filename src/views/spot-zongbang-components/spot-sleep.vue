<template>
  <div class="clblock">
    <div class="clblocktitle">世界发生了什么</div>
    <div class="clmainmain">
      <div class="clyh">
        <span class="clorder">1</span>
        <span class="cltile">{{ sleeptop10list[9].spotSleepTitle }}</span>
<!--        <span class="clheat">热度</span>-->
      </div>
      <div class="clyh">
        <span class="clorder">2</span>
        <span class="cltile">{{ sleeptop10list[8].spotSleepTitle }}</span>
<!--        <span class="clheat">热度</span>-->
      </div>
      <div class="clyh">
        <span class="clorder">3</span>
        <span class="cltile">{{ sleeptop10list[7].spotSleepTitle }}</span>
<!--        <span class="clheat">热度</span>-->
      </div>
      <div class="clyh">
        <span class="clorder">4</span>
        <span class="cltile">{{ sleeptop10list[6].spotSleepTitle }}</span>
<!--        <span class="clheat">热度</span>-->
      </div>
      <div class="clyh">
        <span class="clorder">5</span>
        <span class="cltile">{{ sleeptop10list[5].spotSleepTitle }}</span>
<!--        <span class="clheat">热度</span>-->
      </div>
      <div class="clyh">
        <span class="clorder">6</span>
        <span class="cltile">{{ sleeptop10list[4].spotSleepTitle }}</span>
<!--        <span class="clheat">热度</span>-->
      </div>
      <div class="clyh">
        <span class="clorder">7</span>
        <span class="cltile">{{ sleeptop10list[3].spotSleepTitle }}</span>
<!--        <span class="clheat">热度</span>-->
      </div>
      <div class="clyh">
        <span class="clorder">8</span>
        <span class="cltile">{{ sleeptop10list[2].spotSleepTitle }}</span>
<!--        <span class="clheat">热度</span>-->
      </div>
      <div class="clyh">
        <span class="clorder">9</span>
        <span class="cltile">{{ sleeptop10list[1].spotSleepTitle }}</span>
<!--        <span class="clheat">热度</span>-->
      </div>
      <div class="clyh">
        <span class="clorder">10</span>
        <span class="cltile">{{ sleeptop10list[0].spotSleepTitle }}</span>
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
      sleeptop10list: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
    };
  },
  methods: {
    getlist() {
      axios.get("http://spot:8089/spot/sleep/list").then(({ data }) => {
        for (let i = 0; i < 10; i++) {
          this.sleeptop10list[i] = data.sleep[i];
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
