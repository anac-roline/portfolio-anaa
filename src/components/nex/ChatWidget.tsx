import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Send, X } from "lucide-react";

type Msg = { from: "bot" | "user"; text: string };

const quick = [
  "O que a NEX faz?",
  "Quais projetos vocês têm?",
  "Como faço um orçamento?",
  "Onde vocês ficam?",
];

function answer(input: string): string {
  const q = input.toLowerCase();
  if (/(faz|serviç|servic|atua|bi|dados|dev)/.test(q))
    return "A NEX atua em três frentes: Business Intelligence (modelagem, T-SQL, Power BI), desenvolvimento web (React e Node) e automação de dados em Python.";
  if (/(projeto|portf|trabalho|case)/.test(q))
    return "Você encontra os cases na página PROJETOS, com detalhes técnicos de cada entrega.";
  if (/(orçamento|orcamento|preç|prec|contrat|proposta|valor)/.test(q))
    return "Conte o contexto pela página CONTATO (WhatsApp ou e-mail) e retornamos com uma proposta objetiva em até 24h.";
  if (/(onde|local|cidade|brasília|brasilia|endere)/.test(q))
    return "A operação é conduzida em Brasília, DF, com atendimento remoto para todo o Brasil.";
  if (/(quem|presidente|ana|fundad)/.test(q))
    return "A NEX é presidida por Ana Nascimento, analista de BI e estudante de Ciência da Computação.";
  if (/(prazo|tempo|resposta)/.test(q))
    return "O tempo médio de resposta é de 24 horas úteis.";
  if (/(oi|olá|ola|bom dia|boa tarde|boa noite)/.test(q))
    return "Olá! Sou o assistente da NEX. Posso falar sobre serviços, projetos e orçamentos.";
  return "Posso ajudar com serviços, projetos, prazos e orçamentos. Para um contato direto, use a página CONTATO.";
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
            <div className="border-b border-border px-4 py-3">
              <p className="text-sm font-medium">Assistente NEX</p>
              <p className="text-xs text-muted-foreground">
                Respostas rápidas sobre a organização
              </p>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {msgs.map((m, i) => (
                <div
                  key={i}
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    m.from === "bot"
                      ? "bg-surface text-foreground"
                      : "ml-auto bg-accent text-accent-foreground"
                  }`}
                >
                  {m.text}
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
