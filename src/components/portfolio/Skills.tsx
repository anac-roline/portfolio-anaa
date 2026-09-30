import { motion } from "framer-motion";
import { BarChart3, Braces, Code2, Database, Layout, Server } from "lucide-react";

const skills = [
  { title: "Data & BI", detail: "SQL Server · Power BI · T-SQL · Python", icon: BarChart3 },
  { title: "Frontend", detail: "React · JavaScript · HTML · CSS", icon: Layout },
  { title: "Backend", detail: "Node.js · APIs REST · Integrações", icon: Server },
  { title: "Código", detail: "Git · Python · Boas práticas", icon: Braces },
];

export function Skills() {
  return (
    <section id="skills" className="bg-charcoal py-12 text-paper sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <div className="mb-8 text-center">
          <div>
            <p className="section-kicker text-accent">Competências</p>
            <h2 className="mt-2 font-sans text-2xl font-light uppercase text-paper sm:text-3xl">SKILLS</h2>
          </div>
          <Code2 className="mx-auto mt-3 h-5 w-5 text-accent" />
        </div>
        <div className="grid grid-cols-1 border-y border-paper/15 min-[520px]:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.article
                key={skill.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group border-b border-paper/15 px-4 py-6 text-center min-[520px]:border-r lg:border-b-0 lg:py-7 last:border-r-0"
              >
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-paper/25 text-paper/70 transition-colors group-hover:border-accent group-hover:text-accent sm:h-16 sm:w-16">
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.25} />
                </span>
                <h3 className="mt-5 text-xs font-semibold uppercase">{skill.title}</h3>
                <p className="mt-2 text-xs leading-5 text-paper/45">{skill.detail}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}