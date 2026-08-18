import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Layout } from "./components/Layout";
import { UsersList } from "./pages/UsersList";
import { UserProfile } from "./pages/UserProfile";
import { PostDetail } from "./pages/PostDetail";
import { AlbumDetail } from "./pages/AlbumDetail";
import "./index.css";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            staleTime: 5 * 60 * 1000,
        },
    },
});

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<UsersList />} />
                        <Route path="users/:id" element={<UserProfile />} />
                        <Route path="posts/:id" element={<PostDetail />} />
                        <Route path="albums/:id" element={<AlbumDetail />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
