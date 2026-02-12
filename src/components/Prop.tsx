"use client";

import React from "react";
import { motion } from "framer-motion";
import { MouseParallax } from "./MouseParallax";

interface PropProps {
    children: React.ReactNode;
    x?: string | number;
    y?: string | number;
    intensity?: number;
    className?: string;
    label?: string;
}

export const Prop: React.FC<PropProps> = ({
    children,
    x = 0,
    y = 0,
    intensity = 20,
    className = "",
    label,
}) => {
    return (
        <div
            className={`absolute transition-all duration-300 group ${className}`}
            style={{
                left: x,
                top: y,
            }}
        >
            <MouseParallax intensity={intensity}>
                <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="relative flex flex-col items-center"
                >
                    {/* Main Prop Asset */}
                    <div className="relative z-10 filter drop-shadow-2xl">
                        {children}
                    </div>

                    {/* Subtle Glow interaction */}
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-full blur-xl transition-all duration-500" />

                    {/* Tooltip/Label */}
                    {label && (
                        <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                            <span className="bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap backdrop-blur-sm border border-white/10">
                                {label}
                            </span>
                        </div>
                    )}
                </motion.div>
            </MouseParallax>
        </div>
    );
};
