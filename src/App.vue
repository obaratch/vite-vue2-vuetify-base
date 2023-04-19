<template>
  <v-app>
    <Header />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import "./styles/index.scss";
import Header from "./components/Header.vue";
export default {
  components: {
    Header,
  },
  mounted() {
    console.log("App.mounted");
  },
};
</script>
