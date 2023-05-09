<template>
  <div class="column-detail-page w-75 mx-auto">
    <div
      class="column-info row mb-4 border-bottom pb-4 align-center"
      v-if="column"
    >
      <div class="col-3 text-center">
        <img :src="column.avatar" :alt="column.title" class="rounded-circle" />
      </div>
      <div class="col-9">
        <h4>{{ column.title }}</h4>
        <p class="text-muted">{{ column.desc }}</p>
      </div>
    </div>
    <post-list :list="list"></post-list>
  </div>
</template>

<script lang='ts'>
import { defineComponent, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { storeProp } from "@/store";
// import { columnData, postsData } from '@/data/testData';
import PostList from "./PostList.vue";
export default defineComponent({
  components: {
    PostList,
  },
  name: "",
  setup() {
    const route = useRoute();
    const store = useStore<storeProp>();
    const currentId = +route.params.id;
    onMounted(() => {
      store.dispatch("fetchColumnDetail", currentId);
      // console.log(store.state.column);
    });
    const column = computed(() => store.getters.getColumnById(currentId));
    const list = computed(() => store.getters.getPostsByColumnId(currentId));
    console.log(column)
    return {
      column,
      list,
    };
  },
});
</script>
<style scoped>
</style>