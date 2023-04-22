<template>
  <div>
    <validate-form @form-submit="onFormSubmit">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <validate-input
          :rules="emailRules"
          :placeholder="'你好'"
          v-model="emailVal"
          ref="inputRef"
        ></validate-input>
      </div>
      {{ emailVal }}
      <!-- 问题：发现 只能写成 :modalValue="emailVal" @update:modalValue="$event => emailVal = $event"
    原因: modalValue 名字写错了 v-model 的语法糖  是在自定义组件上的v-model相当于传递了modelValue prop并接收抛出的update:modelValue事件
    而我写成了 modalValue 相当于自己新建的名称
    不过vue3 可以新增多个 v-model 可以自己起名， 所以不用 v-model 语法糖时也不会出错 保证名字统一即可 不过写法还是要自己绑定属性和接收事件 -->
      <!-- <div class="mb-3">
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
    </div> -->
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <!-- <validate-input type="password"  class="form-control" id="exampleInputPassword1" /> -->
        <validate-input
          :rules="passwordRules"
          v-model="passwordValue"
        ></validate-input>
      </div>
      <template #submit>
        <button type="submit" class="btn btn-warning">提交</button>
      </template>
      <!-- <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div> -->
      <!-- <button type="submit" class="btn btn-primary">Submit</button> -->
    </validate-form>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from "vue";
import ValidateInput, { RulesProp } from "../components/ValidateInput.vue";
import ValidateForm from "../components/ValidateForm.vue";
import "bootstrap/dist/css/bootstrap.min.css";
// interface emailProp {
//   val: string;
//   error: boolean;
//   message: string;
// }
export default defineComponent({
  name: "",
  components: {
    ValidateInput,
    ValidateForm,
  },
  setup() {
    const inputRef = ref<any>();

    let emailVal = ref("");
    let passwordValue = ref("");
    const onFormSubmit = (result: boolean) => {
      console.log(result);
      // if (!result) {
      //   emailVal.value = '';
      //   passwordValue.value = '';
      // }

      // console.log('inputRef', inputRef.value.validateInput())
    };
    // const updateValue = (e: string) => {
    //   console.log(e)
    //   emailVal.value = e
    // }
    const emailRules: RulesProp = [
      {
        type: "required",
        message: "邮箱不能为空",
      },
      {
        type: "email",
        message: "请输入正确的邮箱格式",
      },
    ];
    const passwordRules: RulesProp = [
      {
        type: "required",
        message: "密码不能为空",
      },
    ];

    // const emailRef:emailProp = reactive({
    //   val: '',
    //   error: false,
    //   message: ''
    // })
    // const emailReg = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/
    // const validateEmail = () => {
    //   if(emailRef.val.trim() === '') {
    //     emailRef.error = true
    //     emailRef.message = 'email不能为空'
    //   }else if(!emailReg.test(emailRef.val)) {
    //     emailRef.error = true
    //     emailRef.message = '请输入正确的email格式'
    //   }
    // }
    return {
      emailRules,
      emailVal,
      passwordValue,
      passwordRules,
      onFormSubmit,
      inputRef,
      // emailRef,
      // validateEmail,
      // updateValue
    };
  },
});
</script>
<style scoped>
</style>