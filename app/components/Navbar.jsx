"use client";
import { iconMap } from "../lib/icons";
import { useState, useEffect } from "react";
import { siteConfig } from "../config/site";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const LogoIcon = iconMap[siteConfig.branding.logoIcon];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["servicios", "sobre", "testimonials", "faq", "contacto"];
      const scrollPosition = window.scrollY + 80; // account for navbar height
      let current = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop) {
          current = section;
        } else {
          break;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href) => {
    if (href === "#") return activeSection === "";
    return activeSection === href.slice(1);
  };

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
        <nav className="hidden md:flex items-center justify-center flex-1 gap-8 text-black font-medium">
          <a href="#" className={`transition ${isActive("#") ? "text-[var(--primary)] border-b-2 border-[var(--primary)]" : "hover:text-[var(--primary)]"}`}>
            {siteConfig.navBarItems.inicio}
          </a>
          <a href="#servicios" className={`transition ${isActive("#servicios") ? "text-[var(--primary)] border-b-2 border-[var(--primary)]" : "hover:text-[var(--primary)]"}`}>
            {siteConfig.navBarItems.services}
          </a>
          <a href="#sobre" className={`transition ${isActive("#sobre") ? "text-[var(--primary)] border-b-2 border-[var(--primary)]" : "hover:text-[var(--primary)]"}`}>
            {siteConfig.navBarItems.about}
          </a>
          <a href="#testimonials" className={`transition ${isActive("#testimonials") ? "text-[var(--primary)] border-b-2 border-[var(--primary)]" : "hover:text-[var(--primary)]"}`}>
            {siteConfig.navBarItems.testimonials}
          </a>
          <a href="#faq" className={`transition ${isActive("#faq") ? "text-[var(--primary)] border-b-2 border-[var(--primary)]" : "hover:text-[var(--primary)]"}`}>
            {siteConfig.navBarItems.faq}
          </a>
          <a href="#contacto" className={`transition ${isActive("#contacto") ? "text-[var(--primary)] border-b-2 border-[var(--primary)]" : "hover:text-[var(--primary)]"}`}>
            {siteConfig.navBarItems.contact}
          </a>
        </nav>

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
          <a href="#" onClick={() => setMenuOpen(false)} className={`transition ${isActive("#") ? "text-[var(--primary)] border-b-2 border-[var(--primary)]" : "hover:text-[var(--primary)]"}`}>
            {siteConfig.navBarItems.inicio}
          </a>
          <a href="#servicios" onClick={() => setMenuOpen(false)} className={`transition ${isActive("#servicios") ? "text-[var(--primary)] border-b-2 border-[var(--primary)]" : "hover:text-[var(--primary)]"}`}>
            {siteConfig.navBarItems.services}
          </a>
          <a href="#sobre" onClick={() => setMenuOpen(false)} className={`transition ${isActive("#sobre") ? "text-[var(--primary)] border-b-2 border-[var(--primary)]" : "hover:text-[var(--primary)]"}`}>
            {siteConfig.navBarItems.about}
          </a>
          <a href="#testimonials" onClick={() => setMenuOpen(false)} className={`transition ${isActive("#testimonials") ? "text-[var(--primary)] border-b-2 border-[var(--primary)]" : "hover:text-[var(--primary)]"}`}>
            {siteConfig.navBarItems.testimonials}
          </a>
          <a href="#faq" onClick={() => setMenuOpen(false)} className={`transition ${isActive("#faq") ? "text-[var(--primary)] border-b-2 border-[var(--primary)]" : "hover:text-[var(--primary)]"}`}>
            {siteConfig.navBarItems.faq}
          </a>
          <a href="#contacto" onClick={() => setMenuOpen(false)} className={`transition ${isActive("#contacto") ? "text-[var(--primary)] border-b-2 border-[var(--primary)]" : "hover:text-[var(--primary)]"}`}>
            {siteConfig.navBarItems.contact}
          </a>
        </div>
      )}
    </header>
  );
}