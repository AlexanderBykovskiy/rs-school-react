import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { typeMovieState } from "./types";
import { typeMovieItem } from "../API/api.types";
import { typePaginationObj } from "../Pagination/Pagination.types";

const initialState: typeMovieState = { movieList: null, isLoading: false };

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovieList: (state, action: PayloadAction<typeMovieItem[] | null>) => {
      state.movieList = action.payload;
    },
    setMovieLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setPagination: (state, action: PayloadAction<typePaginationObj>) => {
      state.pagination = action.payload;
    },
  },
});

export const { setMovieList, setMovieLoading, setPagination } =
  movieSlice.actions;

export default movieSlice.reducer;
