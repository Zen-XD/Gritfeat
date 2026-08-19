import React, { useEffect, useState } from "react";
import { getTrending, getTopRated, getUpcoming } from "../api/tmdb";
import type { Movie } from "../types/tmdb";
import { MovieCard } from "../components/MovieCard";
import { Carousel } from "../components/Carousel";

interface HomeProps {
    onMovieClick: (id: number, type: "movie" | "tv") => void;
}

export const Home: React.FC<HomeProps> = ({ onMovieClick }) => {
    const [trending, setTrending] = useState<Movie[]>([]);
    const [topRated, setTopRated] = useState<Movie[]>([]);
    const [upcoming, setUpcoming] = useState<Movie[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [trendingData, topRatedData, upcomingData] =
                    await Promise.all([
                        getTrending("movie", "week"),
                        getTopRated("tv"),
                        getUpcoming(),
                    ]);

                setTrending(trendingData.results);
                setTopRated(topRatedData.results);
                setUpcoming(upcomingData.results);
            } catch (error) {
                console.error("Error fetching home page data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="flex flex-col min-h-screen pb-12">
            <div className="flex-1 p-6 md:p-12 max-w-7xl mx-auto w-full flex flex-col gap-8">
                <Carousel title="Trending Movies">
                    {trending.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            movie={movie}
                            onClick={(m) => onMovieClick(m.id, "movie")}
                        />
                    ))}
                </Carousel>

                <Carousel title="Top Rated TV Shows">
                    {topRated.map((show) => (
                        <MovieCard
                            key={show.id}
                            movie={show}
                            onClick={(m) => onMovieClick(m.id, "tv")}
                        />
                    ))}
                </Carousel>

                <Carousel title="Upcoming Releases">
                    {upcoming.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            movie={movie}
                            onClick={(m) => onMovieClick(m.id, "movie")}
                        />
                    ))}
                </Carousel>
            </div>
        </div>
    );
};
