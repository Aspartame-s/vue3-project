<template>
  <div class="dropdown" ref="dropdownRef">
    <a
      class="btn btn-outline-light my-2 dropdown-toggle"
      @click.prevent="toggleChange"
    >
      {{ title }}
    </a>
    <ul class="dropdown-menu" :style="{ display: 'block' }" v-if="isOpen">
      <slot></slot>
    </ul>
  </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted, onUnmounted, ref } from "vue";
export default defineComponent({
  name: "",
  components: {},
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup() {
    const isOpen = ref(false);
    const dropdownRef = ref<null | HTMLElement>(null);
    const toggleChange = () => {
      isOpen.value = !isOpen.value;
      console.log(123)
    };
    const handler = (e: MouseEvent) => {
      if (dropdownRef.value) {
        if (!dropdownRef.value.contains(e.target as HTMLElement) && isOpen) {
          isOpen.value = false;
        }
      }

      
    };
    onMounted(() => {
      document.addEventListener("click", handler);
    });
    onUnmounted(() => {
      document.removeEventListener("click", handler);
    });
    return {
      isOpen,
      toggleChange,
      dropdownRef,
    };
  },
});
</script>
<style scoped>
</style>