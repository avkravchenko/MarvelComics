<template>
  <header>
    <h1>{{ comicsTitle }}</h1>
  </header>
  <body>
    <div class="comics-wrapper">
      <div class="cover">
        <MyCarousel :carousel-data="comicsCover" />
      </div>
      <div class="desc">
        <h2>Description</h2>
        <p v-if="comicsDesc.length > 0" v-for="desc in comicsDesc">
          {{ desc.text }}
        </p>
        <p v-else-if="comicsFullDesc !== ''">{{ comicsFullDesc }}</p>
        <p v-else>Not found</p>

        <div class="price">
          <h2>Price</h2>
          <p v-if="comsicsPrice">${{ comsicsPrice[0]?.price }}</p>
          <p v-else>Not found</p>
        </div>

        <MyButton class="add-to-cart">Buy now</MyButton>
      </div>
      <div class="characters">
        <h2>Characters</h2>
        <ul v-if="comicsCharacters.length > 0">
          <li v-for="character in comicsCharacters">{{ character.name }}</li>
        </ul>
        <p v-else>Not found</p>
      </div>
      <div class="creators">
        <h2>Creators</h2>
        <ul v-if="comicsCreators.length > 0">
          <li v-for="creator in comicsCreators">{{ creator.name }}</li>
        </ul>
        <p v-else>Not found</p>
      </div>
      <div class="format">
        <h2>Format</h2>
        <p v-if="comicsFormat">{{ comicsFormat }}</p>
        <p v-else>Not found</p>
      </div>
      <div class="pages">
        <h2>Pages</h2>
        <p>{{ comsicsPages }}</p>
      </div>

      <MyReader v-if="comsicsPages" :allPages="comsicsPages" />
    </div>
  </body>
</template>

<script lang="ts">
import instance from "@/api/axiosInstance";
import { defineComponent } from "vue";
import MyCarousel from "@/components/MyCarousel.vue";
import MyReader from "@/components/MyReader.vue";
import MyButton from "@/components/MyButton.vue";

import type {
  TextObject,
  ComicItem,
  Image,
  ComicsData,
  Price,
} from "@/views/comicsInterfaces";

export default defineComponent({
  components: {
    MyCarousel,
    MyReader,
    MyButton,
  },
  data() {
    return {
      id: "",
      comicsData: null as ComicsData | null,
    };
  },
  computed: {
    comicsTitle(): string {
      return this.comicsData?.title || "No Title Available";
    },
    comicsCharacters(): ComicItem[] {
      return this.comicsData?.characters.items || [];
    },
    comicsFormat(): string {
      return this.comicsData?.format || "";
    },
    comicsCreators(): ComicItem[] {
      return this.comicsData?.creators.items || [];
    },
    comicsCover(): Image[] {
      return this.comicsData?.images || [];
    },
    comicsDesc(): TextObject[] {
      return this.comicsData?.textObjects || [];
    },
    comicsFullDesc(): string {
      return this.comicsData?.description || "Not found";
    },
    comsicsPages(): number {
      return this.comicsData?.pageCount || 0;
    },
    comsicsPrice(): Price[] {
      return this.comicsData?.prices || [];
    },
  },
  mounted() {
    this.getId();
    this.getComics();
  },
  methods: {
    getId() {
      console.log("our id", this.$route.query);
      this.id = this.$route.query.id as string;
    },
    async getComics() {
      try {
        const response = await instance.get(`/comics/${this.id}`);
        console.log(response.data.data.results);
        this.comicsData = response.data.data.results[0];
      } catch (error) {
        console.error(error);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.comics-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;

  .cover {
    max-width: 300px;

    img {
      width: 100%;
    }
  }

  .desc {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: calc(100% - 340px);
    max-height: fit-content;

    .add-to-cart {
      width: 50%;
      align-self: flex-end;
      margin-top: auto;
    }
  }

  .characters {
    width: calc(50% - 20px);

    ul {
      display: flex;
      list-style: none;
      gap: 10px;
      flex-wrap: wrap;

      li {
        background-color: rgb(22, 172, 127);
        color: #fff;
        padding: 5px;
        border-radius: 5px;
        font-weight: 600;
      }
    }
  }

  .creators {
    ul {
      display: flex;
      list-style: none;
      gap: 10px;
      flex-wrap: wrap;

      li {
        background-color: rgb(255, 179, 0);
        color: #fff;
        padding: 5px;
        border-radius: 5px;
        font-weight: 600;
      }
    }
  }

  .format,
  .pages,
  .creators {
    width: calc(50% - 20px);
  }

  .price {
    width: calc(100% - 340px);
  }
}

@media screen and (max-width: 600px) {
  .comics-wrapper {
    .desc,
    .creators,
    .price {
      width: 100%;
    }
  }
}
</style>
