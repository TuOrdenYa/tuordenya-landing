"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

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

export default function PlusPage() {
  const [isHeaderPlansOpen, setIsHeaderPlansOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 transition-colors duration-300">
      {/* NAVBAR */}
      <header className="border-b border-slate-800/80 sticky top-0 z-30 backdrop-blur bg-slate-950/90">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            {/* Logo TuOrdenYa */}
            <a href="/" className="flex items-center gap-2">
              <div className="flex items-center">
                <Image
                  src="/logo-tuordenya-white.png"
                  alt="TuOrdenYa"
                  width={140}
                  height={40}
                  className="h-8 w-auto"
                  priority
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-semibold text-sm sm:text-base">
                  Menús y órdenes para restaurantes
                </span>
              </div>
            </a>
          </div>

          {/* NAV DESKTOP */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="/" className="hover:text-[#FF6F3C]">
              Volver al inicio
            </a>

            <a href="/#como-funciona" className="hover:text-[#FF6F3C]">
              Cómo funciona
            </a>

            {/* Dropdown de productos en el header (desktop) */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsHeaderPlansOpen((open) => !open)}
                className="inline-flex items-center gap-1 hover:text-[#FF6F3C]"
              >
                Nuestros productos
                <span className="text-[10px]">▼</span>
              </button>

              {isHeaderPlansOpen && (
                <div className="absolute left-0 mt-2 w-52 rounded-xl border border-slate-800 bg-slate-900 shadow-lg py-2 text-xs z-40">
                  <a
                    href="/light"
                    className="block px-3 py-1.5 hover:bg-slate-800 hover:text-[#FF6F3C]"
                  >
                    Light — Menú digital + QR
                  </a>
                  <a
                    href="/plus"
                    className="block px-3 py-1.5 hover:bg-slate-800 hover:text-[#FF6F3C]"
                  >
                    Plus — Pedidos y reportes
                  </a>
                  <a
                    href="/pro"
                    className="block px-3 py-1.5 hover:bg-slate-800 hover:text-[#FF6F3C]"
                  >
                    Pro — Operación completa
                  </a>
                </div>
              )}
            </div>

            <a href="/#faq" className="hover:text-[#FF6F3C]">
              FAQs
            </a>
          </div>

          {/* ACCIONES DERECHA */}
          <div className="flex items-center gap-3">
            {/* CTA desktop (marca global, sigue en naranja) */}
            <a
              href="/#contacto"
              className="hidden sm:inline-flex text-xs sm:text-sm px-4 py-2 rounded-full bg-[#FF6F3C] text-slate-950 font-semibold hover:bg-[#FF814F] transition-colors md:inline-flex"
            >
              Agenda una demo
            </a>

            {/* Botón menú móvil */}
            <button
              type="button"
              className="inline-flex items-center justify-center md:hidden h-9 w-9 rounded-full border border-slate-700 text-slate-100"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              aria-label="Abrir menú"
            >
              {isMobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </nav>

        {/* PANEL MENÚ MÓVIL */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-800 bg-slate-950">
            <div className="max-w-6xl mx-auto px-4 py-3 space-y-2 text-sm">
              <a
                href="/"
                className="block py-2 text-slate-100 hover:text-[#FF6F3C]"
                onClick={closeMobileMenu}
              >
                Volver al inicio
              </a>

              <a
                href="/#como-funciona"
                className="block py-2 text-slate-100 hover:text-[#FF6F3C]"
                onClick={closeMobileMenu}
              >
                Cómo funciona
              </a>

              <div className="pt-1">
                <p className="text-xs uppercase tracking-wide text-slate-500 mb-1">
                  Nuestros productos
                </p>
                <div className="space-y-1 text-xs">
                  <a
                    href="/light"
                    className="block py-1 text-slate-200 hover:text-[#FF6F3C]"
                    onClick={closeMobileMenu}
                  >
                    Light — Menú digital + QR
                  </a>
                  <a
                    href="/plus"
                    className="block py-1 text-slate-200 hover:text-[#FF6F3C]"
                    onClick={closeMobileMenu}
                  >
                    Plus — Pedidos y reportes
                  </a>
                  <a
                    href="/pro"
                    className="block py-1 text-slate-200 hover:text-[#FF6F3C]"
                    onClick={closeMobileMenu}
                  >
                    Pro — Operación completa
                  </a>
                </div>
              </div>

              <a
                href="/#faq"
                className="block pt-2 pb-1 text-slate-100 hover:text-[#FF6F3C]"
                onClick={closeMobileMenu}
              >
                FAQs
              </a>

              <a
                href="/#contacto"
                className="mt-2 inline-flex w-full justify-center text-xs sm:text-sm px-4 py-2.5 rounded-full bg-[#FF6F3C] text-slate-950 font-semibold hover:bg-[#FF814F] transition-colors"
                onClick={closeMobileMenu}
              >
                Agenda una demo
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="max-w-6xl mx-auto px-4">
        {/* HERO PLUS */}
        <section className="py-12 sm:py-16 lg:py-20">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-[1.2fr,1fr] gap-10 items-center"
          >
            {/* Columna izquierda: mensaje principal */}
            <motion.div variants={fadeUp} className="space-y-5">
              {/* Badge superior (VERDE PLUS) */}
              <span className="inline-flex items-center gap-2 rounded-full border border-[#2ECC71] bg-[#2ECC711A] px-3 py-1 text-xs font-medium text-[#2ECC71]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2ECC71]" />
                Plan Plus — Cuando ya quieres ver pedidos y datos
              </span>

              {/* Título */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
                Pedidos básicos + reportes{" "}
                <span className="text-[#2ECC71]">
                  para entender mejor tu operación.
                </span>
              </h1>

              {/* Subtítulo */}
              <p className="text-sm sm:text-base text-slate-400 max-w-xl">
                Plus es el paso natural después de Light: sigues teniendo tu
                menú digital y tus QR, pero ahora empiezas a registrar pedidos y
                ver reportes simples para tomar decisiones con datos.
              </p>

              {/* Bullets clave */}
              <ul className="text-sm text-slate-300 space-y-2">
                <li>• Registro básico de pedidos por día y canal.</li>
                <li>• Reportes sencillos: ventas, productos más vendidos.</li>
                <li>• Mantienes el mismo menú digital y QR de Light.</li>
                <li>• Sin complejidad de mesas ni flows de cocina avanzados.</li>
              </ul>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="/#contacto"
                  className="px-5 py-2.5 text-sm rounded-full bg-[#2ECC71] text-slate-950 font-semibold hover:bg-[#38D27C] transition-colors"
                >
                  Quiero el plan Plus
                </a>
                <a
                  href="/#productos"
                  className="px-5 py-2.5 text-sm rounded-full border border-slate-700/70 hover:border-[#2ECC71] hover:text-[#2ECC71] transition-colors"
                >
                  Comparar Light / Plus / Pro
                </a>
              </div>

              {/* Segmento a quién va dirigido */}
              <div className="flex flex-wrap gap-2 pt-2 text-[11px] text-slate-400">
                <span className="px-3 py-1 rounded-full bg-slate-900/60 border border-slate-800/80">
                  🍽️ Restaurantes con más rotación
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-900/60 border border-slate-800/80">
                  🍕 Marcas con domicilios frecuentes
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-900/60 border border-slate-800/80">
                  🥡 Negocios que ya sienten más volumen
                </span>
              </div>
            </motion.div>

            {/* Columna derecha: tarjeta resumen Plus */}
            <motion.div
              variants={fadeUp}
              className="rounded-3xl border border-slate-800/70 bg-gradient-to-br from-slate-900 to-slate-950 p-5 sm:p-6 flex flex-col gap-4 shadow-xl"
            >
              <div className="flex items-center justify-between mb-1">
                <div>
                  <p className="text-xs text-slate-400">Resumen plan</p>
                  <p className="text-lg font-semibold">TuOrdenYa Plus</p>
                </div>
                <span className="text-[10px] rounded-full px-3 py-1 bg-[#2ECC71] text-slate-950 font-semibold">
                  Pedidos + datos
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">Tipo de solución</span>
                  <span className="font-semibold text-slate-100">
                    Menú + pedidos básicos
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Foco principal</span>
                  <span className="font-semibold text-slate-100">
                    Registro y reportes
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Nivel de complejidad</span>
                  <span className="font-semibold text-slate-100">
                    Medio / manejable
                  </span>
                </div>
              </div>

              <div className="mt-2 h-px bg-slate-800/70" />

              <div className="space-y-2 text-xs">
                <p className="text-slate-400">Incluye</p>
                <ul className="text-slate-300 space-y-1">
                  <li>• Todo lo del plan Light.</li>
                  <li>• Registro de pedidos básicos.</li>
                  <li>• Reportes de ventas por rango de fechas.</li>
                  <li>• Productos más vendidos y tickets promedio.</li>
                </ul>
              </div>

              <p className="text-[11px] text-slate-500 pt-1">
                Cuando necesites manejar mesas, tiempos de cocina y cuentas
                separadas, Pro es el siguiente paso natural en la misma
                plataforma.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* SECCIÓN: QUÉ INCLUYE PLUS */}
        <section className="py-10 border-t border-slate-800/70">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-3 gap-6"
          >
            <motion.div variants={fadeUp} className="md:col-span-1">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3">
                Lo que incluye el plan Plus
              </h2>
              <p className="text-sm text-slate-400">
                Plus combina tu menú digital con un registro simple de pedidos y
                reportes que te ayudan a entender cómo se comportan tus ventas.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="md:col-span-2 grid sm:grid-cols-2 gap-4 text-sm"
            >
              <div className="space-y-2">
                <p className="font-semibold">Registro centralizado de pedidos</p>
                <p className="text-slate-400 text-xs">
                  Lleva un control de los pedidos que entran por salón, WhatsApp
                  o domicilio, sin necesidad de un sistema complejo de mesas.
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold">Reportes básicos</p>
                <p className="text-slate-400 text-xs">
                  Visualiza ventas por día, franja horaria o canal, y entiende
                  mejor los momentos fuertes y flojos de tu operación.
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold">Top de productos</p>
                <p className="text-slate-400 text-xs">
                  Identifica cuáles platos se venden más y cuáles casi no se
                  mueven, para ajustar menú, combos o promociones.
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold">Base lista para Pro</p>
                <p className="text-slate-400 text-xs">
                  Toda la estructura de datos está pensada para que, cuando
                  pases a Pro, no tengas que empezar de cero ni migrar de
                  sistema.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* SECCIÓN: CUÁNDO SALTAR A PRO */}
        <section className="py-12 border-t border-slate-800/70">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-[1.1fr,1fr] gap-8 items-start"
          >
            <motion.div variants={fadeUp}>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3">
                ¿Cuándo tiene sentido subir a Pro?
              </h2>
              <p className="text-sm text-slate-400 mb-4 max-w-xl">
                Si Plus te queda corto porque ya manejas muchas mesas,
                tiempos de cocina o varios ambientes, Pro se vuelve la
                herramienta adecuada.
              </p>
              <ul className="text-sm text-slate-300 space-y-2">
                <li>
                  • Manejas varias mesas al tiempo y necesitas ver su estado.
                </li>
                <li>
                  • Te interesa dividir cuentas, manejar propinas y controlar
                  cierres.
                </li>
                <li>
                  • Quieres ver tiempos de preparación y evitar cuellos de
                  botella.
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="rounded-3xl border border-slate-800/70 bg-slate-900/60 p-5 text-sm"
            >
              <p className="text-xs font-semibold text-slate-300 mb-2">
                ¿Es Plus para ti?
              </p>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>• Ya tienes buen volumen de pedidos.</li>
                <li>• Quieres ver datos claros sin complicarte.</li>
                <li>
                  • Aún no estás listo para una operación de salón completa.
                </li>
                <li>
                  • Necesitas más información que la que te da solo un menú.
                </li>
              </ul>
              <a
                href="/#contacto"
                className="inline-flex mt-4 px-4 py-2 rounded-full bg-[#2ECC71] text-slate-950 text-xs font-semibold hover:bg-[#38D27C]"
              >
                Hablar del producto Plus
              </a>
            </motion.div>
          </motion.div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800/70 py-6 text-[11px] text-slate-500">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between gap-3">
          <p>
            © {new Date().getFullYear()} TuOrdenYa. Todos los derechos
            reservados.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="/#productos" className="hover:text-[#FF6F3C]">
              Productos
            </a>
            <a href="/#faq" className="hover:text-[#FF6F3C]">
              FAQs
            </a>
            <a href="/#contacto" className="hover:text-[#FF6F3C]">
              Contacto
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
