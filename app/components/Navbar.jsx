"use client";
import { iconMap } from "../lib/icons";
import { useState } from "react";
import { siteConfig } from "../config/site";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const LogoIcon = iconMap[siteConfig.branding.logoIcon];

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* LOGO + NOMBRE */}
        <div className="flex items-center gap-3">
          <a href="#">
  <div className="w-10 h-10 bg-[var(--primary)] rounded-full flex items-center justify-center shadow-md cursor-pointer transition-all duration-300 hover:scale-110">
    {LogoIcon && <LogoIcon size={20} className="text-white" strokeWidth={2} />}
  </div>
</a>
          <a href="#">
  <h1 className="text-xl font-bold text-gray-900 cursor-pointer transition-all duration-300 hover:text-[var(--primary)] hover:-translate-y-0.5 hover:scale-105">
    {siteConfig.branding.name}
  </h1>
</a>
        </div>

        {/* MENÚ DESKTOP */}
        <nav className="hidden md:flex items-center gap-8 text-black font-medium">
          <a href="#" className="hover:text-[var(--primary)] transition">
            {siteConfig.navBarItems.inicio}
          </a>
          <a href="#servicios" className="hover:text-[var(--primary)] transition">
            {siteConfig.navBarItems.services}
          </a>
          <a href="#sobre" className="hover:text-[var(--primary)] transition">
            {siteConfig.navBarItems.about}
          </a>
          <a href="#faq" className="hover:text-[var(--primary)] transition">
  {siteConfig.navBarItems.faq}
</a>
          <a href="#contacto" className="hover:text-[var(--primary)] transition">
            {siteConfig.navBarItems.contact}
          </a>
        </nav>

        {/* BOTÓN WHATSAPP */}
        <div className="hidden md:block">
          <a href="https://wa.me/598123456789?text=Hola%20quiero%20agendar%20una%20consulta"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-green-600 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
   Enviar mensaje ahora
<img
  src="/icons/Whatsapp-icon.png"
  alt="WhatsApp"
  className="w-5 h-5 object-contain ml-1"
/>
</a>
        </div>

        {/* BOTÓN MOBILE */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* MENÚ MOBILE */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 flex flex-col gap-4 text-black font-medium">
          <a href="#" onClick={() => setMenuOpen(false)}>
            {siteConfig.navBarItems.inicio}
          </a>
          <a href="#servicios" onClick={() => setMenuOpen(false)}>
            {siteConfig.navBarItems.services}
          </a>
          <a href="#sobre" onClick={() => setMenuOpen(false)}>
            {siteConfig.navBarItems.about}
          </a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>
            {siteConfig.navBarItems.faq}
          </a>
          <a href="#contacto" onClick={() => setMenuOpen(false)}>
            {siteConfig.navBarItems.contact}
          </a>
        </div>
      )}
    </header>
  );
}