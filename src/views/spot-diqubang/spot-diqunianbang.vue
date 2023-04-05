<template>
  <div>
    <cbl></cbl>
    <diqucbl></diqucbl>
  </div>
  <div class="spotribangzongti">
    <div class="bangdandabiaoti">空间年分析</div>
    <span class="bangdangmingzi"> 地区1</span>
    <div class="spotyibangyihang">
      <span class="paiming">排名1</span>
      <span class="biaoti">{{ list1[0].spotMainTitle }}</span>
      <span class="redu">{{ list1[0].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名2</span>
      <span class="biaoti">{{ list1[1].spotMainTitle }}</span>
      <span class="redu">{{ list1[1].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名3</span>
      <span class="biaoti">{{ list1[2].spotMainTitle }}</span>
      <span class="redu">{{ list1[2].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名4</span>
      <span class="biaoti">{{ list1[3].spotMainTitle }}</span>
      <span class="redu">{{ list1[3].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名5</span>
      <span class="biaoti">{{ list1[4].spotMainTitle }}</span>
      <span class="redu">{{ list1[4].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名6</span>
      <span class="biaoti">{{ list1[5].spotMainTitle }}</span>
      <span class="redu">{{ list1[5].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名7</span>
      <span class="biaoti">{{ list1[6].spotMainTitle }}</span>
      <span class="redu">{{ list1[6].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名8</span>
      <span class="biaoti">{{ list1[7].spotMainTitle }}</span>
      <span class="redu">{{ list1[7].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名9</span>
      <span class="biaoti">{{ list1[8].spotMainTitle }}</span>
      <span class="redu">{{ list1[8].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名10</span>
      <span class="biaoti">{{ list1[9].spotMainTitle }}</span>
      <span class="redu">{{ list1[9].spotMainHot }}</span>
    </div>
    <span class="bangdangmingzi"> 地区2</span>
    <div class="spotyibangyihang">
      <span class="paiming">排名1</span>
      <span class="biaoti">{{ list2[0].spotMainTitle }}</span>
      <span class="redu">{{ list2[0].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名2</span>
      <span class="biaoti">{{ list2[1].spotMainTitle }}</span>
      <span class="redu">{{ list2[1].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名3</span>
      <span class="biaoti">{{ list2[2].spotMainTitle }}</span>
      <span class="redu">{{ list2[2].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名4</span>
      <span class="biaoti">{{ list2[3].spotMainTitle }}</span>
      <span class="redu">{{ list2[3].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名5</span>
      <span class="biaoti">{{ list2[4].spotMainTitle }}</span>
      <span class="redu">{{ list2[4].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名6</span>
      <span class="biaoti">{{ list2[5].spotMainTitle }}</span>
      <span class="redu">{{ list2[5].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名7</span>
      <span class="biaoti">{{ list2[6].spotMainTitle }}</span>
      <span class="redu">{{ list2[6].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名8</span>
      <span class="biaoti">{{ list2[7].spotMainTitle }}</span>
      <span class="redu">{{ list2[7].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名9</span>
      <span class="biaoti">{{ list2[8].spotMainTitle }}</span>
      <span class="redu">{{ list2[8].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名10</span>
      <span class="biaoti">{{ list2[9].spotMainTitle }}</span>
      <span class="redu">{{ list2[9].spotMainHot }}</span>
    </div>
    <span class="bangdangmingzi"> 地区3</span>
    <div class="spotyibangyihang">
      <span class="paiming">排名1</span>
      <span class="biaoti">{{ list3[0].spotMainTitle }}</span>
      <span class="redu">{{ list3[0].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名2</span>
      <span class="biaoti">{{ list3[1].spotMainTitle }}</span>
      <span class="redu">{{ list3[1].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名3</span>
      <span class="biaoti">{{ list3[2].spotMainTitle }}</span>
      <span class="redu">{{ list3[2].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名4</span>
      <span class="biaoti">{{ list3[3].spotMainTitle }}</span>
      <span class="redu">{{ list3[3].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名5</span>
      <span class="biaoti">{{ list3[4].spotMainTitle }}</span>
      <span class="redu">{{ list3[4].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名6</span>
      <span class="biaoti">{{ list3[5].spotMainTitle }}</span>
      <span class="redu">{{ list3[5].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名7</span>
      <span class="biaoti">{{ list3[6].spotMainTitle }}</span>
      <span class="redu">{{ list3[6].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名8</span>
      <span class="biaoti">{{ list3[7].spotMainTitle }}</span>
      <span class="redu">{{ list3[7].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名9</span>
      <span class="biaoti">{{ list3[8].spotMainTitle }}</span>
      <span class="redu">{{ list3[8].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名10</span>
      <span class="biaoti">{{ list3[9].spotMainTitle }}</span>
      <span class="redu">{{ list3[9].spotMainHot }}</span>
    </div>
    <span class="bangdangmingzi"> 地区4</span>
    <div class="spotyibangyihang">
      <span class="paiming">排名1</span>
      <span class="biaoti">{{ list4[0].spotMainTitle }}</span>
      <span class="redu">{{ list4[0].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名2</span>
      <span class="biaoti">{{ list4[1].spotMainTitle }}</span>
      <span class="redu">{{ list4[1].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名3</span>
      <span class="biaoti">{{ list4[2].spotMainTitle }}</span>
      <span class="redu">{{ list4[2].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名4</span>
      <span class="biaoti">{{ list4[3].spotMainTitle }}</span>
      <span class="redu">{{ list4[3].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名5</span>
      <span class="biaoti">{{ list4[4].spotMainTitle }}</span>
      <span class="redu">{{ list4[4].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名6</span>
      <span class="biaoti">{{ list4[5].spotMainTitle }}</span>
      <span class="redu">{{ list4[5].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名7</span>
      <span class="biaoti">{{ list4[6].spotMainTitle }}</span>
      <span class="redu">{{ list4[6].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名8</span>
      <span class="biaoti">{{ list4[7].spotMainTitle }}</span>
      <span class="redu">{{ list4[7].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名9</span>
      <span class="biaoti">{{ list4[8].spotMainTitle }}</span>
      <span class="redu">{{ list4[8].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名10</span>
      <span class="biaoti">{{ list4[9].spotMainTitle }}</span>
      <span class="redu">{{ list4[9].spotMainHot }}</span>
    </div>
    <span class="bangdangmingzi"> 地区5</span>
    <div class="spotyibangyihang">
      <span class="paiming">排名1</span>
      <span class="biaoti">{{ list5[0].spotMainTitle }}</span>
      <span class="redu">{{ list5[0].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名2</span>
      <span class="biaoti">{{ list5[1].spotMainTitle }}</span>
      <span class="redu">{{ list5[1].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名3</span>
      <span class="biaoti">{{ list5[2].spotMainTitle }}</span>
      <span class="redu">{{ list5[2].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名4</span>
      <span class="biaoti">{{ list5[3].spotMainTitle }}</span>
      <span class="redu">{{ list5[3].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名5</span>
      <span class="biaoti">{{ list5[4].spotMainTitle }}</span>
      <span class="redu">{{ list5[4].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名6</span>
      <span class="biaoti">{{ list5[5].spotMainTitle }}</span>
      <span class="redu">{{ list5[5].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名7</span>
      <span class="biaoti">{{ list5[6].spotMainTitle }}</span>
      <span class="redu">{{ list5[6].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名8</span>
      <span class="biaoti">{{ list5[7].spotMainTitle }}</span>
      <span class="redu">{{ list5[7].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名9</span>
      <span class="biaoti">{{ list5[8].spotMainTitle }}</span>
      <span class="redu">{{ list5[8].spotMainHot }}</span>
    </div>
    <div class="spotyibangyihang">
      <span class="paiming">排名10</span>
      <span class="biaoti">{{ list5[9].spotMainTitle }}</span>
      <span class="redu">{{ list5[9].spotMainHot }}</span>
    </div>
  </div>


</template>

<script lang="ts">
import cbl from "@/views/spot-cebianlang/spot-cebianlan.vue";
import diqucbl from "@/views/spot-cebianlang/spot-diqucebianlan.vue";
import axios from "axios";

export default {
  data() {
    return {
      list1: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
      list2: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
      list3: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
      list4: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
      list5: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    };
  },
  methods: {
    getlist10(parm1, url) {
      axios.get(url).then(({ data }) => {
        for (let i = 0; i < 10; i++) {
          parm1[i] = data.data[i];
        }
      });
    },
  },
  created() {
    this.getlist10(this.list1, "http://spot:8089/spot/m/area1NianBang");
    this.getlist10(this.list2, "http://spot:8089/spot/m/area2NianBang");
    this.getlist10(this.list3, "http://spot:8089/spot/m/area3NianBang");
    this.getlist10(this.list4, "http://spot:8089/spot/m/area4NianBang");
    this.getlist10(this.list5, "http://spot:8089/spot/m/area5NianBang");
  },
  components: {
    cbl,
    diqucbl
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
.bangdangmingzi {
  font-size: 30px;
  margin-left: 40vw;
}
.bangdandabiaoti{
  width: 90vw;
  font-size: 30px;
  padding-left: 40vw;
}
</style>