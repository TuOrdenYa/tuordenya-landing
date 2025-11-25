"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image"; // si lo usas en esta página (no lo usas ahora, pero por si acaso)
import LeadForm from "../components/LeadForm";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

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

  const planLabelMap: Record<Plan, string> = {
    Light: "Quiero mi menú digital (Light)",
    Plus: "Quiero hablar de Plus",
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

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 transition-colors duration-300">
      {/* NAVBAR COMPARTIDO */}
      <Navbar />

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
                negocio: <strong>Light</strong> (menú + QR),{" "}
                <strong>Plus</strong> (pedidos y reportes básicos) y{" "}
                <strong>Pro</strong> (operación completa en salón y cocina).
                Empiezas donde estás y escalas cuando lo necesites.
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
                  href="#productos"
                  className="px-5 py-2.5 text-sm rounded-full border border-slate-700/70 hover:border-[#FF6F3C] hover:text-[#FF6F3C] transition-colors"
                >
                  Ver productos Light / Plus / Pro
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
                <div className="rounded-2xl border border-[#F7C325] bg-[#F7C3251A] px-4 py-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold">Light</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#F7C325] text-slate-950 font-semibold">
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
                <div className="rounded-2xl border border-[#2ECC71] bg-[#2ECC711A] px-4 py-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold">Plus</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#2ECC71] text-slate-950 font-semibold">
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
        {/* ...aquí TODO el resto de tus secciones tal como las tienes ahora... */}
        {/* No las toco para que solo cambiemos header/footer en este paso */}

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
        {/* ...y así sucesivamente, sin cambios, hasta el formulario/contacto... */}

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

            {/* Aquí usamos el componente reutilizable */}
            <motion.div variants={fadeUp}>
              <LeadForm
                page="landing_home"
                defaultInterest="Solo menú digital (Light)"
                whatsappNumber="573227921640"
              />
            </motion.div>
          </motion.div>
        </section>
      </main>

      {/* FOOTER COMPARTIDO */}
      <Footer />
    </div>
  );
}
