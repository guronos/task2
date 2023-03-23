import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    BASE_URL: "https://api.github.com/search/repositories?q=",
    repositories: "",
    pageNumber: 1,
    perPage: 20,
    searchText: "",
    quantityItems: 0,
  },
  getters: {
    showRepositories(state) {
      return state.repositories;
    },
    showQuantityPage(state) {
      if (!state.quantityItems) {
        return;
      }
      return state.quantityItems / state.perPage;
    },
    currentPage(state) {
      return state.pageNumber;
    },
  },
  mutations: {
    saveRepositories(state, rep) {
      state.repositories = rep;
    },
    saveNumerCurrentPage(state, page) {
      state.pageNumber = page;
    },
    saveSearchText(state, text) {
      state.searchText = text;
    },
    saveDisplayedQuantityPages(state, per_page) {
      state.perPage = per_page;
    },
    saveQuantityItems(state, items) {
      state.quantityItems = items;
    },
    deleteRepos(state, idRep) {
      state.repositories.splice(idRep, 1);
    },
    editRepositories(state, repository) {
      state.repositories[repository.index]["name"] = repository["name"];
      state.repositories[repository.index]["owner.login"] = repository["owner.login"];
      state.repositories[repository.index]["stargazers_count"] = repository["stargazers_count"];
      state.repositories[repository.index]["watchers"] = repository["watchers"];
    },
  },
  actions: {
    async getRepOnGIT({ commit }) {
      const getRepositories = await fetch(
        `${this.state.BASE_URL}${this.state.searchText}&per_page=${this.state.perPage}&page=${this.state.pageNumber}`
      );
      const rawRepositories = await getRepositories.json();
      localStorage.reposItems = JSON.stringify({
        repositories: rawRepositories.items,
      });
      localStorage.setItem("QuantityItems", rawRepositories.total_count);
      localStorage.setItem("numerCurrentPage", this.state.pageNumber);
      localStorage.setItem("displayedQuantityPages", this.state.perPage);
      localStorage.setItem("searchText", this.state.searchText);
      commit("saveRepositories", rawRepositories.items);
      commit("saveQuantityItems", rawRepositories.total_count);
    },
  },
  modules: {},
});
