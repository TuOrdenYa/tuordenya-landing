"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "./animations";
import ProductCard from "./ProductCard";
import { useI18n } from "../i18n/LanguageContext";

export default function ProductsSection() {
  const { home } = useI18n();
  const { productsSection } = home;

  return (
    <section id="productos" className="py-12 border-t border-slate-800/70">
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
          {productsSection.title}
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-sm text-slate-400 mb-6"
        >
          {productsSection.subtitle}
        </motion.p>

        <div className="grid md:grid-cols-3 gap-5 text-sm">
          {productsSection.products.map((product) => (
            <motion.div key={product.id} variants={fadeUp}>
              {/* ProductCard ya maneja el layout y estilos */}
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
