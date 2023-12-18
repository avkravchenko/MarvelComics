<template>
  <div class="search-form-wrapper">
    <form class="search-form" @submit.prevent="handleSubmit">
      <input
        class="search-input"
        v-model="inputValue"
        type="text"
        id="search"
        name="search"
        placeholder="Search comics by title"
      />

      <MyButton class="search-btn">Search</MyButton>
    </form>
  </div>
</template>

<script lang="ts">
import MyButton from "@/components/MyButton.vue";
import { mapMutations, mapActions } from "vuex";

export default {
  components: {
    MyButton,
  },
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    ...mapMutations("comicsModule", ["setSearch", "setIsLoad"]),
    ...mapMutations(["setModal"]),
    ...mapActions("comicsModule", ["fetchData"]),

    handleSubmit() {
      this.$router.replace({ path: "/", query: { search: this.inputValue } });
      this.setSearch(this.inputValue);
      this.inputValue = "";
      this.setIsLoad(true);
      this.fetchData();
      this.setModal();
    },
  },
};
</script>

<style lang="scss" scoped>
.search-form-wrapper {
  width: 50%;

  .search-form {
    display: flex;
    gap: 20px;

    .search-input {
      width: 100%;
      padding: 15px;
      border-radius: 10px;
      border: solid 1px grey;
      outline: none;
      font-size: 1rem;
    }
  }
}

@media screen and (max-width: 550px) {
  .search-form-wrapper {
    width: 100%;

    .search-form {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
