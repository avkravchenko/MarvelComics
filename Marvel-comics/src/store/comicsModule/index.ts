import type { Module } from "vuex";
import type { RootState } from "../../store/types.ts";
import type { ComicsState } from "../../store/comicsModule/types";
import { mutations } from "../../store/comicsModule/mutations";
import { actions } from "../../store/comicsModule/actions";
import { getters } from "../../store/comicsModule/getters";

const state: ComicsState = {
  comics: null,
  page: null,
  filter: null,
  isLoad: false,
  search: null,
  total: null,
};

export const comicsModule: Module<ComicsState, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
