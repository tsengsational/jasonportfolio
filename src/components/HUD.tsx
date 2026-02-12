"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sections = [
    { id: "intro", label: "Intro" },
    { id: "writer", label: "Writer" },
    { id: "artist", label: "Artist" },
    { id: "coder", label: "Coder" },
];

export const HUD: React.FC = () => {
    const [activeSection, setActiveSection] = useState("writer");

    useEffect(() => {
        const observerOptions = {
            root: null,
            threshold: 0.6, // Trigger when 60% of the section is visible
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sections.forEach((section) => {
            const el = document.getElementById(section.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-6">
            {sections.map((section) => (
                <button
                    key={section.id}
                    onClick={() => scrollTo(section.id)}
                    className="group relative flex items-center justify-end"
                >
                    {/* Label */}
                    <span className={`
            mr-4 text-xs font-bold uppercase tracking-widest transition-all duration-300
            ${activeSection === section.id ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"}
            group-hover:opacity-100 group-hover:translate-x-0
            text-white/80
          `}>
                        {section.label}
                    </span>

                    {/* Dot */}
                    <div className="relative flex items-center justify-center">
                        <motion.div
                            animate={{
                                scale: activeSection === section.id ? 1.5 : 1,
                                backgroundColor: activeSection === section.id ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.3)"
                            }}
                            className="w-2 h-2 rounded-full ring-4 ring-white/0 group-hover:ring-white/20 transition-all"
                        />
                        {activeSection === section.id && (
                            <motion.div
                                layoutId="active-dot"
                                className="absolute w-6 h-6 border-2 border-white rounded-full"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}
                    </div>
                </button>
            ))}
        </nav>
    );
};
