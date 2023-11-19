import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_DOMAIN, API_KEY, API_LOCALE } from "./api.constants";
import {
  typeMovieDetailsResponse,
  typeMovieResponse,
  typeMovieSearchListRequest,
} from "./api.types";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_DOMAIN }),
  endpoints: (builder) => ({
    getPopularList: builder.query<typeMovieResponse, number>({
      query: (page: number) =>
        `/movie/popular?page=${String(
          page,
        )}&locale=${API_LOCALE}&api_key=${API_KEY}`,
    }),
    getSearchList: builder.query<typeMovieResponse, typeMovieSearchListRequest>(
      {
        query: ({ pageNumber, searchPhrase }) =>
          `/search/movie?query=${searchPhrase}&page=${String(
            pageNumber,
          )}&language=${API_LOCALE}&api_key=${API_KEY}`,
      },
    ),
    getDetails: builder.query<typeMovieDetailsResponse, number>({
      query: (movieId) =>
        `/movie/${String(movieId)}?language=${API_LOCALE}&api_key=${API_KEY}`,
    }),
  }),
});

export const {
  useLazyGetPopularListQuery,
  useLazyGetSearchListQuery,
  useLazyGetDetailsQuery,
} = movieApi;
