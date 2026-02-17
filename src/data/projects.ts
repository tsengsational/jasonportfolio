export interface Project {
    id: string;
    title: string;
    description: string;
    imageUrl?: string;
    link?: string;
    tags: string[];
}

export const projectsByCategory: Record<string, Project[]> = {
    scripts: [
        {
            id: "1",
            title: "Fear & Wonder",
            description: "A psychological thriller play about an old man living alone in a high-rise apartment.",
            tags: ["Drama", "Thriller", "Play"],
        },
        {
            id: "2",
            title: "Tomorrow's Echo",
            description: "A sci-fi stage production exploring the ethics of memory manipulation.",
            tags: ["Sci-Fi", "Drama", "Play"],
        },
    ],
    sketchbook: [
        {
            id: "3",
            title: "Cityscapes in Blue",
            description: "A series of watercolor paintings capturing urban life at dusk.",
            tags: ["Watercolor", "Urban", "Art"],
        },
        {
            id: "4",
            title: "Anatomy Studies",
            description: "Detailed pencil sketches focusing on human movement and form.",
            tags: ["Pencil", "Sketch", "Art"],
        },
    ],
    coding: [
        {
            id: "5",
            title: "Portfolio Site",
            description: "An interactive, top-down tabletop portfolio built with Next.js and Framer Motion.",
            tags: ["Next.js", "React", "Framer Motion"],
            link: "https://github.com/example/portfolio",
        },
        {
            id: "6",
            title: "AI Dungeon Crawler",
            description: "A procedural rogue-like game with AI-generated narrative events.",
            tags: ["Python", "OpenAI", "Game Dev"],
            link: "https://github.com/example/dungeon",
        },
    ],
    fiber: [
        {
            id: "7",
            title: "Hand-Knitted Cable Sweater",
            description: "A complex Aran-style sweater featuring traditional cable patterns and high-quality wool.",
            tags: ["Knitting", "Apparel", "Fiber Art"],
        },
        {
            id: "8",
            title: "Macramé Wall Hanging",
            description: "A large-scale decorative piece using various knotting techniques and natural cotton cord.",
            tags: ["Macramé", "Decor", "Fiber Art"],
        },
    ],
};
