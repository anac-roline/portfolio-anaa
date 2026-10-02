import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Timeline } from "@/components/portfolio/Timeline";
import { Contact } from "@/components/portfolio/Contact";
import { WhatsAppFab } from "@/components/portfolio/WhatsAppFab";
import { InstagramFeed } from "@/components/portfolio/InstagramFeed";

export default function App() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Timeline />
      <InstagramFeed />
      <Contact />
      <WhatsAppFab />
    </main>
  );
}
