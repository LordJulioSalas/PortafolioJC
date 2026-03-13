"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { useLanguage } from '@/i18n/LanguageContext';

export default function Experience() {
  const { langConfig } = useLanguage();
  
  const experiences = [
    langConfig.experience.exp1,
    langConfig.experience.exp2
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {langConfig.experience.title} <span className="text-primary neon-text">{langConfig.experience.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {langConfig.experience.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-border/50"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 mt-1.5 w-4 h-4 rounded-full bg-primary neon-border shadow-[0_0_10px_rgba(37,99,235,0.5)] z-10 hidden md:block"></div>
                <div className="absolute left-0 transform -translate-x-[5px] mt-1.5 w-3 h-3 rounded-full bg-primary neon-border shadow-[0_0_10px_rgba(37,99,235,0.5)] z-10 md:hidden"></div>

                <div className="md:w-1/2 pl-8 md:pl-0 flex flex-col justify-start">
                  <div className={`glass p-6 rounded-xl relative hover:border-primary/50 transition-colors duration-300 ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}>
                    <h3 className="text-xl font-bold mb-1 text-foreground">{exp.title}</h3>
                    <h4 className="text-primary font-medium mb-3">{exp.company}</h4>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {exp.description}
                    </p>

                    <ul className="space-y-2">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
