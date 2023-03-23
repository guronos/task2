<template>
  <b-container>
    <div class="pagination-block">
      <b-form-select
        v-model="selected"
        :options="options"
        @change="getMorePage(selected)"
      ></b-form-select>

      <div class="mt-3">
        <b-pagination-nav
          v-model="value"
          :number-of-pages="showQuantityPage"
          base-url="#"
          align="center"
          @input="getNewPage(value)"
        ></b-pagination-nav>
      </div>
    </div>
  </b-container>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from "vuex";
export default {
  name: "PaginationPage",
  data() {
    return {
      selected: null,
      value: 1,
      options: [
        { value: null, text: "Количество записей" },
        { value: 10, text: "10" },
        { value: 20, text: "20" },
        { value: 25, text: "25" },
        { value: 30, text: "30" },
      ],
    };
  },
  created() {
    this.value = localStorage.getItem("numerCurrentPage");
    this.selected = localStorage.getItem("displayedQuantityPages");
  },
  computed: {
    ...mapGetters(["showQuantityPage", "currentPage"]),
  },
  methods: {
    ...mapMutations(["saveNumerCurrentPage", "saveDisplayedQuantityPages"]),
    ...mapActions(["getRepOnGIT"]),
    getNewPage(pageNum) {
      this.saveNumerCurrentPage(pageNum);
      this.getRepOnGIT();
    },
    getMorePage(per_page) {
      this.saveDisplayedQuantityPages(per_page);
      this.getRepOnGIT();
    },
  },
};
</script>

<style scoped>
.pagination-block {
  display: flex;
  align-items: baseline;
  justify-content: space-evenly;
}
</style>
