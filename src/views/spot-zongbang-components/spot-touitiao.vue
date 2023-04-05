<template>
  <div class="clblock">
    <div class="clblocktitle">天涯热榜</div>
    <div class="clmainmain">
      <div class="clyh">
        <span class="clorder">1</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[99].spotToutiaoUrl)">{{ toutiaotop100list[99].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[99].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">2</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[98].spotToutiaoUrl)">{{ toutiaotop100list[98].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[98].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">3</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[97].spotToutiaoUrl)">{{ toutiaotop100list[97].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[97].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">4</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[96].spotToutiaoUrl)">{{ toutiaotop100list[96].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[96].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">5</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[95].spotToutiaoUrl)">{{ toutiaotop100list[95].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[95].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">6</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[94].spotToutiaoUrl)">{{ toutiaotop100list[94].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[94].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">7</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[93].spotToutiaoUrl)">{{ toutiaotop100list[93].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[93].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">8</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[92].spotToutiaoUrl)">{{ toutiaotop100list[92].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[92].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">9</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[91].spotToutiaoUrl)">{{ toutiaotop100list[91].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[91].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">10</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[90].spotToutiaoUrl)">{{ toutiaotop100list[90].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[90].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">11</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[89].spotToutiaoUrl)">{{ toutiaotop100list[89].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[89].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">12</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[88].spotToutiaoUrl)">{{ toutiaotop100list[88].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[88].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">13</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[87].spotToutiaoUrl)">{{ toutiaotop100list[87].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[87].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">14</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[86].spotToutiaoUrl)">{{ toutiaotop100list[86].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[86].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">15</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[85].spotToutiaoUrl)">{{ toutiaotop100list[85].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[85].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">16</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[84].spotToutiaoUrl)">{{ toutiaotop100list[84].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[84].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">17</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[83].spotToutiaoUrl)">{{ toutiaotop100list[83].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[83].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">18</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[82].spotToutiaoUrl)">{{ toutiaotop100list[82].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[82].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">19</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[81].spotToutiaoUrl)">{{ toutiaotop100list[81].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[81].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">20</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[80].spotToutiaoUrl)">{{ toutiaotop100list[80].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[80].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">21</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[79].spotToutiaoUrl)">{{ toutiaotop100list[79].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[79].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">22</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[78].spotToutiaoUrl)">{{ toutiaotop100list[78].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[78].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">23</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[77].spotToutiaoUrl)">{{ toutiaotop100list[77].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[77].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">24</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[76].spotToutiaoUrl)">{{ toutiaotop100list[76].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[76].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">25</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[75].spotToutiaoUrl)">{{ toutiaotop100list[75].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[75].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">26</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[74].spotToutiaoUrl)">{{ toutiaotop100list[74].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[74].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">27</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[73].spotToutiaoUrl)">{{ toutiaotop100list[73].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[73].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">28</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[72].spotToutiaoUrl)">{{ toutiaotop100list[72].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[72].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">29</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[71].spotToutiaoUrl)">{{ toutiaotop100list[71].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[71].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">30</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[70].spotToutiaoUrl)">{{ toutiaotop100list[70].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[70].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">31</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[69].spotToutiaoUrl)">{{ toutiaotop100list[69].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[69].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">32</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[68].spotToutiaoUrl)">{{ toutiaotop100list[68].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[68].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">33</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[67].spotToutiaoUrl)">{{ toutiaotop100list[67].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[67].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">34</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[66].spotToutiaoUrl)">{{ toutiaotop100list[66].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[66].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">35</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[65].spotToutiaoUrl)">{{ toutiaotop100list[65].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[65].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">36</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[64].spotToutiaoUrl)">{{ toutiaotop100list[64].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[64].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">37</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[63].spotToutiaoUrl)">{{ toutiaotop100list[63].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[63].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">38</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[62].spotToutiaoUrl)">{{ toutiaotop100list[62].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[62].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">39</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[61].spotToutiaoUrl)">{{ toutiaotop100list[61].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[61].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">40</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[60].spotToutiaoUrl)">{{ toutiaotop100list[60].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[60].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">41</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[59].spotToutiaoUrl)">{{ toutiaotop100list[59].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[59].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">42</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[58].spotToutiaoUrl)">{{ toutiaotop100list[58].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[58].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">43</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[57].spotToutiaoUrl)">{{ toutiaotop100list[57].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[57].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">44</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[56].spotToutiaoUrl)">{{ toutiaotop100list[56].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[56].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">45</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[55].spotToutiaoUrl)">{{ toutiaotop100list[55].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[55].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">46</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[54].spotToutiaoUrl)">{{ toutiaotop100list[54].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[54].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">47</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[53].spotToutiaoUrl)">{{ toutiaotop100list[53].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[53].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">48</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[52].spotToutiaoUrl)">{{ toutiaotop100list[52].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[52].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">49</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[51].spotToutiaoUrl)">{{ toutiaotop100list[51].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[51].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">50</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[50].spotToutiaoUrl)">{{ toutiaotop100list[50].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[50].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">51</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[49].spotToutiaoUrl)">{{ toutiaotop100list[49].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[49].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">52</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[48].spotToutiaoUrl)">{{ toutiaotop100list[48].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[48].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">53</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[47].spotToutiaoUrl)">{{ toutiaotop100list[47].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[47].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">54</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[46].spotToutiaoUrl)">{{ toutiaotop100list[46].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[46].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">55</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[45].spotToutiaoUrl)">{{ toutiaotop100list[45].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[45].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">56</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[44].spotToutiaoUrl)">{{ toutiaotop100list[44].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[44].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">57</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[43].spotToutiaoUrl)">{{ toutiaotop100list[43].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[43].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">58</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[42].spotToutiaoUrl)">{{ toutiaotop100list[42].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[42].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">59</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[41].spotToutiaoUrl)">{{ toutiaotop100list[41].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[41].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">60</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[40].spotToutiaoUrl)">{{ toutiaotop100list[40].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[40].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">61</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[39].spotToutiaoUrl)">{{ toutiaotop100list[39].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[39].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">62</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[38].spotToutiaoUrl)">{{ toutiaotop100list[38].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[38].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">63</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[37].spotToutiaoUrl)">{{ toutiaotop100list[37].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[37].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">64</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[36].spotToutiaoUrl)">{{ toutiaotop100list[36].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[36].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">65</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[35].spotToutiaoUrl)">{{ toutiaotop100list[35].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[35].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">66</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[34].spotToutiaoUrl)">{{ toutiaotop100list[34].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[34].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">67</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[33].spotToutiaoUrl)">{{ toutiaotop100list[33].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[33].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">68</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[32].spotToutiaoUrl)">{{ toutiaotop100list[32].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[32].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">69</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[31].spotToutiaoUrl)">{{ toutiaotop100list[31].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[31].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">70</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[30].spotToutiaoUrl)">{{ toutiaotop100list[30].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[30].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">71</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[29].spotToutiaoUrl)">{{ toutiaotop100list[29].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[29].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">72</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[28].spotToutiaoUrl)">{{ toutiaotop100list[28].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[28].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">73</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[27].spotToutiaoUrl)">{{ toutiaotop100list[27].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[27].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">74</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[26].spotToutiaoUrl)">{{ toutiaotop100list[26].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[26].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">75</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[25].spotToutiaoUrl)">{{ toutiaotop100list[25].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[25].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">76</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[24].spotToutiaoUrl)">{{ toutiaotop100list[24].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[24].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">77</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[23].spotToutiaoUrl)">{{ toutiaotop100list[23].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[23].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">78</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[22].spotToutiaoUrl)">{{ toutiaotop100list[22].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[22].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">79</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[21].spotToutiaoUrl)">{{ toutiaotop100list[21].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[21].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">80</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[20].spotToutiaoUrl)">{{ toutiaotop100list[20].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[20].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">81</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[19].spotToutiaoUrl)">{{ toutiaotop100list[19].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[19].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">82</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[18].spotToutiaoUrl)">{{ toutiaotop100list[18].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[18].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">83</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[17].spotToutiaoUrl)">{{ toutiaotop100list[17].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[17].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">84</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[16].spotToutiaoUrl)">{{ toutiaotop100list[16].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[16].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">85</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[15].spotToutiaoUrl)">{{ toutiaotop100list[15].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[15].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">86</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[14].spotToutiaoUrl)">{{ toutiaotop100list[14].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[14].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">87</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[13].spotToutiaoUrl)">{{ toutiaotop100list[13].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[13].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">88</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[12].spotToutiaoUrl)">{{ toutiaotop100list[12].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[12].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">89</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[11].spotToutiaoUrl)">{{ toutiaotop100list[11].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[11].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">90</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[10].spotToutiaoUrl)">{{ toutiaotop100list[10].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[10].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">91</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[9].spotToutiaoUrl)">{{ toutiaotop100list[9].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[9].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">92</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[8].spotToutiaoUrl)">{{ toutiaotop100list[8].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[8].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">93</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[7].spotToutiaoUrl)">{{ toutiaotop100list[7].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[7].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">94</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[6].spotToutiaoUrl)">{{ toutiaotop100list[6].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[6].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">95</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[5].spotToutiaoUrl)">{{ toutiaotop100list[5].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[5].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">96</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[4].spotToutiaoUrl)">{{ toutiaotop100list[4].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[4].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">97</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[3].spotToutiaoUrl)">{{ toutiaotop100list[3].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[3].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">98</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[2].spotToutiaoUrl)">{{ toutiaotop100list[2].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[2].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">99</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[1].spotToutiaoUrl)">{{ toutiaotop100list[1].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[1].spotToutiaoZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">100</span>
        <span class="cltile" @click="this.jumpPage(toutiaotop100list[0].spotToutiaoUrl)">{{ toutiaotop100list[0].spotToutiaoTitle }}</span>
        <span class="clheat">{{ toutiaotop100list[0].spotToutiaoZhishu }}</span>
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
      toutiaotop100list: [ {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
        {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
        {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
        {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
        {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
        {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
        {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
        {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
        {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
        {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
        {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
    };
  },
  methods: {
    getlist() {
      axios.get("http://spot:8089/spot/toutiao/list").then(({ data }) => {
        console.log(data.toutiao)
        for (let i = 0; i < 100; i++) {
          this.toutiaotop100list[i] = data.toutiao[i];
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
