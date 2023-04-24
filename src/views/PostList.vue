<template>
  <div class="post-list">
    <article v-for="post in list" :key="post.id" class="card mb-3">
        <div class="card-body">
          <h5 class="card-title">{{post.title}}</h5>
          <img :src="post.image" alt="">
          <p class="card-text">
           {{ post.content }}
          </p>
          <span>{{ post.createAt }}</span>
        </div>
    </article>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType } from "vue";
import { PostProps } from "@/data/testData";
export default defineComponent({
  name: "",
  props: {
    list: {
        required: true,
        type: Array as PropType<PostProps[]>
    }
  }
});
</script>
<style scoped>
</style>