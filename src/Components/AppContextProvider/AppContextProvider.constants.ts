import { typeAppContext } from "./AppContextProvider.types";

export const defaultContext: Omit<typeAppContext, "getData"> = {
  movieList: null,
  isFetchingData: false,
  pagination: {
    pageNumber: 1,
    itemsPerPage: 20,
    totalPages: 0,
    totalElements: 0,
  },
};
