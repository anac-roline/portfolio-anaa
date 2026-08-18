import { motion } from "framer-motion";

type Props = {
  image: string;
  eyebrow: string;
  title: React.ReactNode;
  text?: string;
};

export function PageHero({ image, eyebrow, title, text }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        width={1600}
        height={600}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-background/75 backdrop-blur-[2px]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/70" />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-6xl px-4 pt-28 pb-14 sm:px-6 sm:pt-40 sm:pb-20"
      >
        <p className="text-[11px] tracking-[0.32em] text-accent">{eyebrow}</p>
        <h1 className="mt-5 text-3xl font-light leading-tight tracking-tight sm:text-5xl">
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
