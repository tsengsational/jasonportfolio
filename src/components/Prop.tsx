"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { MouseParallax } from "./MouseParallax";

interface PropProps {
    children: React.ReactNode;
    x?: string | number;
    y?: string | number;
    mobileX?: string | number;
    mobileY?: string | number;
    intensity?: number;
    className?: string;
    label?: string;
    href?: string;
}

export const Prop: React.FC<PropProps> = ({
    children,
    x = 0,
    y = 0,
    mobileX,
    mobileY,
    intensity = 10,
    className = "",
    label,
    href,
}) => {
    const content = (
        <MouseParallax intensity={intensity}>
            <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className={`relative flex flex-col items-center ${href ? 'cursor-pointer' : ''}`}
            >
                {/* Main Prop Asset */}
                <div className="relative z-10 filter drop-shadow-2xl">
                    {children}
                </div>

                {/* Subtle Glow interaction */}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-full blur-xl transition-all duration-500" />

                {/* Tooltip/Label */}
                {label && (
                    <div className="absolute -bottom-8 pointer-events-none">
                        <span className="bg-black/20 text-white text-m px-2 py-1 rounded whitespace-nowrap backdrop-blur-sm border border-white/10">
                            {label}
                        </span>
                    </div>
                )}
            </motion.div>
        </MouseParallax>
    );

    return (
        <div
            className={`absolute transition-all duration-300 group ${className} 
                left-[var(--mobile-x)] top-[var(--mobile-y)] 
                md:left-[var(--desktop-x)] md:top-[var(--desktop-y)]`}
            style={{
                "--desktop-x": typeof x === 'number' ? `${x}px` : x,
                "--desktop-y": typeof y === 'number' ? `${y}px` : y,
                "--mobile-x": mobileX ? (typeof mobileX === 'number' ? `${mobileX}px` : mobileX) : (typeof x === 'number' ? `${x}px` : x),
                "--mobile-y": mobileY ? (typeof mobileY === 'number' ? `${mobileY}px` : mobileY) : (typeof y === 'number' ? `${y}px` : y),
            } as React.CSSProperties}
        >
            {href ? (
                <Link href={href}>
                    {content}
                </Link>
            ) : (
                content
            )}
        </div>
    );
};
