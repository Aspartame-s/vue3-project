<template>
  <form class="validate-form-container">
    <slot></slot>
    <div class="submit-area">
        <slot name="submit">
            <button type="submit" class="btn btn-primary">提交</button>
        </slot>
    </div>
  </form>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
    name: '',
    //   setup() {
    //   }
  });
</script>
<style scoped>
</style>