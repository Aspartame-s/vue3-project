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
import 'bootstrap/dist/css/bootstrap.min.css'
const list: ColumnProps[] = [
  {
    id: 1,
    title: '标题1',
    avatar: require('./assets/logo.png'),
    desc: '描述1'
  },
  {
    id: 2,
    title: '标题2',
    avatar: require('./assets/logo.png'),
    desc: '描述2'
  },
  {
    id: 3,
    title: '标题3',
    avatar: require('./assets/logo.png'),
    desc: '描述3'
  },
  {
    id: 4,
    title: '标题4',
    avatar: require('./assets/logo.png'),
    desc: '描述4'
  },
  {
    id: 5,
    title: '标题5',
    avatar: require('./assets/logo.png'),
    desc: '描述5'
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
  /* margin-top: 60px; */
}
</style>
