"use client";
import { useEffect, useState } from "react";

export default function Popup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false); // 🆕

  useEffect(() => {
    // DETECTAR SI ESTÁ EN SECCIÓN CONTACTO
    const isInContactSection = () => {
      const section = document.getElementById("contacto");
      if (!section) return false;

      const rect = section.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    };

    // CHECKEAR SI YA SE MOSTRÓ
    const alreadyShown = sessionStorage.getItem("popupShown");

    if (alreadyShown) return;

    const timer = setTimeout(() => {
      // 🆕 BLOQUEOS INTELIGENTES
      if (isInContactSection() || isTyping) return;

      setIsOpen(true);
      sessionStorage.setItem("popupShown", "true");
    }, 30000); // aparece a los 30 segundos

    return () => clearTimeout(timer);
  }, [isTyping]);

  // 🆕 DETECTAR SI ESTÁ ESCRIBIENDO
  useEffect(() => {
    const handleFocus = () => setIsTyping(true);
    const handleBlur = () => setIsTyping(false);

    const inputs = document.querySelectorAll("input, textarea");

    inputs.forEach((el) => {
      el.addEventListener("focus", handleFocus);
      el.addEventListener("blur", handleBlur);
    });

    return () => {
      inputs.forEach((el) => {
        el.removeEventListener("focus", handleFocus);
        el.removeEventListener("blur", handleBlur);
      });
    };
  }, []);

  const closePopup = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      
      {/* OVERLAY */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={closePopup}
      ></div>

      {/* POPUP */}
      <div className="relative bg-white rounded-2xl shadow-xl p-8 max-w-md w-full mx-4 animate-fadeIn">

        {/* BOTÓN CERRAR */}
        <button
          onClick={closePopup}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
        >
          ✕
        </button>

        {/* CONTENIDO */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
          ¿Listo para dar el siguiente paso?
        </h3>

        <p className="text-gray-600 text-center mb-6">
          Podés escribirnos directamente por WhatsApp o completar el formulario.
        </p>

        {/* BOTONES */}
        <div className="flex flex-col gap-3">

          {/* WHATSAPP */}
          <a
            href="https://wa.me/598123456789?text=Hola%20quiero%20información"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white text-center py-3 rounded-lg hover:bg-green-600 transition"
          >
            Escribir por WhatsApp
          </a>

          {/* FORMULARIO */}
          <a
            href="#contacto"
            onClick={closePopup}
            className="bg-[var(--primary)] text-white text-center py-3 rounded-lg hover:bg-[var(--primary-hover)] transition"
          >
            Ir al formulario
          </a>

          {/* SEGUIR NAVEGANDO */}
          <a
            onClick={closePopup}
            className="bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-800 transition cursor-pointer"
          >
            Seguir navegando
          </a>

        </div>
      </div>
    </div>
  );
}