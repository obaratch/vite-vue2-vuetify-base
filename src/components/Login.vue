<template>
  <div class="app-main login">
    <h1>Login</h1>
    <div class="form">
      <v-btn @click="login">ログイン</v-btn>
    </div>
  </div>
</template>

<script>
import { Global } from "../Stores";

export default {
  mounted() {
    console.log("Login.mounted");
  },
  methods: {
    login() {
      console.log("login btn");
      const user = { name: "hoge" };
      Global.update({ user });
      const { $router } = this;
      const { redirectPath } = $router.history.current.query;
      $router.push({
        path: redirectPath === undefined ? "/" : redirectPath,
      });
    },
  },
};
</script>
