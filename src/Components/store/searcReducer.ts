import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { typeSearchState } from "./types";

const initialState: typeSearchState = {
  searchValue: localStorage.getItem("searchPhrase") ?? "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setValue } = searchSlice.actions;

export default searchSlice.reducer;
