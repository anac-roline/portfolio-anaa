import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import apiImg from "@/assets/project-api.jpg";
import arduinoImg from "@/assets/project-arduino.jpg";
import esteticaImg from "@/assets/project-estetica.jpg";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  category: string;
};

const projects: Project[] = [
  {
    title: "Dashboard Power BI",
    description:
      "Modelagem e visualização de dados corporativos com KPIs interativos e drill-through, aplicados na rotina de BI.",
    image: apiImg,
    tags: ["Power BI", "SQL Server", "T-SQL", "DAX"],
    github: "https://github.com/anac-roline/POWER-BI",
    category: "Data & BI",
  },
  {
    title: "API do Zero",
    description:
      "API REST completa para manipulação de dados e integração com aplicações externas, com autenticação e rotas modulares.",
    image: apiImg,
    tags: ["Node.js", "Express", "JavaScript"],
    github: "https://github.com/anac-roline/minha-api",
    category: "Web Dev",
  },
  {
    title: "Lixeira Automática",
    description:
      "Sistema IoT com Arduino que detecta aproximação e abre a tampa automaticamente. Projeto base de automação e prototipagem.",
    image: arduinoImg,
    tags: ["Arduino", "C++", "IoT", "Sensores"],
    github: "https://github.com/anac-roline/lixeira-automatica",
    category: "Embarcados",
  },
  {
    title: "Interface Sistema de Notas",
    description:
      "Interface gráfica em Tkinter para gestão de notas acadêmicas, com persistência e usabilidade pensada para o usuário final.",
    image: apiImg,
    tags: ["Python", "Tkinter", "UX"],
    github: "https://github.com/anac-roline/interface_sistem_de_notas",
    category: "Desktop",
  },
  {
    title: "Site Estética",
    description:
      "Site institucional responsivo para negócio de estética, com galeria, serviços e contato — foco em conversão.",
    image: esteticaImg,
    tags: ["HTML", "CSS", "JavaScript", "Responsivo"],
    github: "https://github.com/anac-roline/Site",
    category: "Web Dev",
  },
  {
    title: "Hackathon Segurança",
    description:
      "Projeto desenvolvido na Campus Party Brasília 2025, focado em soluções de segurança da informação.",
    image: esteticaImg,
    tags: ["HTML", "JavaScript", "Hackathon"],
    github: "https://github.com/anac-roline/hackathon_seguranca",
    category: "Hackathon",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-end justify-between gap-6"
        >
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              // projetos
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Coisas que construí
            </h2>
            <p className="mt-4 text-muted-foreground">
              Uma seleção dos projetos que melhor representam minha jornada entre
              dados e desenvolvimento web.
            </p>
          </div>
          <a
            href="https://github.com/anac-roline"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
          >
            <Github className="h-4 w-4" />
            Todos no GitHub
          </a>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/5"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[oklch(0.14_0.012_240)]">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-contain p-2 transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <span className="absolute left-3 top-3 rounded-full border border-border bg-background/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground backdrop-blur">
                  {p.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
                  {p.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-md border border-border/60 bg-secondary/40 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex items-center gap-2 border-t border-border pt-4">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-border bg-secondary/40 px-3 py-2 text-xs font-medium text-foreground transition-colors hover:bg-secondary"
                    >
                      <Github className="h-3.5 w-3.5" />
                      Código
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-accent/40 bg-accent/10 px-3 py-2 text-xs font-medium text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
