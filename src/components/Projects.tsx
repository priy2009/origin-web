"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { projects } from "@/lib/data";

export function Projects() {
    return (
        <section id="projects" className="py-32 px-6 relative bg-surface/30">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
                <div>
                    <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">Featured Projects</h2>
                    <p className="text-muted text-lg max-w-2xl">Discover the technologies and projects by ORIGIN AI</p>
                </div>
                <Link href="/projects" className="inline-flex items-center text-sm font-medium text-white hover:text-accent transition-colors pb-1 border-b border-white/20 hover:border-accent">
                    View All Projects
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Link
                            href={`/projects/${project.id}`}
                            className="group relative p-8 md:p-10 bg-background border border-border rounded-3xl overflow-hidden hover:border-accent/50 transition-colors duration-300 block h-full"
                        >
                            <div className="absolute top-0 right-0 p-8 text-6xl font-mono font-bold text-surface group-hover:text-surface-hover transition-colors pointer-events-none select-none">
                                {project.id}
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-2xl md:text-3xl font-medium mb-4 group-hover:text-accent transition-colors">{project.name}</h3>
                                <p className="text-muted text-base md:text-lg mb-8 max-w-md">{project.description}</p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-3 py-1 text-xs font-mono rounded-full border border-border bg-surface text-muted group-hover:border-accent/30 transition-colors">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
