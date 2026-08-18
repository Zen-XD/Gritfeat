import React from "react";
import { Link } from "react-router-dom";
import { useUsers } from "../api/hooks";
import { Loader } from "../components/Loader";
import { ErrorMessage } from "../components/ErrorMessage";
import { Building2, Mail, MapPin, Phone } from "lucide-react";

export const UsersList = () => {
    const { data: users, isLoading, isError } = useUsers();

    if (isLoading) return <Loader />;
    if (isError) return <ErrorMessage message="Failed to load users." />;
    if (!users?.length) return <ErrorMessage message="No users found." />;

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Users</h1>
                <p className="text-muted-foreground mt-2">
                    Select a user to view their complete profile, posts, albums,
                    and todos.
                </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {users.map((user) => (
                    <Link
                        key={user.id}
                        to={`/users/${user.id}`}
                        className="group flex flex-col justify-between rounded-xl border bg-card p-5 text-card-foreground shadow-sm transition-all hover:shadow-md hover:border-primary/50"
                    >
                        <div>
                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="font-semibold text-lg leading-none tracking-tight group-hover:text-primary transition-colors">
                                        {user.name}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mt-1.5">
                                        @{user.username}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-4 space-y-2 text-sm">
                                <div className="flex items-center text-muted-foreground">
                                    <Mail className="mr-2 h-4 w-4" />
                                    <span className="truncate">
                                        {user.email}
                                    </span>
                                </div>
                                <div className="flex items-center text-muted-foreground">
                                    <Phone className="mr-2 h-4 w-4" />
                                    <span className="truncate">
                                        {user.phone.split(" ")[0]}
                                    </span>
                                </div>
                                <div className="flex items-center text-muted-foreground">
                                    <Building2 className="mr-2 h-4 w-4" />
                                    <span className="truncate">
                                        {user.company.name}
                                    </span>
                                </div>
                                <div className="flex items-center text-muted-foreground">
                                    <MapPin className="mr-2 h-4 w-4" />
                                    <span className="truncate">
                                        {user.address.city}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};
