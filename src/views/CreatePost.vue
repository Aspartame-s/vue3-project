<template>
  <div>
    <validate-form @form-submit="onFormSubmit">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">文章标题</label>
        <validate-input
          :rules="titleRules"
          :placeholder="'请填写文章标题'"
          v-model="titleVal"
          ref="inputRef"
        ></validate-input>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">文章内容</label>
        <!-- <validate-input type="password"  class="form-control" id="exampleInputPassword1" /> -->
        <validate-input
          :tag="tag"
          :rules="contentRules"
          v-model="contentVal"
        ></validate-input>
      </div>
      <template #submit>
        <button type="submit" class="btn btn-warning">提交</button>
      </template>
    </validate-form>
  </div>
</template>

<script lang='ts'>
import ValidateInput, { RulesProp } from "../components/ValidateInput.vue";
import ValidateForm from "../components/ValidateForm.vue";
import { computed, defineComponent, ref } from "vue";
import {PostProps} from '@/data/testData'
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default defineComponent({
  components: { ValidateInput, ValidateForm },

  setup() {
    const tag = ref("textarea");
    const titleVal = ref("");
    const contentVal = ref("");
    const store = useStore();
    const router = useRouter();
    const titleRules: RulesProp = [
      {
        type: "required",
        message: "请填写文章标题",
      },
    ];
    const contentRules: RulesProp = [
      {
        type: "required",
        message: "请填写文章内容",
      },
    ];
    const onFormSubmit = (result: boolean) => {
      if (result) {
        const { id } = store.state.user;
        console.log(id)
        const post: PostProps = {
          id: new Date().getTime(),
          title: titleVal.value,
          content: contentVal.value,
          columnId: id,
          createAt: new Date().toLocaleString(),
        };
        store.commit("create", post);
        router.push({ name: "column", params: { id: id } });
      }
    };
    return {
      titleVal,
      contentVal,
      titleRules,
      contentRules,
      tag,
      onFormSubmit,
    };
  },
});
</script>

<style scoped>
</style>