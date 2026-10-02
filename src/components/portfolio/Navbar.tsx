import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#home", label: "Sobre" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Work" },
  { href: "#timeline", label: "Trajetória" },
  { href: "#instagram", label: "Instagram" },
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
    <header className="fixed right-4 top-4 z-50 text-paper sm:right-8 sm:top-6">
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="h-11 w-11 rounded-full border border-paper/20 bg-charcoal/75 text-paper shadow-editorial backdrop-blur-md hover:bg-charcoal hover:text-accent"
        onClick={() => setMenuOpen((open) => !open)}
        aria-expanded={menuOpen}
        aria-controls="floating-navigation"
        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
      >
        {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="floating-navigation"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-14 w-48 overflow-hidden border border-paper/10 bg-charcoal/95 shadow-editorial backdrop-blur-xl"
            aria-label="Navegação principal"
          >
            <ul className="px-4 py-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex min-h-11 items-center border-b border-paper/10 text-[11px] font-semibold uppercase text-paper/70 transition-colors last:border-0 hover:text-accent"
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