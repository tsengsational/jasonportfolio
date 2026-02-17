import Link from "next/link";
import { reader } from "@/lib/keystatic";
import ProjectGrid from "@/components/projects/ProjectGrid";

export default async function ProjectListPage({ params }: { params: Promise<{ category: string }> }) {
    const { category } = await params;

    const allProjects = await reader.collections.projects.all();
    const projects = allProjects
        .filter(p => p.entry.category === category)
        .map(p => ({
            id: p.slug,
            title: p.entry.title,
            description: p.entry.description,
            category: p.entry.category,
            heroImage: p.entry.heroImage,
            tags: p.entry.tags,
            link: p.entry.link,
        }));

    const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1);

    return (
        <main className="min-h-screen bg-[#1a1a1a] text-white p-8 md:p-16">
            <div className="max-w-7xl mx-auto">
                <header className="mb-16">
                    <Link
                        href="/"
                        className="text-gray-400 hover:text-white mb-8 inline-block transition-colors"
                    >
                        &larr; Back to Portfolio
                    </Link>
                    <h1 className="text-5xl md:text-7xl font-bold">{categoryTitle} Projects</h1>
                </header>

                <ProjectGrid projects={projects} category={category} />

                {projects.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-500 italic">No projects found for "{categoryTitle}".</p>
                    </div>
                )}
            </div>
        </main>
    );
}
