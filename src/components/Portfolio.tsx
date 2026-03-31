"use client";

import { ExternalLink, Sparkles } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function Portfolio() {
  const { langConfig } = useLanguage();
  
  const projects = [
    {
      title: langConfig.portfolio.items[0].title,
      description: langConfig.portfolio.items[0].desc,
      link: "https://petcare-system.vercel.app/",
      tags: langConfig.portfolio.items[0].tags,
      highlighted: true,
      cta: langConfig.portfolio.btnDemo,
    },
    {
      title: "Transformación Digital Corporativa",
      description: "Diseño de roadmap tecnológico y entrega de soluciones empresariales para mejorar productividad y seguridad.",
      link: "#about",
      tags: ["Consultoría", "Automatización", "Seguridad"],
      highlighted: false,
      cta: "Conocer más"
    },
    {
      title: "Estrategia TI 2026",
      description: "Planes de arquitectura escalable, integración de datos y gobernanza para equipos IT de alto desempeño.",
      link: "#experience",
      tags: ["Estrategia", "Datos", "Ops"],
      highlighted: false,
      cta: "Ver experiencia"
    }
  ];

  return (
    <section id="portfolio" className="py-24 relative bg-black/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{langConfig.portfolio.title} <span className="text-primary">{langConfig.portfolio.titleHighlight}</span></h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {langConfig.portfolio.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className={`group relative overflow-hidden rounded-2xl transition-all duration-300 ${project.highlighted ? 'glass neon-border ring-2 ring-primary/50 md:col-span-2 lg:col-span-1 shadow-[0_0_30px_rgba(37,99,235,0.15)]' : 'bg-white/5 border border-white/10 hover:border-white/30'}`}
            >
              <div className="p-8 h-full flex flex-col justify-between">
                <div>
                  {project.highlighted && (
                    <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold mb-4 border border-primary/30">
                      <Sparkles className="w-3 h-3" /> ⭐
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 rounded-md bg-white/5 text-xs font-mono text-white/70 border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {(() => {
                  const isAnchor = project.link.startsWith('#');
                  return (
                    <a 
                      href={project.link}
                      {...(!isAnchor ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className={`inline-flex items-center gap-2 font-medium transition-colors ${project.highlighted ? 'text-primary hover:text-primary/80' : 'text-white/80 hover:text-white'}`}
                    >
                      {project.cta || (isAnchor ? langConfig.portfolio.btnCode : langConfig.portfolio.btnDemo)}
                      {!isAnchor && <ExternalLink className="w-4 h-4" />}
                    </a>
                  );
                })()}
              </div>
              
              {/* Decorative gradient orb for the highlighted card */}
              {project.highlighted && (
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10 group-hover:bg-primary/30 transition-colors" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}