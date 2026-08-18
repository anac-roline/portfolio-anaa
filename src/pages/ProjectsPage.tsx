import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import { projects, type Project } from "@/data/projects";

export default function ProjectsPage() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section className="mx-auto max-w-6xl px-4 pt-28 pb-20 sm:px-6 sm:pt-44 sm:pb-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-2xl">
          <p className="text-[11px] tracking-[0.32em] text-accent">PROJETOS</p>
          <h1 className="mt-5 text-3xl font-light leading-tight tracking-tight sm:text-5xl">
            Trabalhos e
            <span className="block font-semibold">experimentos da NEX.</span>
          </h1>
          <p className="mt-5 text-muted-foreground">
            Clique em um projeto para ver detalhes, destaques técnicos e a
            imagem completa.
          </p>
        </div>
        <a
          href="https://github.com/anac-roline"
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 text-xs tracking-[0.18em] text-muted-foreground transition-colors hover:text-accent"
        >
          <Github className="h-4 w-4" />
          GITHUB
        </a>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className="group flex flex-col"
          >
            <button
              type="button"
              onClick={() => setSelected(p)}
              aria-label={`Ver detalhes de ${p.title}`}
              className="relative block aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border bg-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                style={{
                  objectPosition: p.imagePosition ?? "center",
                  transform: p.imageScale ? `scale(${p.imageScale})` : undefined,
                }}
                className={`h-full w-full transition-transform duration-700 group-hover:scale-[1.02] ${
                  (p.imageFit ?? "contain") === "cover"
                    ? "object-cover"
                    : "object-contain p-3"
                }`}
              />
            </button>

            <div className="flex flex-1 flex-col pt-5">
              <p className="text-[10px] tracking-[0.22em] text-muted-foreground">
                {p.category.toUpperCase()}
              </p>
              <button
                type="button"
                onClick={() => setSelected(p)}
                className="mt-2 text-left text-lg font-medium transition-colors hover:text-accent"
              >
                {p.title}
              </button>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-border px-2.5 py-0.5 text-[11px] text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/40 p-4 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 12 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-border bg-background p-6 sm:p-8"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-[10px] tracking-[0.22em] text-accent">
                    {selected.category.toUpperCase()}
                  </p>
                  <h2 className="mt-2 text-2xl font-medium">
                    {selected.title}
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  aria-label="Fechar"
                  className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-surface">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="max-h-[46vh] w-full object-contain"
                />
              </div>

              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                {selected.longDescription}
              </p>

              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {selected.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {h}
                  </li>
                ))}
              </ul>

              {(selected.github || selected.demo) && (
                <div className="mt-8 flex flex-wrap gap-3 border-t border-border pt-6">
                  {selected.github && (
                    <a
                      href={selected.github}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs tracking-[0.18em] transition-colors hover:border-accent hover:text-accent"
                    >
                      <Github className="h-4 w-4" />
                      CÓDIGO
                    </a>
                  )}
                  {selected.demo && (
                    <a
                      href={selected.demo}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-xs tracking-[0.18em] text-accent-foreground"
                    >
                      <ExternalLink className="h-4 w-4" />
                      DEMO
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
