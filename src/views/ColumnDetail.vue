<template>
  <div class="column-detail-page w-75 mx-auto">
    <div class="column-info row mb-4 border-bottom pb-4 align-center" v-if="column">
      <div class="col-3 text-center">
        <img :src="column.avatar" :alt="column.title" class="rounded-circle">
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
import { defineComponent, computed } from 'vue'
import {useRoute} from 'vue-router'
import { useStore } from 'vuex';
import { storeProp } from '@/store';
// import { columnData, postsData } from '@/data/testData';
import PostList from './PostList.vue';
export default defineComponent({
  components: {
    PostList
  },
    name: '',
      setup() {
        const route = useRoute()
        const store = useStore<storeProp>()
        // const columnData = computed(() => store.state.column)
        const postsData = computed(() => store.state.posts)
        const currentId = +route.params.id
        // const column = columnData.value.find(c => c.id == currentId)
        const column = computed(() => store.state.column.find(c => c.id == currentId))
        const list = postsData.value.filter(p => p.columnId == currentId)
        return {
          column,
          list
        }
      }
  });
</script>
<style scoped>
</style>