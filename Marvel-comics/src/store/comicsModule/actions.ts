import type { ActionTree } from "vuex";
import type { ComicsState } from "./types";
import type { RootState } from "../types";
import instance from "../../api/axiosInstance";
import debounce from "lodash/debounce";

export const actions: ActionTree<ComicsState, RootState> = {
  fetchData: debounce(async function ({ state, commit }) {
    try {
      const response = await instance.get("/comics", {
        params: {
          offset: Number(state.page) * 20,
          limit: 20,
          noVariants: true,
          format: state.filter,
          titleStartsWith: state.search,
        },
      });
      commit("setTotal", response.data.data.total);
      commit("setComics", response.data.data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      commit("setIsLoad", false);
    }
  }, 300),
};
