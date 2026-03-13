"use client";

import { useLanguage } from '@/i18n/LanguageContext';

export default function Technologies() {
  const { langConfig } = useLanguage();
  
  const techs = [
    { name: langConfig.technologies.skills[0], color: "hover:text-[#61DAFB] hover:border-[#61DAFB]/50" },
    { name: langConfig.technologies.skills[1], color: "hover:text-red-500 hover:border-red-500/50" },
    { name: langConfig.technologies.skills[2], color: "hover:text-yellow-500 hover:border-yellow-500/50" },
    { name: langConfig.technologies.skills[3], color: "hover:text-[#47A248] hover:border-[#47A248]/50" },
    { name: langConfig.technologies.skills[4], color: "hover:text-[#339933] hover:border-[#339933]/50" },
    { name: langConfig.technologies.skills[5], color: "hover:text-[#61DAFB] hover:border-[#61DAFB]/50" },
    { name: langConfig.technologies.skills[6], color: "hover:text-[#3ECF8E] hover:border-[#3ECF8E]/50" },
    { name: langConfig.technologies.skills[7], color: "hover:text-[#3178C6] hover:border-[#3178C6]/50" },
  ];

  return (
    <section className="py-20 bg-white/[0.02] border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest mb-10">
          {langConfig.technologies.subtitle}
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {techs.map((tech) => (
            <div 
              key={tech.name}
              className={`px-6 py-3 rounded-xl glass text-muted-foreground font-semibold tracking-wide transition-all duration-300 cursor-default shadow-sm ${tech.color} hover:neon-border`}
            >
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
