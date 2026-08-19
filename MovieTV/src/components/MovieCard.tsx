import React from "react";
import type { Movie } from "../types/tmdb";
import { Star } from "lucide-react";

interface MovieCardProps {
    movie: Movie;
    onClick: (movie: Movie) => void;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie, onClick }) => {
    const title = movie.title || movie.name;
    const releaseDate = movie.release_date || movie.first_air_date;
    const year = releaseDate ? new Date(releaseDate).getFullYear() : "";

    return (
        <div
            onClick={() => onClick(movie)}
            className="group cursor-pointer flex flex-col gap-2 min-w-[160px] w-[160px] md:min-w-[200px] md:w-[200px] snap-start"
        >
            <div className="relative aspect-[2/3] overflow-hidden bg-gray-200">
                {movie.poster_path ? (
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={title}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                        loading="lazy"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm p-4 text-center">
                        {title}
                    </div>
                )}
            </div>
            <div className="flex flex-col">
                <h3 className="font-semibold text-sm truncate" title={title}>
                    {title}
                </h3>
                <div className="flex items-center justify-between text-xs text-gray-600">
                    <span>{year}</span>
                    <span className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current" />
                        {movie.vote_average
                            ? movie.vote_average.toFixed(1)
                            : "N/A"}
                    </span>
                </div>
            </div>
        </div>
    );
};
