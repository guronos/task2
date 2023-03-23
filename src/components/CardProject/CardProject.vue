<template>
  <div class="wrap-cards">
    <b-card
      v-for="(repository, indx) in showRepositories"
      :key="repository.id"
      style="max-width: 20rem"
      class="m-2 cards"
    >
      <b-card-text class="card-text">
        <div>
          <a :href="repository.svn_url" target="_blank"
            ><span class="name-project">{{ repository.name }}</span></a
          >
        </div>
        <div class="icon-wrap">
          <div class="icon-cards">
            <b-icon
              icon="person-x"
              @click="deleteRepos(indx)"
              class="icon-comment-block"
            ></b-icon>
            <div class="icon-cards">
              <b-icon
                icon="pencil"
                @click="edit.haveID = indx"
                class="icon-comment-block"
              ></b-icon>
            </div>
          </div>
        </div>
        <div>
          <div class="avatar">
            <img
              :src="repository.owner.avatar_url"
              width="50"
              height="50"
              alt="Avatar owner"
            />
          </div>
          <a :href="repository.owner.html_url" target="_blank">{{
            repository.owner.login
          }}</a>
        </div>
        <b-icon icon="star"></b-icon> {{ repository.stargazers_count }}
        <b-icon icon="eye"></b-icon> {{ repository.watchers }}
      </b-card-text>
      <MoreInfotmation />
      <div class="comment-block">
        <CommentRepositoriy />
        <EditRepositories :indx="indx" :edit="edit" :repository="repository" />
      </div>
    </b-card>
  </div>
</template>

<script>
import MoreInfotmation from "../MoreInfotmation";
import { mapGetters, mapMutations } from "vuex";
import CommentRepositoriy from "../CommentRepositoriy";
import EditRepositories from "../EditRepositories";
export default {
  name: "CardProject",
  components: { CommentRepositoriy, MoreInfotmation, EditRepositories },
  data() {
    return {
      edit: { haveID: false },
    };
  },
  computed: {
    ...mapGetters(["showRepositories"]),
  },
  methods: {
    ...mapMutations(["deleteRepos"]),
  },
};
</script>

<style scoped>
.wrap-cards {
  display: flex;
  flex-wrap: wrap;
}
.cards {
  color: black;
  width: 15rem;
}
.cards a {
  text-decoration: none;
  color: #000;
  font-weight: 600;
  padding: 0 1rem;
}
.card-text {
  text-align: left;
  height: 7rem;
}
.avatar {
  display: inline;
  border-radius: 20px;
}
img {
  border-radius: 3rem;
}
.icon-wrap {
  display: flex;
  flex-direction: row-reverse;
}
.icon-cards {
  width: 22px;
  height: 22px;
  background: #3454be86;
  border-radius: 20px;
  text-align: center;
}
.icon-cards > .b-icon:hover {
  color: rgb(9, 110, 199);
  cursor: pointer;
}
</style>
