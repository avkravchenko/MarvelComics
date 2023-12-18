import type { MutationTree } from "vuex";
import type { RootState } from "./types";

export const mutations: MutationTree<RootState> = {
  setModal(state) {
    state.isModal = !state.isModal;
  },
};
