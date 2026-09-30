import { Github, Instagram, Linkedin, MessageCircle } from "lucide-react";
import brazilMap from "@/assets/brazil-dotted.svg";

const socials = [
  { label: "WhatsApp", href: "https://wa.me/5561993378679", icon: MessageCircle },
  { label: "Instagram", href: "https://instagram.com/anac_roline", icon: Instagram },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ana-c-l-nascimento-171680111", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/anac-roline", icon: Github },
];

export function Contact() {
  return (
    <section id="contact" className="bg-charcoal text-paper">
      <div className="mx-auto max-w-5xl px-5 pb-10 pt-12 sm:px-8 sm:pb-12 sm:pt-14">
        <h2 className="text-center font-sans text-xl font-light uppercase sm:text-2xl">CONTATO</h2>

        <div className="mt-10 grid gap-8 md:grid-cols-[0.92fr_1.08fr] md:items-center md:gap-16">
          <div className="max-w-md">
            <blockquote className="border-l border-accent pl-5 sm:pl-7">
              <p className="font-heading text-2xl leading-tight sm:text-3xl">
                “A melhor maneira de prever o futuro é inventá-lo.”
              </p>
              <footer className="mt-5 text-[10px] font-semibold uppercase text-paper/45">
                Alan Kay
              </footer>
            </blockquote>

            <a
              className="mt-9 block break-all text-xs text-paper/55 transition-colors hover:text-accent sm:text-sm"
              href="mailto:lealanacaroline00@gmail.com"
            >
              lealanacaroline00@gmail.com
            </a>

            <div className="mt-5 flex items-center gap-4">
              {socials.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer noopener" className="text-paper/40 transition-colors hover:text-accent" aria-label={label}>
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="relative mx-auto aspect-[613/639] w-full max-w-[260px] sm:max-w-[290px]" aria-label="Localização: Brasil">
            <img src={brazilMap} alt="" className="absolute inset-0 h-full w-full object-contain opacity-60" aria-hidden="true" />
            <div className="absolute left-[58%] top-[61%] z-10 flex items-center gap-2">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-accent shadow-[0_0_14px_var(--accent)]" />
              <p className="whitespace-nowrap text-[10px] leading-tight text-paper/55">
                I Live in<br /><strong className="font-heading text-3xl font-normal text-paper">Brasil</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="mx-auto flex max-w-5xl justify-between border-t border-paper/10 px-5 py-5 text-[9px] uppercase text-paper/25 sm:px-8">
        <p>© {new Date().getFullYear()} Ana Nascimento</p><p>Brasil</p>
      </footer>
    </section>
  );
}