import axios from "axios";
import type { Movie, MovieDetails, PaginatedResponse } from "../types/tmdb";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const tmdbClient = axios.create({
    baseURL: BASE_URL,
    params: {
        api_key: API_KEY,
    },
});

export const getTrending = async (
    type: "movie" | "tv" = "movie",
    timeWindow: "day" | "week" = "week",
) => {
    const response = await tmdbClient.get<PaginatedResponse<Movie>>(
        `/trending/${type}/${timeWindow}`,
    );
    return response.data;
};

export const getTopRated = async (type: "movie" | "tv" = "tv") => {
    const response = await tmdbClient.get<PaginatedResponse<Movie>>(
        `/${type}/top_rated`,
    );
    return response.data;
};

export const getUpcoming = async () => {
    const response =
        await tmdbClient.get<PaginatedResponse<Movie>>(`/movie/upcoming`);
    return response.data;
};

export const searchMovies = async (
    query: string,
    type: "movie" | "tv" | "multi" = "multi",
    page: number = 1,
) => {
    const response = await tmdbClient.get<PaginatedResponse<Movie>>(
        `/search/${type}`,
        {
            params: { query, page },
        },
    );
    return response.data;
};

export const getDetails = async (
    id: number,
    type: "movie" | "tv" = "movie",
) => {
    const response = await tmdbClient.get<MovieDetails>(`/${type}/${id}`, {
        params: {
            append_to_response: "credits,similar",
        },
    });
    return response.data;
};

export const getGenres = async (type: "movie" | "tv" = "movie") => {
    const response = await tmdbClient.get<{
        genres: { id: number; name: string }[];
    }>(`/genre/${type}/list`);
    return response.data.genres;
};

export const discoverMovies = async (params: Record<string, any>) => {
    const response = await tmdbClient.get<PaginatedResponse<Movie>>(
        "/discover/movie",
        {
            params,
        },
    );
    return response.data;
};
