// store/index.ts

import { createStore } from "vuex";
import type { StoreOptions } from "vuex";
import type { RootState } from "./types";
import { comicsModule } from "./comicsModule";
import { particularComicsModule } from "./particularComicsModule";
import { mutations } from "../store/mutations";
import { getters } from "../store/getters";

const state: RootState = {
  isModal: false,
};

const store: StoreOptions<RootState> = createStore({
  state,
  mutations,
  getters,
  modules: { comicsModule, particularComicsModule },
});

export default store;
