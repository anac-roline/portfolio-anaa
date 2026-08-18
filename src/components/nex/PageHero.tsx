import { motion } from "framer-motion";

type Props = {
  image: string;
  eyebrow: string;
  title: React.ReactNode;
  text?: string;
};

export function PageHero({ image, eyebrow, title, text }: Props) {
  return (
    <section className="relative min-h-[360px] overflow-hidden border-b border-border sm:min-h-[460px]">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        width={1600}
        height={700}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-background/25" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/20" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto flex h-full min-h-[360px] max-w-6xl flex-col justify-center px-4 py-28 sm:min-h-[460px] sm:px-6 sm:py-32"
      >
        <p className="text-[11px] tracking-[0.32em] text-accent">{eyebrow}</p>
        <h1 className="mt-5 max-w-2xl text-3xl font-light leading-tight tracking-tight sm:text-5xl">
          {title}
        </h1>
        {text && (
          <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
            {text}
          </p>
        )}
      </motion.div>
    </section>
  );
}
