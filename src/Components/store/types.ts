import { store } from "./store";
import { typeMovieItem } from "../API/api.types";
import { typePaginationObj } from "../Pagination/Pagination.types";

export type typeRootState = ReturnType<typeof store.getState>;
export type typeAppDispatch = typeof store.dispatch;

export interface typeMovieState {
  movieList: null | typeMovieItem[];
  isLoading: boolean;
  pagination?: typePaginationObj;
}

export interface typeSearchState {
  searchValue: string;
}
