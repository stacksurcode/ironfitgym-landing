"use client";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  return (
<div className="fixed bottom-5 right-5 z-50 flex items-center gap-2">
  <span className="font-bold bg-green-500 hidden md:block text-white text-sm px-3 py-1 rounded-full shadow animate-pulse">
    Whatsapp!
  </span>

  <a
    href="https://wa.me/598123456789?text=Hola%20quiero%20info"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center animate-pulse"
  >
    <MessageCircle size={26} />
  </a>
</div>
    );          
}