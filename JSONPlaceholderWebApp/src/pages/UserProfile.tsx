import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
    useUser,
    useUserPosts,
    useUserAlbums,
    useUserTodos,
} from "../api/hooks";
import { Loader } from "../components/Loader";
import { ErrorMessage } from "../components/ErrorMessage";
import {
    ArrowLeft,
    Building,
    Globe,
    Mail,
    MapPin,
    Phone,
    MessageSquare,
    Image as ImageIcon,
    CheckSquare,
} from "lucide-react";

export const UserProfile = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const userId = Number(id);

    const [activeTab, setActiveTab] = useState<"posts" | "albums" | "todos">(
        "posts",
    );

    const { data: user, isLoading, isError } = useUser(userId);
    const { data: posts, isLoading: postsLoading } = useUserPosts(userId);
    const { data: albums, isLoading: albumsLoading } = useUserAlbums(userId);
    const { data: todos, isLoading: todosLoading } = useUserTodos(userId);

    if (isLoading) return <Loader />;
    if (isError || !user)
        return <ErrorMessage message="Failed to load user profile." />;

    const tabs = [
        {
            id: "posts",
            label: "Posts",
            icon: MessageSquare,
            count: posts?.length,
        },
        {
            id: "albums",
            label: "Albums",
            icon: ImageIcon,
            count: albums?.length,
        },
        {
            id: "todos",
            label: "Todos",
            icon: CheckSquare,
            count: todos?.length,
        },
    ] as const;

    return (
        <div className="space-y-8 animate-in fade-in duration-300">
            <div>
                <button
                    onClick={() => navigate(-1)}
                    className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-4 transition-colors"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                </button>

                <div className="rounded-xl border bg-card p-6 md:p-8 shadow-sm">
                    <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                        <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-primary/10 text-3xl font-bold text-primary">
                            {user.name.charAt(0)}
                        </div>
                        <div className="flex-1 space-y-1">
                            <h1 className="text-3xl font-bold tracking-tight">
                                {user.name}
                            </h1>
                            <p className="text-lg text-muted-foreground">
                                @{user.username}
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 pt-6 border-t">
                        <div className="flex items-center text-sm text-muted-foreground">
                            <Mail className="mr-2 h-4 w-4 shrink-0 text-primary" />
                            <span className="truncate" title={user.email}>
                                {user.email}
                            </span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                            <Phone className="mr-2 h-4 w-4 shrink-0 text-primary" />
                            <span className="truncate">{user.phone}</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                            <Globe className="mr-2 h-4 w-4 shrink-0 text-primary" />
                            <a
                                href={`https://${user.website}`}
                                target="_blank"
                                rel="noreferrer"
                                className="truncate hover:underline hover:text-primary transition-colors"
                            >
                                {user.website}
                            </a>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="mr-2 h-4 w-4 shrink-0 text-primary" />
                            <span
                                className="truncate"
                                title={`${user.address.street}, ${user.address.city}`}
                            >
                                {user.address.street}, {user.address.city}
                            </span>
                        </div>
                    </div>

                    <div className="mt-4 pt-4 border-t flex items-center text-sm text-muted-foreground">
                        <Building className="mr-2 h-4 w-4 shrink-0 text-primary" />
                        <span className="font-medium text-foreground mr-2">
                            {user.company.name}:
                        </span>
                        <span className="italic">
                            "{user.company.catchPhrase}"
                        </span>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <div className="border-b border-border overflow-x-auto hide-scrollbar">
                    <nav
                        className="-mb-px flex space-x-8 min-w-max"
                        aria-label="Tabs"
                    >
                        {tabs.map((tab) => {
                            const Icon = tab.icon;
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`
                    whitespace-nowrap flex items-center py-4 px-1 border-b-2 font-medium text-sm transition-colors
                    ${
                        isActive
                            ? "border-primary text-primary"
                            : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                    }
                  `}
                                >
                                    <Icon
                                        className={`mr-2 h-4 w-4 ${isActive ? "text-primary" : "text-muted-foreground"}`}
                                    />
                                    {tab.label}
                                    {tab.count !== undefined && (
                                        <span
                                            className={`ml-2 py-0.5 px-2 rounded-full text-xs ${isActive ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}
                                        >
                                            {tab.count}
                                        </span>
                                    )}
                                </button>
                            );
                        })}
                    </nav>
                </div>

                <div className="min-h-[400px]">
                    {activeTab === "posts" && (
                        <div className="grid gap-4 sm:grid-cols-2">
                            {postsLoading ? (
                                <Loader />
                            ) : (
                                posts?.map((post) => (
                                    <Link
                                        key={post.id}
                                        to={`/posts/${post.id}`}
                                        className="group block rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/50"
                                    >
                                        <h3 className="font-semibold text-lg line-clamp-1 group-hover:text-primary transition-colors mb-2 capitalize">
                                            {post.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm line-clamp-3">
                                            {post.body}
                                        </p>
                                    </Link>
                                ))
                            )}
                        </div>
                    )}

                    {activeTab === "albums" && (
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {albumsLoading ? (
                                <Loader />
                            ) : (
                                albums?.map((album) => (
                                    <Link
                                        key={album.id}
                                        to={`/albums/${album.id}`}
                                        className="group flex flex-col justify-between rounded-xl border bg-card p-5 shadow-sm transition-all hover:shadow-md hover:border-primary/50"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                                                <ImageIcon className="h-5 w-5 text-primary" />
                                            </div>
                                            <h3 className="font-medium leading-snug group-hover:text-primary transition-colors capitalize line-clamp-2">
                                                {album.title}
                                            </h3>
                                        </div>
                                    </Link>
                                ))
                            )}
                        </div>
                    )}

                    {activeTab === "todos" && (
                        <div className="rounded-xl border bg-card overflow-hidden">
                            <ul className="divide-y divide-border">
                                {todosLoading ? (
                                    <Loader />
                                ) : (
                                    todos?.map((todo) => (
                                        <li
                                            key={todo.id}
                                            className="p-4 flex items-start gap-3 hover:bg-muted/50 transition-colors"
                                        >
                                            <div className="mt-0.5">
                                                {todo.completed ? (
                                                    <CheckSquare className="h-5 w-5 text-green-500" />
                                                ) : (
                                                    <div className="h-5 w-5 rounded border-2 border-muted-foreground/30" />
                                                )}
                                            </div>
                                            <span
                                                className={`text-sm ${todo.completed ? "text-muted-foreground line-through" : "text-foreground"}`}
                                            >
                                                {todo.title}
                                            </span>
                                        </li>
                                    ))
                                )}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
