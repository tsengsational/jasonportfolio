"use client";

import React from "react";
import { Desk } from "./Desk";

interface SceneProps {
    id: string;
    bgColor: string;
    children: React.ReactNode;
    title: string;
    isDark?: boolean;
}

export const Scene: React.FC<SceneProps> = ({
    id,
    bgColor,
    children,
    title,
    isDark = false,
}) => {
    return (
        <section
            id={id}
            className="snap-section relative"
        >
            <Desk bgColor={bgColor}>
                {/* Scene Identifier (Optional/Subtle) */}
                <div className="absolute top-6 left-6 md:top-12 md:left-12 z-0 opacity-40 select-none">
                    <h2 className={`text-5xl md:text-8xl font-black uppercase tracking-tighter ${isDark ? "text-white" : "text-black"}`}>
                        {title}
                    </h2>
                </div>


                {children}
            </Desk>
        </section>
    );
};
