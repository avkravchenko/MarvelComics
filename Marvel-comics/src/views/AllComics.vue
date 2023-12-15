<template>
  <MyLoader v-if="isLoad" />
  <MyFilters />
  <div class="comics-wrapper">
    <div v-for="item in comics" :key="item.id">
      <MyCard :id="item.id" :thumb="item.thumbnail.path" :title="item.title" />
    </div>
    <MyPagination />
  </div>
</template>

<script lang="ts">
import instance from "@/api/axiosInstance";
import MyCard from "@/components/MyCard.vue";
import MyPagination from "@/components/MyPagination.vue";
import MyLoader from "@/components/MyLoader.vue";
import { defineComponent } from "vue";
import MyFilters from "@/components/MyFilters.vue";

interface Comic {
  id: number;
  thumbnail: {
    path: string;
    format: string;
  };
  title: string;
}

export default defineComponent({
  components: {
    MyCard,
    MyPagination,
    MyLoader,
    MyFilters,
  },
  data() {
    return {
      comics: null as Comic[] | null,
      page: this.$route.query.page,
      filter: this.$route.query.format,
      isLoad: false,
    };
  },
  mounted() {
    this.getData();
  },
  watch: {
    "$route.query.page"(newVal, oldVal) {
      this.page = newVal;
      this.getData();
    },
    "$route.query.format"(newVal, oldVal) {
      this.filter = newVal;
      this.getData();
    },
  },
  methods: {
    async getData() {
      console.log(11111111);
      this.isLoad = true;
      try {
        const response = await instance.get("/comics", {
          params: {
            offset: Number(this.page) * 20,
            limit: 20,
            noVariants: true,
            format: this.filter,
          },
        });
        console.log(response.data);
        this.isLoad = false;

        this.comics = response.data.data.results;
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoad = false;
      }
    },
  },
});
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
}
</style>
