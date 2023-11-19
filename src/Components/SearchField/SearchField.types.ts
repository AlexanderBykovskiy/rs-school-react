export interface typeSearchFieldProps {
  getMovieListData: (
    pageNumber: number,
    searchPhrase?: string,
  ) => Promise<void>;
}
