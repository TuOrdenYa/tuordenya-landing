"use client";

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
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 transition-colors duration-300">
      {/* NAVBAR */}
      <header className="border-b border-slate-800/80 sticky top-0 z-30 backdrop-blur bg-slate-950/90">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            {/* Logo: luego cambiamos por PNG real */}
            <a href="/" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-emerald-500 flex items-center justify-center font-semibold text-slate-950">
                TO
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-semibold text-sm sm:text-base">
                  TuOrdenYa
                </span>
                <span className="text-xs text-slate-400">
                  Menús y órdenes para restaurantes
                </span>
              </div>
            </a>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#como-funciona" className="hover:text-emerald-400">
              Cómo funciona
            </a>
            <a href="#pro" className="hover:text-emerald-400">
              Versión Pro
            </a>
            <a href="#planes" className="hover:text-emerald-400">
              Planes
            </a>
            <a href="#faq" className="hover:text-emerald-400">
              FAQs
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contacto"
              className="inline-flex text-xs sm:text-sm px-4 py-2 rounded-full bg-emerald-500 text-slate-950 font-semibold hover:bg-emerald-400 transition-colors"
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

              <p className="text-sm sm:text-base text-slate-400 max-w-xl">
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
                <p className="text-xs text-slate-400">
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

            {/* Tarjeta derecha – ahora mismo sigue igual, luego la cambiamos a Light/Plus/Pro */}
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
              className="rounded-3xl border border-emerald-500/40 bg-gradient-to-br from-emerald-500/10 to-slate-900 p-5 text-sm"
            >
              <p className="text-xs font-semibold text-emerald-400 mb-2">
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
                className="inline-flex mt-4 px-4 py-2 rounded-full bg-emerald-500 text-slate-950 text-xs font-semibold hover:bg-emerald-400"
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
                className="rounded-2xl border border-emerald-500/70 bg-gradient-to-br from-emerald-500/15 to-slate-900 p-5 flex flex-col justify-between relative overflow-hidden"
              >
                <span className="absolute right-4 top-4 text-[10px] px-2 py-1 rounded-full bg-emerald-500 text-slate-950 font-semibold">
                  Recomendado
                </span>
                <div>
                  <p className="text-xs font-semibold text-emerald-300">Pro</p>
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
                  className="mt-4 inline-flex px-4 py-2 rounded-full bg-emerald-500 text-slate-950 text-xs font-semibold hover:bg-emerald-400"
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
                Conversemos de tu restaurante
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
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3 py-2 text-xs outline-none focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="text-xs text-slate-400 block mb-1">
                  Nombre del restaurante
                </label>
                <input
                  type="text"
                  placeholder="Ej: La Parrilla 24"
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3 py-2 text-xs outline-none focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="text-xs text-slate-400 block mb-1">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  placeholder="Ej: +57 300 000 0000"
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3 py-2 text-xs outline-none focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="text-xs text-slate-400 block mb-1">
                  ¿Qué te interesa?
                </label>
                <select className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3 py-2 text-xs outline-none focus:border-emerald-500">
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
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3 py-2 text-xs outline-none focus:border-emerald-500"
                />
              </div>
              <button
                type="button"
                className="w-full mt-2 rounded-full bg-emerald-500 text-slate-950 font-semibold text-sm py-2 hover:bg-emerald-400"
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
