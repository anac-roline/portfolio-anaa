import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NexLogo } from "./Logo";

const links = [
  { to: "/", label: "INÍCIO" },
  { to: "/sobre", label: "SOBRE" },
  { to: "/projetos", label: "PROJETOS" },
  { to: "/contato", label: "CONTATO" },
];

export function Layout() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0 });
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const overHero = pathname === "/" && !scrolled;

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "border-b border-border bg-background/85 backdrop-blur-xl"
            : "border-b border-transparent"
        } ${overHero ? "text-inverse" : ""}`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link to="/" aria-label="NEX - início">
            <NexLogo tone={overHero ? "inverse" : "default"} />
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    `text-xs tracking-[0.18em] transition-colors ${
                      isActive
                        ? overHero
                          ? "text-accent-soft"
                          : "text-accent"
                        : overHero
                          ? "text-inverse-muted hover:text-inverse"
                          : "text-muted-foreground hover:text-foreground"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <Link
            to="/contato"
            className="hidden rounded-full bg-accent px-5 py-2.5 text-xs tracking-[0.18em] text-accent-foreground transition-opacity hover:opacity-90 md:inline-flex"
          >
            FALE CONOSCO
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="rounded-md p-2 md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {open && (
          <div className="border-t border-border bg-background md:hidden">
            <ul className="flex flex-col p-4">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    end={l.to === "/"}
                    className="block px-3 py-3 text-xs tracking-[0.18em] text-muted-foreground"
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-border bg-surface">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <NexLogo />
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Tecnologia, dados e software sob medida. Brasília · DF · Brasil.
            </p>
          </div>
          <ul className="flex flex-wrap gap-6">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-xs tracking-[0.18em] text-muted-foreground transition-colors hover:text-accent"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t border-border">
          <p className="mx-auto max-w-6xl px-6 py-5 text-xs text-muted-foreground">
            © {new Date().getFullYear()} NEX - Ana Nascimento.
          </p>
        </div>
      </footer>
    </div>
  );
}
