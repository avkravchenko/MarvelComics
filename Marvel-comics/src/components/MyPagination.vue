<template>
  <div>
    <ul class="pagination-wrapper">
      <router-link
        v-for="(item, index) in 5"
        :key="index"
        :to="getUpdatedQuery(index)"
      >
        <li :class="{ active: isActive(index) }">
          {{ index + 1 }}
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  methods: {
    getUpdatedQuery(index: Number) {
      const currentQuery = { ...this.$route.query };
      currentQuery.page = index + "";
      return { path: "/", query: currentQuery };
    },
    isActive(index: number): boolean {
      return this.$route.query.page === index.toString();
    },
  },
};
</script>

<style lang="scss" scoped>
.pagination-wrapper {
  display: flex;
  list-style: none;
  gap: 10px;
  .active {
    background-color: rgb(7, 177, 89);
  }

  li {
    background-color: rgb(0, 132, 255);
    color: #fff;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
  }
}
</style>
