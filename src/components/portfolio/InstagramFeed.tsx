import { createElement, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const FEED_ID = "nLd23bPIQVPQKoUzaMEn";
const WIDGET_SCRIPT = "https://w.behold.so/widget.js";

export function InstagramFeed() {
  const [singlePost, setSinglePost] = useState(false);

  useEffect(() => {
    if (document.querySelector(`script[src="${WIDGET_SCRIPT}"]`)) return;

    const script = document.createElement("script");
    script.type = "module";
    script.src = WIDGET_SCRIPT;
    script.dataset.beholdWidget = "true";
    document.head.append(script);
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    fetch(`https://feeds.behold.so/${FEED_ID}`, { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : null))
      .then((feed: { posts?: unknown[] } | null) => setSinglePost(feed?.posts?.length === 1))
      .catch(() => undefined);

    return () => controller.abort();
  }, []);

  return (
    <section id="instagram" className="overflow-hidden bg-paper text-ink">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45 }}
        className="mx-auto flex max-w-5xl flex-col items-center px-5 py-10 text-center sm:px-8 sm:py-12"
      >
        <Instagram className="h-5 w-5 text-accent" strokeWidth={1.5} />
        <p className="section-kicker mt-3 text-accent">Momentos & bastidores</p>
        <h2 className="mt-2 font-heading text-4xl sm:text-5xl">Acompanhe minha jornada</h2>
        <a
          href="https://instagram.com/anac_roline"
          target="_blank"
          rel="noreferrer noopener"
          className="mt-4 text-[11px] font-semibold uppercase text-ink/50 transition-colors hover:text-accent"
        >
          @anac_roline
        </a>
      </motion.div>

      <div className="border-y border-ink/10 bg-charcoal py-0 sm:py-8">
        <div className={`instagram-mosaic mx-auto overflow-hidden ${singlePost ? "instagram-mosaic-single max-w-xl" : "max-w-6xl"}`}>
          {createElement("behold-widget", {
            "feed-id": FEED_ID,
            className: "block w-full",
          })}
        </div>
      </div>
    </section>
  );
}