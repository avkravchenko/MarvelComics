import type { Module } from "vuex";
import type { ParticularComicTypes } from "./type";
import type { RootState } from "../types";
import { getters } from "../../store/particularComicsModule/getters";
import { mutations } from "../../store/particularComicsModule/mutations";
import { actions } from "../../store/particularComicsModule/actions";
const state: ParticularComicTypes = {
  comicsData: null,
};

export const particularComicsModule: Module<ParticularComicTypes, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
