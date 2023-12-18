import type { MutationTree } from "vuex";
import type { ComicsState } from "@/store/comicsModule/types";
import type { Comic } from "@/views/comicsInterfaces";

export const mutations: MutationTree<ComicsState> = {
  setComics(state: ComicsState, payload: Comic[]): void {
    state.comics = payload;
  },
  setPage(state: ComicsState, page: number) {
    state.page = page;
  },
  setFilter(state: ComicsState, filter: string) {
    state.filter = filter;
  },
  setIsLoad(state: ComicsState, isLoad: boolean) {
    state.isLoad = isLoad;
  },
  setSearch(state: ComicsState, search: string) {
    state.search = search;
  },
  setTotal(state: ComicsState, total: number) {
    state.total = total;
  },
};
