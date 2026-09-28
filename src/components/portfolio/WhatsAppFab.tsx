import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/5561993378679?text=Ol%C3%A1%20Ana%2C%20vim%20pelo%20seu%20portf%C3%B3lio!"
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-editorial transition-transform hover:scale-110 sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
    >
      <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-30" />
    </a>
  );
}
