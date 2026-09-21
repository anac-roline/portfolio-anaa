import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Sparkles } from "lucide-react";

const items = [
  {
    icon: Briefcase,
    title: "Estagiária de BI",
    org: "Mútua",
    period: "Atual",
    description:
      "Atuo com modelagem de dados, T-SQL e desenvolvimento de dashboards no Power BI para apoiar decisões de negócio.",
    accent: true,
  },
  {
    icon: GraduationCap,
    title: "Graduação em Ciência da Computação",
    org: "Em andamento",
    period: "Brasília · DF",
    description:
      "Aprofundamento em algoritmos, estruturas de dados, banco de dados, engenharia de software e IA.",
  },
  {
    icon: Sparkles,
    title: "Projetos pessoais & Hackathons",
    org: "Open Source",
    period: "Contínuo",
    description:
      "Desde lixeira IoT com Arduino até APIs Node e participação em hackathons da Campus Party.",
  },
];

export function Timeline() {
  return (
    <section id="timeline" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            // trajetória
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Onde estou e como cheguei aqui
          </h2>
        </motion.div>

        <ol className="relative mt-12 border-l border-border pl-6">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative pb-10 last:pb-0"
              >
                <span
                  className={`absolute -left-[34px] flex h-8 w-8 items-center justify-center rounded-full border ${
                    item.accent
                      ? "border-accent/50 bg-accent/15 text-accent"
                      : "border-border bg-surface text-muted-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </span>

                <div className="rounded-2xl border border-border bg-surface/60 p-5 backdrop-blur">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-base font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <span className="font-mono text-xs text-muted-foreground">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-accent">
                    {item.org}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
