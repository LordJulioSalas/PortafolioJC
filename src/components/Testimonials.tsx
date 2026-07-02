'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { Quote } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const { langConfig } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.testimonial-card', {
        scrollTrigger: {
          trigger: '.testimonials-grid',
          start: 'top 85%',
        },
        y: 100,
        opacity: 0,
        rotationY: -50,
        scale: 0.85,
        stagger: 0.2,
        duration: 0.9,
        ease: 'power4.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 relative overflow-hidden bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            {langConfig.testimonials.title}{' '}
            <span className="text-primary">
              {langConfig.testimonials.titleHighlight}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {langConfig.testimonials.subtitle}
          </p>
        </motion.div>

        <div className="testimonials-grid grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {langConfig.testimonials.items.map((item, index) => (
            <div key={index} className="testimonial-card">
              <div className="h-full p-6 rounded-xl border-2 border-primary/20 bg-card shadow-lg hover:shadow-[0_0_30px_rgba(0,255,65,0.2)] transition-all">
                <Quote className="w-8 h-8 text-primary mb-4" />
                <p className="text-foreground/70 leading-relaxed italic mb-6 text-sm">
                  {item.text}
                </p>
                <div className="pt-4 border-t border-primary/10">
                  <h4 className="font-bold text-lg text-primary">{item.name}</h4>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
