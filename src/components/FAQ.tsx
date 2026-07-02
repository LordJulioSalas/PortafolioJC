'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FAQ() {
  const { langConfig } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.faq-item', {
        scrollTrigger: {
          trigger: '.faq-container',
          start: 'top 85%',
        },
        x: -80,
        opacity: 0,
        scale: 0.95,
        stagger: 0.12,
        duration: 0.7,
        ease: 'power4.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            {langConfig.faq.title}{' '}
            <span className="text-primary">
              {langConfig.faq.titleHighlight}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {langConfig.faq.subtitle}
          </p>
        </motion.div>

        <div className="faq-container max-w-3xl mx-auto space-y-4">
          {langConfig.faq.questions.map((item, index) => (
            <div key={index} className="faq-item">
              <div
                className={`rounded-xl border-2 transition-all ${
                  openIndex === index
                    ? 'border-primary bg-primary/5 shadow-lg'
                    : 'border-primary/20 bg-card hover:border-primary/30'
                }`}
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full p-5 flex items-center justify-between text-left"
                >
                  <h3 className="text-base font-bold text-foreground pr-4">{item.q}</h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-primary" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-foreground/70 leading-relaxed text-sm">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
