<template>
  <div class="wrapper">
    <div class="nav">
      <span class="left" v-if="currentPage !== 0" @click="prev">◀️</span>
      <div class="pages">{{ currentPage }}/{{ allPages }}</div>
      <span class="right" v-if="currentPage !== allPages" @click="next"
        >▶️</span
      >
    </div>
    <div class="image-wrapper">
      <img
        loading="lazy"
        class="img"
        :src="images[currentPage]?.download_url"
        alt=""
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import loremPicsum from "@/api/loremPicsum";

export default defineComponent({
  props: {
    allPages: {
      type: Number,
      default: 0, // You can change the default value to suit your needs
    },
  },
  data() {
    return {
      currentPage: 1,
      images: [] as { download_url: string }[],
      page: 1,
    };
  },
  mounted() {
    this.getImages();
  },
  methods: {
    async getImages() {
      try {
        const response = await loremPicsum.get(``, {
          params: {
            page: this.page,
            limit: this.allPages + 1,
          },
        });
        this.images = [...this.images, ...response.data];
      } catch (error) {
        console.error(error);
      }
    },
    next() {
      if (this.currentPage === this.allPages) return;
      this.currentPage++;
      if (
        this.currentPage === this.images.length - 1 &&
        this.currentPage + 1 !== this.allPages
      ) {
        this.page++;
        this.getImages();
      }
    },
    prev() {
      if (this.currentPage === 0) return;
      this.currentPage--;
    },
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  width: 100%;
  .nav {
    display: flex;
    align-items: center;
    gap: 15px;
    margin: 0 auto;

    .left,
    .right {
      cursor: pointer;
    }

    .pages {
      background-color: rgb(6, 190, 80);
      padding: 15px;
      border-radius: 3px;
      color: #fff;
    }
  }
  .image-wrapper {
    max-width: 1000px;

    .img {
      width: 100%;
      height: auto;
    }
  }
}
</style>
