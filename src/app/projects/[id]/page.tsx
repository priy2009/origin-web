import Link from 'next/link';
import { projects } from '@/lib/data';

export default async function ProjectDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find(p => p.id === id) || projects[0];

  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <article className="max-w-4xl mx-auto">
        <Link href="/projects" className="text-accent hover:underline mb-8 inline-block">&larr; Back to Projects</Link>
        
        <div className="text-6xl font-mono font-bold text-surface mb-4">
          {project.id}
        </div>
        
        <h1 className="text-4xl md:text-6xl font-medium mb-6">{project.name}</h1>
        
        <div className="flex flex-wrap gap-3 mb-12">
          {project.tags.map((tag) => (
            <span key={tag} className="px-4 py-2 text-sm font-mono rounded-full border border-border bg-surface text-muted">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-2xl text-muted mb-8 leading-relaxed">{project.description}</p>
          
          <div className="h-px w-full bg-border/50 my-12" />
          
          <h2 className="text-2xl font-medium mb-6">Project Overview</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            {project.fullDescription}
          </p>
          
          <h2 className="text-2xl font-medium mt-12 mb-6">Technical Details</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            {project.name}
          </p>
        </div>
      </article>
    </main>
  );
}
