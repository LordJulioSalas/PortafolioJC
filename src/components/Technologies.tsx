'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Technologies() {
  const { langConfig } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.skill-item', {
        scrollTrigger: {
          trigger: '.skills-grid',
          start: 'top 85%',
        },
        scale: 0,
        opacity: 0,
        rotation: -180,
        y: 60,
        stagger: { amount: 0.6, from: 'random' },
        duration: 0.7,
        ease: 'back.out(2)',
      });

      document.querySelectorAll('.skill-item').forEach(skill => {
        skill.addEventListener('mouseenter', () => {
          gsap.to(skill, { scale: 1.15, rotation: 5, duration: 0.25, ease: 'power2.out' });
        });
        skill.addEventListener('mouseleave', () => {
          gsap.to(skill, { scale: 1, rotation: 0, duration: 0.25, ease: 'power2.out' });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const skills = langConfig.technologies.skills;

  return (
    <section id="technologies" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            {langConfig.technologies.title}{' '}
            <span className="text-primary">
              {langConfig.technologies.titleHighlight}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {langConfig.technologies.subtitle}
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="skills-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="skill-item p-5 rounded-xl border-2 border-primary/20 bg-card text-center cursor-pointer transition-colors hover:border-primary/50 hover:shadow-[0_0_20px_rgba(0,255,65,0.15)]"
              >
                <h3 className="font-bold text-base text-foreground">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
