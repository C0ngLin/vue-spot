<script lang="ts">

</script>

<template>
  <div class="clall">
    <div class="clheader">header</div>
    <div class="clmain">
      <div class="clblockbaidu">
        <spot-baidu />
      </div>
    </div>
    <div class="clfoot">foot</div>
  </div>
</template>

<style scoped>
.cltile {
  width: 70%;
  margin: 20px;
}
.clblock {
  width: 20%;
  float: left;
  margin: 10px;
}

.clall {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
}

.clheader {
  text-align: center;
  padding: 20px;
  margin: 10px;
}

.clmain {
  text-align: center;
}

.clfoot {
  position: absolute;
  bottom: 3%;
  left: 50%;

}
</style>
