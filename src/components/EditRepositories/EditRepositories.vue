<template>
  <div class="edit" v-if="indx === edit.haveID">
    <div>
      <div>
        <input type="text" class="form-control" v-model="repository.name" />
      </div>
      <input
        type="text"
        class="form-control"
        v-model="repository.owner.login"
        placeholder="Изменить имя"
      />
    </div>
    <input
      type="text"
      class="form-control"
      v-model="repository.stargazers_count"
      placeholder="Изменить кол-во звезд"
    />
    <input type="text" class="form-control" v-model="repository.watchers" />
    <button
      type="button"
      class="btn btn-primary"
      @click="
        editRepository(
          indx,
          repository.name,
          repository.owner.login,
          repository.stargazers_count,
          repository.watchers
        )
      "
    >
      Сохранить
    </button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: {
    repository: Object,
    edit: Object,
    indx: Number,
  },
  data() {
    return {
      comment: 0,
    };
  },
  methods: {
    ...mapMutations(["editRepositories"]),
    editRepository(idx, name, login, stars, watch) {
      this.editRepositories({
        index: idx,
        name: name,
        "owner.login": login,
        stargazers_count: stars,
        watchers: watch,
      });
      this.edit.haveID = false;
    },
  },
};
</script>

<style scoped>
.edit {
  position: absolute;
  top: 0;
  padding: 10px;
  background: #fff;
}
input {
  margin: 5px 0;
}
</style>
