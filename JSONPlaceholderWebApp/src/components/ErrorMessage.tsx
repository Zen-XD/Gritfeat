import React from "react";
import { AlertCircle } from "lucide-react";

interface ErrorMessageProps {
    message?: string;
}

export const ErrorMessage = ({
    message = "An error occurred while fetching data.",
}: ErrorMessageProps) => {
    return (
        <div className="flex flex-col items-center justify-center p-8 text-center animate-in fade-in zoom-in duration-300">
            <div className="rounded-full bg-destructive/10 p-3 mb-4">
                <AlertCircle className="h-6 w-6 text-destructive" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
                Oops! Something went wrong
            </h3>
            <p className="text-sm text-muted-foreground">{message}</p>
        </div>
    );
};
