"use client";
import { motion } from "framer-motion";
import { siteConfig } from "../config/site";

export default function Hero() {
  return (
    <section className="pt-28 pb-16 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* TEXTO */}
        <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
            {siteConfig.hero.title}
            <span className="text-[var(--primary)]"> {siteConfig.hero.highlight}</span>
          </h1>

          <p className="mt-4 text-sm uppercase tracking-widest text-[var(--primary)] font-medium">
            {siteConfig.hero.subtitle}
</p>

          <p className="whitespace-pre-line mt-6 text-lg text-gray-600">
            {siteConfig.hero.description}
          </p>

          {/* BOTONES */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#contacto"
              className="bg-[var(--primary)] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[var(--primary-hover)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {siteConfig.hero.cta}
            </a>

            <a
              href="#servicios"
              className="border border-[var(--primary)] text-[var(--primary)] px-6 py-3 rounded-lg hover:bg-white-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {siteConfig.hero.secondaryCta}
            </a>
          </div>

          {/* MINI BENEFICIOS */}
          <div className="mt-8 flex flex-col sm:flex-row gap-6 text-sm text-gray-500">
            <span>{siteConfig.hero.miniBen1}</span>
            <span>{siteConfig.hero.miniBen2}</span>
            <span>{siteConfig.hero.miniBen3}</span>
            
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-6 text-sm text-´">
            <p className="mt-6 text-lg text-[var(--primary)]">
            
            {siteConfig.hero.socialTest}
            </p>
            
          </div>
        </motion.div>

        {/* IMAGEN */}
        <motion.div
  initial={{ opacity: 0, x: 60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  className="relative"
>
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-[var(--primary)] rounded-full blur-2xl opacity-50"></div>

          <img
  src={siteConfig.hero.image}
  alt={siteConfig.hero.altImage}
  className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
/>
        </motion.div>

      </div>
    </section>
  );
}