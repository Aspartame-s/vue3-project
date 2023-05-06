<template>
  <div>
    <cloumn-list :list="list"></cloumn-list>
  </div>
</template>

<script lang='ts'>
import CloumnList, { ColumnProps } from "../components/ColumnList.vue";
import { defineComponent, computed, onMounted } from "vue";
import { storeProp } from "@/store";
import { useStore } from "vuex";

export default defineComponent({
  name: "home",
  components: {
    CloumnList,
  },
  setup() {
    const store = useStore<storeProp>();
    onMounted(() => {
      store.dispatch('fetchColumn')
    })
    const list = computed(() => store.state.column);
    return {
      list: list,
    };
  },
});
</script>
<style scoped>
</style>