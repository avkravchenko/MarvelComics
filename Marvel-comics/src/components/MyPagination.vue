<template>
  <vue-awesome-paginate
    :total-items="total ? total : 0"
    :items-per-page="20"
    :max-pages-shown="5"
    v-model="currentPage"
    :on-click="onClickHandler"
  />
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import "vue-awesome-paginate/dist/style.css";

export default {
  data() {
    return {
      currentPage: 1,
    };
  },
  computed: {
    ...mapGetters("comicsModule", ["comics", "total"]),
  },
  methods: {
    onClickHandler() {
      const currentQuery = { ...this.$route.query };
      currentQuery.page = this.currentPage - 1 + "";
      this.$router.push({ query: currentQuery });
    },
  },
  watch: {
    "$route.query.page"(newPage) {
      console.log(newPage);
      if (newPage === "0") {
        this.currentPage = 1;
      }
    },
  },
};
</script>

<style>
.pagination-container {
  display: flex;
  justify-content: center;
  width: 100%;
  column-gap: 10px;
}
.paginate-buttons {
  height: 40px;
  width: 40px;
  border-radius: 5px;
  cursor: pointer;
  background-color: rgb(242, 242, 242);
  border: 1px solid rgb(217, 217, 217);
  color: black;
}
.paginate-buttons:hover {
  background-color: #d8d8d8;
}
.active-page {
  background-color: #3498db;
  border: 1px solid #3498db;
  color: white;
}
.active-page:hover {
  background-color: #2988c8;
}
</style>
