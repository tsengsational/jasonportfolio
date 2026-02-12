"use client";

import React from "react";

interface DeskProps {
    children: React.ReactNode;
    bgColor: string;
    className?: string;
}

export const Desk: React.FC<DeskProps> = ({
    children,
    bgColor,
    className = "",
}) => {
    return (
        <div
            className={`relative w-full h-full overflow-hidden flex items-center justify-center ${bgColor} ${className}`}
        >
            {/* Desk Surface Texture Overlay (Subtle noise/grain) */}
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

            {/* Decorative Desk Edge/Shadow */}
            <div className="absolute inset-x-0 top-0 h-8 bg-black/10 blur-sm pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-8 bg-black/20 blur-md pointer-events-none" />

            {/* Content Area (Prop Container) */}
            <div className="relative w-full h-full max-w-6xl mx-auto">
                {children}
            </div>
        </div>
    );
};
