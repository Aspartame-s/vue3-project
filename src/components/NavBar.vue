<template>
  <nav class="navbar navnar-dark bg-primary justify-content-between mb-4 px-4" data-bs-theme="dark">
    <a class="navbar-brand" href="#">鸡汤专栏</a>
    <ul class="list-inline mb-0" v-if="!user.isLogin">
      <li class="list-inline-item">
        <a class="btn btn-outline-light my-2" href="#">登录</a>
      </li>
      <li class="list-inline-item">
        <a class="btn btn-outline-light my-2">注册</a>
      </li>
    </ul>
    <ul class="list-inline mb-0" v-else>
      <li class="list-inline-item">
        <!-- <a class="btn btn-outline-light my-2">你好{{ user.name }}</a> -->
        <dropdown :title="`你好 ${user.name}`">
          <dropdowm-item>
            <a href="#" class="dropdown-item">新建文章</a>
          </dropdowm-item>
          <dropdowm-item disabled>
            <a href="#" class="dropdown-item">编辑资料</a>
          </dropdowm-item>
          <dropdowm-item>
            <a href="#" class="dropdown-item">退出登录</a>
          </dropdowm-item></dropdown>
      </li>
    </ul>
  </nav>
</template>

<script lang='ts'>
import { defineComponent, PropType } from "vue";
import Dropdown from './Dropdown.vue'
import DropdowmItem from "./DropdowmItem.vue";
export interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
}
export default defineComponent({
  name: "NavBar",
  components: {
    Dropdown,
    DropdowmItem
  },
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