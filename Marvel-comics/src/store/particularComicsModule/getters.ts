import type { GetterTree } from "vuex";
import type { ParticularComicTypes } from "./type";
import type { RootState } from "../types";

export const getters: GetterTree<ParticularComicTypes, RootState> = {
  comicsTitle: (state) => state.comicsData?.title || "No Title Available",
  comicsCharacters: (state) => state.comicsData?.characters.items || [],
  comicsFormat: (state) => state.comicsData?.format || "",
  comicsCreators: (state) => state.comicsData?.creators.items || [],
  comicsCover: (state) => state.comicsData?.images || [],
  comicsDesc: (state) => state.comicsData?.textObjects || [],
  comicsFullDesc: (state) => state.comicsData?.description || "Not found",
  comsicsPages: (state) => state.comicsData?.pageCount || 0,
  comsicsPrice: (state) => state.comicsData?.prices || [],
};
