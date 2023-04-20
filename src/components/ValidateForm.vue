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
import mitt, { Handler } from "mitt";
export const mitter = mitt();
import { defineComponent, onUnmounted } from "vue";
export default defineComponent({
  name: "",
  setup(props, context) {
    const formSubmit = () => {
      context.emit("form-submit", true);
    };
    const callback = (test: any) => {
      // return result
      console.log(test);
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