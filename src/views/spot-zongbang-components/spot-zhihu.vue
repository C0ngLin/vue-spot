<template>
  <div class="clblock">
    <div class="clblocktitle">知乎热榜</div>
    <div class="clmainmain">
      <div class="clyh">
        <span class="clorder">1</span>
        <span class="cltile" @click="jumppage(zhihutop50list[49].spotZhihuUrl)">{{ zhihutop50list[49].spotZhihuTitle }}</span>
        <span class="clheat">{{ zhihutop50list[49].spotZhihuZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">2</span>
        <span class="cltile" @click="jumppage(zhihutop50list[48].spotZhihuUrl)">{{ zhihutop50list[48].spotZhihuTitle }}</span>
        <span class="clheat">{{ zhihutop50list[48].spotZhihuZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">3</span>
        <span class="cltile" @click="jumppage(zhihutop50list[47].spotZhihuUrl)">{{ zhihutop50list[47].spotZhihuTitle }}</span>
        <span class="clheat">{{ zhihutop50list[47].spotZhihuZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">4</span>
        <span class="cltile" @click="jumppage(zhihutop50list[46].spotZhihuUrl)">{{ zhihutop50list[46].spotZhihuTitle }}</span>
        <span class="clheat">{{ zhihutop50list[46].spotZhihuZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">5</span>
        <span class="cltile" @click="jumppage(zhihutop50list[45].spotZhihuUrl)">{{ zhihutop50list[45].spotZhihuTitle }}</span>
        <span class="clheat">{{ zhihutop50list[45].spotZhihuZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">6</span>
        <span class="cltile" @click="jumppage(zhihutop50list[44].spotZhihuUrl)">{{ zhihutop50list[44].spotZhihuTitle }}</span>
        <span class="clheat">{{ zhihutop50list[44].spotZhihuZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">7</span>
        <span class="cltile" @click="jumppage(zhihutop50list[43].spotZhihuUrl)">{{ zhihutop50list[43].spotZhihuTitle }}</span>
        <span class="clheat">{{ zhihutop50list[43].spotZhihuZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">8</span>
        <span class="cltile" @click="jumppage(zhihutop50list[42].spotZhihuUrl)">{{ zhihutop50list[42].spotZhihuTitle }}</span>
        <span class="clheat">{{ zhihutop50list[42].spotZhihuZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">9</span>
        <span class="cltile" @click="jumppage(zhihutop50list[41].spotZhihuUrl)">{{ zhihutop50list[41].spotZhihuTitle }}</span>
        <span class="clheat">{{ zhihutop50list[41].spotZhihuZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">10</span>
        <span class="cltile" @click="jumppage(zhihutop50list[40].spotZhihuUrl)">{{ zhihutop50list[40].spotZhihuTitle }}</span>
        <span class="clheat">{{ zhihutop50list[40].spotZhihuZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">11</span>
        <span class="cltile" @click="jumppage(zhihutop50list[39].spotZhihuUrl)">{{ zhihutop50list[39].spotZhihuTitle }}</span>
        <span class="clheat">{{ zhihutop50list[39].spotZhihuZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">12</span>
        <span class="cltile" @click="jumppage(zhihutop50list[38].spotZhihuUrl)">{{ zhihutop50list[38].spotZhihuTitle }}</span>
        <span class="clheat">{{ zhihutop50list[38].spotZhihuZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">13</span>
        <span class="cltile" @click="jumppage(zhihutop50list[37].spotZhihuUrl)">{{ zhihutop50list[37].spotZhihuTitle }}</span>
        <span class="clheat">{{ zhihutop50list[37].spotZhihuZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">14</span>
        <span class="cltile" @click="jumppage(zhihutop50list[36].spotZhihuUrl)">{{ zhihutop50list[36].spotZhihuTitle }}</span>
        <span class="clheat">{{ zhihutop50list[36].spotZhihuZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">15</span>
        <span class="cltile" @click="jumppage(zhihutop50list[35].spotZhihuUrl)">{{ zhihutop50list[35].spotZhihuTitle }}</span>
        <span class="clheat">{{ zhihutop50list[35].spotZhihuZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">16</span>
        <span class="cltile" @click="jumppage(zhihutop50list[34].spotZhihuUrl)">{{ zhihutop50list[34].spotZhihuTitle }}</span>
        <span class="clheat">{{ zhihutop50list[34].spotZhihuZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">17</span>
        <span class="cltile" @click="jumppage(zhihutop50list[33].spotZhihuUrl)">{{ zhihutop50list[33].spotZhihuTitle }}</span>
        <span class="clheat">{{ zhihutop50list[33].spotZhihuZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">18</span>
        <span class="cltile" @click="jumppage(zhihutop50list[32].spotZhihuUrl)">{{ zhihutop50list[32].spotZhihuTitle }}</span>
        <span class="clheat">{{ zhihutop50list[32].spotZhihuZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">19</span>
        <span class="cltile" @click="jumppage(zhihutop50list[31].spotZhihuUrl)">{{ zhihutop50list[31].spotZhihuTitle }}</span>
        <span class="clheat">{{ zhihutop50list[31].spotZhihuZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">20</span>
        <span class="cltile" @click="jumppage(zhihutop50list[30].spotZhihuUrl)">{{ zhihutop50list[30].spotZhihuTitle }}</span>
        <span class="clheat">{{ zhihutop50list[30].spotZhihuZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">21</span>
        <span class="cltile" @click="jumppage(zhihutop50list[29].spotZhihuUrl)">{{ zhihutop50list[29].spotZhihuTitle }}</span>
        <span class="clheat">{{ zhihutop50list[29].spotZhihuZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">22</span>
        <span class="cltile" @click="jumppage(zhihutop50list[28].spotZhihuUrl)">{{ zhihutop50list[28].spotZhihuTitle }}</span>
        <span class="clheat">{{ zhihutop50list[28].spotZhihuZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">23</span>
        <span class="cltile" @click="jumppage(zhihutop50list[27].spotZhihuUrl)">{{ zhihutop50list[27].spotZhihuTitle }}</span>
        <span class="clheat">{{ zhihutop50list[27].spotZhihuZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">24</span>
        <span class="cltile" @click="jumppage(zhihutop50list[26].spotZhihuUrl)">{{ zhihutop50list[26].spotZhihuTitle }}</span>
        <span class="clheat">{{ zhihutop50list[26].spotZhihuZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">25</span>
        <span class="cltile" @click="jumppage(zhihutop50list[25].spotZhihuUrl)">{{ zhihutop50list[25].spotZhihuTitle }}</span>
        <span class="clheat">{{ zhihutop50list[25].spotZhihuZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">26</span>
        <span class="cltile" @click="jumppage(zhihutop50list[24].spotZhihuUrl)">{{ zhihutop50list[24].spotZhihuTitle }}</span>
        <span class="clheat">{{ zhihutop50list[24].spotZhihuZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">27</span>
        <span class="cltile" @click="jumppage(zhihutop50list[23].spotZhihuUrl)">{{ zhihutop50list[23].spotZhihuTitle }}</span>
        <span class="clheat">{{ zhihutop50list[23].spotZhihuZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">28</span>
        <span class="cltile" @click="jumppage(zhihutop50list[22].spotZhihuUrl)">{{ zhihutop50list[22].spotZhihuTitle }}</span>
        <span class="clheat">{{ zhihutop50list[22].spotZhihuZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">29</span>
        <span class="cltile" @click="jumppage(zhihutop50list[21].spotZhihuUrl)">{{ zhihutop50list[21].spotZhihuTitle }}</span>
        <span class="clheat">{{ zhihutop50list[21].spotZhihuZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">30</span>
        <span class="cltile" @click="jumppage(zhihutop50list[20].spotZhihuUrl)">{{ zhihutop50list[20].spotZhihuTitle }}</span>
        <span class="clheat">{{ zhihutop50list[20].spotZhihuZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">31</span>
        <span class="cltile" @click="jumppage(zhihutop50list[19].spotZhihuUrl)">{{ zhihutop50list[19].spotZhihuTitle }}</span>
        <span class="clheat">{{ zhihutop50list[19].spotZhihuZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">32</span>
        <span class="cltile" @click="jumppage(zhihutop50list[18].spotZhihuUrl)">{{ zhihutop50list[18].spotZhihuTitle }}</span>
        <span class="clheat">{{ zhihutop50list[18].spotZhihuZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">33</span>
        <span class="cltile" @click="jumppage(zhihutop50list[17].spotZhihuUrl)">{{ zhihutop50list[17].spotZhihuTitle }}</span>
        <span class="clheat">{{ zhihutop50list[17].spotZhihuZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">34</span>
        <span class="cltile" @click="jumppage(zhihutop50list[16].spotZhihuUrl)">{{ zhihutop50list[16].spotZhihuTitle }}</span>
        <span class="clheat">{{ zhihutop50list[16].spotZhihuZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">35</span>
        <span class="cltile" @click="jumppage(zhihutop50list[15].spotZhihuUrl)">{{ zhihutop50list[15].spotZhihuTitle }}</span>
        <span class="clheat">{{ zhihutop50list[15].spotZhihuZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">36</span>
        <span class="cltile" @click="jumppage(zhihutop50list[14].spotZhihuUrl)">{{ zhihutop50list[14].spotZhihuTitle }}</span>
        <span class="clheat">{{ zhihutop50list[14].spotZhihuZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">37</span>
        <span class="cltile" @click="jumppage(zhihutop50list[13].spotZhihuUrl)">{{ zhihutop50list[13].spotZhihuTitle }}</span>
        <span class="clheat">{{ zhihutop50list[13].spotZhihuZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">38</span>
        <span class="cltile" @click="jumppage(zhihutop50list[12].spotZhihuUrl)">{{ zhihutop50list[12].spotZhihuTitle }}</span>
        <span class="clheat">{{ zhihutop50list[12].spotZhihuZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">39</span>
        <span class="cltile" @click="jumppage(zhihutop50list[11].spotZhihuUrl)">{{ zhihutop50list[11].spotZhihuTitle }}</span>
        <span class="clheat">{{ zhihutop50list[11].spotZhihuZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">40</span>
        <span class="cltile" @click="jumppage(zhihutop50list[10].spotZhihuUrl)">{{ zhihutop50list[10].spotZhihuTitle }}</span>
        <span class="clheat">{{ zhihutop50list[10].spotZhihuZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">41</span>
        <span class="cltile" @click="jumppage(zhihutop50list[9].spotZhihuUrl)">{{ zhihutop50list[9].spotZhihuTitle }}</span>
        <span class="clheat">{{ zhihutop50list[9].spotZhihuZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">42</span>
        <span class="cltile" @click="jumppage(zhihutop50list[8].spotZhihuUrl)">{{ zhihutop50list[8].spotZhihuTitle }}</span>
        <span class="clheat">{{ zhihutop50list[8].spotZhihuZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">43</span>
        <span class="cltile" @click="jumppage(zhihutop50list[7].spotZhihuUrl)">{{ zhihutop50list[7].spotZhihuTitle }}</span>
        <span class="clheat">{{ zhihutop50list[7].spotZhihuZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">44</span>
        <span class="cltile" @click="jumppage(zhihutop50list[6].spotZhihuUrl)">{{ zhihutop50list[6].spotZhihuTitle }}</span>
        <span class="clheat">{{ zhihutop50list[6].spotZhihuZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">45</span>
        <span class="cltile" @click="jumppage(zhihutop50list[5].spotZhihuUrl)">{{ zhihutop50list[5].spotZhihuTitle }}</span>
        <span class="clheat">{{ zhihutop50list[5].spotZhihuZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">46</span>
        <span class="cltile" @click="jumppage(zhihutop50list[4].spotZhihuUrl)">{{ zhihutop50list[4].spotZhihuTitle }}</span>
        <span class="clheat">{{ zhihutop50list[4].spotZhihuZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">47</span>
        <span class="cltile" @click="jumppage(zhihutop50list[3].spotZhihuUrl)">{{ zhihutop50list[3].spotZhihuTitle }}</span>
        <span class="clheat">{{ zhihutop50list[3].spotZhihuZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">48</span>
        <span class="cltile" @click="jumppage(zhihutop50list[2].spotZhihuUrl)">{{ zhihutop50list[2].spotZhihuTitle }}</span>
        <span class="clheat">{{ zhihutop50list[2].spotZhihuZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">49</span>
        <span class="cltile" @click="jumppage(zhihutop50list[1].spotZhihuUrl)">{{ zhihutop50list[1].spotZhihuTitle }}</span>
        <span class="clheat">{{ zhihutop50list[1].spotZhihuZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">50</span>
        <span class="cltile" @click="jumppage(zhihutop50list[0].spotZhihuUrl)">{{ zhihutop50list[0].spotZhihuTitle }}</span>
        <span class="clheat">{{ zhihutop50list[0].spotZhihuZhishu }}</span>
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
      zhihutop50list: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {},
        {}, {}, {}, {}, {}, {}, {}, {}, {}, {},{},{},{},{},{},{}, {}, {}, {}, {}, {}, {}, {}, {}, {},
        {}, {}, {}, {}, {}, {}, {}, {}, {}, {},{},{},{},{},{}
      ]
    };
  },
  methods: {
    getlist() {
      axios.get("http://spot:8089/spot/zhihu/list").then(({ data }) => {
        for (let i = 0; i < 50; i++) {
          this.zhihutop50list[i] = data.zhihu[i];
        }
      });
    },
    jumppage(url) {
      window.open(url,'_blank')
    }
  },
  props: {},
  created() {
    this.getlist();
  }
};
</script>