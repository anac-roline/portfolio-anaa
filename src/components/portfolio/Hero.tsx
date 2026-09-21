import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDownRight, Github, Instagram, Linkedin, MessageCircle } from "lucide-react";
import profile from "@/assets/ana-profile.png";

const nav = [
  ["#home", "Sobre"],
  ["#skills", "Skills"],
  ["#projects", "Work"],
  ["#timeline", "Trajetória"],
  ["#contact", "Contato"],
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section ref={sectionRef} id="home" className="relative overflow-hidden bg-paper pt-28 text-ink sm:pt-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid min-h-[640px] grid-cols-1 items-end gap-10 lg:grid-cols-12">
          <aside className="hidden self-center lg:col-span-2 lg:block">
            <nav aria-label="Navegação da apresentação">
              <ul className="relative space-y-5 border-l border-ink/20 pl-5">
                {nav.map(([href, label], index) => (
                  <li key={href} className="relative">
                    <span className={`absolute -left-[23px] top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full ${index === 0 ? "bg-accent" : "bg-ink/30"}`} />
                    <a href={href} className="text-[11px] font-semibold uppercase text-ink/55 transition-colors hover:text-accent">{label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <div className="relative flex min-h-[520px] items-end lg:col-span-4">
            <motion.div style={{ y: portraitY }} className="relative mx-auto w-full max-w-[430px]">
              <div className="absolute bottom-10 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full border border-accent/30" />
              <img
                src={profile}
                alt="Ana Nascimento"
                className="relative z-10 max-h-[560px] w-full object-contain object-bottom drop-shadow-editorial"
                loading="eager"
              />
            </motion.div>
          </div>

          <motion.div style={{ y: titleY }} className="pb-16 lg:col-span-6 lg:pb-24">
            <p className="mb-5 text-xs font-semibold uppercase text-accent">Desenvolvedora & Analista de BI</p>
            <h1 className="font-heading text-6xl leading-[0.92] sm:text-7xl lg:text-8xl">Ana<br /><em>Nascimento</em></h1>
            <p className="mt-8 max-w-xl text-base leading-7 text-ink/65 sm:text-lg">
              Estudante de Ciência da Computação apaixonada por transformar dados em soluções — de dashboards e análises a interfaces web modernas.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-ink hover:text-paper">Conheça meu trabalho <ArrowDownRight className="h-4 w-4" /></a>
              <a href="https://wa.me/5561993378679" target="_blank" rel="noreferrer noopener" className="social-icon" aria-label="WhatsApp"><MessageCircle /></a>
              <a href="https://instagram.com/anac_roline" target="_blank" rel="noreferrer noopener" className="social-icon" aria-label="Instagram"><Instagram /></a>
              <a href="https://www.linkedin.com/in/ana-c-l-nascimento-171680111" target="_blank" rel="noreferrer noopener" className="social-icon" aria-label="LinkedIn"><Linkedin /></a>
              <a href="https://github.com/anac-roline" target="_blank" rel="noreferrer noopener" className="social-icon" aria-label="GitHub"><Github /></a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="bg-charcoal py-9 text-paper">
        <p className="mx-auto max-w-4xl px-6 text-center font-heading text-2xl italic sm:text-3xl">
          “Dados contam histórias. Código transforma essas histórias em experiências.”
        </p>
      </div>
    </section>
  );
}