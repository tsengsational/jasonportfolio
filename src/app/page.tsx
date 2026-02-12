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
            <Scene id="intro" title="Jason" bgColor="bg-slate-50">
                <div className="flex flex-col md:flex-row items-center gap-12 px-8 max-w-4xl mx-auto h-full justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-64 h-64 rounded-full overflow-hidden border-8 border-white shadow-2xl flex-shrink-0"
                    >
                        <img
                            src="/jason_headshot.png"
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
                <Prop x="20%" y="30%" intensity={15} label="Typewriter">
                    <div className="w-48 h-40 bg-stone-800 rounded-lg shadow-2xl flex items-center justify-center p-4">
                        <div className="w-full h-full bg-stone-700 rounded grid grid-cols-6 gap-1 p-2">
                            {Array.from({ length: 12 }).map((_, i) => (
                                <div key={i} className="w-2 h-2 bg-stone-500 rounded-full" />
                            ))}
                        </div>
                    </div>
                </Prop>
                <Prop x="60%" y="20%" intensity={25} label="Scripts">
                    <div className="w-32 h-44 bg-white shadow-xl border-l-4 border-stone-200 rotate-3 transform p-4">
                        <div className="w-full h-2 bg-stone-100 mb-2" />
                        <div className="w-3/4 h-2 bg-stone-100 mb-2" />
                        <div className="w-5/6 h-2 bg-stone-100" />
                    </div>
                </Prop>
            </Scene>

            {/* Artist Scene */}
            <Scene id="artist" title="Artist" bgColor="bg-amber-950" isDark={true}>
                <Prop x="30%" y="40%" intensity={20} label="Sketchbook">
                    <div className="w-56 h-72 bg-orange-100 shadow-2xl border-l-[12px] border-amber-900 rounded-r-lg p-6">
                        <div className="w-full h-full border border-orange-200/50 flex items-center justify-center">
                            <div className="w-24 h-24 border-2 border-orange-300 rounded-full opacity-20" />
                        </div>
                    </div>
                </Prop>
                <Prop x="65%" y="60%" intensity={30} label="Yarn Basket">
                    <div className="w-40 h-40 bg-amber-800 rounded-full shadow-inner flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/20" />
                        <div className="w-32 h-32 bg-red-900 rounded-full shadow-lg relative z-10" />
                        <div className="absolute w-32 h-1 bg-white/10 rotate-45" />
                    </div>
                </Prop>
            </Scene>

            {/* Coder Scene */}
            <Scene id="coder" title="Coder" bgColor="bg-slate-950" isDark={true}>
                <Prop x="40%" y="35%" intensity={25} label="Laptop">
                    <div className="w-96 h-64 bg-slate-800 rounded-xl shadow-2xl flex flex-col p-2 overflow-hidden border border-slate-700">
                        <div className="h-6 w-full bg-slate-900 flex gap-1 items-center px-2">
                            <div className="w-2 h-2 rounded-full bg-red-500" />
                            <div className="w-2 h-2 rounded-full bg-amber-500" />
                            <div className="w-2 h-2 rounded-full bg-green-500" />
                        </div>
                        <div className="flex-1 bg-black p-4 font-mono text-[10px] text-green-400 overflow-hidden">
                            <p>{">"} npm run dev</p>
                            <p className="opacity-50">sh-3.2$ compiling...</p>
                            <p>{">"} ready on http://localhost:3000</p>
                        </div>
                    </div>
                </Prop>
                <Prop x="15%" y="70%" intensity={15} label="Mechanical Keyboard">
                    <div className="w-64 h-24 bg-slate-800 rounded shadow-xl border-b-4 border-slate-900 grid grid-cols-10 gap-1 p-2">
                        {Array.from({ length: 30 }).map((_, i) => (
                            <div key={i} className="bg-slate-700 rounded-sm" />
                        ))}
                    </div>
                </Prop>
            </Scene>
        </main>
    );
}
