import {typeMovieResponse} from "@/api/api.types";

export interface typeSearchListProps {
  data: typeMovieResponse | null
  searchPhrase?: string | null
}

export interface typeSearchListItemProps {
  id: number;
  poster_path?: string;
  title: string;
  releaseData: Date;
  searchParams: string
}
