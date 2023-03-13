<!--  -->
<template>
  <div></div>
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
            required: true
        }
    }
    //   setup() {
    //     const arr: Array<>
    //   }
  });
</script>
<style scoped>
</style>