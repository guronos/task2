<template>
  <div>
    <b-container class="search-block">
      <b-form-input
        v-model="text"
        class="input-search"
        placeholder="Начните вводить текст для поиска (не менее трех символов)"
      ></b-form-input>
      <b-button variant="primary" href="#" @click="createSearchText"
        ><b-icon icon="search"></b-icon
      ></b-button>
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  name: "SearchItems",
  data() {
    return {
      text: "",
    };
  },
  mounted() {
    this.text = localStorage.getItem("searchText");
  },
  methods: {
    ...mapActions(["getRepOnGIT"]),
    ...mapMutations(["saveSearchText"]),
    createSearchText() {
      if (this.text.length >= 3) {
        this.saveSearchText(this.text);
        this.currentPage = 1
        this.getRepOnGIT();
      }
    },
  },
};
</script>

<style scoped>
.search-block {
  display: flex;
  justify-content: center;
}
.input-search {
  border-radius: 0px;
  max-width: 1700px;
}
</style>
