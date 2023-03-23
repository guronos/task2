<template>
  <div class="input-group mb-3">
    <input
      type="text"
      class="form-control"
      v-model="comment"
      placeholder="Комментарий к проекту"
    />
    <span class="input-group-text" id="basic-addon2"
      ><b-icon
        icon="cursor"
        class="icon-comment-block icon-comment"
        @click="commentPost"
      ></b-icon
    ></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comment: "",
    };
  },
  methods: {
    commentPost() {
      console.log(`Комментарий ${this.comment} не отправлен`);
    },
  },
};
</script>

<style scoped>
.icon-comment {
  width: 12px;
}
</style>
