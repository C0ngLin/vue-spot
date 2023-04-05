<template>
  <div>
    <cbl></cbl>
    <sjcbl></sjcbl>
  </div>
  <div class="spotribangzongti">
    <span class="bangdangmingzi"> 时间月分析</span>
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
    <div class="spotyibangyihang">
      <span class="paiming">排名11</span>
      <span class="biaoti">{{ list[10].spotMainTitle }}</span>
      <span class="redu">{{ list[10].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名12</span>
      <span class="biaoti">{{ list[11].spotMainTitle }}</span>
      <span class="redu">{{ list[11].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名13</span>
      <span class="biaoti">{{ list[12].spotMainTitle }}</span>
      <span class="redu">{{ list[12].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名14</span>
      <span class="biaoti">{{ list[13].spotMainTitle }}</span>
      <span class="redu">{{ list[13].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名15</span>
      <span class="biaoti">{{ list[14].spotMainTitle }}</span>
      <span class="redu">{{ list[14].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名16</span>
      <span class="biaoti">{{ list[15].spotMainTitle }}</span>
      <span class="redu">{{ list[15].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名17</span>
      <span class="biaoti">{{ list[16].spotMainTitle }}</span>
      <span class="redu">{{ list[16].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名18</span>
      <span class="biaoti">{{ list[17].spotMainTitle }}</span>
      <span class="redu">{{ list[17].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名19</span>
      <span class="biaoti">{{ list[18].spotMainTitle }}</span>
      <span class="redu">{{ list[18].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名20</span>
      <span class="biaoti">{{ list[19].spotMainTitle }}</span>
      <span class="redu">{{ list[19].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名21</span>
      <span class="biaoti">{{ list[20].spotMainTitle }}</span>
      <span class="redu">{{ list[20].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名22</span>
      <span class="biaoti">{{ list[21].spotMainTitle }}</span>
      <span class="redu">{{ list[21].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名23</span>
      <span class="biaoti">{{ list[22].spotMainTitle }}</span>
      <span class="redu">{{ list[22].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名24</span>
      <span class="biaoti">{{ list[23].spotMainTitle }}</span>
      <span class="redu">{{ list[23].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名25</span>
      <span class="biaoti">{{ list[24].spotMainTitle }}</span>
      <span class="redu">{{ list[24].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名26</span>
      <span class="biaoti">{{ list[25].spotMainTitle }}</span>
      <span class="redu">{{ list[25].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名27</span>
      <span class="biaoti">{{ list[26].spotMainTitle }}</span>
      <span class="redu">{{ list[26].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名28</span>
      <span class="biaoti">{{ list[27].spotMainTitle }}</span>
      <span class="redu">{{ list[27].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名29</span>
      <span class="biaoti">{{ list[28].spotMainTitle }}</span>
      <span class="redu">{{ list[28].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名30</span>
      <span class="biaoti">{{ list[29].spotMainTitle }}</span>
      <span class="redu">{{ list[29].spotMainHot }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import cbl from "@/views/spot-cebianlang/spot-cebianlan.vue";
import sjcbl from "@/views/spot-cebianlang/spot-shijiancebianlan.vue";
import axios from "axios";
export default {
  data() {
    return {
      list: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {},
        {},{}, {}, {}, {}, {}, {}, {}, {}, {},
        {}, {}, {}, {}, {}, {}, {}, {}, {}, {},],
    };
  },
  methods: {
    getlist() {
      axios.get("http://spot:8089/spot/m/reDuYueBang").then(({ data }) => {
        for (let i = 0; i < 30; i++) {
          this.list[i] = data.data[i];
        }
      });
    },
  },
  created() {
    this.getlist();
  },
  components: {
    cbl,
    sjcbl,
  },
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