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
import { defineComponent } from 'vue'
import {useRoute} from 'vue-router'
import { columnData, postsData } from '@/data/testData';
import PostList from './PostList.vue';
export default defineComponent({
  components: {
    PostList
  },
    name: '',
      setup() {
        const route = useRoute()
        const currentId = +route.params.id
        const column = columnData.find(c => c.id == currentId)
        const list = postsData.filter(p => p.columnId == currentId)
        return {
          column,
          list
        }
      }
  });
</script>
<style scoped>
</style>