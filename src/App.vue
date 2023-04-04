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
     <validate-input :rules="emailRules" :placeholder="'你好'" v-model="emailVal"></validate-input>
    </div>
    {{ emailVal }}
    <!-- 问题：发现 只能写成 :modalValue="emailVal" @update:modalValue="$event => emailVal = $event"
    原因: modalValue 名字写错了 v-model 的语法糖  是在自定义组件上的v-model相当于传递了modelValue prop并接收抛出的update:modelValue事件
    而我写成了 modalValue 相当于自己新建的名称
    不过vue3 可以新增多个 v-model 可以自己起名， 所以不用 v-model 语法糖时也不会出错 保证名字统一即可 不过写法还是要自己绑定属性和接收事件 -->
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
import { defineComponent, reactive, ref } from "vue";
import CloumnList, { ColumnProps } from "./components/ColumnList.vue";
import ValidateInput, {RulesProp} from "./components/ValidateInput.vue"
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
    ValidateInput
  },
  setup() {
    let emailVal = ref('')
    // const updateValue = (e: string) => {
    //   console.log(e)
    //   emailVal.value = e
    // }
    const emailRules: RulesProp = [
      {
        type: 'required',
        message: '邮箱不能为空'
      },
      {
        type: 'email',
        message: '请输入正确的邮箱格式'
      }
    ] 
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
      validateEmail,
      emailRules,
      emailVal,
      // updateValue
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
