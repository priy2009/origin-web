import { Hero } from '@/components/Hero';
import { News } from '@/components/News';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <News/>
    </main>
  );
}
