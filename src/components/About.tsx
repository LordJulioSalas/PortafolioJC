"use client";

import { useLanguage } from '@/i18n/LanguageContext';

export default function About() {
  const { langConfig } = useLanguage();

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {langConfig.about.title} <span className="text-primary">{langConfig.about.titleHighlight}</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                {langConfig.about.p1}
              </p>
              <p>
                {langConfig.about.p2}
              </p>
            </div>
          </div>

          {/* Code display or visual aesthetic */}
          <div className="glass rounded-2xl p-6 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />
            <div className="flex items-center space-x-2 mb-4 text-white/50 text-sm">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-2 font-mono">developer.ts</span>
            </div>
            <pre className="text-sm md:text-base font-mono text-primary/80 overflow-x-auto">
              <code>{`const juliosalas = {
  role: "Ingeniero de Sistemas",
  skills: [
    "Desarrollo de Software",
    "Ciberseguridad",
    "Soporte Técnico (TI)",
    "Análisis de Datos"
  ],
  passion: "Asegurar continuidad operativa",
  status: "Analizando datos -> Resolviendo problemas"
};

juliosalas.execute();`}</code>
            </pre>
          </div>

        </div>
      </div>
    </section>
  );
}
