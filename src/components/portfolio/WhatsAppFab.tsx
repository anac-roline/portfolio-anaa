import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/5561993378679?text=Ol%C3%A1%20Ana%2C%20vim%20pelo%20seu%20portf%C3%B3lio!"
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[oklch(0.74_0.17_150)] text-background shadow-[0_10px_30px_-5px_oklch(0.74_0.17_150/0.6)] transition-transform hover:scale-110 sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[oklch(0.74_0.17_150)] opacity-30" />
    </a>
  );
}
