<!--  -->
<template>
  <!-- <div class="row">
    <div v-for="item in list" :key="item.id" class="col-4">
      <img :src="item.avatar" />
      <h5>{{ item.title }}</h5>
      <p>{{ item.desc }}</p>
      <a href="#">进入专栏</a>
    </div>
  </div> -->
  <div class="row">
    <div class="col-3 my-4" v-for="item in columnList" :key="item.id">
      <div class="card h-100 ">
        <div class="card-body">
          <img :src="item.avatar" class="rounded-circle border border-light w-25 my-3" alt="..." />
          <h5 class="card-title">{{ item.title }}</h5>
          <p class="card-text text-left">
            {{ item.desc }}
          </p>
          <a href="#" class="btn btn-outline-primary">进入专栏</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent, PropType } from "vue";
export interface ColumnProps {
  id: number;
  title: string;
  avatar?: string;
  desc: string;
}
export default defineComponent({
  name: "CloumnList",
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      // list 是一个数组 是一个ColumnProps类型的数组
      //如果要直接用类型断言 Array as ColumnProps[] 会报错
      //这里需要引入 PropType
      //PropType 接受一个泛型
      required: true,
    },
  },
  setup(props) {
    // props.list[0].
    const columnList = computed(() => {
      return props.list.map(column => {
        if(!column.avatar) {
          column.avatar = require('@/assets/yiquan.jpg')
        }
        return column
      })
    })
    return {
      columnList
    }
  },
});
</script>
<style scoped>
</style>