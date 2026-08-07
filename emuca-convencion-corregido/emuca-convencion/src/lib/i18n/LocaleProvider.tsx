"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { LocaleCode, LocalizedText } from "@/types";
import { dictionaries, locales } from "./dictionaries";

interface LocaleContextValue {
  locale: LocaleCode;
  setLocale: (l: LocaleCode) => void;
  t: (key: string) => string;
  tl: (text: LocalizedText) => string;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

const STORAGE_KEY = "emuca-convencion.locale";

function detectInitialLocale(): LocaleCode {
  if (typeof window === "undefined") return "es";
  const stored = window.localStorage.getItem(STORAGE_KEY) as LocaleCode | null;
  if (stored && locales.includes(stored)) return stored;
  const browserLang = window.navigator.language.slice(0, 2) as LocaleCode;
  if (locales.includes(browserLang)) return browserLang;
  return "es";
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<LocaleCode>("es");

  useEffect(() => {
    setLocaleState(detectInitialLocale());
  }, []);

  const setLocale = (l: LocaleCode) => {
    setLocaleState(l);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, l);
    }
  };

  const t = (key: string): string => {
    return dictionaries[locale][key] ?? dictionaries.es[key] ?? key;
  };

  const tl = (text: LocalizedText): string => {
    return text[locale] ?? text.es;
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t, tl }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale debe usarse dentro de LocaleProvider");
  }
  return ctx;
}
