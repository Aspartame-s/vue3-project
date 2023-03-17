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
    <div class="col-4 my-2" v-for="item in list" :key="item.id">
      <div class="card " style="width: 18rem">
        <div class="card-body">
          <img :src="item.avatar" class="card-img-top" alt="..." />
          <h5 class="card-title">{{ item.title }}</h5>
          <p class="card-text">
            {{ item.desc }}
          </p>
          <a href="#" class="btn btn-primary">进入专栏</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType } from "vue";
export interface ColumnProps {
  id: number;
  title: string;
  avatar: string;
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
  },
});
</script>
<style scoped>
</style>