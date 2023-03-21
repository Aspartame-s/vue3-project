<template>
  <nav class="navbar bg-primary" data-bs-theme="dark">
    <a class="navbar-brand" href="#">鸡汤专栏</a>
    <ul class="navbar-nav me-auto mb-2 mb-lg-0" v-if="!user.isLogin">
      <li class="nav-item">
        <a class="nav-link" href="#">登录</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled">注册</a>
      </li>
    </ul>
    <ul class="navbar-nav me-auto mb-2 mb-lg-0" v-else>
      <li class="nav-item">
        <a class="nav-link disabled">你好{{ user.name }}</a>
      </li>
    </ul>
  </nav>
</template>

<script lang='ts'>
import { defineComponent, PropType } from "vue";
export interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
}
export default defineComponent({
  name: "NavBar",
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true,
    },
  },
  
});
</script>
<style scoped>
</style>