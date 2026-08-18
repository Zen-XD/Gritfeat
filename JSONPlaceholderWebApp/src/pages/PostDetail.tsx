import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import * as api from "../api/client";
import { usePostComments } from "../api/hooks";
import { Loader } from "../components/Loader";
import { ErrorMessage } from "../components/ErrorMessage";
import { ArrowLeft, MessageCircle, User } from "lucide-react";

export const PostDetail = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const postId = Number(id);

    const {
        data: post,
        isLoading: postLoading,
        isError: postError,
    } = useQuery({
        queryKey: ["posts", postId],
        queryFn: async () => {
            const { data } = await api.api.get(`/posts/${postId}`);
            return data as import("../types").Post;
        },
        enabled: !!postId,
    });

    const { data: comments, isLoading: commentsLoading } =
        usePostComments(postId);

    if (postLoading) return <Loader />;
    if (postError || !post)
        return <ErrorMessage message="Failed to load post details." />;

    return (
        <div className="space-y-8 max-w-3xl mx-auto animate-in fade-in duration-300">
            <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
            </button>

            <article className="space-y-6">
                <div className="space-y-4">
                    <h1 className="text-3xl font-bold tracking-tight capitalize leading-tight">
                        {post.title}
                    </h1>
                    <div className="flex items-center text-sm text-muted-foreground">
                        <User className="mr-1.5 h-4 w-4" />
                        <span>Author ID: {post.userId}</span>
                    </div>
                </div>

                <div className="prose prose-neutral dark:prose-invert max-w-none">
                    <p className="text-lg leading-relaxed text-foreground/90 whitespace-pre-wrap">
                        {post.body}
                    </p>
                </div>
            </article>

            <hr className="border-border" />

            <section className="space-y-6">
                <div className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-primary" />
                    <h2 className="text-2xl font-semibold tracking-tight">
                        Comments
                    </h2>
                    <span className="ml-2 rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold text-muted-foreground">
                        {comments?.length || 0}
                    </span>
                </div>

                {commentsLoading ? (
                    <Loader />
                ) : (
                    <div className="space-y-4">
                        {comments?.map((comment) => (
                            <div
                                key={comment.id}
                                className="rounded-xl border bg-card p-5 shadow-sm"
                            >
                                <div className="mb-3 flex items-center justify-between">
                                    <h3 className="font-semibold text-foreground truncate mr-4">
                                        {comment.name}
                                    </h3>
                                    <a
                                        href={`mailto:${comment.email}`}
                                        className="text-xs text-primary hover:underline shrink-0"
                                    >
                                        {comment.email}
                                    </a>
                                </div>
                                <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                                    {comment.body}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
};
