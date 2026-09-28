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
    <section id="skills" className="bg-charcoal py-16 text-paper sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mb-10 flex items-end justify-between gap-8 sm:mb-14 lg:mb-16">
          <div>
            <p className="section-kicker text-accent">Competências</p>
            <h2 className="section-title text-paper">SKILLS</h2>
          </div>
          <Code2 className="hidden h-10 w-10 text-accent sm:block" />
        </div>
        <div className="grid grid-cols-1 gap-px border border-paper/15 bg-paper/15 min-[520px]:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.article
                key={skill.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group bg-charcoal p-6 text-center sm:p-8 lg:p-10"
              >
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-paper/25 text-paper/70 transition-colors group-hover:border-accent group-hover:text-accent sm:h-20 sm:w-20">
                  <Icon className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={1.25} />
                </span>
                <h3 className="mt-7 text-sm font-semibold uppercase">{skill.title}</h3>
                <p className="mt-2 text-xs leading-5 text-paper/45">{skill.detail}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}