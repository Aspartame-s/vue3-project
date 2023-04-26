<template>
  <div>
    <input
      v-if="tag == 'text'"
      type="email"
      class="form-control"
      :class="{ 'is-invalid': inputRef.error }"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      :value="inputRef.val"
      @blur="validateInput"
      @input="updateValue"
      v-bind="$attrs"
    />
    <textarea
      v-else
      rows="10"
      type="input"
      class="form-control"
      :class="{ 'is-invalid': inputRef.error }"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      :value="inputRef.val"
      @blur="validateInput"
      @input="updateValue"
      v-bind="$attrs"
    />
    <span v-if="inputRef.error" class="invalid-feedback">{{
      inputRef.message
    }}</span>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType, reactive, onMounted } from "vue";
import { mitter } from "./ValidateForm.vue";
export interface RuleProp {
  type: "required" | "email";
  message: string;
}
interface inputProp {
  val: string;
  message: string;
  error: boolean;
}
export type RulesProp = RuleProp[];
export type inputTag = "text" | "textarea";
const emailReg =
  /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/;
export default defineComponent({
  inheritAttrs: false, //根组件禁止继承attribute
  name: "",
  props: {
    rules: Array as PropType<RuleProp[]>,
    modelValue: String,
    tag: {
      type: String as PropType<inputTag>,
      default: "text",
    },
  },
  setup(props, context) {
    const inputRef: inputProp = reactive({
      val: props.modelValue || "", //将inputRef.val 的初始值赋值成 父组件传递过来的modelValue
      message: "",
      error: false,
    });

    // vue3 实现双向绑定 v-model
    const updateValue = (e: Event) => {
      const targetValue = (e.target as HTMLInputElement).value;
      // console.log(e);
      inputRef.val = targetValue; // 在子组件中是不允许直接修改modelValue的 而且验证格式时也是判断inputRef.val 所以要将输入的值复赋值给inputRef.val
      //并将输入值传出去，在父组件中处理将传出的值赋值给传入的值 实现双向绑定
      context.emit("update:modelValue", targetValue);
    };

    const validateInput = () => {
      console.log("执行了");
      if (props.rules) {
        const allPassed = props.rules?.every((item) => {
          inputRef.message = item.message;
          let passed = true;
          switch (item.type) {
            case "required":
              passed = inputRef.val.trim() !== "";
              break;
            case "email":
              passed = emailReg.test(inputRef.val);
              break;
          }
          return passed;
        });
        inputRef.error = !allPassed;
        return allPassed;
      }
      return true;
    };
    onMounted(() => {
      console.log("mounted");
      // console.log(context.attrs);
      // context.emit
      mitter.emit("form-item-created", validateInput);
    });
    // const updateValue1 = (e: Event) => {
    //   const targetValue = (e.target as HTMLInputElement).value;
    //   inputRef.val = targetValue;
    //   context.emit("update:modelValue", targetValue);
    // };
    return {
      inputRef,
      validateInput,
      updateValue,
    };
  },
});
</script>
<style scoped>
</style>