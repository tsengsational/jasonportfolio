import React from 'react';
import { reader } from '@/lib/keystatic';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { DocumentRenderer } from '@keystatic/core/renderer';

export default async function ProjectDetailPage({
    params,
}: {
    params: Promise<{ category: string; slug: string }>;
}) {
    const { category, slug } = await params;

    const project = await reader.collections.projects.read(slug);

    if (!project || project.category !== category) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#1a1a1a] text-white p-8 md:p-16">
            <div className="max-w-4xl mx-auto">
                <Link
                    href={`/projects/${category}`}
                    className="text-gray-400 hover:text-white mb-8 inline-block transition-colors"
                >
                    &larr; Back to {category.charAt(0).toUpperCase() + category.slice(1)}
                </Link>

                <header className="mb-12">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">{project.title}</h1>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 bg-[#333] rounded-full text-sm">
                                {tag}
                            </span>
                        ))}
                    </div>
                    {project.heroImage && (
                        <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8">
                            <img
                                src={project.heroImage}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}
                    {project.description && (
                        <p className="text-xl text-gray-300 leading-relaxed">
                            {project.description}
                        </p>
                    )}
                    {project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-block bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
                        >
                            Visit Project &rarr;
                        </a>
                    )}
                </header>

                <section className="prose prose-invert max-w-none mb-16">
                    <DocumentRenderer document={await project.content()} />
                </section>

                {project.gallery.length > 0 && (
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold mb-8">Gallery</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {project.gallery.map((item, index) => (
                                <div key={index} className="rounded-lg overflow-hidden bg-[#222] border border-gray-800">
                                    {item.discriminant === 'image' ? (
                                        item.value && (
                                            <img
                                                src={item.value}
                                                alt={`Gallery item ${index}`}
                                                className="w-full h-full object-cover"
                                            />
                                        )
                                    ) : item.discriminant === 'video' ? (
                                        item.value && item.value.url && (
                                            <div className="flex flex-col">
                                                <div className="aspect-video bg-black">
                                                    <iframe
                                                        src={item.value.url}
                                                        className="w-full h-full border-0"
                                                        allow="autoplay; fullscreen; picture-in-picture"
                                                        allowFullScreen
                                                    ></iframe>
                                                </div>
                                                {item.value.caption && (
                                                    <div className="p-4 text-sm text-gray-400">
                                                        {item.value.caption}
                                                    </div>
                                                )}
                                            </div>
                                        )
                                    ) : null}
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </main>
    );
}
