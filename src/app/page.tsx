import { Hero } from '@/components/Hero';
import { News } from '@/components/News';
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero/>
      <News/>
      <Footer/>
    </main>
  );
}
