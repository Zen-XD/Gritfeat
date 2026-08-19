import React, { useEffect, useState } from "react";
import { X, Star, Clock } from "lucide-react";
import type { MovieDetails } from "../types/tmdb";
import { getDetails } from "../api/tmdb";
import { MovieCard } from "./MovieCard";

interface MovieModalProps {
    id: number;
    type: "movie" | "tv";
    onClose: () => void;
    onMovieClick: (id: number, type: "movie" | "tv") => void;
}

export const MovieModal: React.FC<MovieModalProps> = ({
    id,
    type,
    onClose,
    onMovieClick,
}) => {
    const [details, setDetails] = useState<MovieDetails | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDetails = async () => {
            setLoading(true);
            try {
                const data = await getDetails(id, type);
                setDetails(data);
            } catch (error) {
                console.error("Error fetching details", error);
            } finally {
                setLoading(false);
            }
        };
        fetchDetails();
    }, [id, type]);

    if (loading) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
                <div className="bg-white p-6 border border-black text-xl font-bold uppercase tracking-widest">
                    Loading...
                </div>
            </div>
        );
    }

    if (!details) return null;

    const title = details.title || details.name;
    const releaseDate = details.release_date || details.first_air_date;
    const year = releaseDate ? new Date(releaseDate).getFullYear() : "";

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm p-4 md:p-8">
            <div className="bg-white border-2 border-black w-full max-w-5xl max-h-full overflow-y-auto relative flex flex-col shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 bg-white border border-black hover:bg-black hover:text-white transition-colors"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/3 bg-gray-100 border-b md:border-b-0 md:border-r border-black">
                        {details.poster_path ? (
                            <img
                                src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
                                alt={title}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full aspect-[2/3] flex items-center justify-center uppercase font-bold text-gray-400">
                                No Poster
                            </div>
                        )}
                    </div>
                    <div className="w-full md:w-2/3 p-6 md:p-8 flex flex-col">
                        <h2 className="text-3xl md:text-5xl font-bold uppercase mb-2 leading-tight">
                            {title}{" "}
                            <span className="text-gray-500 text-2xl md:text-4xl">
                                ({year})
                            </span>
                        </h2>
                        {details.tagline && (
                            <p className="text-lg italic text-gray-600 mb-4 font-serif">
                                "{details.tagline}"
                            </p>
                        )}

                        <div className="flex flex-wrap gap-3 mb-6 text-xs sm:text-sm font-bold uppercase tracking-wider">
                            <span className="flex items-center gap-1 border border-black px-2 py-1 bg-black text-white">
                                <Star className="w-4 h-4 fill-current" />{" "}
                                {details.vote_average.toFixed(1)}
                            </span>
                            {details.runtime > 0 && (
                                <span className="flex items-center gap-1 border border-black px-2 py-1">
                                    <Clock className="w-4 h-4" />{" "}
                                    {details.runtime} min
                                </span>
                            )}
                            {details.genres.map((g) => (
                                <span
                                    key={g.id}
                                    className="border border-black px-2 py-1"
                                >
                                    {g.name}
                                </span>
                            ))}
                        </div>

                        <h3 className="text-xl font-bold mb-2 uppercase border-b-2 border-black inline-block self-start pb-1">
                            Overview
                        </h3>
                        <p className="text-gray-800 leading-relaxed mb-8">
                            {details.overview}
                        </p>

                        <h3 className="text-xl font-bold mb-4 uppercase border-b-2 border-black inline-block self-start pb-1">
                            Top Cast
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            {details.credits?.cast?.slice(0, 8).map((actor) => (
                                <div key={actor.id} className="flex flex-col">
                                    {actor.profile_path ? (
                                        <img
                                            src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
                                            alt={actor.name}
                                            className="w-full aspect-[2/3] object-cover mb-2 border border-black grayscale hover:grayscale-0 transition-all"
                                        />
                                    ) : (
                                        <div className="w-full aspect-[2/3] bg-gray-100 mb-2 border border-black flex items-center justify-center text-xs text-center p-2 uppercase font-bold text-gray-400">
                                            {actor.name}
                                        </div>
                                    )}
                                    <span className="font-bold text-sm leading-tight uppercase">
                                        {actor.name}
                                    </span>
                                    <span className="text-xs text-gray-500 leading-tight uppercase mt-1">
                                        {actor.character}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {details.similar?.results?.length > 0 && (
                    <div className="p-6 md:p-8 border-t-2 border-black bg-gray-50">
                        <h3 className="text-xl font-bold mb-4 uppercase border-b-2 border-black inline-block pb-1">
                            Similar Titles
                        </h3>
                        <div
                            className="flex gap-4 overflow-x-auto pb-4 snap-x"
                            style={{ scrollbarWidth: "none" }}
                        >
                            <style>{`div::-webkit-scrollbar { display: none; }`}</style>
                            {details.similar.results.map((movie) => (
                                <MovieCard
                                    key={movie.id}
                                    movie={movie}
                                    onClick={(m) =>
                                        onMovieClick(
                                            m.id,
                                            m.name ? "tv" : "movie",
                                        )
                                    }
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
