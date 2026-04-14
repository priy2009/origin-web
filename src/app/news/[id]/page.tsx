import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { newsItems } from "@/lib/data";

export default async function NewsArticle({ params }: { params: Promise<{ id: string}> }) {
    const { id } = await params;
    const article = newsItems.find(item => item.id === id) || newsItems[0];

    return (
        <main className="min-h-screen pt-32 pb-20 px-6">
            <article className="max-w-3xl mx-auto">
                <Link href="/news" className="text-accent hover:underline mb-8 inline-block">&larr; Back to News</Link>
                <div className="text-sm font-mono text-muted mb-4">{article.date}</div>
                <h1 className="text-4xl md:text-5xl font-medium mb-8">{article.title}</h1>
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-12">
                    <Image src={article.image} alt={article.title} fill className="object-cover" referrerPolicy="no-referrer"/>
                </div>
                <div className="prose prose-invert max-w-none">
                    <p className="text-xl text-muted mb-6">{article.description}</p>
                    <div className="text-gray-300 leading-relaxed prose prose-invert max-w-none">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {article.news}
                        </ReactMarkdown>
                    </div>
                </div>
            </article>
        </main>
    );
}
