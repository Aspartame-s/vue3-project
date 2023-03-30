<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  <div class="mb-3">
    <nav-bar :user="user"></nav-bar>
    <cloumn-list :list="list"></cloumn-list>
  </div>
  <form>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        v-model="emailRef.val"
        @blur="validateEmail"
      />
      <div class="form-text" v-if="emailRef.error">{{ emailRef.message }}</div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" />
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import CloumnList, { ColumnProps } from "./components/ColumnList.vue";
import NavBar, { UserProps } from "./components/NavBar.vue";
import "bootstrap/dist/css/bootstrap.min.css";
const user: UserProps = {
  isLogin: true,
  name: "鸡汤",
};
const list: ColumnProps[] = [
  {
    id: 1,
    title: "标题1",
    avatar: require("./assets/logo.png"),
    desc: "描述1",
  },
  {
    id: 2,
    title: "标题2",
    // avatar: require('./assets/logo.png'),
    desc: "描述2",
  },
  {
    id: 3,
    title: "标题3",
    avatar: require("./assets/logo.png"),
    desc: "描述3",
  },
  {
    id: 4,
    title: "标题4",
    avatar: require("./assets/logo.png"),
    desc: "描述4",
  },
  {
    id: 5,
    title: "标题5",
    avatar: require("./assets/logo.png"),
    desc: "描述5",
  },
];
interface emailProp {
  val: string;
  error: boolean;
  message: string;
}
export default defineComponent({
  name: "App",
  components: {
    CloumnList,
    NavBar,
  },
  setup() {
    const emailRef:emailProp = reactive({
      val: '',
      error: false,
      message: ''
    })
    const emailReg = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/
    const validateEmail = () => {
      if(emailRef.val.trim() === '') {
        emailRef.error = true
        emailRef.message = 'email不能为空'
      }else if(!emailReg.test(emailRef.val)) {
        emailRef.error = true
        emailRef.message = '请输入正确的email格式'
      }
    }
    return {
      list: list,
      user,
      emailRef,
      validateEmail
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
  /* margin-top: 60px; */
}
</style>
