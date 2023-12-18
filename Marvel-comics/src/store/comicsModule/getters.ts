import type { GetterTree } from "vuex";
import type { ComicsState } from "./types";
import type { RootState } from "../types";

export const getters: GetterTree<ComicsState, RootState> = {
  comics(state) {
    return state.comics;
  },
  page(state) {
    return state.page;
  },
  filter(state) {
    return state.filter;
  },
  isLoad(state) {
    return state.isLoad;
  },
  total(state) {
    return state.total;
  },
};
