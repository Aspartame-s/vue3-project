<template>
  <a class="btn btn-outline-light my-2 dropdown-toggle" @click="toggleChange">
    {{ title }}
</a>
  <ul class="dropdown-menu" :style="{display: 'block'}" v-if="isOpen">
    <slot></slot>
  </ul>
</template>

<script lang='ts'>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "",
  components: {
  },
  props: {
    title: {
        type: String,
        required: true
    }
  },
  setup() {
    const isOpen = ref(false)
    const toggleChange = () => {
        isOpen.value = !isOpen.value
    }
    return {
        isOpen,
        toggleChange
    }
  }
});
</script>
<style scoped>
</style>