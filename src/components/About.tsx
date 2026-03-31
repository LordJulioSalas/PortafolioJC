"use client";

import Image from 'next/image';
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

          {/* Foto e información personal */}
          <div className="rounded-2xl overflow-hidden border border-white/10 relative h-72 md:h-96 shadow-lg shadow-black/20">
            <Image
              src="/Foto.jpeg"
              alt="Foto de Julio Salas"
              fill
              priority
              className="object-cover object-top transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
              <h3 className="text-xl font-bold drop-shadow-lg">Julio Salas</h3>
              <p className="text-sm drop-shadow">Ingeniero de Sistemas | Asistente de Área IT | Especialista en Ciberseguridad y Análisis de Datos</p>
              <a href="#experience" className="inline-block mt-3 rounded-full px-4 py-2 bg-primary/90 text-white font-semibold hover:bg-primary">Explora experiencia</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
