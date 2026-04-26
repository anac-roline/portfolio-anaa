import { motion } from "framer-motion";
import {
  Database,
  BarChart3,
  Code2,
  FileCode,
  Atom,
  Server,
  Braces,
  Layout,
} from "lucide-react";

const groups = [
  {
    title: "Data & BI",
    description: "Modelagem, ETL e visualização de dados.",
    items: [
      { name: "SQL Server", icon: Database },
      { name: "Power BI", icon: BarChart3 },
      { name: "T-SQL", icon: FileCode },
      { name: "Python", icon: Code2 },
    ],
  },
  {
    title: "Web Development",
    description: "Interfaces e APIs modernas, do front ao back.",
    items: [
      { name: "React", icon: Atom },
      { name: "Node.js", icon: Server },
      { name: "JavaScript", icon: Braces },
      { name: "HTML / CSS", icon: Layout },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            // skills
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Stack que uso no dia a dia
          </h2>
          <p className="mt-4 text-muted-foreground">
            Ferramentas que combino para entregar valor — do dado bruto à interface
            final.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {groups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="rounded-2xl border border-border bg-surface/60 p-6 backdrop-blur"
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold text-foreground">
                  {group.title}
                </h3>
                <span className="font-mono text-xs text-muted-foreground">
                  0{gi + 1}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                {group.description}
              </p>

              <ul className="mt-6 grid grid-cols-2 gap-3">
                {group.items.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.05 * i }}
                      className="group flex items-center gap-3 rounded-xl border border-border/60 bg-surface-elevated/60 px-3 py-3 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:bg-surface-elevated"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="text-sm font-medium text-foreground">
                        {item.name}
                      </span>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
