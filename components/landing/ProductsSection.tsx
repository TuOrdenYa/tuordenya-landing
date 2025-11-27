"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "./animations";
import { useI18n } from "@/components/i18n/LanguageContext";

export default function ProDetailsSection() {
  const { locale } = useI18n();

  const content =
    locale === "en"
      ? {
          title: "RestOrder Pro: full operations",
          subtitle:
            "When your restaurant needs more than a digital menu, Pro helps you control tables, kitchen, checks and reports day by day.",
          blocks: [
            {
              title: "Dining room and tables",
              items: [
                "Orders by table, area or channel (salon, takeaway, delivery).",
                "Open tickets, partial orders and split items.",
                "Notes for kitchen and special instructions from customers.",
              ],
            },
            {
              title: "Kitchen and bar",
              items: [
                "KOT / production view for kitchen and bar.",
                "Control of preparation times and status per order.",
                "Prioritization of dishes and handling of modifiers.",
              ],
            },
            {
              title: "Checks, tips and closing",
              items: [
                "Print or view checks, split by person or group.",
                "Tips management and simple closing per shift.",
                "Base prepared to connect with POS or invoicing.",
              ],
            },
          ],
          bottomNote:
            "Pro is designed for restaurants with higher rotation, several areas and the need to see what is happening in real time.",
        }
      : {
          title: "RestOrder Pro: operación completa",
          subtitle:
            "Cuando tu restaurante ya necesita algo más que un menú digital, Pro te ayuda a controlar mesas, cocina, cuentas y reportes en el día a día.",
          blocks: [
            {
              title: "Salón y mesas",
              items: [
                "Órdenes por mesa, zona o canal (salón, para llevar, domicilios).",
                "Cuentas abiertas, parciales y división de productos.",
                "Notas para cocina e indicaciones especiales de los clientes.",
              ],
            },
            {
              title: "Cocina y barra",
              items: [
                "Vista de producción (KOT) para cocina y barra.",
                "Control de tiempos de preparación y estado por pedido.",
                "Priorización de platos y manejo de modificadores.",
              ],
            },
            {
              title: "Cuentas, propinas y cierre",
              items: [
                "Impresión o visualización de cuentas, división por persona o grupo.",
                "Manejo de propinas y cierre sencillo por turno.",
                "Base lista para conectarse con tu POS o facturación.",
              ],
            },
          ],
          bottomNote:
            "Pro está pensado para restaurantes de mayor rotación, con varias áreas y necesidad de ver qué pasa en tiempo real.",
        };

  return (
    <section id="productos" className="py-12 border-t border-slate-800/70">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-3 gap-6"
      >
        {/* Título y resumen */}
        <motion.div variants={fadeUp} className="md:col-span-1">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">
            {content.title}
          </h2>
          <p className="text-sm text-slate-400">{content.subtitle}</p>
        </motion.div>

        {/* Bloques de detalle */}
        <motion.div
          variants={fadeUp}
          className="md:col-span-2 grid sm:grid-cols-3 gap-4 text-xs sm:text-sm"
        >
          {content.blocks.map((block) => (
            <div
              key={block.title}
              className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-4"
            >
              <p className="font-semibold mb-2 text-sm">{block.title}</p>
              <ul className="space-y-1 text-slate-400">
                {block.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <div className="mt-4 text-[11px] text-slate-500 max-w-3xl">
        {content.bottomNote}
      </div>
    </section>
  );
}
