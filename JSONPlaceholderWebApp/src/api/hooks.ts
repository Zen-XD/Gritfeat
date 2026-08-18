import { useQuery } from "@tanstack/react-query";
import * as api from "./client";

export const useUsers = () => {
    return useQuery({
        queryKey: ["users"],
        queryFn: api.getUsers,
    });
};

export const useUser = (id: number) => {
    return useQuery({
        queryKey: ["users", id],
        queryFn: () => api.getUser(id),
        enabled: !!id,
    });
};

export const useUserPosts = (userId: number) => {
    return useQuery({
        queryKey: ["users", userId, "posts"],
        queryFn: () => api.getUserPosts(userId),
        enabled: !!userId,
    });
};

export const usePostComments = (postId: number) => {
    return useQuery({
        queryKey: ["posts", postId, "comments"],
        queryFn: () => api.getPostComments(postId),
        enabled: !!postId,
    });
};

export const useUserTodos = (userId: number) => {
    return useQuery({
        queryKey: ["users", userId, "todos"],
        queryFn: () => api.getUserTodos(userId),
        enabled: !!userId,
    });
};

export const useUserAlbums = (userId: number) => {
    return useQuery({
        queryKey: ["users", userId, "albums"],
        queryFn: () => api.getUserAlbums(userId),
        enabled: !!userId,
    });
};

export const useAlbumPhotos = (albumId: number) => {
    return useQuery({
        queryKey: ["albums", albumId, "photos"],
        queryFn: () => api.getAlbumPhotos(albumId),
        enabled: !!albumId,
    });
};
