'use client';

import { useRef, useEffect } from 'react';
import { Check, Star } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Pricing() {
  const { t, langConfig } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.pricing-card', {
        scrollTrigger: {
          trigger: '.pricing-grid',
          start: 'top 85%',
        },
        y: 120,
        opacity: 0,
        scale: 0.8,
        rotationY: 25,
        stagger: 0.2,
        duration: 0.9,
        ease: 'power4.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      name: langConfig.pricing.plans.web.name,
      price: langConfig.pricing.noPrice,
      time: langConfig.pricing.noTime,
      description: langConfig.pricing.plans.web.desc,
      features: langConfig.pricing.plans.web.features,
      examples: langConfig.pricing.plans.web.example,
      highlighted: false,
      cta: langConfig.pricing.btnText,
    },
    {
      name: langConfig.pricing.plans.security.name,
      price: langConfig.pricing.noPrice,
      time: langConfig.pricing.noTime,
      description: langConfig.pricing.plans.security.desc,
      features: langConfig.pricing.plans.security.features,
      examples: langConfig.pricing.plans.security.example,
      highlighted: true,
      badge: langConfig.pricing.recommendedBadge,
      cta: langConfig.pricing.btnText,
    },
    {
      name: langConfig.pricing.plans.data.name,
      price: langConfig.pricing.noPrice,
      time: langConfig.pricing.noTime,
      description: langConfig.pricing.plans.data.desc,
      features: langConfig.pricing.plans.data.features,
      examples: langConfig.pricing.plans.data.example,
      highlighted: false,
      cta: langConfig.pricing.btnText,
    },
  ];

  return (
    <section id="pricing" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            {langConfig.pricing.title}{' '}
            <span className="text-primary">
              {langConfig.pricing.titleHighlight}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {langConfig.pricing.subtitle}
          </p>
        </motion.div>

        <div className="pricing-grid grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((pkg, idx) => (
            <div key={idx} className="pricing-card">
              <div
                className={`h-full p-8 rounded-xl border-2 shadow-lg transition-all ${
                  pkg.highlighted
                    ? 'border-primary bg-primary/5 hover:shadow-[0_0_40px_rgba(0,255,65,0.3)]'
                    : 'border-primary/20 bg-card hover:shadow-[0_0_30px_rgba(0,255,65,0.2)]'
                }`}
              >
                {pkg.highlighted && (
                  <div className="mb-4 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-black text-xs font-bold">
                    <Star className="w-3 h-3" />
                    {pkg.badge}
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-3 text-primary">{pkg.name}</h3>
                  <div className="mb-3">
                    <span className="text-3xl font-extrabold text-foreground">{pkg.price}</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-primary/10 border border-primary/20">
                    <span className="text-xs font-semibold text-primary">
                      ⏱ {t('pricing.timeLabel')} {pkg.time}
                    </span>
                  </div>
                </div>

                <p className="text-foreground/70 text-sm mb-6 pb-6 border-b border-primary/10 leading-relaxed">
                  {pkg.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-sm text-foreground/80">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mb-6 p-3 rounded-lg bg-primary/5 text-xs text-muted-foreground">
                  {pkg.examples}
                </div>

                <a
                  href="#contact"
                  className={`block w-full text-center py-3 rounded-lg font-bold transition-all ${
                    pkg.highlighted
                      ? 'bg-primary text-black hover:bg-primary/90 shadow-lg'
                      : 'bg-primary/10 border-2 border-primary/20 hover:bg-primary/20'
                  }`}
                >
                  {pkg.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
