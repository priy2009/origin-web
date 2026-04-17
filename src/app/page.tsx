import { Hero } from '@/components/Hero';
import { News } from '@/components/News';
import { Footer } from '@/components/Footer'
import { Team } from "@/components/Team";
import { About } from "@/components/About"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero/>
      <News/>
      <Team/>
      <About/>
      <Footer/>
    </main>
  );
}
