<template>
  <router-link :to="{ path: '/comics', query: { id: id } }">
    <div class="card">
      <img loading="lazy" :src="`${thumb}.jpg`" alt="" />
      <h3>{{ title }}</h3>

      <p v-if="descrption">{{ descrption?.slice(0, 60) }}...</p>
      <p v-else-if="textObjects && textObjects[0]">
        {{ textObjects[0].text.slice(0, 60) }}...
      </p>
      <p v-else>Description not available</p>
    </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { TextObject } from "@/views/comicsInterfaces";

export default defineComponent({
  props: {
    thumb: String,
    id: Number,
    title: String,
    type: String,
    descrption: String,
    textObjects: {
      type: Array as () => TextObject[],
      default: () => [],
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
