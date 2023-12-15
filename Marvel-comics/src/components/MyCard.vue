<template>
  <router-link :to="{ path: '/comics', query: { id: id } }">
    <div @click="handleClick" class="card">
      <img loading="lazy" :src="`${thumb}.jpg`" alt="" />
      <h3>{{ title }}</h3>
    </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    thumb: String,
    id: Number,
    title: String,
    type: String,
  },
  methods: {
    handleClick() {
      console.log(this.id);
      // this.$route.query()
    },
  },
});
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  max-width: 200px;
  gap: 10px;

  img {
    min-height: 300px;
    max-height: 300px;
  }
}
</style>
