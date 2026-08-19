import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Search } from "./pages/Search";
import { MovieModal } from "./components/MovieModal";

function App() {
    const [selectedMovie, setSelectedMovie] = useState<{
        id: number;
        type: "movie" | "tv";
    } | null>(null);

    const handleMovieClick = (id: number, type: "movie" | "tv") => {
        setSelectedMovie({ id, type });
    };

    const closeMovieModal = () => {
        setSelectedMovie(null);
    };

    return (
        <div className="min-h-screen bg-white text-black font-sans">
            <Navbar />

            <main>
                <Routes>
                    <Route
                        path="/"
                        element={<Home onMovieClick={handleMovieClick} />}
                    />
                    <Route
                        path="/search"
                        element={<Search onMovieClick={handleMovieClick} />}
                    />
                </Routes>
            </main>

            {selectedMovie && (
                <MovieModal
                    id={selectedMovie.id}
                    type={selectedMovie.type}
                    onClose={closeMovieModal}
                    onMovieClick={handleMovieClick}
                />
            )}
        </div>
    );
}

export default App;
