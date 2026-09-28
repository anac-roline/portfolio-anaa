import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDownRight, Github, Instagram, Linkedin, MessageCircle } from "lucide-react";
import profile from "@/assets/ana-profile.png";
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
    <section ref={sectionRef} id="home" className="relative overflow-hidden bg-paper pt-24 text-ink sm:pt-32 lg:pt-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid grid-cols-1 items-end gap-4 sm:gap-8 lg:min-h-[640px] lg:grid-cols-12 lg:gap-10">
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

          <div className="relative order-2 flex h-[350px] items-end sm:h-[470px] md:h-[520px] lg:order-none lg:col-span-4">
            <motion.div style={{ y: allowParallax ? portraitY : 0 }} className="relative mx-auto flex h-full w-full max-w-[430px] items-end justify-center">
              <div className="absolute bottom-8 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full border border-accent/30 sm:h-64 sm:w-64" />
              <img
                src={profile}
                alt="Ana Nascimento"
                className="relative z-10 h-full w-full object-contain object-bottom drop-shadow-editorial"
                loading="eager"
              />
            </motion.div>
          </div>

          <motion.div style={{ y: allowParallax ? titleY : 0 }} className="order-1 pb-4 sm:pb-8 lg:order-none lg:col-span-6 lg:pb-24">
            <p className="mb-3 text-[11px] font-semibold uppercase text-accent sm:mb-5 sm:text-xs">Desenvolvedora & Analista de BI</p>
            <h1 className="font-heading text-5xl leading-[0.92] sm:text-7xl lg:text-8xl">Ana<br /><em>Nascimento</em></h1>
            <p className="mt-5 max-w-xl text-sm leading-6 text-ink/65 sm:mt-8 sm:text-lg sm:leading-7">
              Estudante de Ciência da Computação apaixonada por transformar dados em soluções — de dashboards e análises a interfaces web modernas.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-2 sm:mt-8 sm:gap-3">
              <a href="#projects" className="inline-flex min-h-11 w-full items-center justify-center gap-2 bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-ink hover:text-paper min-[420px]:w-auto">Conheça meu trabalho <ArrowDownRight className="h-4 w-4" /></a>
              <a href="https://wa.me/5561993378679" target="_blank" rel="noreferrer noopener" className="social-icon" aria-label="WhatsApp"><MessageCircle /></a>
              <a href="https://instagram.com/anac_roline" target="_blank" rel="noreferrer noopener" className="social-icon" aria-label="Instagram"><Instagram /></a>
              <a href="https://www.linkedin.com/in/ana-c-l-nascimento-171680111" target="_blank" rel="noreferrer noopener" className="social-icon" aria-label="LinkedIn"><Linkedin /></a>
              <a href="https://github.com/anac-roline" target="_blank" rel="noreferrer noopener" className="social-icon" aria-label="GitHub"><Github /></a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="bg-charcoal py-7 text-paper sm:py-9">
        <p className="mx-auto max-w-4xl px-5 text-center font-heading text-xl italic leading-snug sm:px-6 sm:text-3xl">
          “Dados contam histórias. Código transforma essas histórias em experiências.”
        </p>
      </div>
    </section>
  );
}