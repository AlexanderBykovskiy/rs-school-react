import { typeAppContext } from "./AppContextProvider.types";

export const defaultContext: typeAppContext = {
  movieList: null,
  isFetchingData: false,
  pagination: {
    pageNumber: 1,
    itemsPerPage: 20,
    totalPages: 0,
    totalElements: 0,
  },
};
