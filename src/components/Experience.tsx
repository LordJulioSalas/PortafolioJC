'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { Briefcase, GraduationCap, MapPin, Calendar, Activity } from 'lucide-react';

export default function Experience() {
  const { langConfig } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const experiences = [
    {
      ...langConfig.experience.exp1,
      icon: <Briefcase className="w-8 h-8" />,
      color: 'from-primary to-secondary',
      status: 'active',
    },
    {
      ...langConfig.experience.exp2,
      icon: <GraduationCap className="w-8 h-8" />,
      color: 'from-secondary to-accent',
      status: 'completed',
    },
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-24 relative overflow-hidden bg-muted/20">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
            <Activity className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-mono text-primary">SYSTEM.LOG</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 relative inline-block">
            {langConfig.experience.title}{' '}
            <span className="text-primary">
              {langConfig.experience.titleHighlight}
            </span>
            <div className="absolute -inset-4 blur-3xl opacity-20 bg-primary -z-10" />
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {langConfig.experience.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="relative h-full p-8 rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-card to-card/80 shadow-xl hover:shadow-[0_0_50px_rgba(0,255,65,0.3)] transition-all group overflow-hidden">
                {/* Status indicator */}
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <div className={`relative w-3 h-3 rounded-full ${exp.status === 'active' ? 'bg-primary' : 'bg-secondary'}`}>
                    <div className="absolute inset-0 rounded-full bg-current animate-ping" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground uppercase">
                    {exp.status}
                  </span>
                </div>

                {/* Icon */}
                <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/40 relative group-hover:scale-110 transition-transform">
                  <div className="text-primary">
                    {exp.icon}
                  </div>
                </div>

                {/* Content - TODA LA INFO VISIBLE */}
                <div className="space-y-4 relative z-10">
                  <div>
                    <h3 className={`text-2xl font-bold mb-2 bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                      {exp.title}
                    </h3>
                    <p className="text-lg font-semibold text-foreground">{exp.company}</p>
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mt-3">
                      <span className="flex items-center gap-1 px-2 py-1 rounded-md bg-primary/10">
                        <MapPin className="w-3 h-3" /> {exp.location}
                      </span>
                      <span className="flex items-center gap-1 px-2 py-1 rounded-md bg-primary/10">
                        <Calendar className="w-3 h-3" /> {exp.period}
                      </span>
                    </div>
                  </div>

                  <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

                  <p className="text-foreground/80 leading-relaxed text-sm">
                    {exp.description}
                  </p>

                  <ul className="space-y-2 pt-2">
                    {exp.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-foreground/80"
                      >
                        <span className="text-primary mt-1 font-bold">&gt;</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-primary/30 rounded-tr-2xl" />
                <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-primary/30 rounded-bl-2xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
