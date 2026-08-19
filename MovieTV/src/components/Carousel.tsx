import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
    title: string;
    children: React.ReactNode;
}

export const Carousel: React.FC<CarouselProps> = ({ title, children }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo =
                direction === "left"
                    ? scrollLeft - clientWidth
                    : scrollLeft + clientWidth;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
        }
    };

    return (
        <div className="my-8">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold uppercase tracking-wider">
                    {title}
                </h2>
                <div className="flex gap-2">
                    <button
                        onClick={() => scroll("left")}
                        className="p-1 border border-black hover:bg-black hover:text-white transition-colors"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="p-1 border border-black hover:bg-black hover:text-white transition-colors"
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
            <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto snap-x pb-4"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
                <style>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
                {children}
            </div>
        </div>
    );
};
