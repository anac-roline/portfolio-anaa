import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Sparkles } from "lucide-react";
import profile from "@/assets/ana-profile.png";

const values = [
  ["Clareza", "Dado sem interpretação é ruído. Entregamos leitura, não relatório."],
  ["Rigor", "Modelagem correta, código limpo e documentação que sobrevive ao tempo."],
  ["Proximidade", "Poucos projetos por vez, acompanhamento direto com quem decide."],
];

const journey = [
  {
    icon: Briefcase,
    title: "Estagiária de BI · Mútua",
    period: "Atual",
    text: "Modelagem de dados, T-SQL e dashboards em Power BI para apoiar decisões de negócio.",
  },
  {
    icon: GraduationCap,
    title: "Ciência da Computação",
    period: "Em andamento",
    text: "Algoritmos, estruturas de dados, banco de dados, engenharia de software e IA.",
  },
  {
    icon: Sparkles,
    title: "Projetos & Hackathons",
    period: "Contínuo",
    text: "IoT - Arduino a APIs Node, incluindo hackathons. Estamos todo ano na Campus Party.",
  },
];

export default function About() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-36 pb-20 sm:pt-44">
        <p className="text-[11px] tracking-[0.32em] text-accent">SOBRE</p>

        <div className="mt-10 grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl border border-border bg-surface">
              <img
                src={profile}
                alt="Ana Nascimento, presidente e fundadora da NEX"
                className="aspect-[4/5] w-full object-cover object-top"
                loading="eager"
              />
            </div>
            <div className="mt-4 flex items-baseline justify-between border-t border-border pt-4">
              <p className="text-sm font-medium">Ana Nascimento</p>
              <p className="text-xs tracking-[0.18em] text-muted-foreground">
                PRESIDENTE & FUNDADORA
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-3xl font-light leading-tight tracking-tight sm:text-5xl">
              À frente da NEX,
              <span className="block font-semibold">
                unindo dados e software.
              </span>
            </h1>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Sou Ana Nascimento, presidente e fundadora da NEX. Estudante de
                Ciência da Computação e analista de BI, criei a organização para
                aproximar duas coisas que costumam andar separadas: a
                inteligência dos dados e a experiência de um produto bem feito.
              </p>
              <p>
                Trabalho com modelagem de dados, T-SQL e Power BI no dia a dia, e
                construo interfaces e APIs com React e Node. Essa dupla formação
                permite que a NEX entregue desde um dashboard executivo até uma
                aplicação completa, sem intermediários.
              </p>
              <p>
                A operação é conduzida em Brasília, com poucos projetos por vez e
                acompanhamento direto - cada entrega passa pelas minhas mãos.
              </p>
            </div>

            <dl className="mt-12 grid gap-px border-t border-border sm:grid-cols-3">
              {values.map(([title, text]) => (
                <div key={title} className="border-b border-border py-6 sm:pr-6">
                  <dt className="text-sm font-medium">{title}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {text}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <p className="text-[11px] tracking-[0.32em] text-accent">TRAJETÓRIA</p>
          <ul className="mt-10 space-y-px">
            {journey.map((j, i) => {
              const Icon = j.icon;
              return (
                <motion.li
                  key={j.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="grid gap-4 border-t border-border py-8 last:border-b sm:grid-cols-[auto_1fr_auto] sm:items-baseline"
                >
                  <Icon className="h-5 w-5 text-accent" />
                  <div>
                    <h2 className="text-base font-medium">{j.title}</h2>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                      {j.text}
                    </p>
                  </div>
                  <span className="text-xs tracking-[0.18em] text-muted-foreground">
                    {j.period.toUpperCase()}
                  </span>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
