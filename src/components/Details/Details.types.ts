import {typeMovieDetails} from "@/api/api.types";

export interface typeDetailsProps {
  data: typeMovieDetails | null | undefined
  page?: number | null,
  perPage?: number | null,
  q?: string | null,
}
