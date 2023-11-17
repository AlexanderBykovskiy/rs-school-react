export interface typeSearchListProps {
  getMovieListData: (pageNumber: number, searchPhrase: string) => Promise<void>;
}

export interface typeSearchListItemProps {
  id: number;
  poster_path?: string;
  title: string;
  releaseData: Date;
}
