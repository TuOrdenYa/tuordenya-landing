"use client";

import {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
  type ReactNode,
} from "react";
import type { HomeContent, Locale } from "../../locales/types";
import { homeEs } from "../../locales/es/home";
import { homeEn } from "../../locales/en/home";

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  home: HomeContent;
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("es");

  // Opcional: detectar idioma del navegador
  useEffect(() => {
    if (typeof navigator !== "undefined") {
      const lang = navigator.language.slice(0, 2).toLowerCase();
      if (lang === "en") setLocale("en");
    }
  }, []);

  const home = locale === "es" ? homeEs : homeEn;

  const value = useMemo(
    () => ({ locale, setLocale, home }),
    [locale, home]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return ctx;
}
