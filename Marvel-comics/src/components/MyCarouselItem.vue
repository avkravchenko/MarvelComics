<template>
  <div class="my-carousel-item">
    <img :src="`${itemData?.path}.jpg`" alt="" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    itemData: {
      type: Object,
    },
  },
});
</script>

<style lang="scss" scoped>
.my-carousel-item {
  img {
    max-width: 300px;
    min-width: 300px;
  }
}
</style>
