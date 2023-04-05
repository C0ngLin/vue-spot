<template>
  <div class="clblock">
    <div class="clblocktitle">哔哩哔哩热榜</div>
    <div class="clmainmain">
      <div class="clyh">
        <span class="clorder">1</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[99].spotBilibiliUrl)">{{ bilibilitop100list[99].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[99].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">2</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[98].spotBilibiliUrl)">{{ bilibilitop100list[98].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[98].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">3</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[97].spotBilibiliUrl)">{{ bilibilitop100list[97].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[97].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">4</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[96].spotBilibiliUrl)">{{ bilibilitop100list[96].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[96].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">5</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[95].spotBilibiliUrl)">{{ bilibilitop100list[95].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[95].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">6</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[94].spotBilibiliUrl)">{{ bilibilitop100list[94].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[94].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">7</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[93].spotBilibiliUrl)">{{ bilibilitop100list[93].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[93].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">8</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[92].spotBilibiliUrl)">{{ bilibilitop100list[92].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[92].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">9</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[91].spotBilibiliUrl)">{{ bilibilitop100list[91].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[91].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">10</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[90].spotBilibiliUrl)">{{ bilibilitop100list[90].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[90].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">11</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[89].spotBilibiliUrl)">{{ bilibilitop100list[89].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[89].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">12</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[88].spotBilibiliUrl)">{{ bilibilitop100list[88].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[88].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">13</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[87].spotBilibiliUrl)">{{ bilibilitop100list[87].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[87].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">14</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[86].spotBilibiliUrl)">{{ bilibilitop100list[86].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[86].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">15</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[85].spotBilibiliUrl)">{{ bilibilitop100list[85].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[85].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">16</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[84].spotBilibiliUrl)">{{ bilibilitop100list[84].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[84].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">17</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[83].spotBilibiliUrl)">{{ bilibilitop100list[83].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[83].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">18</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[82].spotBilibiliUrl)">{{ bilibilitop100list[82].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[82].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">19</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[81].spotBilibiliUrl)">{{ bilibilitop100list[81].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[81].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">20</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[80].spotBilibiliUrl)">{{ bilibilitop100list[80].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[80].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">21</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[79].spotBilibiliUrl)">{{ bilibilitop100list[79].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[79].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">22</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[78].spotBilibiliUrl)">{{ bilibilitop100list[78].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[78].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">23</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[77].spotBilibiliUrl)">{{ bilibilitop100list[77].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[77].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">24</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[76].spotBilibiliUrl)">{{ bilibilitop100list[76].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[76].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">25</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[75].spotBilibiliUrl)">{{ bilibilitop100list[75].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[75].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">26</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[74].spotBilibiliUrl)">{{ bilibilitop100list[74].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[74].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">27</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[73].spotBilibiliUrl)">{{ bilibilitop100list[73].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[73].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">28</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[72].spotBilibiliUrl)">{{ bilibilitop100list[72].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[72].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">29</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[71].spotBilibiliUrl)">{{ bilibilitop100list[71].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[71].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">30</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[70].spotBilibiliUrl)">{{ bilibilitop100list[70].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[70].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">31</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[69].spotBilibiliUrl)">{{ bilibilitop100list[69].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[69].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">32</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[68].spotBilibiliUrl)">{{ bilibilitop100list[68].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[68].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">33</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[67].spotBilibiliUrl)">{{ bilibilitop100list[67].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[67].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">34</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[66].spotBilibiliUrl)">{{ bilibilitop100list[66].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[66].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">35</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[65].spotBilibiliUrl)">{{ bilibilitop100list[65].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[65].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">36</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[64].spotBilibiliUrl)">{{ bilibilitop100list[64].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[64].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">37</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[63].spotBilibiliUrl)">{{ bilibilitop100list[63].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[63].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">38</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[62].spotBilibiliUrl)">{{ bilibilitop100list[62].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[62].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">39</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[61].spotBilibiliUrl)">{{ bilibilitop100list[61].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[61].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">40</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[60].spotBilibiliUrl)">{{ bilibilitop100list[60].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[60].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">41</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[59].spotBilibiliUrl)">{{ bilibilitop100list[59].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[59].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">42</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[58].spotBilibiliUrl)">{{ bilibilitop100list[58].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[58].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">43</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[57].spotBilibiliUrl)">{{ bilibilitop100list[57].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[57].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">44</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[56].spotBilibiliUrl)">{{ bilibilitop100list[56].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[56].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">45</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[55].spotBilibiliUrl)">{{ bilibilitop100list[55].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[55].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">46</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[54].spotBilibiliUrl)">{{ bilibilitop100list[54].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[54].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">47</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[53].spotBilibiliUrl)">{{ bilibilitop100list[53].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[53].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">48</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[52].spotBilibiliUrl)">{{ bilibilitop100list[52].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[52].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">49</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[51].spotBilibiliUrl)">{{ bilibilitop100list[51].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[51].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">50</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[50].spotBilibiliUrl)">{{ bilibilitop100list[50].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[50].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">51</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[49].spotBilibiliUrl)">{{ bilibilitop100list[49].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[49].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">52</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[48].spotBilibiliUrl)">{{ bilibilitop100list[48].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[48].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">53</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[47].spotBilibiliUrl)">{{ bilibilitop100list[47].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[47].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">54</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[46].spotBilibiliUrl)">{{ bilibilitop100list[46].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[46].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">55</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[45].spotBilibiliUrl)">{{ bilibilitop100list[45].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[45].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">56</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[44].spotBilibiliUrl)">{{ bilibilitop100list[44].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[44].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">57</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[43].spotBilibiliUrl)">{{ bilibilitop100list[43].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[43].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">58</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[42].spotBilibiliUrl)">{{ bilibilitop100list[42].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[42].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">59</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[41].spotBilibiliUrl)">{{ bilibilitop100list[41].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[41].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">60</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[40].spotBilibiliUrl)">{{ bilibilitop100list[40].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[40].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">61</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[39].spotBilibiliUrl)">{{ bilibilitop100list[39].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[39].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">62</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[38].spotBilibiliUrl)">{{ bilibilitop100list[38].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[38].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">63</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[37].spotBilibiliUrl)">{{ bilibilitop100list[37].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[37].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">64</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[36].spotBilibiliUrl)">{{ bilibilitop100list[36].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[36].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">65</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[35].spotBilibiliUrl)">{{ bilibilitop100list[35].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[35].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">66</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[34].spotBilibiliUrl)">{{ bilibilitop100list[34].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[34].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">67</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[33].spotBilibiliUrl)">{{ bilibilitop100list[33].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[33].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">68</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[32].spotBilibiliUrl)">{{ bilibilitop100list[32].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[32].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">69</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[31].spotBilibiliUrl)">{{ bilibilitop100list[31].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[31].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">70</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[30].spotBilibiliUrl)">{{ bilibilitop100list[30].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[30].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">71</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[29].spotBilibiliUrl)">{{ bilibilitop100list[29].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[29].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">72</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[28].spotBilibiliUrl)">{{ bilibilitop100list[28].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[28].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">73</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[27].spotBilibiliUrl)">{{ bilibilitop100list[27].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[27].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">74</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[26].spotBilibiliUrl)">{{ bilibilitop100list[26].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[26].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">75</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[25].spotBilibiliUrl)">{{ bilibilitop100list[25].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[25].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">76</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[24].spotBilibiliUrl)">{{ bilibilitop100list[24].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[24].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">77</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[23].spotBilibiliUrl)">{{ bilibilitop100list[23].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[23].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">78</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[22].spotBilibiliUrl)">{{ bilibilitop100list[22].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[22].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">79</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[21].spotBilibiliUrl)">{{ bilibilitop100list[21].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[21].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">80</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[20].spotBilibiliUrl)">{{ bilibilitop100list[20].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[20].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">81</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[19].spotBilibiliUrl)">{{ bilibilitop100list[19].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[19].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">82</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[18].spotBilibiliUrl)">{{ bilibilitop100list[18].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[18].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">83</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[17].spotBilibiliUrl)">{{ bilibilitop100list[17].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[17].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">84</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[16].spotBilibiliUrl)">{{ bilibilitop100list[16].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[16].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">85</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[15].spotBilibiliUrl)">{{ bilibilitop100list[15].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[15].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">86</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[14].spotBilibiliUrl)">{{ bilibilitop100list[14].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[14].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">87</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[13].spotBilibiliUrl)">{{ bilibilitop100list[13].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[13].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">88</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[12].spotBilibiliUrl)">{{ bilibilitop100list[12].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[12].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">89</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[11].spotBilibiliUrl)">{{ bilibilitop100list[11].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[11].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">90</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[10].spotBilibiliUrl)">{{ bilibilitop100list[10].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[10].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">91</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[9].spotBilibiliUrl)">{{ bilibilitop100list[9].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[9].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">92</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[8].spotBilibiliUrl)">{{ bilibilitop100list[8].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[8].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">93</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[7].spotBilibiliUrl)">{{ bilibilitop100list[7].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[7].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">94</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[6].spotBilibiliUrl)">{{ bilibilitop100list[6].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[6].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">95</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[5].spotBilibiliUrl)">{{ bilibilitop100list[5].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[5].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">96</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[4].spotBilibiliUrl)">{{ bilibilitop100list[4].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[4].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">97</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[3].spotBilibiliUrl)">{{ bilibilitop100list[3].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[3].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">98</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[2].spotBilibiliUrl)">{{ bilibilitop100list[2].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[2].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">99</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[1].spotBilibiliUrl)">{{ bilibilitop100list[1].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[1].spotBilibiliZhishu }}</span>
      </div>
      <div class="clyh">
        <span class="clorder">100</span>
        <span class="cltile" @click="this.jumpPage(bilibilitop100list[0].spotBilibiliUrl)">{{ bilibilitop100list[0].spotBilibiliTitle }}</span>
        <span class="clheat">{{ bilibilitop100list[0].spotBilibiliZhishu }}</span>
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
      bilibilitop100list: [ {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
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
      axios.get("http://spot:8089/spot/bilibili/list").then(({ data }) => {
        for (let i = 0; i < 100; i++) {
          this.bilibilitop100list[i] = data.bilibili[i];
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
