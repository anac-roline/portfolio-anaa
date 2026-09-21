import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Cpu, Database } from "lucide-react";
import { ParticleField } from "@/components/nex/ParticleField";

const pillars = [
  {
    icon: BarChart3,
    title: "Business Intelligence",
    text: "Modelagem de dados, T-SQL e dashboards em Power BI que apoiam decisão real.",
  },
  {
    icon: Cpu,
    title: "Desenvolvimento Web",
    text: "Interfaces e APIs modernas com React, Node e boas práticas de engenharia.",
  },
  {
    icon: Database,
    title: "Dados & Automação",
    text: "Pipelines, integrações e automações em Python para eliminar trabalho manual.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-screen items-center overflow-hidden bg-surface-deep">
        <ParticleField className="absolute inset-0 h-full w-full" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,var(--surface-deep)_85%)]" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-4xl px-6 text-center"
        >
          <p className="text-[11px] tracking-[0.4em] text-accent-soft">
            NEX · TECNOLOGIA & DADOS
          </p>
          <h1 className="mt-6 text-4xl font-light leading-[1.1] tracking-tight text-inverse sm:text-6xl lg:text-7xl">
            Transformando dados
            <span className="block font-semibold text-accent-soft">
              em decisões
            </span>
          </h1>
          <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-inverse-muted">
            Somos uma organização de tecnologia dedicada a inteligência de dados,
            software sob medida e automação — do dado bruto à interface final.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/projetos"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-xs tracking-[0.18em] text-accent-foreground transition-opacity hover:opacity-90"
            >
              VER PROJETOS
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/sobre"
              className="inline-flex items-center gap-2 rounded-full border border-inverse-muted/30 px-6 py-3 text-xs tracking-[0.18em] text-inverse transition-colors hover:border-accent-soft hover:text-accent-soft"
            >
              SOBRE A NEX
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-[11px] tracking-[0.32em] text-accent">
              O QUE FAZEMOS
            </p>
            <h2 className="mt-5 text-3xl font-light leading-tight tracking-tight sm:text-4xl">
              Três frentes,
              <span className="block font-semibold">um mesmo padrão.</span>
            </h2>
          </div>

          <ul className="space-y-px">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.li
                  key={p.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex gap-6 border-t border-border py-8 last:border-b"
                >
                  <Icon className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <h3 className="text-base font-medium">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {p.text}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-16 sm:grid-cols-4">
          {[
            ["06+", "Projetos entregues"],
            ["BI", "Foco em dados"],
            ["DF", "Brasília · Brasil"],
            ["24h", "Tempo de resposta"],
          ].map(([k, v]) => (
            <div key={v}>
              <p className="text-3xl font-light text-accent">{k}</p>
              <p className="mt-2 text-xs tracking-wide text-muted-foreground">
                {v}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24 text-center sm:py-32">
        <h2 className="text-3xl font-light tracking-tight sm:text-4xl">
          Tem um desafio de dados ou produto?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
          Conte o contexto e retornamos com uma proposta objetiva.
        </p>
        <Link
          to="/contato"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-xs tracking-[0.18em] text-accent-foreground transition-opacity hover:opacity-90"
        >
          FALE CONOSCO
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </>
  );
}
