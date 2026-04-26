import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Timeline } from "@/components/portfolio/Timeline";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ana Nascimento — Desenvolvedora & Analista de BI" },
      {
        name: "description",
        content:
          "Portfólio de Ana Nascimento, desenvolvedora e analista de BI. Projetos com React, Node, Power BI, SQL Server e Python.",
      },
      {
        property: "og:title",
        content: "Ana Nascimento — Desenvolvedora & Analista de BI",
      },
      {
        property: "og:description",
        content:
          "Estudante de Ciência da Computação transformando dados em soluções. Veja meus projetos.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
    </main>
  );
}
