<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  <div>
    <cloumn-list :list="list"></cloumn-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CloumnList, {ColumnProps} from './components/ColumnList.vue'
const list: ColumnProps[] = [
  {
    id: 1,
    title: '标题1',
    avatar: '',
    desc: '描述1'
  },
  {
    id: 2,
    title: '标题2',
    avatar: '',
    desc: '描述2'
  }
]
export default defineComponent({
  name: 'App',
  components: {
    CloumnList
  },
  setup() {
    return {
      list: list
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
