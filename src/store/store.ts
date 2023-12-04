import { configureStore } from "@reduxjs/toolkit";
import { typeAppDispatch, typeRootState } from "./types";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/query";
import { resultReducer } from "./resultsReducer.ts";
import { countryReducer } from "./countruesReducer.ts";

export const store = configureStore({
  reducer: {
    results: resultReducer,
    countries: countryReducer,
  },
});

setupListeners(store.dispatch);

export const useAppDispatch: () => typeAppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<typeRootState> = useSelector;
