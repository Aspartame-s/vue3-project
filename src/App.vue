<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
  <div class="mb-3">
    <nav-bar :user="user"></nav-bar>
  </div>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar, { UserProps } from "./components/NavBar.vue";
import "bootstrap/dist/css/bootstrap.min.css";
const user: UserProps = {
  isLogin: false,
  name: "鸡汤",
};

export default defineComponent({
  name: "App",
  components: {
    NavBar,
  },
  setup() {
    return {
      user,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
  /* margin-top: 60px; */
}
</style>
