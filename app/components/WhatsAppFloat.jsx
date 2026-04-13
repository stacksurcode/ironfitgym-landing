"use client";

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2">
      
<span className="hidden md:flex items-center justify-center font-bold bg-green-500 text-white text-sm px-3 py-1 rounded-full shadow animate-pulse">
  Whatsapp!
</span>

      <a
        href="https://wa.me/598123456789?text=Hola%20quiero%20info"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 p-3 rounded-full shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center animate-pulse"
      >
        <img
          src="/icons/Whatsapp-icon.png"
          alt="WhatsApp"
          className="w-11 h-11 object-contain"
        />
      </a>

    </div>
  );
}