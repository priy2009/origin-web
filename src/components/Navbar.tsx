"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
                scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border/50' : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <Image
                        src="/logo.png"
                        alt="logo"
                        width={32}
                        height={32}
                        className="group-hover:scale-105 transition-transform"
                    ></Image>
                    <span className="font-bold tracking-widest text-sm uppercase">
                        ORIGIN AI
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    {['News', 'Projects', 'Team', 'About'].map((item) => (
                        <Link
                            key={item}
                            href={`/${item.toLowerCase()}`}
                            className="text-sm font-medium text-muted hover:text-white transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                <button className="md:hidden text-white">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="4" x2="20" y1="12" y2="12"/>
                        <line x1="4" x2="20" y1="6" y2="6"/>
                        <line x1="4" x2="20" y1="18" y2="18"/>
                    </svg>
                </button>
            </div>
        </motion.nav>
    );
}

