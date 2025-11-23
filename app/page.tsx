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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    <div className="min-h-screen flex items-center justify-center bg-zinc-900 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg max-w-lg w-full shadow-lg space-y-3"
      >
        <h1 className="text-2xl font-bold mb-4">Contáctanos</h1>

        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Tu nombre"
          className="w-full p-3 border rounded"
          required
        />

        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Teléfono"
          className="w-full p-3 border rounded"
        />

        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Correo"
          className="w-full p-3 border rounded"
        />

        <input
          name="restaurant"
          value={form.restaurant}
          onChange={handleChange}
          placeholder="Nombre del restaurante"
          className="w-full p-3 border rounded"
        />

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Mensaje"
          className="w-full p-3 border rounded"
          rows={4}
        />

        <button
          disabled={loading}
          className="w-full py-3 rounded bg-green-600 text-white font-medium hover:bg-green-700 disabled:opacity-60"
        >
          {loading ? "Enviando..." : "Enviar mensaje"}
        </button>
      </form>
    </div>
  );
}
