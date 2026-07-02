'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { Search, Layers, Code, Rocket } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HowItWorks() {
  const { langConfig } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.step-card', {
        scrollTrigger: {
          trigger: '.steps-grid',
          start: 'top 85%',
        },
        y: 120,
        opacity: 0,
        scale: 0.75,
        rotation: -12,
        stagger: 0.18,
        duration: 0.9,
        ease: 'back.out(2)',
      });

      gsap.from('.step-number', {
        scrollTrigger: {
          trigger: '.steps-grid',
          start: 'top 85%',
        },
        scale: 0,
        rotation: 360,
        stagger: 0.18,
        duration: 0.7,
        ease: 'elastic.out(1.2, 0.5)',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const steps = langConfig.howItWorks.steps;
  const icons = [
    <Search key="1" className="w-8 h-8" />,
    <Layers key="2" className="w-8 h-8" />,
    <Code key="3" className="w-8 h-8" />,
    <Rocket key="4" className="w-8 h-8" />,
  ];

  return (
    <section id="how-it-works" ref={sectionRef} className="py-24 relative overflow-hidden bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            {langConfig.howItWorks.title}{' '}
            <span className="text-primary">
              {langConfig.howItWorks.titleHighlight}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {langConfig.howItWorks.subtitle}
          </p>
        </motion.div>

        <div className="steps-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="relative p-6 rounded-xl border-2 border-primary/20 bg-card shadow-lg hover:shadow-[0_0_30px_rgba(0,255,65,0.2)] transition-all h-full">
                <div className="step-number absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-black flex items-center justify-center text-xl font-bold shadow-lg">
                  {index + 1}
                </div>
                <div className="mb-4 text-primary mt-4">{icons[index]}</div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                <p className="text-foreground/70 leading-relaxed text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
