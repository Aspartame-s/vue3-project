<template>
  <form class="validate-form-container">
    <slot></slot>
    <div class="submit-area" @click.prevent="formSubmit">
      <slot name="submit">
        <button type="submit" class="btn btn-primary">提交</button>
      </slot>
    </div>
  </form>
</template>

<script lang='ts'>
import mitt from "mitt";
export const mitter = mitt();
type validateFunc = () => boolean
import { defineComponent, onUnmounted } from "vue";
export default defineComponent({
  name: "",
  setup(props, context) {
    const funcArr: validateFunc[] = []
    const formSubmit = () => {
      const result = funcArr.map(func => func()).every(result => result)
      context.emit("form-submit", result);
    };
    const callback = (func: any) => {
      funcArr.push(func)
      console.log(funcArr)
      // return result
      // console.log(test);

    };
    mitter.on("form-item-created", callback);
    onUnmounted(() => {
      mitter.off("form-item-created", callback)
    })
    return {
      formSubmit,
    };
  },
});
</script>
<style scoped>
</style>