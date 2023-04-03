<template>
  <div>
    <input
      type="email"
      class="form-control"
      :class="{ 'is-invalid': inputRef.error }"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      :value="inputRef.val"
      @blur="validateInput"
      @input="updateValue"
    />
    <span v-if="inputRef.error" class="invalid-feedback">{{
      inputRef.message
    }}</span>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType, reactive } from "vue";
export interface RuleProp {
  type: "required" | "email";
  message: string;
}
export type RulesProp = RuleProp[];
const emailReg =
  /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/;
export default defineComponent({
  name: "",
  props: {
    rules: Array as PropType<RuleProp[]>,
    modelValue: String,
  },
  setup(props, context) {
    const inputRef = reactive({
      val: props.modelValue || '',
      message: "",
      error: false,
    });

    // vue3 实现双向绑定 v-model
    const updateValue = (e: Event) => {
      const targetValue = (e.target as HTMLInputElement).value;
      inputRef.val = targetValue
      context.emit('update:modelValue', targetValue)
    };

    const validateInput = () => {
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
    };
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