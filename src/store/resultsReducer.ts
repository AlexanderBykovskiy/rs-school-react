import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { typeResult, typeResultListState } from "./types";

const initialState: typeResultListState = {
  resultList: [],
};

export const resultsSlice = createSlice({
  name: "results",
  initialState,
  reducers: {
    addResult: (state, action: PayloadAction<typeResult>) => {
      state.resultList.push(action.payload);
    },
  },
});

export const { addResult } = resultsSlice.actions;

const resultReducer = resultsSlice.reducer;

export { resultReducer };
