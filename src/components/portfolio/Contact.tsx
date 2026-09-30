import { Github, Instagram, Linkedin, MessageCircle } from "lucide-react";

const socials = [
  { label: "WhatsApp", href: "https://wa.me/5561993378679", icon: MessageCircle },
  { label: "Instagram", href: "https://instagram.com/anac_roline", icon: Instagram },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ana-c-l-nascimento-171680111", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/anac-roline", icon: Github },
];

export function Contact() {
  return (
    <section id="contact" className="bg-charcoal py-14 text-paper sm:py-16">
      <h2 className="text-center font-sans text-xl font-light uppercase sm:text-2xl">CONTATO</h2>

      <div className="mx-auto mt-9 grid max-w-5xl gap-12 px-5 sm:px-8 md:grid-cols-[1fr_1.05fr] md:items-center md:gap-16">
        <div className="max-w-md">
          <p className="text-[10px] text-paper/45">para</p>
          <a className="block break-all text-base font-semibold transition-colors hover:text-accent sm:text-lg" href="mailto:lealanacaroline00@gmail.com">lealanacaroline00@gmail.com</a>
          <p className="mt-3 text-xs text-paper/55">Olá Ana, gostaria de conversar sobre uma oportunidade.</p>

          <div className="mt-2 space-y-0" aria-hidden="true">
            <span className="block h-px bg-paper/65" />
            <span className="mt-5 block h-px bg-paper/65" />
            <span className="mt-5 block h-px bg-paper/65" />
          </div>

          <div className="mt-2 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer noopener" className="text-paper/50 transition-colors hover:text-accent" aria-label={label}>
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
            <a href="mailto:lealanacaroline00@gmail.com" className="text-[10px] font-semibold lowercase text-accent transition-colors hover:text-paper">enviar</a>
          </div>
        </div>

        <div className="relative min-h-48 overflow-hidden sm:min-h-52" aria-label="Localização: Brasil">
          <div className="brazil-dots" aria-hidden="true" />
          <div className="absolute left-[58%] top-[47%] z-10 flex items-center gap-2">
            <span className="h-2 w-2 shrink-0 rounded-full bg-accent shadow-[0_0_14px_var(--accent)]" />
            <p className="whitespace-nowrap text-[10px] leading-tight text-paper/60">Eu moro no<br /><strong className="font-heading text-2xl font-normal text-paper">Brasil</strong></p>
          </div>
        </div>
      </div>

      <footer className="mx-auto mt-10 flex max-w-5xl justify-between border-t border-paper/10 px-5 pt-5 text-[9px] uppercase text-paper/25 sm:px-8">
        <p>© {new Date().getFullYear()} Ana Nascimento</p><p>Brasil</p>
      </footer>
    </section>
  );
}