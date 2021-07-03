<template>
  <div>
    <div>帐号：<input type="text" v-model="user.username" /></div>
    <div>密码：<input type="text" v-model="user.password" /></div>
    <div><button @click="login">登录</button></div>
  </div>
</template>

<script>
import { login } from "../api/login";
import { setToken } from "../utils/cookie";
export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    login() {
      login(this.user).then((res) => {
        if (res.data.success) {
          setToken(res.data.token);
          this.$router.push("/");
        }
      });
    },
  },
};
</script>   

<style lang="">
</style>