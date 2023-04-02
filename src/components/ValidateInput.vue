<template>
  <div>
    <input
      type="email"
      class="form-control"
      :class="{'is-invalid': inputRef.error}"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      v-model="inputRef.val"
      @blur="validateInput"
    />
    <span v-if="inputRef.error" class="invalid-feedback">{{ inputRef.message }}</span>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType, reactive } from "vue";
export interface RuleProp {
  type: "required" | "email";
  message: string;
}
export type RulesProp = RuleProp[];
export default defineComponent({
  name: "",
  props: {
    rules: Array as PropType<RuleProp[]>,
  },
  setup(props) {
    const inputRef = reactive({
      val: "",
      message: "",
      error: false,
    });
    const emailReg =
      /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/;
    const validateInput = () => {
        const allPassed = props.rules?.every((item) => {
            inputRef.message = item.message
          let passed = true;
          switch (item.type) {
            case "required":
              passed = inputRef.val.trim() !== "";
              break;
            case "email":
              passed = emailReg.test(inputRef.val);
              break;
          }
          return passed
        });
        inputRef.error = !allPassed
    };
    return {
      inputRef,
      validateInput
    };
  },
});
</script>
<style scoped>
</style>