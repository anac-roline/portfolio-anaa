import { MessageCircle } from "lucide-react";
import avatar from "@/assets/ana-avatar.png";

const links = [
  { href: "#home", label: "Sobre" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Work" },
  { href: "#timeline", label: "Trajetória" },
  { href: "#contact", label: "Contato" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-5 px-5 sm:px-8">
        <a href="#home" className="flex min-w-0 items-center gap-3" aria-label="Voltar ao início">
          <img src={avatar} alt="" className="h-9 w-9 object-contain" />
          <span className="truncate font-heading text-xl">Ana Nascimento</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a className="editorial-link" href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/5561993378679?text=Ol%C3%A1%20Ana%2C%20vim%20pelo%20seu%20portf%C3%B3lio!"
          target="_blank"
          rel="noreferrer noopener"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground transition-transform hover:scale-105"
          aria-label="Falar com Ana no WhatsApp"
        >
          <MessageCircle className="h-4 w-4" />
        </a>
      </nav>
    </header>
  );
}