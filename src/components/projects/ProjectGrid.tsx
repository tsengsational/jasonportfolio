"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface ProjectGridProps {
    projects: any[];
    category: string;
}

export default function ProjectGrid({ projects, category }: ProjectGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
                <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                >
                    <Link href={`/projects/${category}/${project.id}`}>
                        <div className="group bg-[#222] rounded-xl overflow-hidden hover:bg-[#2a2a2a] transition-all cursor-pointer border border-transparent hover:border-gray-700 h-full flex flex-col">
                            {project.heroImage ? (
                                <div className="relative aspect-video overflow-hidden">
                                    <img
                                        src={project.heroImage}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            ) : (
                                <div className="aspect-video bg-[#333] flex items-center justify-center text-gray-500">
                                    No Image
                                </div>
                            )}
                            <div className="p-6 flex-1 flex flex-col">
                                <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h2>
                                <p className="text-gray-400 line-clamp-2 mb-4">
                                    {project.description}
                                </p>
                                <div className="mt-auto flex flex-wrap gap-2">
                                    {project.tags.map((tag: string) => (
                                        <span key={tag} className="px-2 py-1 bg-[#333] rounded text-xs text-gray-400">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Link>
                </motion.div>
            ))}
        </div>
    );
}
