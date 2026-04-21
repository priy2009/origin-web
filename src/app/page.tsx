import { Hero } from '@/components/Hero';
import { News } from '@/components/News';
import { Projects } from '@/components/Projects'
import { Footer } from '@/components/Footer'
import { Team } from "@/components/Team";
import { About } from "@/components/About"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero/>
      <News/>
      <Projects/>
      <Team/>
      <About/>
      <Footer/>
    </main>
  );
}
