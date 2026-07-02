'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { Code2, Database, Shield, Cpu } from 'lucide-react';

export default function About() {
  const { langConfig } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const techIcons = [
    { icon: <Code2 className="w-6 h-6" />, label: 'Dev' },
    { icon: <Database className="w-6 h-6" />, label: 'Data' },
    { icon: <Shield className="w-6 h-6" />, label: 'Security' },
    { icon: <Cpu className="w-6 h-6" />, label: 'Systems' },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 relative overflow-hidden bg-black/40">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          
          {/* Content */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                {langConfig.about.title}{' '}
                <span className="text-primary relative">
                  {langConfig.about.titleHighlight}
                  <div className="absolute -inset-2 blur-2xl opacity-30 bg-primary -z-10" />
                </span>
              </h2>
            </motion.div>

            <div className="space-y-4">
              {[langConfig.about.p1, langConfig.about.p2, langConfig.about.p3].map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  className="group"
                >
                  <div className="p-6 rounded-xl bg-card border-2 border-primary/20 hover:border-primary/60 shadow-lg hover:shadow-[0_0_30px_rgba(0,255,65,0.2)] transition-all relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-primary transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />
                    <p className="text-base text-foreground/90 leading-relaxed relative z-10">{text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tech stack icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex gap-4 pt-4"
            >
              {techIcons.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-1 p-3 rounded-lg bg-primary/10 border border-primary/30 hover:bg-primary/20 hover:scale-110 transition-all cursor-pointer"
                >
                  <div className="text-primary">
                    {item.icon}
                  </div>
                  <span className="text-xs font-mono text-primary">{item.label}</span>
                </div>
              ))}
            </motion.div>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              href="#experience"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-lg bg-primary/10 border-2 border-primary/30 font-bold hover:bg-primary hover:text-black transition-all group"
            >
              {langConfig.about.profile.button}
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </motion.a>
          </div>

          {/* TU FOTO - SIEMPRE VISIBLE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative group"
          >
            <div className="relative rounded-2xl overflow-hidden border-4 border-primary/40 shadow-2xl shadow-primary/20 hover:shadow-[0_0_60px_rgba(0,255,65,0.4)] transition-all duration-500">
              {/* Efecto holográfico verde */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
              
              <div className="relative h-[500px] md:h-[600px]">
                <Image
                  src="/Foto.jpeg"
                  alt="Foto de Julio Salas"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-transparent to-transparent" />
              </div>
              
              {/* Info card */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/98 to-transparent backdrop-blur-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-1 text-primary">
                      {langConfig.about.profile.name}
                    </h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      {langConfig.about.profile.caption}
                    </p>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" style={{ animationDelay: '0.15s' }} />
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" style={{ animationDelay: '0.3s' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating corner elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 border-t-4 border-r-4 border-primary animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-4 border-l-4 border-primary animate-pulse" style={{ animationDelay: '0.5s' }} />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
