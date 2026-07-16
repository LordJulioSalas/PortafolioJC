'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { ExternalLink } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const { langConfig } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.portfolio-card', {
        scrollTrigger: {
          trigger: '.portfolio-container',
          start: 'top 85%',
        },
        y: 120,
        opacity: 0,
        rotationX: -40,
        scale: 0.85,
        stagger: 0.2,
        duration: 0.9,
        ease: 'power4.out',
      });

      document.querySelectorAll('.portfolio-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, { scale: 1.04, y: -6, duration: 0.3, ease: 'power2.out' });
        });
        card.addEventListener('mouseleave', () => {
          gsap.to(card, { scale: 1, y: 0, duration: 0.3, ease: 'power2.out' });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projects = langConfig.portfolio.items;

  return (
    <section id="portfolio" ref={sectionRef} className="py-24 relative overflow-hidden bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            {langConfig.portfolio.title}{' '}
            <span className="text-primary">
              {langConfig.portfolio.titleHighlight}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {langConfig.portfolio.subtitle}
          </p>
        </motion.div>

        <div className="portfolio-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-card">
              <div className="h-full p-6 rounded-xl border-2 border-primary/20 bg-card shadow-lg hover:shadow-[0_0_30px_rgba(0,255,65,0.2)] transition-colors">
                <div className="flex flex-col h-full">
                  <h3 className="text-xl font-bold mb-3 text-primary">{project.title}</h3>
                  <p className="text-foreground/70 leading-relaxed mb-4 flex-1 text-sm">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs font-medium rounded-md bg-primary/10 border border-primary/20 text-foreground/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {index === 0 && (
                    <a
                      href="https://ss-distribution.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary text-black font-medium hover:bg-primary/90 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {langConfig.portfolio.btnDemo}
                    </a>
                  )}
                  {index === 1 && (
                    <a
                      href="#contact"
                      className="block px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-center font-medium hover:bg-primary/20 transition-all"
                    >
                      Contactar →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
