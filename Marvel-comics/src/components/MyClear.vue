<template>
  <div @click="clearAllFilters" class="clear">Clear all filters</div>
</template>

<script lang="ts">
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations("comicsModule", ["setSearch"]),
    clearAllFilters() {
      this.$router.replace({ path: "/", query: {} });
      this.setSearch(null);
    },
  },
};
</script>

<style lang="scss" scoped>
.clear {
  width: 100%;
  text-align: center;
  color: rgb(0, 114, 208);
  margin-bottom: 50px;
}
</style>
