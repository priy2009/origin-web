"use client"

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { newsItems } from "@/lib/data";

export function News() {
    return (
        <section id="news" className="py-32 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 md:mb-24">
                    <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">Latest News</h2>
                    <p className="text-muted text-lg max-w-2xl">Stay updated with our product announcements</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity:0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link
                                href={`/news/${item.id}`}
                                className="group relative flex flex-col bg-surface border border-border rounded-2xl overflow-hidden hover:border-accent/50 transition-colors duration-300 h-full block"
                            >
                                <div className="relative h-48 w-full overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        referrerPolicy="no-referrer"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"/>
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="text-xs font-mono text-accent mb-3">{item.date}</div>
                                    <h3 className="text-xl font-medium mb-3 group-hover:text-accent transition-colors">{item.title}</h3>
                                    <p className="text-muted text-sm mb-6 flex-grow">{item.description}</p>

                                    <div className="inline-flex item-center text-sm font-medium text-white group-hover:text-accent transition-colors mt-auto">
                                        Read More
                                        <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"/>
                                            <path d="m12 5 7 7-7 7"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-accent/0 group-hover:ring-accent/20 group_hover:shadow-[0_0_30px_rgba(255, 106, 0, 0.1) transition-all duration-300 pointer-events-none"/>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

