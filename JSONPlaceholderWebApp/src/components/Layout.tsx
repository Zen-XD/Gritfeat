import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Database } from "lucide-react";

export const Layout = () => {
    return (
        <div className="min-h-screen bg-muted/30">
            <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container mx-auto max-w-5xl flex h-16 items-center justify-between px-4">
                    <Link
                        to="/"
                        className="flex items-center gap-2 transition-opacity hover:opacity-80"
                    >
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                            <Database className="h-5 w-5" />
                        </div>
                        <span className="font-bold text-lg hidden sm:inline-block">
                            JSONPlaceholderWebApp
                        </span>
                    </Link>
                    <nav className="flex items-center gap-4">
                        <Link
                            to="/"
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                            Users
                        </Link>
                    </nav>
                </div>
            </header>

            <main className="container mx-auto max-w-5xl px-4 py-8">
                <Outlet />
            </main>
        </div>
    );
};
