<template>
  <div class="spotlogin">
    <div class="spotloginnamepassword">
      <el-input placeholder="请输入账户名" v-model="username">
        <template v-slot:prepend>账号：</template>
      </el-input>
      <el-input placeholder="请输入密码" v-model="password">
        <template v-slot:prepend>密码：</template>
      </el-input>
      <el-button type="primary" @click="toHome">登录</el-button>
    </div>
  </div>
</template>
<style scoped>
.spotlogin{
  width: 100vw;
  height: 100vh;
  position: center;
}
.spotloginnamepassword{
  width: 30vw;
  height: 30vh;
  margin-left: 35vw;
  margin-top: 35vh;
}
</style>
<script lang="ts">
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    //点击登录按钮执行访问请求并判断是否登陆
    toHome() {
      this.axios
        .post("http://spot:8089/spot/user/login2", {
          username: this.username,
          password: this.password
        })
        .then(({ data }) => {
          if (data.code === 1) {
            // console.log("密码正确");
            // console.log(data);
            // this.$notify({
            //   title: "提示",
            //   message: "用户登录成功",
            //   duration: 3000,
            // });
            this.$router.push({ path: "/home/zongbang" });
          } else if (data.code === 2) {
            // console.log("密码错误");
            // console.log(data);
            // this.$notify({
            //   title: "提示",
            //   message: "用户登录失败",
            //   duration: 3000,
            // });
          }
        });
    },
  },
};
</script>

