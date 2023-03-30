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
import { defineComponent, watch, ref, Ref } from "vue";
import useClickOutside from "../hooks/useClickOutside";
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
      console.log(123);
    };
    const isClickOutside: Ref<boolean> = useClickOutside(dropdownRef);
    watch(isClickOutside, () => {
      if (isClickOutside.value) {
        if (isClickOutside.value && isOpen) {
          isOpen.value = false;
        }
      }
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