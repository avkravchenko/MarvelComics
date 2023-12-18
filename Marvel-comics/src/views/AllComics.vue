<template>
  <MyLoader v-if="isLoad" />
  <MyFilters />
  <MyClear />
  <div class="comics-wrapper">
    <div
      v-if="comics && comics.length > 0"
      v-for="item in comics"
      :key="item.id"
    >
      <MyCard
        :description="item.description"
        :id="item.id"
        :thumb="item.thumbnail.path"
        :title="item.title"
        :text-objects="item.textObjects"
      />
    </div>
    <div class="nothing" v-else>
      <p>Nothing was found 😭</p>
    </div>
    <MyPagination />
  </div>
</template>

<script lang="ts">
import type { ComponentOptionsMixin } from "vue";
import MyCard from "@/components/MyCard.vue";
import MyPagination from "@/components/MyPagination.vue";
import MyLoader from "@/components/MyLoader.vue";
import MyFilters from "@/components/MyFilters.vue";
import MyClear from "@/components/MyClear.vue";
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  components: {
    MyCard,
    MyPagination,
    MyLoader,
    MyFilters,
    MyClear,
  },
  computed: {
    ...mapGetters("comicsModule", ["comics", "page", "filter", "isLoad"]),
  },
  methods: {
    ...mapActions("comicsModule", ["fetchData"]),
    ...mapMutations("comicsModule", [
      "setPage",
      "setFilter",
      "setIsLoad",
      "setSearch",
    ]),

    getData() {
      this.setIsLoad(true);
      this.fetchData();
    },
  },
  watch: {
    "$route.query.page"(newPage) {
      this.setPage(newPage);
      this.getData();
    },
    "$route.query.format"(newFilter) {
      this.setFilter(newFilter);
      this.getData();
    },
  },
  mounted() {
    this.setSearch(this.$route.query.search);
    this.setPage(this.$route.query.page);
    this.setFilter(this.$route.query.format);
    this.getData();
  },
} as ComponentOptionsMixin;
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: black;
}
.comics-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;

  .nothing {
    width: 100%;
    text-align: center;
    font-size: 32px;
  }
}
</style>
