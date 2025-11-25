"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import MarketingLayout from "./components/layout/MarketingLayout";
import LeadForm from "./components/LeadForm";

import ProductCard from "./components/landing/ProductCard";
import { productsData } from "./components/landing/productsData";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

type Plan = "Light" | "Plus" | "Pro";

export default function LandingPage() {
  const [selectedPlan, setSelectedPlan] = useState<Plan>("Light");
  const [isPlanMenuOpen, setIsPlanMenuOpen] = useState(false);

  const planLabelMap: Record<Plan, string> = {
    Light: "Quiero mi menú digital (Light)",
    Plus: "Quiero hablar de Plus",
    Pro: "Quiero hablar de Pro",
  };

  const handlePrimaryClick = () => {
    const section = document.getElementById("contacto");
    section
      ? section.scrollIntoView({ behavior: "smooth" })
      : (window.location.hash = "#contacto");
  };

  return (
    <MarketingLayout>
      {/* HERO */}
      <section className="py-12 sm:py-16 lg:py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-[1.2fr,1fr] gap-10 items-center"
        >
          {/* Columna izquierda */}
          <motion.div variants={fadeUp} className="space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#FF6F3C] bg-[#FFD5C2] px-3 py-1 text-xs font-medium text-[#FF6F3C]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF6F3C]" />
              Empieza con Light, escala a Plus y Pro cuando crezcas
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
              Menús digitales y operación completa{" "}
              <span className="text-[#FF6F3C]">para restaurantes.</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-400 max-w-xl">
              TuOrdenYa tiene tres niveles: <strong>Light</strong> (menú + QR),{" "}
              <strong>Plus</strong> (pedidos + reportes) y{" "}
              <strong>Pro</strong> (operación completa). Empiezas donde estás y
              escalas cuando lo necesites.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Botón principal + menú */}
              <div className="relative inline-flex">
                <button
                  type="button"
                  onClick={handlePrimaryClick}
                  className="px-5 py-2.5 text-sm rounded-l-full rounded-r-none bg-[#FF6F3C] text-slate-950 font-semibold hover:bg-[#FF814F]"
                >
                  {planLabelMap[selectedPlan]}
                </button>

                <button
                  type="button"
                  onClick={() => setIsPlanMenuOpen((o) => !o)}
                  className="px-3 py-2.5 text-sm rounded-r-full rounded-l-none bg-[#FF6F3C] border-l border-[#FF814F] text-slate-950 hover:bg-[#FF814F]"
                >
                  ▾
                </button>

                {isPlanMenuOpen && (
                  <div className="absolute z-20 mt-1 w-full min-w-[260px] rounded-2xl border border-slate-800 bg-slate-950 shadow-lg overflow-hidden">
                    {["Light", "Plus", "Pro"].map((plan) => (
                      <button
                        key={plan}
                        type="button"
                        onClick={() => {
                          setSelectedPlan(plan as Plan);
                          setIsPlanMenuOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-xs hover:bg-slate-900 ${
                          selectedPlan === plan ? "bg-slate-900" : ""
                        }`}
                      >
                        {plan === "Light" &&
                          "Light – Menú + QR + WhatsApp"}
                        {plan === "Plus" &&
                          "Plus – Pedidos básicos + reportes"}
                        {plan === "Pro" &&
                          "Pro – Operación completa"}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="#productos"
                className="px-5 py-2.5 text-sm rounded-full border border-slate-700/70 hover:text-[#FF6F3C] hover:border-[#FF6F3C]"
              >
                Ver productos Light / Plus / Pro
              </a>
            </div>

            {/* Segmentación */}
            <div className="flex flex-wrap gap-2 pt-2 text-[11px] text-slate-400">
              <span className="px-3 py-1 rounded-full bg-slate-900/60 border border-slate-800/80">
                ☕ Cafeterías y locales pequeños (Light)
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-900/60 border border-slate-800/80">
                🍽️ Restaurantes con salón (Plus)
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-900/60 border border-slate-800/80">
                🏬 Cadenas y dark kitchens (Pro)
              </span>
            </div>
          </motion.div>

          {/* Columna derecha */}
          <motion.div
            variants={fadeUp}
            className="rounded-3xl border border-slate-800/70 bg-gradient-to-br from-slate-900 to-slate-950 p-5 sm:p-6 flex flex-col gap-4 shadow-xl"
          >
            <div className="flex items-center justify-between mb-1">
              <div>
                <p className="text-xs text-slate-400">Suite TuOrdenYa</p>
                <p className="text-lg font-semibold">
                  Elige tu nivel de producto
                </p>
              </div>
              <span className="text-[10px] rounded-full px-3 py-1 bg-slate-900/80 border border-slate-700/80">
                Escalable
              </span>
            </div>

            <div className="space-y-3 text-xs">
              {/* Light */}
              <div className="rounded-2xl border border-[#F7C325] bg-[#F7C3251A] px-4 py-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold">Light</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#F7C325] text-slate-950 font-semibold">
                    Inicio rápido
                  </span>
                </div>
                <p className="text-slate-200">
                  Menú digital + QR y botón WhatsApp. Ideal para negocios
                  pequeños.
                </p>
              </div>

              {/* Plus */}
              <div className="rounded-2xl border border-[#2ECC71] bg-[#2ECC711A] px-4 py-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold">Plus</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#2ECC71] text-slate-950 font-semibold">
                    Reportes
                  </span>
                </div>
                <p className="text-slate-400">
                  Lo de Light + pedidos simples y reportes de venta.
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
                  Órdenes por mesa, cocina, cuentas y reportes avanzados.
                </p>
              </div>
            </div>

            <p className="text-[11px] text-slate-500 pt-1">
              Puedes escalar sin migrar de plataforma.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* BENEFICIOS */}
      <section className="py-10 border-t border-slate-800/70">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-6"
        >
          <motion.div variants={fadeUp}>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">
              ¿Qué ganas con TuOrdenYa?
            </h2>
            <p className="text-sm text-slate-400">
              Pasa de un menú en papel a una experiencia digital conectada con
              pedidos y operación.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="md:col-span-2 grid sm:grid-cols-2 gap-4 text-sm"
          >
            <ul className="space-y-2">
              <li>• El cliente escanea un QR y ve tu carta.</li>
              <li>• Recibes pedidos por WhatsApp o dentro del sistema.</li>
              <li>• Cambias precios y platos al instante.</li>
            </ul>
            <ul className="space-y-2">
              <li>• Reportes básicos (Plus) y operación completa (Pro).</li>
              <li>• Escalable según tu tamaño.</li>
              <li>• Integración futura con POS y cocina.</li>
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
          <motion.h2 variants={fadeUp} className="text-xl sm:text-2xl font-semibold mb-6">
            Cómo funciona
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-5 text-sm">
            {[
              {
                step: "Paso 1",
                title: "Configura tu menú",
                desc: "Cargamos tu carta, categorías, modificadores y combos. Lo adecuamos a tu marca.",
              },
              {
                step: "Paso 2",
                title: "Imprime tus QR",
                desc: "Te entregamos códigos QR para mesas, empaques y puntos de venta.",
              },
              {
                step: "Paso 3",
                title: "Empiezas a recibir pedidos",
                desc: "Los clientes ordenan. Tú ves tiempos, cuentas y estados.",
              },
            ].map((item) => (
              <motion.div
                key={item.step}
                variants={fadeUp}
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-4"
              >
                <p className="text-xs text-slate-400">{item.step}</p>
                <p className="font-semibold mt-1 mb-2">{item.title}</p>
                <p className="text-slate-400 text-xs">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* PRO DETALLADO */}
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
              Maneja órdenes, tiempos de cocina, cuentas por mesa y reportes de
              operación desde una sola plataforma.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              {[
                {
                  title: "Órdenes por mesa y canal",
                  desc: "Control por salón, domicilio y para llevar.",
                },
                {
                  title: "Flujo cocina y barra",
                  desc: "Estados de preparación, alertas y tiempos.",
                },
                {
                  title: "Cuentas y pagos",
                  desc: "Divide cuentas, agrega productos y maneja propinas.",
                },
                {
                  title: "Reportes operativos",
                  desc: "Ventas por franja, platos más vendidos y más.",
                },
              ].map((item) => (
                <div key={item.title} className="space-y-2">
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-slate-400 text-xs">{item.desc}</p>
                </div>
              ))}
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
              <li>• Restaurantes con varias mesas y rotación alta.</li>
              <li>• Cadenas y marcas con varias sedes.</li>
              <li>• Dark kitchens con alto volumen.</li>
              <li>• Negocios que usan POS y quieren conectar la operación.</li>
            </ul>
            <a
              href="#contacto"
              className="inline-flex mt-4 px-4 py-2 rounded-full bg-[#4A90E2] text-slate-50 text-xs font-semibold hover:bg-[#5fa3ff]"
            >
              Quiero hablar de Pro
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
          <motion.h2 variants={fadeUp} className="text-xl sm:text-2xl font-semibold mb-2">
            Integraciones y ecosistema
          </motion.h2>
          <motion.p variants={fadeUp} className="text-sm text-slate-400 mb-6 max-w-xl">
            TuOrdenYa está diseñado para integrarse con herramientas que ya usas.
          </motion.p>

          <motion.div variants={fadeUp} className="grid sm:grid-cols-3 gap-4 text-xs">
            {[
              {
                title: "Canales de pedido",
                desc: "QR, WhatsApp, salón. Preparado para más canales.",
              },
              {
                title: "Pagos y facturación",
                desc: "Integraciones futuras con pasarelas y POS.",
              },
              {
                title: "Datos y reportes",
                desc: "Base lista para dashboards avanzados.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-4"
              >
                <p className="font-semibold mb-1 text-sm">{item.title}</p>
                <p className="text-slate-400">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* PRODUCTOS (sección modular con ProductCard) */}
      <section id="productos" className="py-12 border-t border-slate-800/70">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 variants={fadeUp} className="text-xl sm:text-2xl font-semibold mb-2">
            Productos pensados para ti
          </motion.h2>
          <motion.p variants={fadeUp} className="text-sm text-slate-400 mb-6">
            Comienza con lo básico y escala a medida que crece tu restaurante.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-5 text-sm">
            {productsData.map((product) => (
              <motion.div key={product.id} variants={fadeUp}>
                <ProductCard {...product} />
              </motion.div>
            ))}
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
          <motion.h2 variants={fadeUp} className="text-xl sm:text-2xl font-semibold mb-2">
            Lo que dicen los restaurantes
          </motion.h2>
          <motion.p variants={fadeUp} className="text-sm text-slate-400 mb-6">
            Restaurantes reales que mejoraron su operación.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-5 text-xs">
            {[
              {
                name: "Café Alameda",
                role: "Cafetería de barrio",
                text: "“Con el menú digital dejamos de imprimir cartas cada vez que subían los precios.”",
              },
              {
                name: "La Parrilla 24",
                role: "Restaurante familiar",
                text: "“Plus nos dejó ver qué platos se mueven más por horario.”",
              },
              {
                name: "Bistro Central",
                role: "Restaurante de alta rotación",
                text: "“Con Pro controlamos mesas, tiempos y cuentas sin papeles.”",
              },
            ].map((t) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-4"
              >
                <p className="mb-3 text-slate-200">{t.text}</p>
                <p className="font-semibold">{t.name}</p>
                <p className="text-slate-400">{t.role}</p>
              </motion.div>
            ))}
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
          <motion.h2 variants={fadeUp} className="text-xl sm:text-2xl font-semibold mb-2">
            Preguntas frecuentes
          </motion.h2>
          <motion.p variants={fadeUp} className="text-sm text-slate-400 mb-6">
            Respondemos las dudas más comunes.
          </motion.p>

          <motion.div variants={fadeUp} className="space-y-4 text-sm">
            {[
              {
                q: "¿Cuánto se demora la implementación?",
                a: "Light se instala rápido. Pro requiere coordinar tu operación.",
              },
              {
                q: "¿Necesito cambiar mi POS?",
                a: "No necesariamente. Podemos integrarnos o convivir con tu POS actual.",
              },
              {
                q: "¿Puedo empezar con Light y luego subir?",
                a: "Sí. La plataforma está diseñada para escalar sin migrar.",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-slate-800/70 bg-slate-900/60 px-4 py-3"
              >
                <summary className="cursor-pointer flex justify-between items-center">
                  <span>{item.q}</span>
                  <span className="text-xs text-slate-500 group-open:hidden">+</span>
                  <span className="text-xs text-slate-500 hidden group-open:inline">–</span>
                </summary>
                <p className="mt-2 text-xs text-slate-400">{item.a}</p>
              </details>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-12 border-t border-slate-800/70 mb-10">
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
              Déjanos tus datos y te mostramos el plan ideal para tu restaurante.
            </p>
            <ul className="text-xs text-slate-400 space-y-1">
              <li>• Llamada corta para entender tu operación.</li>
              <li>• Demo personalizado según tu tipo de negocio.</li>
              <li>• Te recomendamos Light, Plus o Pro.</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeUp}>
            <LeadForm
              page="landing_home"
              defaultInterest="Solo menú digital (Light)"
              whatsappNumber="573227921640"
            />
          </motion.div>
        </motion.div>
      </section>
    </MarketingLayout>
  );
}
