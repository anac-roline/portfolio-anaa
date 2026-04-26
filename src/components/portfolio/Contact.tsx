import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const socials = [
  {
    label: "LinkedIn",
    handle: "in/ana-caroline-leal",
    href: "https://www.linkedin.com/in/ana-caroline-leal/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    handle: "@anac-roline",
    href: "https://github.com/anac-roline",
    icon: Github,
  },
  {
    label: "E-mail",
    handle: "Enviar mensagem",
    href: "mailto:anaclealnasc@gmail.com",
    icon: Mail,
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-border bg-surface p-8 sm:p-14"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-accent-glow/15 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                // contato
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Vamos construir algo{" "}
                <span className="text-gradient">juntos?</span>
              </h2>
              <p className="mt-4 max-w-md text-muted-foreground">
                Aberta a oportunidades em desenvolvimento, BI ou colaborações em
                projetos open-source. Respondo em até 24h.
              </p>
            </div>

            <ul className="space-y-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer noopener"
                      className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-surface-elevated/60 p-4 transition-all hover:-translate-y-0.5 hover:border-accent/40"
                    >
                      <span className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                          <Icon className="h-4 w-4" />
                        </span>
                        <span>
                          <span className="block text-sm font-semibold text-foreground">
                            {s.label}
                          </span>
                          <span className="block font-mono text-xs text-muted-foreground">
                            {s.handle}
                          </span>
                        </span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </motion.div>

        <footer className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Ana Caroline Leal. Construído com React + Tailwind.</p>
          <p className="font-mono">Brasília · DF · Brasil</p>
        </footer>
      </div>
    </section>
  );
}
