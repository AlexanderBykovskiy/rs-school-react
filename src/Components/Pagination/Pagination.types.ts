export interface typePaginationObj {
  itemsPerPage: number;
  pageNumber: number;
  totalElements: number;
  totalPages: number;
}

export type typePaginationProps = typePaginationObj & {
  getMovieListData: (
    pageNumber: number,
    searchPhrase?: string,
  ) => Promise<void>;
};

export interface typePaginationButtonProps {
  title: string;
  onRedirect: () => void;
  isActive?: boolean;
}
