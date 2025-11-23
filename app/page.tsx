"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    restaurant: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("leads").insert([form]);

    setLoading(false);

    if (error) {
      console.error(error);
      alert("Error guardando los datos: " + error.message);
    } else {
      alert("¡Gracias! Te contactaremos pronto.");
      setForm({
        name: "",
        phone: "",
        email: "",
        restaurant: "",
        message: "",
      });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* HEADER */}
      <header className="border-b border-zinc-800">
        <div className="max-w-5xl mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500 text-zinc-950 font-bold">
              TO
            </span>
            <span className="font-semibold tracking-tight">TuOrdenYa</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm text-zinc-300">
            <a href="#planes" className="hover:text-white">Planes</a>
            <a href="#como-funciona" className="hover:text-white">Cómo funciona</a>
            <a href="#contacto" className="hover:text-white">Contacto</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <main className="max-w-5xl mx-auto px-4">
        <section className="py-14 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm font-medium text-emerald-400 mb-3">
              Menús digitales y órdenes para restaurantes
            </p>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Tu menú digital listo en minutos,
              <span className="text-emerald-400"> no en meses.</span>
            </h1>
            <p className="text-zinc-300 mb-6">
              TuOrdenYa te da menús con QR, pedidos por WhatsApp y una base sólida
              para crecer a Plus y Pro cuando tu operación lo necesite.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#contacto"
                className="px-5 py-3 rounded-md bg-emerald-500 text-zinc-950 font-medium hover:bg-emerald-400"
              >
                Agenda una demo
              </a>
              <a
                href="https://menu.tuordenya.com"
                target="_blank"
                className="px-5 py-3 rounded-md border border-zinc-700 text-sm hover:border-zinc-500"
              >
                Ver demo del menú digital
              </a>
            </div>
          </div>

          <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 text-sm space-y-3">
            <p className="font-medium text-zinc-100">¿Qué ganas con TuOrdenYa?</p>
            <ul className="space-y-2 text-zinc-300">
              <li>• Los clientes ven tu carta escaneando un QR.</li>
              <li>• Recibes pedidos por WhatsApp o desde el sistema.</li>
              <li>• Actualizas precios sin imprimir menús nuevos.</li>
              <li>• Escalable a Plus y Pro cuando tu negocio crece.</li>
            </ul>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section id="como-funciona" className="py-10 border-t border-zinc-900">
          <h2 className="text-xl font-semibold mb-4">Cómo funciona</h2>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-zinc-300">
            <div className="bg-zinc-900/70 border border-zinc-800 rounded-xl p-4">
              <p className="text-emerald-400 text-xs font-semibold mb-1">Paso 1</p>
              <p className="font-medium mb-1">Configura tu menú</p>
              <p>Cargamos tu carta y la ajustamos a tu marca.</p>
            </div>
            <div className="bg-zinc-900/70 border border-zinc-800 rounded-xl p-4">
              <p className="text-emerald-400 text-xs font-semibold mb-1">Paso 2</p>
              <p className="font-medium mb-1">Imprime tu QR</p>
              <p>Te enviamos códigos QR listos para mesas y empaques.</p>
            </div>
            <div className="bg-zinc-900/70 border border-zinc-800 rounded-xl p-4">
              <p className="text-emerald-400 text-xs font-semibold mb-1">Paso 3</p>
              <p className="font-medium mb-1">Empiezas a recibir pedidos</p>
              <p>Los clientes ordenan desde su celular.</p>
            </div>
          </div>
        </section>

        {/* PLANES */}
        <section id="planes" className="py-10 border-t border-zinc-900">
          <h2 className="text-xl font-semibold mb-4">Planes pensados para ti</h2>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-4">
              <p className="font-semibold">Light</p>
              <p className="text-xs text-zinc-400">Menú + QR + WhatsApp</p>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500 rounded-xl p-4">
              <p className="font-semibold text-emerald-400">Plus</p>
              <p className="text-xs text-zinc-300">Pedidos básicos + reportes</p>
            </div>
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-4">
              <p className="font-semibold">Pro</p>
              <p className="text-xs text-zinc-400">Operación completa</p>
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="py-12 border-t border-zinc-900">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-xl font-semibold mb-3">
                Conversemos de tu restaurante
              </h2>
              <p className="text-zinc-300 text-sm mb-4">
                Déjanos tus datos y te contactamos para mostrarte cómo
                TuOrdenYa puede ayudarte a vender más.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 space-y-3"
            >
              <div className="grid md:grid-cols-2 gap-3">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  className="w-full p-3 rounded-md bg-zinc-950 border border-zinc-800 text-sm"
                  required
                />
                <input
                  name="restaurant"
                  value={form.restaurant}
                  onChange={handleChange}
                  placeholder="Restaurante"
                  className="w-full p-3 rounded-md bg-zinc-950 border border-zinc-800 text-sm"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-3">
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Teléfono"
                  className="w-full p-3 rounded-md bg-zinc-950 border border-zinc-800 text-sm"
                />
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Correo"
                  className="w-full p-3 rounded-md bg-zinc-950 border border-zinc-800 text-sm"
                />
              </div>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Cuéntanos tu necesidad"
                className="w-full p-3 rounded-md bg-zinc-950 border border-zinc-800 text-sm"
                rows={4}
              />

              <button
                disabled={loading}
                className="w-full py-3 rounded-md bg-emerald-500 text-zinc-950 font-medium hover:bg-emerald-400 disabled:opacity-60"
              >
                {loading ? "Enviando..." : "Enviar mensaje"}
              </button>
            </form>
          </div>
        </section>

        <footer className="py-6 text-center text-xs text-zinc-500 border-t border-zinc-900">
          © {new Date().getFullYear()} TuOrdenYa. Todos los derechos reservados.
        </footer>
      </main>
    </div>
  );
}
