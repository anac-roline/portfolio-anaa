import { AnimatePresence, motion } from "framer-motion";
import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#home", label: "Sobre" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Work" },
  { href: "#timeline", label: "Trajetória" },
  { href: "#contact", label: "Contato" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-paper/10 bg-charcoal/95 text-paper backdrop-blur-xl">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-8">
        <a href="#home" className="flex min-w-0 items-center gap-3" aria-label="Voltar ao início">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent font-heading text-lg text-accent">A</span>
          <span className="truncate font-heading text-base sm:text-lg">Ana Nascimento</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a className="editorial-link" href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href="https://wa.me/5561993378679?text=Ol%C3%A1%20Ana%2C%20vim%20pelo%20seu%20portf%C3%B3lio!"
            target="_blank"
            rel="noreferrer noopener"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground transition-transform hover:scale-105"
            aria-label="Falar com Ana no WhatsApp"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="h-9 w-9 rounded-full text-paper hover:bg-paper/10 hover:text-accent md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-paper/10 bg-charcoal md:hidden"
            aria-label="Navegação principal"
          >
            <ul className="mx-auto grid max-w-7xl px-4 py-3 sm:grid-cols-2 sm:px-8">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex min-h-12 items-center border-b border-paper/10 text-xs font-semibold uppercase text-paper/70 transition-colors hover:text-accent sm:px-2"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}