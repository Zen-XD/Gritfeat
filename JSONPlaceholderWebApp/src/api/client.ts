import axios from "axios";
import type { User, Post, Comment, Todo, Album, Photo } from "../types";

export const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});

export const getUsers = async (): Promise<User[]> => {
    const { data } = await api.get("/users");
    return data;
};

export const getUser = async (id: number): Promise<User> => {
    const { data } = await api.get(`/users/${id}`);
    return data;
};

export const getUserPosts = async (userId: number): Promise<Post[]> => {
    const { data } = await api.get(`/users/${userId}/posts`);
    return data;
};

export const getPostComments = async (postId: number): Promise<Comment[]> => {
    const { data } = await api.get(`/posts/${postId}/comments`);
    return data;
};

export const getUserTodos = async (userId: number): Promise<Todo[]> => {
    const { data } = await api.get(`/users/${userId}/todos`);
    return data;
};

export const getUserAlbums = async (userId: number): Promise<Album[]> => {
    const { data } = await api.get(`/users/${userId}/albums`);
    return data;
};

export const getAlbumPhotos = async (albumId: number): Promise<Photo[]> => {
    const { data } = await api.get(`/albums/${albumId}/photos`);
    return data;
};
