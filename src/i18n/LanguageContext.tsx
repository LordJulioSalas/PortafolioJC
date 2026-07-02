"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, Language } from './translations';

type TranslateFn = (key: string, fallback?: string) => string;

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  langConfig: typeof translations['es'];
  t: TranslateFn;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function translate(language: Language, key: string, fallback?: string): string {
  const keys = key.split('.');
  let value: unknown = translations[language];

  for (const segment of keys) {
    if (value && typeof value === 'object' && segment in (value as Record<string, unknown>)) {
      value = (value as Record<string, unknown>)[segment];
    } else {
      return fallback ?? key;
    }
  }

  return typeof value === 'string' ? value : fallback ?? key;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem('portfolio-lang') as Language;
    if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
      setLanguage(savedLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('portfolio-lang', lang);
  };

  const t: TranslateFn = (key, fallback) => translate(language, key, fallback);

  // Ensure children always have access to the context
  // To avoid hydration mismatch visually, we still wait for mount to update from localStorage
  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage, langConfig: translations[language], t }}
    >
      <div style={{ opacity: mounted ? 1 : 0, transition: 'opacity 0.15s ease' }}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
