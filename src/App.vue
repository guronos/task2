<template>
  <div id="app">
    <div class="search-block">
      <SearchItems />
    </div>
      <div v-if="showRepositories">
    <b-container>
    <CardProject />
    </b-container>
    <b-container>
      <PaginationPage />
    </b-container>
  </div>
  <div v-else>
    <div class="loading" v-if="showSearchText">
      Поиск проектов...
    </div>
  </div>
  </div>
</template>

<script>
import CardProject from './components/CardProject'
import SearchItems from './components/SearchItems'
import PaginationPage from './components/PaginationPage'
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'App',
  components: { CardProject, SearchItems, PaginationPage }, 
  created(){
    try{
    const repItems = JSON.parse(localStorage.reposItems)
    this.saveSearchText(localStorage.getItem('searchText'))
    this.saveRepositories(repItems.repositories)
    this.saveQuantityItems(localStorage.getItem('QuantityItems'))
    } catch (e) {
      return
    }
  },
 computed: {
  ...mapGetters(['showRepositories', 'showSearchText'])
}, methods:{
  ...mapMutations(['saveQuantityItems', 'saveRepositories', 'saveSearchText'])
}}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #edf0f3;
}
.search-block {
  background: #2c3e50;
  padding: 3rem 0;
}
.loading {
  color:#000;
  font-size: 22px;
  font-weight: 600;
}
</style>
