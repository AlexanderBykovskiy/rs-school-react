import { typeMovieItem } from "../API/api.types";
import { typePaginationObj } from "../Pagination/Pagination.types";

export interface typeProps {
  searchList: typeMovieItem[] | null;
  isLoading: boolean;
  pagination: typePaginationObj;
  getData: (page: number, perPage: number, phrase?: string) => Promise<void>;
}
