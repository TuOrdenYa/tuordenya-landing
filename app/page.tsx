"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function LandingPro() {
  const [isDark, setIsDark] = useState(true);

  // Aplica / quita la clase "dark" en <html>
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 transition-colors duration-300">
      {/* DEBUG MUY VISIBLE (luego lo puedes borrar) */}
      <div className="text-center py-2 text-xs bg-yellow-200 text-black dark:bg-purple-900 dark:text-white">
        Modo actual: {isDark ? "Oscuro" : "Claro"} (este texto DEBE cambiar de color)
      </div>

      {/* NAVBAR */}
      <header className="border-b border-slate-200/40 dark:border-slate-800/80 sticky top-0 z-30 backdrop-blur bg-slate-50/80 dark:bg-slate-950/70">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            {/* Logo: reemplaza src por tu logo real */}
            <a href="/" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-emerald-500 flex items-center justify-center font-semibold text-slate-950">
                TO
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-semibold text-sm sm:text-base">
                  TuOrdenYa TEST 123
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Menús y órdenes para restaurantes
                </span>
              </div>
            </a>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#como-funciona" className="hover:text-emerald-500">
              Cómo funciona
            </a>
            <a href="#pro" className="hover:text-emerald-500">
              Versión Pro
            </a>
            <a href="#planes" className="hover:text-emerald-500">
              Planes
            </a>
            <a href="#faq" className="hover:text-emerald-500">
              FAQs
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsDark((v) => !v)}
              className="text-xs border border-slate-200 dark:border-slate-700 rounded-full px-3 py-1 flex items-center gap-1.5"
            >
              <span>{isDark ? "🌙" : "☀️"}</span>
              <span>{isDark ? "Oscuro" : "Claro"}</span>
            </button>
            <a
              href="#contacto"
              className="hidden sm:inline-flex text-xs sm:text-sm px-4 py-2 rounded-full bg-emerald-500 text-slate-950 font-semibold hover:bg-emerald-400 transition-colors"
            >
              Agenda una demo
            </a>
          </div>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-4">
        {/* HERO */}
        <section className="py-12 sm:py-16 lg:py-20">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-[1.2fr,1fr] gap-10 items-center"
          >
            <motion.div variants={fadeUp} className="space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/5 px-3 py-1 text-xs font-medium text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Versión Pro para restaurantes que ya crecieron
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
                Menús digitales y órdenes{" "}
                <span className="text-emerald-400">
                  pensados para tu operación real.
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-xl">
                TuOrdenYa conecta menús con QR, pedidos, pagos y la operación de
                tu restaurante en una sola plataforma. Comienza con Light y sube
                a Plus o Pro cuando tu negocio lo necesite.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#contacto"
                  className="px-5 py-2.5 text-sm rounded-full bg-emerald-500 text-slate-950 font-semibold hover:bg-emerald-400 transition-colors"
                >
                  Agenda una demo
                </a>
                <a
                  href="https://menu.tuordenya.com"
                  target="_blank"
                  className="px-5 py-2.5 text-sm rounded-full border border-slate-700/70 hover:border-emerald-500/60 hover:text-emerald-400 transition-colors"
                >
                  Ver demo del menú digital
                </a>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  👉 Ideal para restaurantes en crecimiento, cadenas y dark
                  kitchens.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 text-xs">
                <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60 px-4 py-3">
                  <p className="text-slate-400">Implementación</p>
                  <p className="font-semibold">En días, no en meses</p>
                </div>
                <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60 px-4 py-3">
                  <p className="text-slate-400">Pedidos</p>
                  <p className="font-semibold">QR, WhatsApp y salón</p>
                </div>
                <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60 px-4 py-3">
                  <p className="text-slate-400">Escalabilidad</p>
                  <p className="font-semibold">Light → Plus → Pro</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="rounded-3xl border border-slate-800/70 bg-gradient-to-br from-slate-900 to-slate-950 p-5 sm:p-6 flex flex-col gap-4 shadow-xl shadow-emerald-500/10"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400">
                    Vista rápida de la operación
                  </p>
                  <p className="text-lg font-semibold">Hoy en tu restaurante</p>
                </div>
                <span className="text-xs rounded-full px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/40">
                  RestOrder Pro
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">Mesas activas</span>
                  <span className="font-semibold">18</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Órdenes en curso</span>
                  <span className="font-semibold">32</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Tiempo promedio</span>
                  <span className="font-semibold">12 min</span>
                </div>
              </div>

              <div className="mt-2 h-px bg-slate-800/70" />

              <div className="space-y-2 text-xs">
                <p className="text-slate-400">Canales conectados</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700/80">
                    QR en mesas
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700/80">
                    WhatsApp
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700/80">
                    Delivery propio
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700/80">
                    Integraciones futuras
                  </span>
                </div>
              </div>

              <div className="mt-2 h-px bg-slate-800/70" />

              <p className="text-xs text-slate-500">
                *La vista es ilustrativa, pero representa el tipo de control que
                tendrás con la versión Pro.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* … (todo el resto de secciones igual que ya las tienes) … */}
        {/* Para no hacerte scroll eterno, puedes dejar a partir de aquí tal cual está en tu archivo actual */}
      </main>

      <footer className="border-t border-slate-800/70 py-6 text-[11px] text-slate-500">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between gap-3">
          <p>
            © {new Date().getFullYear()} TuOrdenYa. Todos los derechos
            reservados.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#planes" className="hover:text-emerald-400">
              Planes
            </a>
            <a href="#faq" className="hover:text-emerald-400">
              FAQs
            </a>
            <a href="#contacto" className="hover:text-emerald-400">
              Contacto
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
