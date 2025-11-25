"use client";

import { useContext } from "react";
import { I18nContext } from "./LanguageContext";

// Hook simple para leer texto traducido
export function useI18n() {
  const ctx = useContext(I18nContext);

  if (!ctx) {
    throw new Error("useI18n debe usarse dentro de I18nProvider");
  }

  return {
    lang: ctx.lang,
    setLang: ctx.setLang,
    t: ctx.t, // función que devuelve textos traducidos
  };
}
