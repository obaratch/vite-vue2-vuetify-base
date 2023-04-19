<template>
  <header class="app-header">
    <nav>
      <ul>
        <router-link to="/"><li>Home</li></router-link>
      </ul>
    </nav>
    <div class="controls">
      <v-btn @click="logout">logout</v-btn>
    </div>
  </header>
</template>

<script>
import { Global } from "../Stores";

export default {
  data: () => ({ msg: "hello" }),
  mounted() {
    console.log("Header.mounted");
  },
  methods: {
    logout() {
      Global.update({ user: undefined });
      const { $router } = this;
      $router.push({ path: "/" });
      location.reload();
    },
  },
};
</script>

<style lang="scss" scoped>
.app-header {
  background-color: #333;
  color: #fff;
  padding: 10px;
  nav {
    display: flex;
    justify-content: space-between;
    margin: 0;
    a {
      text-decoration: none;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}
</style>
