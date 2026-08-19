import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

export const Navbar: React.FC = () => {
    const [searchParams] = useSearchParams();
    const [query, setQuery] = useState(searchParams.get("q") || "");
    const navigate = useNavigate();

    useEffect(() => {
        const handler = setTimeout(() => {
            if (query.trim()) {
                navigate(`/search?q=${encodeURIComponent(query.trim())}`);
            } else if (searchParams.get("q")) {
                navigate("/search");
            }
        }, 500);

        return () => clearTimeout(handler);
    }, [query, navigate, searchParams]);

    useEffect(() => {
        if (!searchParams.get("q")) {
            setQuery("");
        }
    }, [searchParams]);

    return (
        <nav className="sticky top-0 z-50 bg-white border-b-2 border-black py-4 px-6 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
                <span className="text-2xl font-bold uppercase tracking-widest hidden sm:inline">
                    MovieTV
                </span>
            </Link>

            <div className="relative w-full max-w-md ml-4">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search movies & shows..."
                    className="w-full border-2 border-black py-2 pl-4 pr-10 outline-none focus:bg-gray-100 transition-colors placeholder-gray-500 font-bold uppercase text-sm"
                />
                <div className="absolute right-0 top-0 h-full px-3 flex items-center pointer-events-none">
                    <Search className="w-5 h-5" />
                </div>
            </div>
        </nav>
    );
};
