<template>
  <div class="my-carousel-wrapper">
    <span @click="prevSlide" class="left" v-if="carouselData.length > 1"
      >◀️</span
    >
    <div
      :style="{ marginLeft: `${currentSlide * -300}px` }"
      class="my-carousel"
    >
      <MyCarouselItem
        v-for="item in carouselData"
        :item-data="item"
        :key="item"
      />
    </div>
    <span @click="nextSlide" class="right" v-if="carouselData.length > 1"
      >▶️</span
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MyCarouselItem from "./MyCarouselItem.vue";

export default defineComponent({
  components: {
    MyCarouselItem,
  },
  props: {
    carouselData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      currentSlide: 0,
    };
  },
  methods: {
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
      }
    },
    nextSlide() {
      if (this.currentSlide < this.carouselData.length - 1) {
        this.currentSlide++;
      }
    },
  },
});
</script>

<style scoped>
.my-carousel-wrapper {
  position: relative;
  max-width: 300px;
  overflow: hidden;

  .left {
    background-color: #fff;
    padding: 5px 10px;
    border-radius: 50%;
    position: absolute;
    top: 45%;
    left: 10px;
  }
  .right {
    background-color: #fff;
    padding: 5px 10px;
    border-radius: 50%;
    position: absolute;
    top: 45%;
    right: 10px;
  }

  .my-carousel {
    display: flex;
    transition: all 0.5s ease;
  }
}
</style>
