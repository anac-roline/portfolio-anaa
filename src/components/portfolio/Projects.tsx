import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    imageScale: 0.9,
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
    <section id="projects" className="project-texture relative bg-work py-12 text-paper sm:py-14">
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="mx-auto max-w-2xl">
            <p className="section-kicker text-accent">Projetos selecionados</p>
            <h2 className="mt-2 font-sans text-2xl font-light uppercase text-paper sm:text-3xl">WORK</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-paper/55">Aplicações, experiências e protótipos que unem tecnologia, dados e solução de problemas.</p>
          </div>
          <a
            href="https://github.com/anac-roline"
            target="_blank"
            rel="noreferrer noopener"
            className="mt-5 inline-flex items-center gap-2 text-xs uppercase text-paper/60 transition-colors hover:text-accent"
          >
            <Github className="h-4 w-4" />
            Todos no GitHub
          </a>
        </motion.div>

        <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative aspect-[4/3] overflow-hidden bg-charcoal"
            >
              <Button
                type="button"
                variant="ghost"
                onClick={() => setSelected(p)}
                aria-label={`Ver detalhes de ${p.title}`}
                className="relative block h-full w-full overflow-hidden rounded-none bg-paper p-0 focus-visible:ring-2 focus-visible:ring-accent"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  style={{ objectPosition: p.imagePosition ?? "center", transform: p.imageScale ? `scale(${p.imageScale})` : undefined }}
                  className={`h-full w-full grayscale-[65%] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 ${
                    (p.imageFit ?? "contain") === "cover"
                      ? "object-cover"
                      : "object-contain p-2"
                  }`}
                />
                <span className="absolute inset-0 flex flex-col justify-end bg-work-overlay p-3 text-left sm:p-4">
                  <span className="text-[9px] font-semibold uppercase text-accent">{p.category}</span>
                  <span className="mt-1 whitespace-normal font-heading text-lg leading-tight text-paper sm:text-xl">{p.title}</span>
                </span>
              </Button>
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
            className="fixed inset-0 z-[60] flex items-end justify-center bg-background/80 p-0 backdrop-blur-md sm:items-center sm:p-4"
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
              className="relative w-full max-w-3xl overflow-hidden rounded-t-lg border border-border bg-surface shadow-2xl sm:rounded-lg"
            >
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => setSelected(null)}
                className="absolute right-3 top-3 z-10 h-10 w-10 rounded-full border-border bg-background/80 text-foreground backdrop-blur hover:bg-secondary"
                aria-label="Fechar"
              >
                <X className="h-4 w-4" />
              </Button>

              <div className="max-h-[92dvh] overflow-y-auto overscroll-contain sm:max-h-[85vh]">
                <div className="relative bg-charcoal p-3 pt-14 sm:p-4">
                  <img
                    src={selected.image}
                    alt={selected.title}
                    className="mx-auto max-h-[38dvh] w-auto max-w-full object-contain sm:max-h-[55vh]"
                  />
                </div>

                <div className="p-5 sm:p-8">
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
