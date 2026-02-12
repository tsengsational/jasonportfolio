"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

interface MouseParallaxProps {
    children: React.ReactNode;
    intensity?: number; // How much it moves (default 20)
    className?: string;
}

export const MouseParallax: React.FC<MouseParallaxProps> = ({
    children,
    intensity = 20,
    className = "",
}) => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Motion values for X and Y
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth springs for the motion values
    const springConfig = { damping: 25, stiffness: 150 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;

            const { left, top, width, height } = containerRef.current.getBoundingClientRect();

            // Calculate mouse position relative to center of component (normalized -0.5 to 0.5)
            const centerX = left + width / 2;
            const centerY = top + height / 2;

            const moveX = (e.clientX - centerX) / (width / 2);
            const moveY = (e.clientY - centerY) / (height / 2);

            // Set target motion values based on intensity
            x.set(moveX * intensity);
            y.set(moveY * intensity);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [x, y, intensity]);

    return (
        <motion.div
            ref={containerRef}
            style={{
                x: springX,
                y: springY,
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
