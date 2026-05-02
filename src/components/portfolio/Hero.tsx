import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Instagram, MessageCircle } from "lucide-react";
import profile from "@/assets/ana-profile.png";

const WHATSAPP_URL =
  "https://wa.me/5561993378679?text=Ol%C3%A1%20Ana%2C%20vim%20pelo%20seu%20portf%C3%B3lio!";
const INSTAGRAM_URL = "https://instagram.com/anac_roline";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax layers — different speeds for depth
  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32"
    >
      {/* Background grid + glow with parallax */}
      <motion.div
        style={{ y: gridY }}
        className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      />
      <motion.div
        style={{ y: glowY }}
        className="pointer-events-none absolute -top-24 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl"
      />
      <motion.div
        style={{ y: glowY, opacity }}
        className="pointer-events-none absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-accent-glow/10 blur-3xl"
      />

      <motion.div style={{ y: contentY }} className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.3fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Ana Nascimento
            <span className="mt-2 block text-2xl font-medium text-muted-foreground sm:text-3xl">
              <span className="text-gradient">Desenvolvedora</span>{" "}
              <span className="text-muted-foreground/70">&</span>{" "}
              <span className="text-gradient">Analista de BI</span>
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Estudante de Ciência da Computação apaixonada por transformar dados em
            soluções. Construo desde dashboards em Power BI até APIs e interfaces
            web modernas.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-all hover:shadow-[0_8px_30px_-8px] hover:shadow-accent"
            >
              Ver projetos
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.74_0.17_150)]/40 bg-[oklch(0.74_0.17_150)]/10 px-5 py-3 text-sm font-semibold text-[oklch(0.82_0.17_150)] transition-colors hover:bg-[oklch(0.74_0.17_150)] hover:text-background"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              <Instagram className="h-4 w-4" />
              @anac_roline
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8 max-w-md">
            <div>
              <dt className="text-xs uppercase tracking-wide text-muted-foreground">Foco</dt>
              <dd className="mt-1 text-sm font-semibold text-foreground">Data & Web</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-muted-foreground">Local</dt>
              <dd className="mt-1 text-sm font-semibold text-foreground">Brasília · DF</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-muted-foreground">Status</dt>
              <dd className="mt-1 text-sm font-semibold text-accent">Estagiária BI</dd>
            </div>
          </dl>
        </motion.div>

        <motion.div
          style={{ y: imageY }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="relative mx-auto"
        >
          <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-accent/30 via-transparent to-accent-glow/30 blur-3xl" />
          <div className="relative aspect-square w-64 sm:w-80 animate-float">
            <img
              src={profile}
              alt="Ana Nascimento — Desenvolvedora e Analista de BI"
              className="h-full w-full object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.5)]"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-border bg-surface-elevated px-4 py-2 font-mono text-xs text-muted-foreground shadow-xl">
            <span className="text-accent">●</span> Brasília, BR
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
