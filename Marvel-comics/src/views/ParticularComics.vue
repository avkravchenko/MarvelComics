<template>
  <h1 class="title">{{ comicsTitle }}</h1>

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
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapActions } from "vuex";
import MyCarousel from "@/components/MyCarousel.vue";
import MyReader from "@/components/MyReader.vue";
import MyButton from "@/components/MyButton.vue";

export default defineComponent({
  components: {
    MyCarousel,
    MyReader,
    MyButton,
  },
  data() {
    return {
      id: "",
    };
  },
  computed: {
    ...mapGetters("particularComicsModule", [
      "comicsTitle",
      "comicsCharacters",
      "comicsFormat",
      "comicsCreators",
      "comicsCover",
      "comicsDesc",
      "comicsFullDesc",
      "comsicsPages",
      "comsicsPrice",
    ]),
  },
  methods: {
    ...mapActions("particularComicsModule", ["fetchComics"]),

    getId() {
      this.id = this.$route.query.id as string;
    },
    async getComics() {
      await this.fetchComics(this.id);
    },
  },
  mounted() {
    this.getId();
    this.getComics();
  },
});
</script>

<style lang="scss" scoped>
.title {
  font-weight: 700;
  line-height: 2rem;
}
.comics-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  margin-top: 50px;
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
    .characters,
    .price {
      width: 100%;
    }
  }
}
</style>
