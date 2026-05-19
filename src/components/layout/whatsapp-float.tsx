import Link from "next/link";
import { MessageCircleMore } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <Link
      href="https://wa.me/94710000000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 inline-flex animate-pulse items-center gap-2 rounded-full border border-primary bg-background px-4 py-3 text-sm font-medium shadow-lg"
    >
      <MessageCircleMore size={16} className="text-primary" />
      WhatsApp
    </Link>
  );
}
