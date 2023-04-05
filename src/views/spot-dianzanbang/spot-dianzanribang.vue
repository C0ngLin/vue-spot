<template>
  <div>
    <cbl></cbl>
    <sjcbl></sjcbl>
  </div>
  <div class="spotribangzongti">
    <span class="bangdangmingzi"> 关注日分析</span>
    <div class="spotyibangyihang">
      <span class="paiming">排名1</span>
      <span class="biaoti">{{ list[0].spotMainTitle }}</span>
      <span class="redu">{{ list[0].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名2</span>
      <span class="biaoti">{{ list[1].spotMainTitle }}</span>
      <span class="redu">{{ list[1].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名3</span>
      <span class="biaoti">{{ list[2].spotMainTitle }}</span>
      <span class="redu">{{ list[2].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名4</span>
      <span class="biaoti">{{ list[3].spotMainTitle }}</span>
      <span class="redu">{{ list[3].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名5</span>
      <span class="biaoti">{{ list[4].spotMainTitle }}</span>
      <span class="redu">{{ list[4].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名6</span>
      <span class="biaoti">{{ list[5].spotMainTitle }}</span>
      <span class="redu">{{ list[5].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名7</span>
      <span class="biaoti">{{ list[6].spotMainTitle }}</span>
      <span class="redu">{{ list[6].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名8</span>
      <span class="biaoti">{{ list[7].spotMainTitle }}</span>
      <span class="redu">{{ list[7].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名9</span>
      <span class="biaoti">{{ list[8].spotMainTitle }}</span>
      <span class="redu">{{ list[8].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名10</span>
      <span class="biaoti">{{ list[9].spotMainTitle }}</span>
      <span class="redu">{{ list[9].spotMainHot }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import cbl from "@/views/spot-cebianlang/spot-cebianlan.vue";
import sjcbl from "@/views/spot-cebianlang/spot-dianzancebianlan.vue";
import axios from "axios";

export default {
  data() {
    return {
      list: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
    };
  },
  methods: {
    getlist() {
      axios.get("http://spot:8089/spot/m/dianZanRiBang").then(({ data }) => {
        for (let i = 0; i < 10; i++) {
          this.list[i] = data.data[i];
        }
      });
    }
  },
  created() {
    this.getlist();
  },
  components: {
    cbl,
    sjcbl,
  }
};
</script>

<style scoped>
.spotribangzongti {
  margin-left: 3vw;
  width: 90vw;
}

.spotyibangyihang {
  font-size: 20px;
  margin: 3vh;
}

.biaoti {
  margin-left: 3vw;
  margin-right: 3vw;
}

.bangdangmingzi {
  font-size: 30px;
  margin-left: 40vw;
}
</style>
