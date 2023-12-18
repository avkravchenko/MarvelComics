import type { GetterTree } from "vuex";
import type { RootState } from "./types";

export const getters: GetterTree<RootState, RootState> = {
  isModal(state) {
    return state.isModal;
  },
};
