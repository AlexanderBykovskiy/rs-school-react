export interface typeResponsePagination {
  page: number;
  total_pages: number;
  total_results: number;
}

export interface typeMovieItem {
  adult: boolean;
  backdrop_path?: string;
  genre_ids?: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview?: string;
  popularity: number;
  poster_path?: string;
  release_date: string;
  title: string;
  video?: boolean;
  vote_average: number;
  vote_count: number;
}

export interface typeMovieResponse extends typeResponsePagination {
  results: typeMovieItem[];
}

export type typeSearchPhraseFromResponse = string | null;

export interface typeMovieResponseMiddle {
  data: typeMovieResponse | null;
  details?: typeMovieDetails | null;
  page?: number | null;
  perPage?: number | null;
  searchPhrase: typeSearchPhraseFromResponse;
}

export interface typeMovieDetails {
  adult: boolean;
  backdrop_path: string;
  budget: number;
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
