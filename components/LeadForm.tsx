"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { supabase } from "../lib/supabase";
import { gaEvent } from "@/lib/gtag";
import { useI18n } from "@/components/i18n/LanguageContext";

interface LeadFormProps {
  /** Identificador de página para GA4 (ej: "landing_home", "landing_light", etc.) */
  page?: string;
  /** Interés por defecto mostrado en el select (texto) */
  defaultInterest?: string;
  /** Número de WhatsApp al que llegan los leads (sin +, ej: 573227921640) */
  whatsappNumber?: string;
}

export default function LeadForm({
  page = "landing_home",
  defaultInterest = "Solo menú digital (Light)",
  whatsappNumber = "573227921640",
}: LeadFormProps) {
  const { home, locale } = useI18n();
  const { contactSection } = home;
  const form = contactSection.form;

  // Estado del formulario
  const [fullName, setFullName] = useState("");
  const [restaurantName, setRestaurantName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState(defaultInterest);
  const [operationNotes, setOperationNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Para trackear vista del formulario (view_lead_form)
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let hasTrackedView = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!hasTrackedView && entry.isIntersecting) {
            hasTrackedView = true;
            try {
              gaEvent("view_lead_form", {
                page,
              });
            } catch (err) {
              console.error("Error enviando evento view_lead_form:", err);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [page]);

  // Envío del formulario: Supabase + WhatsApp + GA4
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    // Validación básica
    if (!fullName.trim() || !whatsapp.trim()) {
      setErrorMessage(
        locale === "en"
          ? "Please fill in at least your name and WhatsApp."
          : "Por favor completa al menos tu nombre y WhatsApp."
      );
      return;
    }

    setErrorMessage(null);
    setIsSubmitting(true);

    try {
      // 1️⃣ Preparar mensaje para Supabase
      const composedMessage = [
        interest ? `Interés: ${interest}` : null,
        operationNotes ? `Sobre su operación: ${operationNotes}` : null,
        "Fuente: tuordenya.com",
      ]
        .filter(Boolean)
        .join(" | ");

      // 2️⃣ Guardar en Supabase (tabla leads)
      const { error } = await supabase.from("leads").insert([
        {
          name: fullName || null,
          phone: whatsapp || null,
          email: email || null,
          restaurant: restaurantName || null,
          message: composedMessage || null,
        },
      ]);

      if (error) {
        console.error("Error guardando lead en Supabase:", error);
        setErrorMessage(
          locale === "en"
            ? "There was an error saving your data. Please try again."
            : "Ocurrió un error guardando tus datos. Intenta de nuevo."
        );
        return; // No seguimos a WhatsApp si falla
      }

      // 3️⃣ GA4 — Evento de envío exitoso
      try {
        gaEvent("submit_lead_form", {
          page,
          interest: interest || "No especificado",
        });
      } catch (err) {
        console.error("Error enviando evento submit_lead_form:", err);
      }

      // 4️⃣ Construir mensaje para WhatsApp
      const messageLines = [
        "👋 Hola, llegó un lead desde la landing de TuOrdenYa.",
        "",
        fullName ? `👤 Nombre: ${fullName}` : null,
        restaurantName ? `🏪 Restaurante: ${restaurantName}` : null,
        whatsapp ? `📱 WhatsApp del cliente: ${whatsapp}` : null,
        email ? `✉️ Email: ${email}` : null,
        interest ? `⭐ Interés: ${interest}` : null,
        operationNotes ? `📝 Sobre su operación: ${operationNotes}` : null,
        "",
        "Fuente: tuordenya.com",
      ]
        .filter(Boolean)
        .join("\n");

      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        messageLines
      )}`;

      // 5️⃣ Abrir tu WhatsApp en una nueva pestaña
      window.open(whatsappUrl, "_blank");

      // 6️⃣ Limpiar formulario
      setFullName("");
      setRestaurantName("");
      setWhatsapp("");
      setEmail("");
      setInterest(defaultInterest);
      setOperationNotes("");
    } catch (err) {
      console.error("Error inesperado en el submit:", err);
      setErrorMessage(
        locale === "en"
          ? "Unexpected error. Please try again."
          : "Ocurrió un error inesperado. Intenta de nuevo."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div ref={containerRef}>
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-5 space-y-4 text-sm"
      >
        {/* NOMBRE */}
        <div>
          <label className="text-xs text-slate-400 block mb-1">
            {form.nameLabel}
          </label>
          <input
            type="text"
            placeholder={form.namePlaceholder}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3 py-2 text-xs outline-none focus:border-[#FF6F3C]"
          />
        </div>

        {/* RESTAURANTE */}
        <div>
          <label className="text-xs text-slate-400 block mb-1">
            {form.restaurantLabel}
          </label>
          <input
            type="text"
            placeholder={form.restaurantPlaceholder}
            value={restaurantName}
            onChange={(e) => setRestaurantName(e.target.value)}
            className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3 py-2 text-xs outline-none focus:border-[#FF6F3C]"
          />
        </div>

        {/* WHATSAPP */}
        <div>
          <label className="text-xs text-slate-400 block mb-1">
            {form.whatsappLabel}
          </label>
          <input
            type="tel"
            placeholder={form.whatsappPlaceholder}
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3 py-2 text-xs outline-none focus:border-[#FF6F3C]"
          />
        </div>

        {/* EMAIL */}
        <div>
          <label className="text-xs text-slate-400 block mb-1">
            {form.emailLabel}
          </label>
          <input
            type="email"
            placeholder={form.emailPlaceholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3 py-2 text-xs outline-none focus:border-[#FF6F3C]"
          />
        </div>

        {/* INTERÉS */}
        <div>
          <label className="text-xs text-slate-400 block mb-1">
            {form.interestLabel}
          </label>
          <select
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3 py-2 text-xs outline-none focus:border-[#FF6F3C]"
          >
            <option value="">{form.interestPlaceholder}</option>
            {form.interestOptions.map((opt) => (
              <option key={opt.value} value={opt.label}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* NOTAS / OPERACIÓN */}
        <div>
          <label className="text-xs text-slate-400 block mb-1">
            {form.notesLabel}
          </label>
          <textarea
            rows={3}
            placeholder={form.notesPlaceholder}
            value={operationNotes}
            onChange={(e) => setOperationNotes(e.target.value)}
            className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3 py-2 text-xs outline-none focus:border-[#FF6F3C]"
          />
        </div>

        {errorMessage && (
          <p className="text-xs text-red-400">{errorMessage}</p>
        }}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-2 rounded-full bg-[#FF6F3C] text-slate-950 font-semibold text-sm py-2 hover:bg-[#FF814F] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting
            ? locale === "en"
              ? "Sending..."
              : "Enviando..."
            : form.submitLabel}
        </button>

        <p className="text-[11px] text-slate-500 mt-1">
          {locale === "en"
            ? "We respect your time: no spam, only relevant information for your restaurant."
            : "Respetamos tu tiempo: nada de spam, solo información relevante para tu restaurante."}
        </p>
      </form>
    </div>
  );
}
