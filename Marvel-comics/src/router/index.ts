import { createRouter, createWebHistory } from "vue-router";
import ParticularComics from "@/views/ParticularComics.vue";
import AllComics from "@/views/AllComics.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: AllComics },
    { path: "/comics", component: ParticularComics },
  ],
});

export default router;
