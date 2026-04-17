"use client";

import { motion } from "motion/react";
import Image from "next/image";

const team = [
    {
        name: "Priyanshi Singh",
        role: "Chief Executive Officer, Founder",
        image: "/rickroll.webp",
    },
    {
        name: "Adarsh Gusain",
        role: "Content Strategist, Front-end Developer",
        image: "/rickroll.webp",
    },
];

export function Team() {
    return (
        <section id="team" className="py-32 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 md:mb-24 text-center">
                    <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">Our Team</h2>
                    <p className="text-muted text-lg max-w-2xl mx-auto">Led by teens</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative flex flex-col items-center text-center"
                        >
                            <div className="relative w-full aspect-[4/5] mb-6 rounded-2xl overflow-hidden bg-surface border border-border">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                                    referrerPolicy="no-referrer"
                                />
                                <div className="absolute inset-0 ring-1 ring-inset ring-accent/0 group-hover:ring-accent/50 transition-all duration-300 rounded-2xl pointer-events-none"/>
                                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                            </div>

                            <h3 className="text-xl font-medium mb-1">{member.name}</h3>
                            <p className="text-muted text-sm font-mono">{member.role}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}