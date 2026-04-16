import Link from "next/link";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="py-12 px-6 border-t border-border/50 bg-background">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
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
                </div>

                <div className="flex gap-6 text-sm text-muted">
                    <Link href="https://www.instagram.com/orig.in_in/" className="hover:text-white transition-colors">Instagram</Link>
                    <Link href="https://www.linkedin.com/company/origin-ind/" className="hover:text-white transition-colors">LinkedIn</Link>
                    <Link href="#" className="hover:text-white transition-colors">GitHub</Link>
                </div>

                <div className="text-xs text-muted font-mono">
                    &copy; {new Date().getFullYear()} ORIGIN AI. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

