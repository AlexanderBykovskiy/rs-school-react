import { typeMovieDetails, typeMovieResponse } from "./api.types";
import { API_DOMAIN, API_KEY, API_LOCALE } from "./api.constants";

const headers = new Headers();
headers.append("Content-Type", "application/json");

const requestGetOptions = {
    method: "GET",
    headers: headers,
};

export const getMovieList = async (
    page: number = 1
): Promise<typeMovieResponse | null> => {

    const url: string = `${API_DOMAIN}/movie/popular?page=${page}&locale=${API_LOCALE}&api_key=${API_KEY}`;

    try {
        const response = await fetch(url, requestGetOptions);
        const data = await response.json();

        return {
            ...data,
            results: data.results,
        };
    } catch (error) {
        console.log("ERROR:", error);
        return null;
    }
};

export const getSearchMovieList = async (
    phrase: string,
    page: number = 1,
    perPage: number = 20,
): Promise<typeMovieResponse | null> => {
    console.log(perPage);

    const url: string = `${API_DOMAIN}/search/movie?query=${phrase}&page=${page}&language=${API_LOCALE}&api_key=${API_KEY}`;

    try {
        const response = await fetch(url, requestGetOptions);
        return await response.json();
    } catch (error) {
        console.log("ERROR:", error);
        return null;
    }
};

export const getMovie = async (
    id: number,
): Promise<typeMovieDetails | null> => {
    const url: string = `${API_DOMAIN}/movie/${id}?language=${API_LOCALE}&api_key=${API_KEY}`;

    try {
        const response = await fetch(url, requestGetOptions);
        return await response.json();
    } catch (error) {
        console.log("ERROR:", error);
        return null;
    }
};
