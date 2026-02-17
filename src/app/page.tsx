"use client";

import { motion } from "framer-motion";
import { Scene } from "@/components/Scene";
import { Prop } from "@/components/Prop";
import { HUD } from "@/components/HUD";

export default function Home() {
    return (
        <main className="snap-container">
            <HUD />

            {/* Intro Scene */}
            <Scene id="intro" title="Jason Tseng" bgColor="bg-slate-50">
                <div className="flex flex-col md:flex-row items-center gap-12 px-8 max-w-4xl mx-auto h-full justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-64 h-64 rounded-full overflow-hidden border-8 border-white shadow-2xl flex-shrink-0"
                    >
                        <img
                            src="/jason_headshot.jpg"
                            alt="Jason's Headshot"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.currentTarget.src = "https://api.dicebear.com/7.x/avataaars/svg?seed=Jason";
                            }}
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="flex flex-col gap-6 text-slate-800 text-center md:text-left"
                    >
                        <h1 className="text-5xl font-bold tracking-tight">Hi, I'm Jason.</h1>
                        <p className="text-xl leading-relaxed opacity-80">
                            I'm a <button onClick={() => document.getElementById('writer')?.scrollIntoView({ behavior: 'smooth' })} className="font-bold underline decoration-stone-400 hover:text-stone-600 transition-colors">Writer</button>,
                            an <button onClick={() => document.getElementById('artist')?.scrollIntoView({ behavior: 'smooth' })} className="font-bold underline decoration-amber-600 hover:text-amber-800 transition-colors">Artist</button>,
                            and a <button onClick={() => document.getElementById('coder')?.scrollIntoView({ behavior: 'smooth' })} className="font-bold underline decoration-slate-600 hover:text-slate-800 transition-colors">Coder</button>.
                        </p>
                        <p className="text-lg opacity-60">
                            Welcome to my interactive portfolio. Explore my workspace below.
                        </p>
                    </motion.div>
                </div>
            </Scene>

            {/* Writer Scene */}
            <Scene id="writer" title="Writer" bgColor="bg-stone-300">
                <Prop mobileX="5%" mobileY="15%" x="20%" y="30%" intensity={2} label="Substack">
                    <img src="/typewriter.png" alt="Typewriter" className="w-80 h-80 max-w-none" />
                </Prop>
                <Prop mobileX="5%" mobileY="50%" x="60%" y="30%" intensity={2} label="Scripts" href="/projects/scripts">
                    <img src="/scripts.png" alt="Scripts" className="w-80 h-80 max-w-none" />
                </Prop>
            </Scene>

            {/* Artist Scene */}
            <Scene id="artist" title="Artist" bgColor="bg-amber-950" isDark={true}>
                <Prop mobileX="5%" mobileY="15%" x="20%" y="30%" intensity={2} label="Illustrations/Painting" href="/projects/sketchbook">
                    <img src="/sketchbook.png" alt="Sketchbook" className="w-80 h-80 max-w-none" />
                </Prop>
                <Prop mobileX="5%" mobileY="50%" x="60%" y="30%" intensity={2} label="Fiber Arts" href="/projects/fiber">
                    <img src="/yarn_basket.png" alt="Yarn Basket" className="w-80 h-80 max-w-none" />
                </Prop>
            </Scene>

            {/* Coder Scene */}
            <Scene id="coder" title="Coder" bgColor="bg-slate-950" isDark={true}>
                <Prop mobileX="-15%" mobileY="15%" x="15%" y="20%" intensity={2} label="Coding Projects" href="/projects/coding">
                    <img src="/laptop.png" alt="Laptop" className="w-120 h-120 max-w-none" />
                </Prop>
                <Prop mobileX="10%" mobileY="60%" x="60%" y="30%" intensity={2} label="Github" href="https://github.com/tsengsational">
                    <img src="/keyboard.png" alt="Keyboard" className="w-80 h-80 max-w-none" />
                </Prop>
            </Scene>
        </main>
    );
}
