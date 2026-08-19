import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies, discoverMovies, getGenres } from "../api/tmdb";
import type { Movie } from "../types/tmdb";
import { MovieCard } from "../components/MovieCard";

interface SearchProps {
    onMovieClick: (id: number, type: "movie" | "tv") => void;
}

export const Search: React.FC<SearchProps> = ({ onMovieClick }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("q") || "";

    const [results, setResults] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(false);
    const [genres, setGenres] = useState<{ id: number; name: string }[]>([]);

    const selectedGenre = searchParams.get("genre") || "";
    const sortBy = searchParams.get("sort_by") || "popularity.desc";

    useEffect(() => {
        getGenres("movie").then(setGenres).catch(console.error);
    }, []);

    useEffect(() => {
        const fetchResults = async () => {
            setLoading(true);
            try {
                let data;
                if (query) {
                    data = await searchMovies(query);
                } else {
                    data = await discoverMovies({
                        with_genres: selectedGenre || undefined,
                        sort_by: sortBy,
                    });
                }
                const filteredResults = data.results.filter(
                    (m) => m.poster_path || m.backdrop_path,
                );
                setResults(filteredResults);
            } catch (error) {
                console.error("Search/Discover error", error);
            } finally {
                setLoading(false);
            }
        };
        fetchResults();
    }, [query, selectedGenre, sortBy]);

    const updateParam = (key: string, value: string) => {
        const newParams = new URLSearchParams(searchParams);
        if (value) {
            newParams.set(key, value);
        } else {
            newParams.delete(key);
        }

        if (key === "genre" || key === "sort_by") {
            newParams.delete("q");
        }
        setSearchParams(newParams);
    };

    return (
        <div className="p-6 md:p-12 max-w-7xl mx-auto w-full min-h-[calc(100vh-80px)] flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-64 flex-shrink-0">
                <h2 className="text-xl font-bold uppercase mb-4 border-b-2 border-black pb-1">
                    Filters
                </h2>

                <div className="mb-6">
                    <label className="block text-sm font-bold uppercase mb-2">
                        Genre
                    </label>
                    <div className="flex flex-col gap-2">
                        <button
                            onClick={() => updateParam("genre", "")}
                            disabled={!!query}
                            className={`text-left uppercase text-sm px-2 py-1 border-2 border-transparent hover:border-black transition-colors ${!selectedGenre ? "font-bold bg-black text-white" : ""} disabled:opacity-50`}
                        >
                            All Genres
                        </button>
                        {genres.map((g) => (
                            <button
                                key={g.id}
                                onClick={() =>
                                    updateParam("genre", g.id.toString())
                                }
                                disabled={!!query}
                                className={`text-left uppercase text-sm px-2 py-1 border-2 border-transparent hover:border-black transition-colors ${selectedGenre === g.id.toString() ? "font-bold bg-black text-white" : ""} disabled:opacity-50`}
                            >
                                {g.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex-1">
                <h1 className="text-2xl md:text-3xl font-bold uppercase mb-8 pb-2 border-b-2 border-black inline-block">
                    {query ? `Search: ${query}` : "Discover"}
                </h1>

                {loading ? (
                    <div className="text-xl font-bold uppercase tracking-widest mt-12">
                        Loading...
                    </div>
                ) : results.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                        {results.map((movie) => (
                            <MovieCard
                                key={movie.id}
                                movie={movie}
                                onClick={(m) =>
                                    onMovieClick(m.id, m.name ? "tv" : "movie")
                                }
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-xl font-bold uppercase tracking-widest mt-12 text-gray-400">
                        No results found
                    </div>
                )}
            </div>
        </div>
    );
};
