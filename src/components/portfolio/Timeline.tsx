import { motion } from "framer-motion";

const items = [
  { marker: "AGORA", title: "Estagiária de BI", org: "Mútua", text: "Modelagem de dados, T-SQL e dashboards em Power BI para apoiar decisões de negócio." },
  { marker: "CURSO", title: "Ciência da Computação", org: "Graduação em andamento", text: "Algoritmos, estruturas de dados, banco de dados, engenharia de software e inteligência artificial." },
  { marker: "SEMPRE", title: "Projetos & Hackathons", org: "Aprendizado contínuo", text: "Soluções web, APIs, automação com Arduino e desafios colaborativos de tecnologia." },
];

export function Timeline() {
  return (
    <section id="timeline" className="bg-paper py-24 text-ink sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="section-kicker text-accent">Minha evolução</p>
        <h2 className="section-title text-ink">Trajetória</h2>
        <div className="relative mt-16 border-l border-ink/20 sm:ml-28">
          {items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="relative grid gap-3 border-b border-ink/10 py-10 pl-8 sm:grid-cols-[150px_1fr] sm:gap-8"
            >
              <span className="absolute -left-1.5 top-12 h-3 w-3 rounded-full bg-accent ring-4 ring-paper" />
              <p className="text-[10px] font-semibold uppercase text-accent">{item.marker}</p>
              <div>
                <h3 className="font-heading text-3xl">{item.title}</h3>
                <p className="mt-1 text-sm font-semibold text-ink/55">{item.org}</p>
                <p className="mt-4 max-w-2xl leading-7 text-ink/65">{item.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}