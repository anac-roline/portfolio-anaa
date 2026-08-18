import { motion } from "framer-motion";
import { PageHero } from "@/components/nex/PageHero";
import headerContact from "@/assets/header-contact.jpg";
import {
  ArrowUpRight,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";

const channels = [
  {
    label: "WhatsApp",
    handle: "(61) 99337-8679",
    href: "https://wa.me/5561993378679?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20NEX!",
    icon: MessageCircle,
  },
  {
    label: "E-mail",
    handle: "lealanacaroline00@gmail.com",
    href: "mailto:lealanacaroline00@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    handle: "in/ana-c-l-nascimento-171680111",
    href: "https://www.linkedin.com/in/ana-c-l-nascimento-171680111",
    icon: Linkedin,
  },
  {
    label: "Instagram",
    handle: "@anac_roline",
    href: "https://instagram.com/anac_roline",
    icon: Instagram,
  },
  {
    label: "GitHub",
    handle: "@anac-roline",
    href: "https://github.com/anac-roline",
    icon: Github,
  },
];

export default function Contact() {
  return (
    <>
      <PageHero
        image={headerContact}
        eyebrow="CONTATO"
        title={
          <>
            Vamos construir
            <span className="block font-semibold">algo juntos.</span>
          </>
        }
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="grid gap-16 lg:grid-cols-[1fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="max-w-md leading-relaxed text-muted-foreground">
            A NEX está aberta a projetos de desenvolvimento, inteligência de
            dados e colaborações open-source. Escolha o canal de sua preferência
            - respondemos em até 24h.
          </p>

          <dl className="mt-12 grid gap-px border-t border-border sm:grid-cols-2">
            <div className="border-b border-border py-6">
              <dt className="text-xs tracking-[0.18em] text-muted-foreground">
                LOCALIZAÇÃO
              </dt>
              <dd className="mt-2 text-sm">Brasília · DF · Brasil</dd>
            </div>
            <div className="border-b border-border py-6 sm:pl-6">
              <dt className="text-xs tracking-[0.18em] text-muted-foreground">
                ATENDIMENTO
              </dt>
              <dd className="mt-2 text-sm">Remoto e presencial no DF</dd>
            </div>
          </dl>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-px"
        >
          {channels.map((c) => {
            const Icon = c.icon;
            return (
              <li key={c.label}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer noopener"
                  className="group flex items-center justify-between gap-4 border-t border-border py-6 transition-colors last:border-b hover:border-accent"
                >
                  <span className="flex items-center gap-4">
                    <Icon className="h-5 w-5 text-accent" />
                    <span>
                      <span className="block text-sm font-medium">
                        {c.label}
                      </span>
                      <span className="block text-sm text-muted-foreground">
                        {c.handle}
                      </span>
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </a>
              </li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
