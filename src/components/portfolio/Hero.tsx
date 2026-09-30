import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDownRight, Github, Instagram, Linkedin, MessageCircle } from "lucide-react";
import profile from "@/assets/ana-profile-portrait.png";
import brazilLandscape from "@/assets/brazil-landscape.jpg";
import { useIsMobile } from "@/hooks/use-mobile";

const nav = [
  ["#home", "Sobre"],
  ["#skills", "Skills"],
  ["#projects", "Work"],
  ["#timeline", "Trajetória"],
  ["#contact", "Contato"],
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const allowParallax = !isMobile && !reduceMotion;

  return (
    <section ref={sectionRef} id="home" className="relative overflow-hidden bg-paper text-ink">
      <div
        className="hero-masthead"
        style={{ backgroundImage: `linear-gradient(90deg, color-mix(in oklab, var(--charcoal) 74%, transparent), color-mix(in oklab, var(--charcoal) 25%, transparent)), url(${brazilLandscape})` }}
      >
        <div className="mx-auto h-full max-w-6xl" />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <div className="relative grid grid-cols-1 gap-7 pb-10 pt-20 sm:pb-14 sm:pt-24 lg:min-h-[300px] lg:grid-cols-[120px_170px_1fr] lg:items-center lg:gap-8 lg:py-10">
          <aside className="hidden lg:block">
            <nav aria-label="Navegação da apresentação">
              <ul className="relative space-y-4 border-l border-ink/25 pl-5">
                {nav.map(([href, label], index) => (
                  <li key={href} className="relative">
                    <span className={`absolute -left-[23px] top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full ${index === 0 ? "bg-accent" : "bg-ink/30"}`} />
                    <a href={href} className="text-[11px] font-semibold uppercase text-ink/55 transition-colors hover:text-accent">{label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <div className="absolute left-1/2 top-0 h-36 w-36 -translate-x-1/2 -translate-y-1/2 sm:h-44 sm:w-44 lg:static lg:h-44 lg:w-44 lg:translate-x-0 lg:translate-y-0">
            <motion.div style={{ y: allowParallax ? portraitY : 0 }} className="h-full w-full">
              <img
                src={profile}
                alt="Ana Nascimento"
                className="h-full w-full rounded-full border-[6px] border-paper object-cover shadow-editorial"
                loading="eager"
              />
            </motion.div>
          </div>

          <motion.div style={{ y: allowParallax ? titleY : 0 }} className="text-center lg:text-left">
            <p className="mb-2 text-[10px] font-semibold uppercase text-accent sm:text-xs">Desenvolvedora & Analista de BI</p>
            <h1 className="font-heading text-5xl leading-none sm:text-6xl">Ana <em>Nascimento</em></h1>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-ink/65 lg:mx-0">
              Estudante de Ciência da Computação apaixonada por transformar dados em soluções — de dashboards e análises a interfaces web modernas.
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
              <a href="#projects" className="inline-flex min-h-11 w-full items-center justify-center gap-2 bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-ink hover:text-paper min-[420px]:w-auto">Conheça meu trabalho <ArrowDownRight className="h-4 w-4" /></a>
              <a href="https://wa.me/5561993378679" target="_blank" rel="noreferrer noopener" className="social-icon" aria-label="WhatsApp"><MessageCircle /></a>
              <a href="https://instagram.com/anac_roline" target="_blank" rel="noreferrer noopener" className="social-icon" aria-label="Instagram"><Instagram /></a>
              <a href="https://www.linkedin.com/in/ana-c-l-nascimento-171680111" target="_blank" rel="noreferrer noopener" className="social-icon" aria-label="LinkedIn"><Linkedin /></a>
              <a href="https://github.com/anac-roline" target="_blank" rel="noreferrer noopener" className="social-icon" aria-label="GitHub"><Github /></a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="bg-secondary py-5 text-ink sm:py-6">
        <p className="mx-auto max-w-4xl px-5 text-center font-heading text-lg italic leading-snug text-ink/75 sm:px-6 sm:text-xl">
          “Dados contam histórias. Código transforma essas histórias em experiências.”
        </p>
      </div>
    </section>
  );
}