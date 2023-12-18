<template>
  <div class="filters">
    <h2 class="filters-header">
      Choose the type of the comics you want to see
    </h2>
    <ul class="filters-wrapper">
      <router-link
        class="filter"
        :key="filter.id"
        :to="getUpdatedQuery(filter.type)"
        v-for="filter in comicsFilters"
      >
        <li>
          {{ filter.type }}
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      comicsFilters: [
        { id: 1, type: "comic" },
        { id: 2, type: "magazine" },
        { id: 3, type: "trade paperback" },
        { id: 4, type: "hardcover" },
        { id: 5, type: "digest" },
      ],
    };
  },
  methods: {
    getUpdatedQuery(format: string) {
      const currentQuery = { ...this.$route.query };
      currentQuery.format = format;
      currentQuery.page = "0";
      return { path: "/", query: currentQuery };
    },
  },
};
</script>

<style lang="scss" scoped>
.filters {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 20px 0;

  .filters-header {
    text-align: center;
    line-height: 36px;
    font-size: 2rem;
    font-weight: bold;
  }

  .filters-wrapper {
    padding: 0;
    display: flex;
    justify-content: center;
    list-style: none;
    gap: 10px;
    flex-wrap: wrap;

    .filter {
      background-color: rgb(6, 190, 80);
      padding: 10px;
      border-radius: 5px;
      color: #fff;
      cursor: pointer;

      &:hover {
        background-color: rgb(4, 156, 65);
      }
    }
  }
}
</style>
