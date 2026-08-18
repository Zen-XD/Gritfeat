import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import * as api from "../api/client";
import { useAlbumPhotos } from "../api/hooks";
import { Loader } from "../components/Loader";
import { ErrorMessage } from "../components/ErrorMessage";
import { ArrowLeft, Image as ImageIcon } from "lucide-react";

export const AlbumDetail = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const albumId = Number(id);

    const {
        data: album,
        isLoading: albumLoading,
        isError: albumError,
    } = useQuery({
        queryKey: ["albums", albumId],
        queryFn: async () => {
            const { data } = await api.api.get(`/albums/${albumId}`);
            return data as import("../types").Album;
        },
        enabled: !!albumId,
    });

    const { data: photos, isLoading: photosLoading } = useAlbumPhotos(albumId);

    if (albumLoading) return <Loader />;
    if (albumError || !album)
        return <ErrorMessage message="Failed to load album details." />;

    return (
        <div className="space-y-8 animate-in fade-in duration-300">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <button
                        onClick={() => navigate(-1)}
                        className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-4 transition-colors"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back
                    </button>

                    <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                            <ImageIcon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight capitalize">
                                {album.title}
                            </h1>
                            <p className="text-muted-foreground mt-1 text-sm">
                                {photos?.length || 0} photos in this collection
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {photosLoading ? (
                <Loader />
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {photos?.map((photo) => (
                        <div
                            key={photo.id}
                            className="group relative aspect-square overflow-hidden rounded-xl bg-muted border"
                        >
                            <img
                                src={photo.thumbnailUrl}
                                alt={photo.title}
                                loading="lazy"
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end">
                                <p className="p-3 text-xs font-medium text-white line-clamp-2 capitalize">
                                    {photo.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
