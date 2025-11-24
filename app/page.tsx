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

type Plan = "Light" | "Plus" | "Pro";

export default function LandingPro() {
  const [selectedPlan, setSelectedPlan] = useState<Plan>("Light");
  const [isPlanMenuOpen, setIsPlanMenuOpen] = useState(false);
  const [isHeaderPlansOpen, setIsHeaderPlansOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobilePlansOpen, setIsMobilePlansOpen] = useState(false); // NUEVO: controla acordeón de planes en móvil

  const planLabelMap: Record<Plan, string> = {
    Light: "Quiero mi menú digital (Light)",
    Plus: "Quiero el plan Plus",
    Pro: "Quiero hablar de Pro",
  };

  const handlePrimaryClick = () => {
    const section = document.getElementById("contacto");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.hash = "#contacto";
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobilePlansOpen(false); // cerramos también el submenú de planes
  };

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
            <a href="#como-funciona" className="hover:text-[#FF6F3C]">
              Cómo funciona
            </a>

            {/* Dropdown de planes en el header (desktop) */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsHeaderPlansOpen((open) => !open)}
                className="inline-flex items-center gap-1 hover:text-[#FF6F3C]"
              >
                Nuestros planes
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

            <a href="#faq" className="hover:text-[#FF6F3C]">
              FAQs
            </a>
          </div>

          {/* ACCIONES DERECHA */}
          <div className="flex items-center gap-3">
            {/* CTA desktop */}
            <a
              href="#contacto"
              className="hidden sm:inline-flex text-xs sm:text-sm px-4 py-2 rounded-full bg-[#FF6F3C] text-slate-950 font-semibold hover:bg-[#FF814F] transition-colors md:inline-flex"
            >
              Agenda una demo
            </a>

            {/* Botón menú móvil */}
            <button
              type="button"
              className="inline-flex items-center justify-center md:hidden h-9 w-9 rounded-full border border-slate-700 text-slate-100"
              onClick={() =>
                setIsMobileMenuOpen((open) => {
                  const next = !open;
                  if (!next) setIsMobilePlansOpen(false);
                  return next;
                })
              }
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
                href="#como-funciona"
                className="block py-2 text-slate-100 hover:text-[#FF6F3C]"
                onClick={closeMobileMenu}
              >
                Cómo funciona
              </a>

              {/* Acordeón "Nuestros planes" en móvil */}
              <div className="pt-1">
                <button
                  type="button"
                  className="w-full flex items-center justify-between py-2 text-slate-100 hover:text-[#FF6F3C]"
                  onClick={() =>
                    setIsMobilePlansOpen((open) => !open)
                  }
                >
                  <span>Nuestros planes</span>
                  <span className="text-[10px]">
                    {isMobilePlansOpen ? "▲" : "▼"}
                  </span>
                </button>

                {isMobilePlansOpen && (
                  <div className="mt-1 space-y-1 text-xs pl-3 border-l border-slate-800">
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
                )}
              </div>

              <a
                href="#faq"
                className="block pt-2 pb-1 text-slate-100 hover:text-[#FF6F3C]"
                onClick={closeMobileMenu}
              >
                FAQs
              </a>

              <a
                href="#contacto"
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
        {/* HERO */}
        <section className="py-12 sm:py-16 lg:py-20">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-[1.2fr,1fr] gap-10 items-center"
          >
            {/* Columna izquierda: mensaje principal */}
            <motion.div variants={fadeUp} className="space-y-5">
              {/* Badge superior */}
              <span className="inline-flex items-center gap-2 rounded-full border border-[#FF6F3C] bg-[#FFD5C2] px-3 py-1 text-xs font-medium text-[#FF6F3C]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF6F3C]" />
                Empieza con Light, escala a Plus y Pro cuando crezcas
              </span>

              {/* Título */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
                Menús digitales y operación completa{" "}
                <span className="text-[#FF6F3C]">
                  para restaurantes de cualquier tamaño.
                </span>
              </h1>

              {/* Subtítulo */}
              <p className="text-sm sm:text-base text-slate-400 max-w-xl">
                TuOrdenYa tiene tres niveles pensados para cada etapa de tu
                negocio: <strong>Light</strong> (menú + QR), <strong>Plus</strong>{" "}
                (pedidos y reportes básicos) y <strong>Pro</strong> (operación
                completa en salón y cocina). Empiezas donde estás y escalas
                cuando lo necesites.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3">
                {/* Botón principal + desplegable de plan */}
                <div className="relative inline-flex">
                  {/* Botón principal: envía al formulario */}
                  <button
                    type="button"
                    onClick={handlePrimaryClick}
                    className="px-5 py-2.5 text-sm rounded-l-full rounded-r-none bg-[#FF6F3C] text-slate-950 font-semibold hover:bg-[#FF814F] transition-colors whitespace-nowrap"
                  >
                    {planLabelMap[selectedPlan]}
                  </button>

                  {/* Botón para abrir/cerrar el menú */}
                  <button
                    type="button"
                    onClick={() => setIsPlanMenuOpen((open) => !open)}
                    className="px-3 py-2.5 text-sm rounded-r-full rounded-l-none bg-[#FF6F3C] border-l border-[#FF814F] text-slate-950 font-semibold hover:bg-[#FF814F] transition-colors"
                  >
                    ▾
                  </button>

                  {/* Menú desplegable */}
                  {isPlanMenuOpen && (
                    <div className="absolute z-20 mt-1 w-full min-w-[260px] rounded-2xl border border-slate-800 bg-slate-950 shadow-lg overflow-hidden">
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedPlan("Light");
                          setIsPlanMenuOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-xs hover:bg-slate-900 ${
                          selectedPlan === "Light" ? "bg-slate-900" : ""
                        }`}
                      >
                        Light – Menú + QR + WhatsApp
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedPlan("Plus");
                          setIsPlanMenuOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-xs hover:bg-slate-900 ${
                          selectedPlan === "Plus" ? "bg-slate-900" : ""
                        }`}
                      >
                        Plus – Pedidos básicos + reportes
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedPlan("Pro");
                          setIsPlanMenuOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-xs hover:bg-slate-900 ${
                          selectedPlan === "Pro" ? "bg-slate-900" : ""
                        }`}
                      >
                        Pro – Operación completa
                      </button>
                    </div>
                  )}
                </div>

                {/* CTA secundario */}
                <a
                  href="#planes"
                  className="px-5 py-2.5 text-sm rounded-full border border-slate-700/70 hover:border-[#FF6F3C] hover:text-[#FF6F3C] transition-colors"
                >
                  Ver planes Light / Plus / Pro
                </a>
              </div>

              {/* Segmentos por tipo de restaurante */}
              <div className="flex flex-wrap gap-2 pt-2 text-[11px] text-slate-400">
                <span className="px-3 py-1 rounded-full bg-slate-900/60 border border-slate-800/80">
                  ☕ Cafeterías, food trucks y locales pequeños (Light)
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-900/60 border border-slate-800/80">
                  🍽️ Restaurantes con salón y mayor volumen (Plus)
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-900/60 border border-slate-800/80">
                  🏬 Cadenas y alta rotación / dark kitchens (Pro)
                </span>
              </div>
            </motion.div>

            {/* Columna derecha: mini resumen de los 3 niveles */}
            <motion.div
              variants={fadeUp}
              className="rounded-3xl border border-slate-800/70 bg-gradient-to-br from-slate-900 to-slate-950 p-5 sm:p-6 flex flex-col gap-4 shadow-xl"
            >
              <div className="flex items-center justify-between mb-1">
                <div>
                  <p className="text-xs text-slate-400">Suite TuOrdenYa</p>
                  <p className="text-lg font-semibold">
                    Elige el nivel para tu restaurante
                  </p>
                </div>
                <span className="text-[10px] rounded-full px-3 py-1 bg-slate-900/80 border border-slate-700/80 text-slate-300">
                  Escalable por etapas
                </span>
              </div>

              <div className="space-y-3 text-xs">
                {/* Light */}
                <div className="rounded-2xl border border-[#FF6F3C] bg-[#FF6F3C1A] px-4 py-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold">Light</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#FF6F3C] text-slate-950 font-semibold">
                      Punto de partida
                    </span>
                  </div>
                  <p className="text-slate-200">
                    Menú digital responsive, QR por local y botón de pedido por
                    WhatsApp. Ideal para cafeterías, food trucks y negocios
                    pequeños.
                  </p>
                </div>

                {/* Plus */}
                <div className="rounded-2xl border border-slate-800/80 bg-slate-900/80 px-4 py-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold">Plus</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-200">
                      Pedidos + reportes
                    </span>
                  </div>
                  <p className="text-slate-400">
                    Todo lo de Light, más registro de pedidos básicos y
                    reportes sencillos para entender qué se vende y cuándo.
                  </p>
                </div>

                {/* Pro */}
                <div className="rounded-2xl border border-[#4A90E2] bg-[#4A90E21A] px-4 py-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold">Pro</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#4A90E2] text-slate-50 font-semibold">
                      Operación completa
                    </span>
                  </div>
                  <p className="text-slate-200">
                    Órdenes por mesa y canal, tiempos de cocina, cuentas y
                    cierres. Pensado para restaurantes de alta rotación, cadenas
                    y dark kitchens.
                  </p>
                </div>
              </div>

              <p className="text-[11px] text-slate-500 pt-1">
                Empiezas con el nivel que necesitas hoy y puedes migrar a Plus o
                Pro sin cambiar de plataforma ni de menú.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* SECCIÓN BENEFICIOS */}
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
                ¿Qué ganas con TuOrdenYa?
              </h2>
              <p className="text-sm text-slate-400">
                Pasas de un menú impreso a una experiencia digital que conecta
                pedidos, operación y datos en un solo lugar.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="md:col-span-2 grid sm:grid-cols-2 gap-4 text-sm"
            >
              <ul className="space-y-2">
                <li>• Los clientes ven tu carta escaneando un código QR.</li>
                <li>
                  • Recibes pedidos por WhatsApp o directamente desde el
                  sistema.
                </li>
                <li>• Actualizas precios y platos sin reimprimir menús.</li>
              </ul>
              <ul className="space-y-2">
                <li>
                  • Reportes básicos desde Plus y operación completa en Pro.
                </li>
                <li>
                  • Escalable: comienza con Light y migra a Plus/Pro cuando
                  creces.
                </li>
                <li>
                  • Base lista para integrarse con tu flujo actual (POS, cocina,
                  etc.).
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </section>

        {/* CÓMO FUNCIONA */}
        <section id="como-funciona" className="py-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2
              variants={fadeUp}
              className="text-xl sm:text-2xl font-semibold mb-6"
            >
              Cómo funciona
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-5 text-sm">
              <motion.div
                variants={fadeUp}
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-4"
              >
                <p className="text-xs text-slate-400">Paso 1</p>
                <p className="font-semibold mt-1 mb-2">Configura tu menú</p>
                <p className="text-slate-400 text-xs">
                  Cargamos tu carta, categorías, modificadores y combos.
                  Ajustamos a tu marca para que se vea como tu restaurante.
                </p>
              </motion.div>
              <motion.div
                variants={fadeUp}
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-4"
              >
                <p className="text-xs text-slate-400">Paso 2</p>
                <p className="font-semibold mt-1 mb-2">Imprime tus QR</p>
                <p className="text-slate-400 text-xs">
                  Te entregamos los códigos QR listos para mesas, empaques y
                  puntos de venta. Opcional: diseño en tu línea gráfica.
                </p>
              </motion.div>
              <motion.div
                variants={fadeUp}
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-4"
              >
                <p className="text-xs text-slate-400">Paso 3</p>
                <p className="font-semibold mt-1 mb-2">
                  Empiezas a recibir pedidos
                </p>
                <p className="text-slate-400 text-xs">
                  Los clientes ordenan desde su celular. Tú ves pedidos, tiempos
                  y cuentas desde una vista única.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* SECCIÓN PRO DETALLADA */}
        <section id="pro" className="py-12 border-t border-slate-800/70">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-[1.1fr,1fr] gap-8 items-start"
          >
            <motion.div variants={fadeUp}>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3">
                RestOrder Pro: operación completa
              </h2>
              <p className="text-sm text-slate-400 mb-4 max-w-xl">
                Cuando tu restaurante crece, necesitas algo más que un menú
                digital. Pro está pensado para manejar órdenes, tiempos de
                cocina, cuentas por mesa y reportes de operación.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <p className="font-semibold">Órdenes por mesa y canal</p>
                  <p className="text-slate-400 text-xs">
                    Control de órdenes en salón, domicilio y para llevar.
                    Clientes, mesa y estado de cada pedido.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold">Flujo cocina y barra</p>
                  <p className="text-slate-400 text-xs">
                    Envío de órdenes a cocina/bar, estados por preparación y
                    alertas de demora.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold">Cuentas y pagos</p>
                  <p className="text-slate-400 text-xs">
                    Divide cuentas, agrega productos, maneja propinas y deja
                    todo listo para POS o caja.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold">Reportes operativos</p>
                  <p className="text-slate-400 text-xs">
                    Órdenes por franja horaria, platos más vendidos y desempeño
                    por canal.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="rounded-3xl border border-[#4A90E2] bg-gradient-to-br from-slate-900 to-slate-950 p-5 text-sm"
            >
              <p className="text-xs font-semibold text-[#4A90E2] mb-2">
                ¿Para quién es Pro?
              </p>
              <ul className="space-y-2 text-xs">
                <li>• Restaurantes con varias mesas y rotación constante.</li>
                <li>• Cadenas pequeñas o marcas con más de una sede.</li>
                <li>• Dark kitchens con alto volumen de pedidos.</li>
                <li>
                  • Negocios que ya usan POS y quieren conectar la operación.
                </li>
              </ul>
              <a
                href="#contacto"
                className="inline-flex mt-4 px-4 py-2 rounded-full bg-[#4A90E2] text-slate-50 text-xs font-semibold hover:bg-[#5fa3ff]"
              >
                Quiero hablar de la versión Pro
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* INTEGRACIONES */}
        <section className="py-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2
              variants={fadeUp}
              className="text-xl sm:text-2xl font-semibold mb-2"
            >
              Integraciones y ecosistema
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-sm text-slate-400 mb-6 max-w-xl"
            >
              TuOrdenYa está diseñado para conversar con otras herramientas que
              ya usas en tu restaurante. Empezamos simple y vamos creciendo
              contigo.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="grid sm:grid-cols-3 gap-4 text-xs"
            >
              <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-4">
                <p className="font-semibold mb-1 text-sm">Canales de pedido</p>
                <p className="text-slate-400">
                  QR, WhatsApp y órdenes desde salón. Diseño para sumar otros
                  canales en futuro.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-4">
                <p className="font-semibold mb-1 text-sm">Pagos y facturación</p>
                <p className="text-slate-400">
                  Integración futura con pasarelas y/o POS. La arquitectura ya
                  está pensada para eso.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-4">
                <p className="font-semibold mb-1 text-sm">Datos y reportes</p>
                <p className="text-slate-400">
                  Base de datos preparada para alimentar tableros e informes
                  avanzados (Plus y Pro).
                </p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* PLANES */}
        <section id="planes" className="py-12 border-t border-slate-800/70">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2
              variants={fadeUp}
              className="text-xl sm:text-2xl font-semibold mb-2"
            >
              Planes pensados para ti
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-sm text-slate-400 mb-6"
            >
              Comienza con lo básico y escala a medida que tu restaurante crece.
              Todos los planes incluyen hosting, dominio técnico y soporte
              básico.
            </motion.p>

            <div className="grid md:grid-cols-3 gap-5 text-sm">
              {/* Light */}
              <motion.div
                variants={fadeUp}
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-5 flex flex-col justify-between"
              >
                <div>
                  <p className="text-xs font-semibold text-slate-400">Light</p>
                  <p className="text-lg font-semibold mt-1 mb-1">
                    Menú + QR + WhatsApp
                  </p>
                  <p className="text-xs text-slate-400 mb-3">
                    Ideal para cafeterías, food trucks y negocios pequeños que
                    quieren salir del papel.
                  </p>
                  <ul className="text-xs space-y-1">
                    <li>• Menú digital responsive.</li>
                    <li>• Código QR por local.</li>
                    <li>• Botón “Ordenar por WhatsApp”.</li>
                    <li>• Ajuste básico a tu marca.</li>
                  </ul>
                </div>
                <p className="mt-4 text-xs text-slate-500">
                  👉 Punto de partida rápido y económico.
                </p>
              </motion.div>

              {/* Plus */}
              <motion.div
                variants={fadeUp}
                className="rounded-2xl border border-slate-800/70 bg-slate-900/80 p-5 flex flex-col justify-between"
              >
                <div>
                  <p className="text-xs font-semibold text-slate-400">Plus</p>
                  <p className="text-lg font-semibold mt-1 mb-1">
                    Pedidos básicos + reportes
                  </p>
                  <p className="text-xs text-slate-400 mb-3">
                    Para restaurantes que empiezan a manejar más volumen y
                    necesitan ver datos simples.
                  </p>
                  <ul className="text-xs space-y-1">
                    <li>• Todo lo de Light.</li>
                    <li>• Registro de pedidos básicos.</li>
                    <li>• Reportes de ventas sencillos.</li>
                    <li>• Mejor visibilidad de operación.</li>
                  </ul>
                </div>
                <p className="mt-4 text-xs text-slate-500">
                  👉 Ideal cuando ya superaste la fase “solo menú”.
                </p>
              </motion.div>

              {/* Pro */}
              <motion.div
                variants={fadeUp}
                className="rounded-2xl border border-[#FF6F3C] bg-gradient-to-br from-[#FF6F3C33] to-slate-900 p-5 flex flex-col justify-between relative overflow-hidden"
              >
                <span className="absolute right-4 top-4 text-[10px] px-2 py-1 rounded-full bg-[#FF6F3C] text-slate-950 font-semibold">
                  Recomendado
                </span>
                <div>
                  <p className="text-xs font-semibold text-[#FF6F3C]">Pro</p>
                  <p className="text-lg font-semibold mt-1 mb-1">
                    Operación completa
                  </p>
                  <p className="text-xs text-slate-200 mb-3">
                    Pensado para la operación diaria: mesas, cocina, cuentas,
                    tiempos y reportes.
                  </p>
                  <ul className="text-xs space-y-1">
                    <li>• Todo lo de Light y Plus.</li>
                    <li>• Órdenes por mesa y canal.</li>
                    <li>• Flujo de cocina y barra.</li>
                    <li>• Cuentas, propinas y cierres.</li>
                    <li>• Reportes operativos clave.</li>
                  </ul>
                </div>
                <a
                  href="#contacto"
                  className="mt-4 inline-flex px-4 py-2 rounded-full bg-[#FF6F3C] text-slate-950 text-xs font-semibold hover:bg-[#FF814F]"
                >
                  Quiero cotizar Pro
                </a>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* TESTIMONIOS */}
        <section className="py-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2
              variants={fadeUp}
              className="text-xl sm:text-2xl font-semibold mb-2"
            >
              Lo que dicen los restaurantes
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-sm text-slate-400 mb-6"
            >
              Aún si hoy estás en papel o en WhatsApp, TuOrdenYa te ayuda a
              estandarizar tu operación paso a paso.
            </motion.p>

            <div className="grid md:grid-cols-3 gap-5 text-xs">
              <motion.div
                variants={fadeUp}
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-4"
              >
                <p className="mb-3 text-slate-200">
                  “Con el menú digital y los QR dejamos de imprimir cartas cada
                  vez que subían los precios. Hoy cambiamos todo en minutos.”
                </p>
                <p className="font-semibold">Café Alameda</p>
                <p className="text-slate-400">Cafetería de barrio</p>
              </motion.div>
              <motion.div
                variants={fadeUp}
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-4"
              >
                <p className="mb-3 text-slate-200">
                  “Plus nos permitió ver qué platos se mueven más por horario y
                  tomar decisiones de menú más rápido.”
                </p>
                <p className="font-semibold">La Parrilla 24</p>
                <p className="text-slate-400">Restaurante familiar</p>
              </motion.div>
              <motion.div
                variants={fadeUp}
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-4"
              >
                <p className="mb-3 text-slate-200">
                  “Con Pro tenemos control de las mesas, tiempos y cuentas sin
                  estar corriendo con papeles.”
                </p>
                <p className="font-semibold">Bistro Central</p>
                <p className="text-slate-400">Restaurante de alta rotación</p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-12 border-t border-slate-800/70">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-3xl"
          >
            <motion.h2
              variants={fadeUp}
              className="text-xl sm:text-2xl font-semibold mb-2"
            >
              Preguntas frecuentes
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-sm text-slate-400 mb-6"
            >
              Si tienes dudas específicas de tu operación, cuéntanos y adaptamos
              la implementación a tu caso.
            </motion.p>

            <motion.div variants={fadeUp} className="space-y-4 text-sm">
              <details className="group rounded-2xl border border-slate-800/70 bg-slate-900/60 px-4 py-3">
                <summary className="cursor-pointer list-none flex justify-between items-center">
                  <span>¿Cuánto se demora la implementación?</span>
                  <span className="text-xs text-slate-500 group-open:hidden">
                    +
                  </span>
                  <span className="text-xs text-slate-500 hidden group-open:inline">
                    –
                  </span>
                </summary>
                <p className="mt-2 text-xs text-slate-400">
                  Depende de la complejidad de tu carta y operación, pero
                  normalmente tomamos días, no meses. Light puede quedar listo
                  muy rápido; Pro requiere un poco más de coordinación.
                </p>
              </details>

              <details className="group rounded-2xl border border-slate-800/70 bg-slate-900/60 px-4 py-3">
                <summary className="cursor-pointer list-none flex justify-between items-center">
                  <span>¿Necesito cambiar mi POS actual?</span>
                  <span className="text-xs text-slate-500 group-open:hidden">
                    +
                  </span>
                  <span className="text-xs text-slate-500 hidden group-open:inline">
                    –
                  </span>
                </summary>
                <p className="mt-2 text-xs text-slate-400">
                  No necesariamente. TuOrdenYa puede convivir con tu POS actual
                  mientras definimos el nivel de integración que tenga sentido
                  para tu negocio.
                </p>
              </details>

              <details className="group rounded-2xl border border-slate-800/70 bg-slate-900/60 px-4 py-3">
                <summary className="cursor-pointer list-none flex justify-between items-center">
                  <span>¿Puedo empezar con Light y luego subir?</span>
                  <span className="text-xs text-slate-500 group-open:hidden">
                    +
                  </span>
                  <span className="text-xs text-slate-500 hidden group-open:inline">
                    –
                  </span>
                </summary>
                <p className="mt-2 text-xs text-slate-400">
                  Sí. Justamente la idea es que empieces con lo básico y puedas
                  migrar a Plus o Pro cuando el volumen de tu restaurante lo
                  justifique.
                </p>
              </details>
            </motion.div>
          </motion.div>
        </section>

        {/* FORMULARIO / CONTACTO */}
        <section
          id="contacto"
          className="py-12 border-t border-slate-800/70 mb-10"
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-[1.1fr,1fr] gap-8 items-start"
          >
            <motion.div variants={fadeUp}>
              <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                Conversemos sobre tu restaurante
              </h2>
              <p className="text-sm text-slate-400 mb-4">
                Déjanos tus datos y te contactamos para mostrarte cómo TuOrdenYa
                puede ayudarte a vender más y operar mejor.
              </p>
              <ul className="text-xs text-slate-400 space-y-1">
                <li>
                  • Hacemos una llamada corta para entender tu operación.
                </li>
                <li>
                  • Te mostramos un demo adaptado a tu tipo de negocio.
                </li>
                <li>• Te proponemos un plan claro (Light, Plus o Pro).</li>
              </ul>
            </motion.div>

            <motion.form
              variants={fadeUp}
              className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-5 space-y-4 text-sm"
            >
              <div>
                <label className="text-xs text-slate-400 block mb-1">
                  Nombre completo
                </label>
                <input
                  type="text"
                  placeholder="Ej: Juan Pérez"
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3 py-2 text-xs outline-none focus:border-[#FF6F3C]"
                />
              </div>
              <div>
                <label className="text-xs text-slate-400 block mb-1">
                  Nombre del restaurante
                </label>
                <input
                  type="text"
                  placeholder="Ej: La Parrilla 24"
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3 py-2 text-xs outline-none focus:border-[#FF6F3C]"
                />
              </div>
              <div>
                <label className="text-xs text-slate-400 block mb-1">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  placeholder="Ej: +57 300 000 0000"
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3 py-2 text-xs outline-none focus:border-[#FF6F3C]"
                />
              </div>
              <div>
                <label className="text-xs text-slate-400 block mb-1">
                  ¿Qué te interesa?
                </label>
                <select className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3 py-2 text-xs outline-none focus:border-[#FF6F3C]">
                  <option>Solo menú digital (Light)</option>
                  <option>Menú + pedidos y reportes (Plus)</option>
                  <option>Operación completa (Pro)</option>
                  <option>No estoy seguro, quiero que me asesoren</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-slate-400 block mb-1">
                  Cuéntanos un poco de tu operación
                </label>
                <textarea
                  rows={3}
                  placeholder="Número de mesas, sedes, si usas POS, etc."
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3 py-2 text-xs outline-none focus:border-[#FF6F3C]"
                />
              </div>
              <button
                type="button"
                className="w-full mt-2 rounded-full bg-[#FF6F3C] text-slate-950 font-semibold text-sm py-2 hover:bg-[#FF814F]"
              >
                Enviar mensaje
              </button>
              <p className="text-[11px] text-slate-500 mt-1">
                Respetamos tu tiempo: nada de spam, solo información relevante
                para tu restaurante.
              </p>
            </motion.form>
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
            <a href="#planes" className="hover:text-[#FF6F3C]">
              Planes
            </a>
            <a href="#faq" className="hover:text-[#FF6F3C]">
              FAQs
            </a>
            <a href="#contacto" className="hover:text-[#FF6F3C]">
              Contacto
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
