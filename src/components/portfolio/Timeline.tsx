import { motion } from "framer-motion";

const items = [
  { marker: "AGORA", title: "Estagiária de BI", org: "Mútua", text: "Modelagem de dados, T-SQL e dashboards em Power BI para apoiar decisões de negócio." },
  { marker: "CURSO", title: "Ciência da Computação", org: "Graduação em andamento", text: "Algoritmos, estruturas de dados, banco de dados, engenharia de software e inteligência artificial." },
  { marker: "SEMPRE", title: "Projetos & Hackathons", org: "Aprendizado contínuo", text: "Soluções web, APIs, automação com Arduino e desafios colaborativos de tecnologia." },
];

export function Timeline() {
  return (
    <section id="timeline" className="timeline-paper py-12 text-ink sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        <div className="text-center">
          <p className="section-kicker text-accent">Minha evolução</p>
          <h2 className="mt-2 font-sans text-2xl font-light uppercase sm:text-3xl">TRAJETÓRIA</h2>
        </div>
        <div className="relative mx-auto mt-9 max-w-4xl before:absolute before:bottom-0 before:left-3 before:top-0 before:w-px before:bg-ink/20 sm:before:left-1/2">
          {items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className={`relative mb-5 ml-8 border border-ink/10 bg-paper p-5 sm:ml-0 sm:w-[calc(50%-2rem)] ${index % 2 ? "sm:ml-auto" : "sm:mr-auto"}`}
            >
              <span className={`absolute top-8 h-3 w-3 rounded-full bg-accent ring-4 ring-paper ${index % 2 ? "-left-[2.45rem]" : "-left-[2.45rem] sm:-right-[2.45rem] sm:left-auto"}`} />
              <p className="text-[10px] font-semibold uppercase text-accent">{item.marker}</p>
              <div>
                <h3 className="mt-1 font-heading text-2xl">{item.title}</h3>
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