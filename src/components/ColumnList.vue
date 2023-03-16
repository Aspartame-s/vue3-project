<!--  -->
<template>
  <div>
    <ul>
      <li></li>
    </ul>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType } from 'vue'
export interface ColumnProps {
    id: number;
    title: string;
    avatar: string;
    desc: string;
}
export default defineComponent({
    name: 'CloumnList',
    props: {
        list: {
            type: Array as PropType<ColumnProps[]>,
            // list 是一个数组 是一个ColumnProps类型的数组
            //如果要直接用类型断言 Array as ColumnProps[] 会报错
            //这里需要引入 PropType
            //PropType 接受一个泛型
            required: true
        }
    },
      setup(props) {
        // props.list[0].
      }
  });
</script>
<style scoped>
</style>