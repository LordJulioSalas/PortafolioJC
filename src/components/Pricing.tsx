"use client";

import { Check } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function Pricing() {
  const { language, langConfig } = useLanguage();
  
  const packages = [
    {
      name: langConfig.pricing.plans.web.name,
      price: "$2k - $3.5k",
      time: "2-3 días",
      description: langConfig.pricing.plans.web.desc,
      features: langConfig.pricing.plans.web.features,
      examples: "Ej: PetCare, Tienda, Agendamiento",
      highlighted: false,
      cta: langConfig.pricing.btnText
    },
    {
      name: langConfig.pricing.plans.security.name,
      price: "$4k - $6.5k",
      time: "2-3 semanas",
      description: langConfig.pricing.plans.security.desc,
      features: langConfig.pricing.plans.security.features,
      examples: "Ej: SaaS inicial, Plataforma Múltiple",
      highlighted: true,
      badge: "Top",
      cta: langConfig.pricing.btnText
    },
    {
      name: langConfig.pricing.plans.data.name,
      price: "$7k+",
      time: "3-4 semanas",
      description: langConfig.pricing.plans.data.desc,
      features: langConfig.pricing.plans.data.features,
      examples: "Ej: ERP, Marketplace, Sistemas Core",
      highlighted: false,
      cta: langConfig.pricing.btnText
    }
  ];

  return (
    <section id="pricing" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{langConfig.pricing.title} <span className="text-primary">{langConfig.pricing.titleHighlight}</span></h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {langConfig.pricing.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {packages.map((pkg, idx) => (
            <div 
              key={idx} 
              className={`relative rounded-3xl p-8 ${pkg.highlighted ? 'glass neon-border transform md:-translate-y-4' : 'bg-white/5 border border-white/10 hover:border-white/20 transition-colors'}`}
            >
              {pkg.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-primary text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full flex items-center gap-1">
                     ⭐ {pkg.badge}
                  </span>
                </div>
              )}
              
              <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-extrabold">{pkg.price}</span>
              </div>
              <p className="text-sm font-medium text-primary mb-4 p-2 bg-primary/10 rounded-lg inline-block">⏱ {language === 'en' ? 'Time:' : 'Tiempo:'} {pkg.time}</p>
              <p className="text-muted-foreground text-sm mb-6 pb-6 border-b border-white/10">
                {pkg.description}
              </p>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start">
                    <Check className="w-5 h-5 text-secondary mr-2 shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mb-8 p-3 rounded-lg bg-white/5 text-sm text-muted-foreground">
                {pkg.examples}
              </div>

              <a href="#contact" className={`block w-full text-center py-3 rounded-full font-semibold transition-all ${pkg.highlighted ? 'bg-primary text-white hover:bg-primary/90 shadow-[0_0_15px_rgba(37,99,235,0.4)]' : 'glass hover:bg-white/10'}`}>
                {pkg.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
