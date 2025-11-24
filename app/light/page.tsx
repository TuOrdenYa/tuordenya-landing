"use client";

import Image from "next/image";
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

export default function LightPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* NAVBAR SIMPLE (reutilizado) */}
      <header className="border-b border-slate-800/80 sticky top-0 z-30 backdrop-blur bg-slate-950/90">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <a href="/" className="flex items-center gap-2">
            <Image
              src="/logo-tuordenya-white.png"
              alt="TuOrdenYa"
              width={140}
              height={40}
              className="h-8 w-auto"
              priority
            />
            <span className="text-xs text-slate-400 hidden sm:inline">
              Volver a la página principal
            </span>
          </a>

          <a
            href="/"
            className="text-xs px-4 py-2 rounded-full border border-slate-700 hover:border-[#FF6F3C] hover:text-[#FF6F3C] transition-colors"
          >
            ← Volver a inicio
          </a>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-4">
        {/* HERO ESPECÍFICO LIGHT */}
        <section className="py-10 sm:py-14">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-[1.2fr,1fr] gap-8 items-start"
          >
            <motion.div variants={fadeUp} className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#FF6F3C] bg-[#FFD5C2] px-3 py-1 text-[11px] font-medium text-[#FF6F3C]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF6F3C]" />
                Plan Light · Menú digital + QR + WhatsApp
              </span>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
                Tu{" "}
                <span className="text-[#FF6F3C]">
                  primer menú digital profesional
                </span>{" "}
                sin complicarte la vida.
              </h1>

              <p className="text-sm sm:text-base text-slate-400 max-w-xl">
                El plan <strong>Light</strong> es para cafeterías, food trucks y
                restaurantes pequeños que quieren salir del papel, actualizar
                precios fácil y recibir pedidos por WhatsApp con un{" "}
                <strong>menú digital bonito y rápido de implementar</strong>.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="/#contacto"
                  className="px-5 py-2.5 text-sm rounded-full bg-[#FF6F3C] text-slate-950 font-semibold hover:bg-[#FF814F] transition-colors"
                >
                  Quiero el plan Light
                </a>
                <a
                  href="/#planes"
                  className="px-5 py-2.5 text-sm rounded-full border border-slate-700/70 hover:border-[#FF6F3C] hover:text-[#FF6F3C] transition-colors"
                >
                  Ver todos los planes
                </a>
              </div>

              <p className="text-[11px] text-slate-500">
                Ideal si todavía no necesitas manejar mesas, tiempos de cocina o
                reportes avanzados, pero quieres una experiencia digital
                moderna.
              </p>
            </motion.div>

            {/* Panel de highlights */}
            <motion.div
              variants={fadeUp}
              className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5 flex flex-col gap-4 text-xs"
            >
              <div>
                <p className="text-slate-400 text-xs mb-1">
                  Lo que incluye el plan Light
                </p>
                <p className="text-sm font-semibold">
                  Lo esencial para tener tu menú digital listo.
                </p>
              </div>

              <ul className="space-y-2 text-slate-300">
                <li>• Menú digital responsive (móvil, tablet, computador).</li>
                <li>• Código QR por local listo para imprimir.</li>
                <li>• Botón “Ordenar por WhatsApp” con mensaje prellenado.</li>
                <li>• Ajuste básico a tu marca (logo y colores principales).</li>
                <li>
                  • Posibilidad de actualizar platos, precios y descripciones.
                </li>
              </ul>

              <div className="mt-2 border-t border-slate-800 pt-3 text-[11px] text-slate-500">
                Cuando tu operación crezca, puedes migrar a{" "}
                <strong>Plus</strong> o <strong>Pro</strong> sin perder tu menú
                ni volver a montar todo.
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* SECCIÓN: PARA QUIÉN ES LIGHT */}
        <section className="py-8 border-t border-slate-800/70">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 gap-8 text-sm"
          >
            <motion.div variants={fadeUp}>
              <h2 className="text-lg sm:text-xl font-semibold mb-3">
                ¿Para qué tipo de negocio es ideal?
              </h2>
              <p className="text-slate-400 mb-3">
                Light está pensado para negocios que quieren{" "}
                <strong>dar un primer paso digital</strong> sin cambiar toda su
                operación.
              </p>
              <ul className="text-slate-300 space-y-1 text-xs">
                <li>• Cafeterías de barrio.</li>
                <li>• Food trucks y puestos de comida rápida.</li>
                <li>• Restaurantes pequeños con carta corta.</li>
                <li>• Negocios que hoy usan carta impresa o fotos por WhatsApp.</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h3 className="text-sm font-semibold mb-2">
                Problemas que resuelve Light
              </h3>
              <ul className="text-slate-300 space-y-1 text-xs">
                <li>• Tener que reimprimir cartas cada vez que suben precios.</li>
                <li>• Cartas viejas con productos que ya no existen.</li>
                <li>• Clientes pidiendo “mándame la carta por WhatsApp”.</li>
                <li>
                  • Mesas esperando mientras el mesero busca una carta disponible.
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </section>

        {/* PASOS DE IMPLEMENTACIÓN PARA LIGHT */}
        <section className="py-10 border-t border-slate-800/70">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2
              variants={fadeUp}
              className="text-lg sm:text-xl font-semibold mb-4"
            >
              ¿Cómo es el proceso para activar tu plan Light?
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-5 text-xs">
              <motion.div
                variants={fadeUp}
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-4"
              >
                <p className="text-slate-400 text-[11px]">Paso 1</p>
                <p className="font-semibold mt-1 mb-2">
                  Nos compartes tu carta
                </p>
                <p className="text-slate-400">
                  Enviamos un formato simple para que compartas tus categorías,
                  platos, descripciones y precios.
                </p>
              </motion.div>
              <motion.div
                variants={fadeUp}
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-4"
              >
                <p className="text-slate-400 text-[11px]">Paso 2</p>
                <p className="font-semibold mt-1 mb-2">
                  Maquetamos tu menú digital
                </p>
                <p className="text-slate-400">
                  Cargamos la información, ajustamos colores a tu marca y te
                  compartimos el demo para revisar.
                </p>
              </motion.div>
              <motion.div
                variants={fadeUp}
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-4"
              >
                <p className="text-slate-400 text-[11px]">Paso 3</p>
                <p className="font-semibold mt-1 mb-2">
                  Activamos QR y botón de WhatsApp
                </p>
                <p className="text-slate-400">
                  Te entregamos el QR listo para imprimir y dejamos configurado
                  el botón “Ordenar por WhatsApp”.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* CTA FINAL */}
        <section className="py-10 border-t border-slate-800/70 mb-12">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8 text-center">
            <h2 className="text-lg sm:text-xl font-semibold mb-2">
              ¿Listo para salir del menú en papel?
            </h2>
            <p className="text-sm text-slate-400 mb-4 max-w-xl mx-auto">
              El plan Light te permite tener un menú digital moderno en poco
              tiempo, sin cambiar toda tu operación. Si luego necesitas más,
              siempre podrás crecer a Plus o Pro.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="/#contacto"
                className="px-5 py-2.5 text-sm rounded-full bg-[#FF6F3C] text-slate-950 font-semibold hover:bg-[#FF814F] transition-colors"
              >
                Quiero que me contacten por Light
              </a>
              <a
                href="/#planes"
                className="px-5 py-2.5 text-sm rounded-full border border-slate-700/70 hover:border-[#FF6F3C] hover:text-[#FF6F3C] transition-colors"
              >
                Ver diferencia con Plus y Pro
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER SIMPLE */}
      <footer className="border-t border-slate-800/70 py-6 text-[11px] text-slate-500">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row justify-between gap-3">
          <p>© {new Date().getFullYear()} TuOrdenYa. Plan Light.</p>
          <div className="flex flex-wrap gap-3">
            <a href="/" className="hover:text-[#FF6F3C]">
              Inicio
            </a>
            <a href="/#planes" className="hover:text-[#FF6F3C]">
              Ver todos los planes
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
