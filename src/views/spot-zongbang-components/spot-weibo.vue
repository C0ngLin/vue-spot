<template>
  <div class="clblock">
    <div class="clblocktitle">微博热榜</div>
    <div class="clmainmain">
      <div class="clyh">
        <span class="clorder">1</span>
        <span class="cltile" @click="this.jumpPage(weibotop50list[49].spotWeiboUrl)">{{ weibotop50list[49].spotWeiboTitle }}</span>
        <span class="clheat">{{ weibotop50list[49].spotWeiboZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">2</span>
        <span class="cltile" @click="this.jumpPage(weibotop50list[48].spotWeiboUrl)">{{ weibotop50list[48].spotWeiboTitle }}</span>
        <span class="clheat">{{ weibotop50list[48].spotWeiboZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">3</span>
        <span class="cltile" @click="this.jumpPage(weibotop50list[47].spotWeiboUrl)">{{ weibotop50list[47].spotWeiboTitle }}</span>
        <span class="clheat">{{ weibotop50list[47].spotWeiboZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">4</span>
        <span class="cltile" @click="this.jumpPage(weibotop50list[46].spotWeiboUrl)">{{ weibotop50list[46].spotWeiboTitle }}</span>
        <span class="clheat">{{ weibotop50list[46].spotWeiboZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">5</span>
        <span class="cltile" @click="this.jumpPage(weibotop50list[45].spotWeiboUrl)">{{ weibotop50list[45].spotWeiboTitle }}</span>
        <span class="clheat">{{ weibotop50list[45].spotWeiboZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">6</span>
        <span class="cltile" @click="this.jumpPage(weibotop50list[44].spotWeiboUrl)">{{ weibotop50list[44].spotWeiboTitle }}</span>
        <span class="clheat">{{ weibotop50list[44].spotWeiboZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">7</span>
        <span class="cltile" @click="this.jumpPage(weibotop50list[43].spotWeiboUrl)">{{ weibotop50list[43].spotWeiboTitle }}</span>
        <span class="clheat">{{ weibotop50list[43].spotWeiboZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">8</span>
        <span class="cltile" @click="this.jumpPage(weibotop50list[42].spotWeiboUrl)">{{ weibotop50list[42].spotWeiboTitle }}</span>
        <span class="clheat">{{ weibotop50list[42].spotWeiboZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">9</span>
        <span class="cltile" @click="this.jumpPage(weibotop50list[41].spotWeiboUrl)">{{ weibotop50list[41].spotWeiboTitle }}</span>
        <span class="clheat">{{ weibotop50list[41].spotWeiboZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">10</span>
        <span class="cltile" @click="this.jumpPage(weibotop50list[40].spotWeiboUrl)">{{ weibotop50list[40].spotWeiboTitle }}</span>
        <span class="clheat">{{ weibotop50list[40].spotWeiboZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">11</span>
        <span class="cltile" @click="this.jumpPage(weibotop50list[39].spotWeiboUrl)">{{ weibotop50list[39].spotWeiboTitle }}</span>
        <span class="clheat">{{ weibotop50list[39].spotWeiboZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">12</span>
        <span class="cltile" @click="this.jumpPage(weibotop50list[38].spotWeiboUrl)">{{ weibotop50list[38].spotWeiboTitle }}</span>
        <span class="clheat">{{ weibotop50list[38].spotWeiboZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">13</span>
        <span class="cltile" @click="this.jumpPage(weibotop50list[37].spotWeiboUrl)">{{ weibotop50list[37].spotWeiboTitle }}</span>
        <span class="clheat">{{ weibotop50list[37].spotWeiboZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">14</span>
        <span class="cltile" @click="this.jumpPage(weibotop50list[36].spotWeiboUrl)">{{ weibotop50list[36].spotWeiboTitle }}</span>
        <span class="clheat">{{ weibotop50list[36].spotWeiboZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">15</span>
        <span class="cltile" @click="this.jumpPage(weibotop50list[35].spotWeiboUrl)">{{ weibotop50list[35].spotWeiboTitle }}</span>
        <span class="clheat">{{ weibotop50list[35].spotWeiboZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">16</span>
        <span class="cltile" @click="this.jumpPage(weibotop50list[34].spotWeiboUrl)">{{ weibotop50list[34].spotWeiboTitle }}</span>
        <span class="clheat">{{ weibotop50list[34].spotWeiboZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">17</span>
        <span class="cltile" @click="this.jumpPage(weibotop50list[33].spotWeiboUrl)">{{ weibotop50list[33].spotWeiboTitle }}</span>
        <span class="clheat">{{ weibotop50list[33].spotWeiboZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">18</span>
        <span class="cltile" @click="this.jumpPage(weibotop50list[32].spotWeiboUrl)">{{ weibotop50list[32].spotWeiboTitle }}</span>
        <span class="clheat">{{ weibotop50list[32].spotWeiboZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">19</span>
        <span class="cltile" @click="this.jumpPage(weibotop50list[31].spotWeiboUrl)">{{ weibotop50list[31].spotWeiboTitle }}</span>
        <span class="clheat">{{ weibotop50list[31].spotWeiboZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">20</span>
        <span class="cltile" @click="this.jumpPage(weibotop50list[30].spotWeiboUrl)">{{ weibotop50list[30].spotWeiboTitle }}</span>
        <span class="clheat">{{ weibotop50list[30].spotWeiboZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">21</span>
        <span class="cltile" @click="this.jumpPage(weibotop50list[29].spotWeiboUrl)">{{ weibotop50list[29].spotWeiboTitle }}</span>
        <span class="clheat">{{ weibotop50list[29].spotWeiboZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">22</span>
        <span class="cltile" @click="this.jumpPage(weibotop50list[28].spotWeiboUrl)">{{ weibotop50list[28].spotWeiboTitle }}</span>
        <span class="clheat">{{ weibotop50list[28].spotWeiboZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">23</span>
        <span class="cltile" @click="this.jumpPage(weibotop50list[27].spotWeiboUrl)">{{ weibotop50list[27].spotWeiboTitle }}</span>
        <span class="clheat">{{ weibotop50list[27].spotWeiboZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">24</span>
        <span class="cltile" @click="this.jumpPage(weibotop50list[26].spotWeiboUrl)">{{ weibotop50list[26].spotWeiboTitle }}</span>
        <span class="clheat">{{ weibotop50list[26].spotWeiboZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">25</span>
        <span class="cltile" @click="this.jumpPage(weibotop50list[25].spotWeiboUrl)">{{ weibotop50list[25].spotWeiboTitle }}</span>
        <span class="clheat">{{ weibotop50list[25].spotWeiboZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">26</span>
        <span class="cltile" @click="this.jumpPage(weibotop50list[24].spotWeiboUrl)">{{ weibotop50list[24].spotWeiboTitle }}</span>
        <span class="clheat">{{ weibotop50list[24].spotWeiboZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">27</span>
        <span class="cltile" @click="this.jumpPage(weibotop50list[23].spotWeiboUrl)">{{ weibotop50list[23].spotWeiboTitle }}</span>
        <span class="clheat">{{ weibotop50list[23].spotWeiboZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">28</span>
        <span class="cltile" @click="this.jumpPage(weibotop50list[22].spotWeiboUrl)">{{ weibotop50list[22].spotWeiboTitle }}</span>
        <span class="clheat">{{ weibotop50list[22].spotWeiboZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">29</span>
        <span class="cltile" @click="this.jumpPage(weibotop50list[21].spotWeiboUrl)">{{ weibotop50list[21].spotWeiboTitle }}</span>
        <span class="clheat">{{ weibotop50list[21].spotWeiboZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">30</span>
        <span class="cltile" @click="this.jumpPage(weibotop50list[20].spotWeiboUrl)">{{ weibotop50list[20].spotWeiboTitle }}</span>
        <span class="clheat">{{ weibotop50list[20].spotWeiboZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">31</span>
        <span class="cltile" @click="this.jumpPage(weibotop50list[19].spotWeiboUrl)">{{ weibotop50list[19].spotWeiboTitle }}</span>
        <span class="clheat">{{ weibotop50list[19].spotWeiboZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">32</span>
        <span class="cltile" @click="this.jumpPage(weibotop50list[18].spotWeiboUrl)">{{ weibotop50list[18].spotWeiboTitle }}</span>
        <span class="clheat">{{ weibotop50list[18].spotWeiboZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">33</span>
        <span class="cltile" @click="this.jumpPage(weibotop50list[17].spotWeiboUrl)">{{ weibotop50list[17].spotWeiboTitle }}</span>
        <span class="clheat">{{ weibotop50list[17].spotWeiboZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">34</span>
        <span class="cltile" @click="this.jumpPage(weibotop50list[16].spotWeiboUrl)">{{ weibotop50list[16].spotWeiboTitle }}</span>
        <span class="clheat">{{ weibotop50list[16].spotWeiboZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">35</span>
        <span class="cltile" @click="this.jumpPage(weibotop50list[15].spotWeiboUrl)">{{ weibotop50list[15].spotWeiboTitle }}</span>
        <span class="clheat">{{ weibotop50list[15].spotWeiboZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">36</span>
        <span class="cltile" @click="this.jumpPage(weibotop50list[14].spotWeiboUrl)">{{ weibotop50list[14].spotWeiboTitle }}</span>
        <span class="clheat">{{ weibotop50list[14].spotWeiboZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">37</span>
        <span class="cltile" @click="this.jumpPage(weibotop50list[13].spotWeiboUrl)">{{ weibotop50list[13].spotWeiboTitle }}</span>
        <span class="clheat">{{ weibotop50list[13].spotWeiboZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">38</span>
        <span class="cltile" @click="this.jumpPage(weibotop50list[12].spotWeiboUrl)">{{ weibotop50list[12].spotWeiboTitle }}</span>
        <span class="clheat">{{ weibotop50list[12].spotWeiboZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">39</span>
        <span class="cltile" @click="this.jumpPage(weibotop50list[1].spotWeiboUrl)">{{ weibotop50list[11].spotWeiboTitle }}</span>
        <span class="clheat">{{ weibotop50list[11].spotWeiboZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">40</span>
        <span class="cltile" @click="this.jumpPage(weibotop50list[10].spotWeiboUrl)">{{ weibotop50list[10].spotWeiboTitle }}</span>
        <span class="clheat">{{ weibotop50list[10].spotWeiboZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">41</span>
        <span class="cltile" @click="this.jumpPage(weibotop50list[9].spotWeiboUrl)">{{ weibotop50list[9].spotWeiboTitle }}</span>
        <span class="clheat">{{ weibotop50list[9].spotWeiboZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">42</span>
        <span class="cltile" @click="this.jumpPage(weibotop50list[8].spotWeiboUrl)">{{ weibotop50list[8].spotWeiboTitle }}</span>
        <span class="clheat">{{ weibotop50list[8].spotWeiboZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">43</span>
        <span class="cltile" @click="this.jumpPage(weibotop50list[7].spotWeiboUrl)">{{ weibotop50list[7].spotWeiboTitle }}</span>
        <span class="clheat">{{ weibotop50list[7].spotWeiboZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">44</span>
        <span class="cltile" @click="this.jumpPage(weibotop50list[6].spotWeiboUrl)">{{ weibotop50list[6].spotWeiboTitle }}</span>
        <span class="clheat">{{ weibotop50list[6].spotWeiboZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">45</span>
        <span class="cltile" @click="this.jumpPage(weibotop50list[5].spotWeiboUrl)">{{ weibotop50list[5].spotWeiboTitle }}</span>
        <span class="clheat">{{ weibotop50list[5].spotWeiboZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">46</span>
        <span class="cltile" @click="this.jumpPage(weibotop50list[4].spotWeiboUrl)">{{ weibotop50list[4].spotWeiboTitle }}</span>
        <span class="clheat">{{ weibotop50list[4].spotWeiboZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">47</span>
        <span class="cltile" @click="this.jumpPage(weibotop50list[3].spotWeiboUrl)">{{ weibotop50list[3].spotWeiboTitle }}</span>
        <span class="clheat">{{ weibotop50list[3].spotWeiboZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">48</span>
        <span class="cltile" @click="this.jumpPage(weibotop50list[2].spotWeiboUrl)">{{ weibotop50list[2].spotWeiboTitle }}</span>
        <span class="clheat">{{ weibotop50list[2].spotWeiboZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">49</span>
        <span class="cltile" @click="this.jumpPage(weibotop50list[1].spotWeiboUrl)">{{ weibotop50list[1].spotWeiboTitle }}</span>
        <span class="clheat">{{ weibotop50list[1].spotWeiboZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">50</span>
        <span class="cltile" @click="this.jumpPage(weibotop50list[0].spotWeiboUrl)">{{ weibotop50list[0].spotWeiboTitle }}</span>
        <span class="clheat">{{ weibotop50list[0].spotWeiboZhishu }}</span>
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
      weibotop50list: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {},
        {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
        {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
        {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
        {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    };
  },
  methods: {
    getlist() {
      axios.get("http://spot:8089/spot/weibo/list").then(({ data }) => {
        for (let i = 0; i < 50; i++) {
          this.weibotop50list[i] = data.weibo[i];
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
