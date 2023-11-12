import { typePaginationObj } from "../Pagination/Pagination.types";
import { typeMovieItem } from "../API/api.types";
import { PropsWithChildren } from "react";

export interface typeAppContext {
  movieList: typeMovieItem[] | null;
  getData: (page: number, perPage: number, phrase?: string) => Promise<void>;
  isFetchingData: boolean;
  pagination: typePaginationObj;
}

export type typeDefaultAppContext = Omit<typeAppContext, "getData">;

export interface typeContextProviderProps extends PropsWithChildren {
  contextValue: typeAppContext | typeDefaultAppContext;
}
