"use client";

import { motion } from 'motion/react';
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px] opacity-50 pointer-events-none"/>
            <div className="absolute inset-0 bg-[linear-gradient(to_right, rgba(255, 255, 255, 0.04)_1px, transparent_1px), linear-gradient(to_bottom, rgba(255, 255, 255, 0.04)_1px, transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%, rgb(0, 0, 0)_70%, transparent_100%)] pointer-events-none"/>

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1]}}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface mb-8">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                        <span className="text-xs font-medium tracking-wide text-muted uppercase">ORIGIN AI v1.0 currently in development</span>
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-6"
                >
                    Building the Future <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-muted lg:whitespace-nowrap">with Agentic Artificial Intelligence</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10"
                >
                    We are an AI company built by Indian Founders with an aim to provide accessible and affordable AI to everyone.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        href="/projects"
                        className="w-full sm:w-auto px-8 py-4 rounded-full bg-accent text-white font-medium hover:bg-accent/90 transition-colors flex items-center justify-center gap-2"
                    >
                        Explore Projects
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"/>
                            <path d="m12 5 7 7-7 7"/>
                        </svg>
                    </Link>
                    <Link
                        href="/news"
                        className="w-full sm:w-auto px-8 py-4 rounded-full bg-surface border border-border text-white font-medium hover:bg-surface-hover transition-colors flex items-center justify-center"
                    >
                        Read News
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

