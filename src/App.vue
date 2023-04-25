<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
  <div class="mb-3">
    <nav-bar :user="user"></nav-bar>
  </div>
  <router-view></router-view>
</template>

<script lang="ts">
//1.创建createpost 页面 
//2.改造validateinput 支持textarea
// 3.通过store的mutation提交创建post


import { computed, defineComponent } from "vue";
import NavBar, { UserProps } from "./components/NavBar.vue";
import { useStore } from "vuex";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./store";
// const user: UserProps = {
//   isLogin: true,
//   name: "鸡汤",
// };

export default defineComponent({
  name: "App",
  components: {
    NavBar,
  },
  setup() {
    const user = computed(() => store.state.user)
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
