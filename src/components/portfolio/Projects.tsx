import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import apiImg from "@/assets/project-api.jpg";
import esteticaImg from "@/assets/project-estetica.jpg";

import lixeiraImg from "@/assets/project-lixeira.jpg";
import notasImg from "@/assets/project-notas.png";
import hackathonImg from "@/assets/project-hackathon.jpg";
import checklistImg from "@/assets/project-checklist.png";

type Project = {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  imageFit?: "cover" | "contain";
  imagePosition?: string;
  imageScale?: number;
  tags: string[];
  github?: string;
  demo?: string;
  category: string;
  highlights: string[];
};

const projects: Project[] = [
  {
    title: "Hackathon Segurança",
    description:
      "Projeto desenvolvido na Campus Party Brasília 2025, focado em segurança da informação.",
    longDescription:
      "Solução criada em equipe durante o hackathon da Campus Party Brasília 2025, com foco em conscientização e prevenção de ameaças de segurança da informação para usuários finais.",
    image: hackathonImg,
    imageFit: "cover",
    imagePosition: "center",
    imageScale: 1.13,
    tags: ["HTML", "JavaScript", "Hackathon"],
    github: "https://github.com/anac-roline/hackathon_seguranca",
    category: "Hackathon",
    highlights: [
      "Desenvolvido em 48h",
      "Trabalho em equipe",
      "Tema: cibersegurança",
      "Prototipagem rápida",
    ],
  },
  {
    title: "Checklist de Produtividade",
    description:
      "Planilha de organização pessoal com tema lúdico (Rapunzel), agrupando tarefas diárias por contexto.",
    longDescription:
      "Checklist de produtividade pessoal — AnaCode — montado em planilha com hierarquia de tarefas e plano de ação. Agrupa rotinas de casa, estudo e cuidado com pets em blocos colapsáveis para facilitar o foco diário.",
    image: checklistImg,
    imageFit: "contain",
    tags: ["Produtividade", "Organização", "Planilha"],
    category: "Pessoal",
    highlights: [
      "Tarefas agrupadas por contexto",
      "Hierarquia tarefa → plano de ação",
      "Tema visual personalizado",
      "Rotina diária estruturada",
    ],
  },
  {
    title: "Site Estética",
    description:
      "Site institucional responsivo para negócio de estética, com galeria e contato.",
    longDescription:
      "Site institucional desenvolvido com HTML, CSS e JavaScript puro. Layout responsivo, galeria de serviços, formulário de contato e integração com WhatsApp para conversão direta de clientes.",
    image: esteticaImg,
    imageFit: "contain",
    imagePosition: "center",
    imageScale: 1.35,
    tags: ["HTML", "CSS", "JavaScript", "Responsivo"],
    github: "https://github.com/anac-roline/Site",
    category: "Web Dev",
    highlights: [
      "Layout 100% responsivo",
      "Galeria de serviços",
      "Integração WhatsApp",
      "Performance otimizada",
    ],
  },
  {
    title: "API do Zero",
    description:
      "API REST completa para manipulação de dados e integração com aplicações externas.",
    longDescription:
      "Construção de uma API REST do zero usando Node.js e Express, com rotas modulares, middlewares de autenticação e padrão MVC. Pensada como projeto-base para entender o ciclo completo de uma API.",
    image: apiImg,
    tags: ["Node.js", "Express", "JavaScript"],
    github: "https://github.com/anac-roline/minha-api",
    category: "Web Dev",
    highlights: [
      "Rotas RESTful organizadas",
      "Middleware de autenticação",
      "Validação de entrada",
      "Documentação clara",
    ],
  },
  {
    title: "Interface Sistema de Notas",
    description:
      "Interface gráfica em Tkinter para gestão de notas acadêmicas, com persistência.",
    longDescription:
      "Aplicação desktop em Python/Tkinter para cadastro e cálculo de médias acadêmicas. Foco em usabilidade, persistência local de dados e organização modular do código.",
    image: notasImg,
    imageScale: 1.25,
    tags: ["Python", "Tkinter", "UX"],
    github: "https://github.com/anac-roline/interface_sistem_de_notas",
    category: "Desktop",
    highlights: [
      "GUI nativa em Tkinter",
      "Persistência em arquivo",
      "Cálculo automático de médias",
      "Validação de formulários",
    ],
  },
  {
    title: "Lixeira Automática",
    description:
      "Sistema IoT com Arduino que detecta aproximação e abre a tampa automaticamente.",
    longDescription:
      "Projeto de automação com Arduino usando sensor ultrassônico HC-SR04 e servo motor. Detecta a aproximação do usuário e abre a tampa da lixeira sem contato, ideal para ambientes que exigem higiene.",
    image: lixeiraImg,
    imageFit: "cover",
    imagePosition: "center",
    tags: ["Arduino", "C++", "IoT", "Sensores"],
    github: "https://github.com/anac-roline/lixeira-automatica",
    category: "Embarcados",
    highlights: [
      "Sensor ultrassônico HC-SR04",
      "Servo motor controlado",
      "Lógica de debounce",
      "Prototipagem em protoboard",
    ],
  },
];

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

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
              Clique em um projeto para ver detalhes, destaques técnicos e a
              imagem completa.
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
              <button
                type="button"
                onClick={() => setSelected(p)}
                aria-label={`Ver detalhes de ${p.title}`}
                className="relative block aspect-[16/10] w-full overflow-hidden bg-[oklch(0.14_0.012_240)] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  style={{ objectPosition: p.imagePosition ?? "center", transform: p.imageScale ? `scale(${p.imageScale})` : undefined }}
                  className={`h-full w-full transition-transform duration-700 group-hover:scale-[1.03] ${
                    (p.imageFit ?? "contain") === "cover"
                      ? "object-cover"
                      : "object-contain p-2"
                  }`}
                />
                <span className="absolute left-3 top-3 rounded-full border border-border bg-background/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground backdrop-blur">
                  {p.category}
                </span>
                <span className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-background/80 via-transparent to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="rounded-full bg-accent px-3 py-1 text-[11px] font-semibold text-accent-foreground">
                    Ver detalhes
                  </span>
                </span>
              </button>

              <div className="flex flex-1 flex-col p-5">
                <button
                  type="button"
                  onClick={() => setSelected(p)}
                  className="text-left text-lg font-semibold text-foreground transition-colors hover:text-accent focus:outline-none"
                >
                  {p.title}
                </button>
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
                  <button
                    type="button"
                    onClick={() => setSelected(p)}
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-accent/40 bg-accent/10 px-3 py-2 text-xs font-medium text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Detalhes
                  </button>
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer noopener"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-border bg-secondary/40 px-3 py-2 text-xs font-medium text-foreground transition-colors hover:bg-secondary"
                      aria-label="Abrir repositório no GitHub"
                    >
                      <Github className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer noopener"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-accent/40 bg-accent/10 px-3 py-2 text-xs font-medium text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
                      aria-label="Abrir demo"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-background/80 p-4 backdrop-blur-md"
            onClick={() => setSelected(null)}
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur transition-colors hover:bg-secondary"
                aria-label="Fechar"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="max-h-[85vh] overflow-y-auto">
                <div className="relative bg-[oklch(0.14_0.012_240)] p-4">
                  <img
                    src={selected.image}
                    alt={selected.title}
                    className="mx-auto max-h-[55vh] w-auto max-w-full object-contain"
                  />
                </div>

                <div className="p-6 sm:p-8">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
                    {selected.category}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold tracking-tight">
                    {selected.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {selected.longDescription}
                  </p>

                  <h4 className="mt-6 text-xs font-semibold uppercase tracking-wider text-foreground">
                    Destaques
                  </h4>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {selected.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 rounded-lg border border-border/60 bg-surface-elevated/60 p-3 text-sm text-muted-foreground"
                      >
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <h4 className="mt-6 text-xs font-semibold uppercase tracking-wider text-foreground">
                    Tecnologias
                  </h4>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {selected.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-md border border-border/60 bg-secondary/40 px-2 py-1 font-mono text-[11px] text-muted-foreground"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap gap-3 border-t border-border pt-5">
                    {selected.github && (
                      <a
                        href={selected.github}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/40 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                      >
                        <Github className="h-4 w-4" />
                        Ver no GitHub
                      </a>
                    )}
                    {selected.demo && (
                      <a
                        href={selected.demo}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-2 rounded-lg border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Abrir demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
