import { configureStore } from "@reduxjs/toolkit";
import movie from "./movieListReducer";
import search from "./searcReducer";
import { typeAppDispatch, typeRootState } from "./types";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { movieApi } from "../API/rtkApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    movie,
    search,
    [movieApi.reducerPath]: movieApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});

setupListeners(store.dispatch);

export const useAppDispatch: () => typeAppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<typeRootState> = useSelector;
