import { Github, Instagram, Linkedin, Mail, MapPin, MessageCircle } from "lucide-react";

const socials = [
  { label: "WhatsApp", href: "https://wa.me/5561993378679", icon: MessageCircle },
  { label: "Instagram", href: "https://instagram.com/anac_roline", icon: Instagram },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ana-c-l-nascimento-171680111", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/anac-roline", icon: Github },
  { label: "E-mail", href: "mailto:lealanacaroline00@gmail.com", icon: Mail },
];

export function Contact() {
  return (
    <section id="contact" className="bg-charcoal py-24 text-paper sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <p className="section-kicker text-accent">Vamos conversar</p>
          <h2 className="section-title text-paper">CONTATO</h2>
          <a className="mt-8 block max-w-full break-words font-heading text-3xl transition-colors hover:text-accent sm:text-5xl" href="mailto:lealanacaroline00@gmail.com">lealanacaroline00@gmail.com</a>
          <div className="mt-10 flex flex-wrap gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer noopener" className="inline-flex items-center gap-2 border border-paper/20 px-4 py-3 text-xs font-semibold uppercase text-paper/70 transition-colors hover:border-accent hover:text-accent">
                <Icon className="h-4 w-4" />{label}
              </a>
            ))}
          </div>
        </div>

        <div className="relative flex min-h-64 items-center justify-center overflow-hidden border border-paper/10 bg-work">
          <div className="brazil-mark" aria-hidden="true">BR</div>
          <div className="relative z-10 text-center">
            <MapPin className="mx-auto h-8 w-8 text-accent" />
            <p className="mt-3 text-[10px] font-semibold uppercase text-paper/40">Localização</p>
            <p className="font-heading text-4xl">Brasil<span className="text-accent">.</span></p>
          </div>
        </div>
      </div>
      <footer className="mx-auto mt-20 flex max-w-7xl flex-col gap-2 border-t border-paper/10 px-5 pt-7 text-xs text-paper/35 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} Ana Nascimento</p><p>Desenvolvimento · Dados · BI</p>
      </footer>
    </section>
  );
}