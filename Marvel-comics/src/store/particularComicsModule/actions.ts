import type { ActionTree } from "vuex";
import type { ParticularComicTypes } from "./type";
import type { RootState } from "../types";
import instance from "../../api/axiosInstance";

export const actions: ActionTree<ParticularComicTypes, RootState> = {
  async fetchComics({ commit }: any, id: string) {
    try {
      const response = await instance.get(`/comics/${id}`);
      const comicsData = response.data.data.results[0];
      commit("setComicsData", comicsData);
    } catch (error) {
      console.error(error);
    }
  },
};
