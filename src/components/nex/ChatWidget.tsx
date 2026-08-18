import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Send, X } from "lucide-react";

function RobotIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 26h-2c-2.2 0-4 1.8-4 4v8c0 2.2 1.8 4 4 4h2M52 26h2c2.2 0 4 1.8 4 4v8c0 2.2-1.8 4-4 4h-2"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M18 16h28c4.4 0 8 3.6 8 8v22c0 4.4-3.6 8-8 8H38l-6 6-6-6H18c-4.4 0-8-3.6-8-8V24c0-4.4 3.6-8 8-8z"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <circle cx="26" cy="32" r="4" fill="currentColor" />
      <circle cx="38" cy="32" r="4" fill="currentColor" />
      <path
        d="M28 42c0 2.2 1.8 4 4 4s4-1.8 4-4h-8z"
        fill="currentColor"
      />
      <path
        d="M32 8v-6M32 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

type Msg = { from: "bot" | "user"; text: string };

const quick = [
  "O que a NEX faz?",
  "Vocês trabalham com IA?",
  "Quais projetos vocês têm?",
  "Como faço um orçamento?",
  "Como entro em contato?",
];

const contacts = {
  whatsapp: {
    label: "WhatsApp",
    handle: "(61) 99337-8679",
    href: "https://wa.me/5561993378679?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20NEX!",
  },
  email: {
    label: "E-mail",
    handle: "lealanacaroline00@gmail.com",
    href: "mailto:lealanacaroline00@gmail.com",
  },
  linkedin: {
    label: "LinkedIn",
    handle: "in/ana-c-l-nascimento-171680111",
    href: "https://www.linkedin.com/in/ana-c-l-nascimento-171680111",
  },
  instagram: {
    label: "Instagram",
    handle: "@anac_roline",
    href: "https://instagram.com/anac_roline",
  },
  github: {
    label: "GitHub",
    handle: "@anac-roline",
    href: "https://github.com/anac-roline",
  },
};

const contactLinks = Object.values(contacts)
  .map((c) => `${c.label}: ${c.href}`)
  .join("\n");

function answer(input: string): string {
  const q = input.toLowerCase();
  if (/(ia|inteligência artificial|inteligencia artificial|machine learning|ml|modelo|automação inteligente)/.test(q))
    return "Sim. A NEX aplica inteligência artificial e machine learning para automatizar análises, extrair padrões de dados e acelerar decisões de negócio.";
  if (/(faz|serviç|servic|atua|bi|dados|dev)/.test(q))
    return "A NEX atua em três frentes: Business Intelligence (modelagem, T-SQL, Power BI), desenvolvimento web (React e Node) e IA/automação de dados em Python.";
  if (/(projeto|portf|trabalho|case)/.test(q))
    return "Você encontra os cases na página PROJETOS, com detalhes técnicos de cada entrega.";
  if (/(orçamento|orcamento|preç|prec|contrat|proposta|valor)/.test(q))
    return `Para orçamentos, o melhor canal é o WhatsApp: ${contacts.whatsapp.href}\n\nEnvie o contexto do projeto e retornamos uma proposta objetiva em até 24h.\n\nOutros canais:\n${contactLinks}`;
  if (/(contato|telefone|whatsapp|email|e-mail|instagram|linkedin|github|redes?|falar|fale|ligar|mensagem)/.test(q))
    return `Aqui estão os canais de contato:\n${contactLinks}\n\nO WhatsApp é o mais rápido: ${contacts.whatsapp.href}`;
  if (/(onde|local|cidade|brasília|brasilia|endere)/.test(q))
    return "A operação é conduzida em Brasília, DF, com atendimento remoto para todo o Brasil.";
  if (/(quem|presidente|ana|fundad)/.test(q))
    return "A NEX é presidida por Ana Nascimento, analista de BI e estudante de Ciência da Computação.";
  if (/(prazo|tempo|resposta)/.test(q))
    return "O tempo médio de resposta é de 24 horas úteis.";
  if (/(oi|olá|ola|bom dia|boa tarde|boa noite)/.test(q))
    return "Olá! Sou o assistente da NEX. Posso falar sobre serviços, IA, projetos e orçamentos.";
  return `Posso ajudar com serviços, IA, projetos, prazos e orçamentos.\n\nPara um contato direto, use um dos canais abaixo:\n${contactLinks}`;
}

function LinkifyText({ text }: { text: string }) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlRegex);
  const matches = text.match(urlRegex) || [];

  return (
    <>
      {parts.map((part, i) => {
        if (urlRegex.test(part)) {
          return (
            <a
              key={i}
              href={part}
              target="_blank"
              rel="noreferrer noopener"
              className="break-all text-accent underline underline-offset-2 hover:no-underline"
            >
              {part}
            </a>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([
    {
      from: "bot",
      text: "Olá! Sou o assistente da NEX. Como posso ajudar hoje?",
    },
  ]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "end" });
  }, [msgs, open]);

  const send = (text: string) => {
    const value = text.trim();
    if (!value) return;
    setInput("");
    setMsgs((m) => [...m, { from: "user", text: value }]);
    setTimeout(
      () => setMsgs((m) => [...m, { from: "bot", text: answer(value) }]),
      350,
    );
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Fechar chat" : "Abrir chat"}
        className="fixed bottom-5 right-5 z-[70] inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition-opacity hover:opacity-90"
      >
        {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-4 z-[70] flex max-h-[70vh] w-[min(22rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-xl"
          >
            <div className="flex items-center gap-3 border-b border-border px-4 py-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <RobotIcon className="h-5 w-5" />
              </div>
              <p className="text-xs text-muted-foreground">
                Respostas rápidas sobre a organização
              </p>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {msgs.map((m, i) => (
                <div
                  key={i}
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
                    m.from === "bot"
                      ? "bg-surface text-foreground"
                      : "ml-auto bg-accent text-accent-foreground"
                  }`}
                >
                  <LinkifyText text={m.text} />
                </div>
              ))}
              <div ref={endRef} />
            </div>

            <div className="flex flex-wrap gap-2 px-4 pb-3">
              {quick.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => send(q)}
                  className="rounded-full border border-border px-2.5 py-1 text-[11px] text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  {q}
                </button>
              ))}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 border-t border-border p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escreva sua mensagem"
                aria-label="Mensagem"
                className="min-w-0 flex-1 rounded-full border border-border bg-background px-4 py-2 text-sm outline-none focus:border-accent"
              />
              <button
                type="submit"
                aria-label="Enviar"
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
