import type { MutationTree } from "vuex";
import type { ParticularComicTypes } from "./type";
import type { ComicsData } from "@/views/comicsInterfaces";

export const mutations: MutationTree<ParticularComicTypes> = {
  setComicsData(state, comicsData: ComicsData) {
    state.comicsData = comicsData;
  },
};
