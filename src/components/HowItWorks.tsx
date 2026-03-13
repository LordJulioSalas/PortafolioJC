"use client";

import { MessageSquare, Code, Rocket, HeadphonesIcon } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function HowItWorks() {
  const { langConfig } = useLanguage();
  
  const steps = [
    {
      icon: <MessageSquare className="w-8 h-8 text-primary" />,
      title: langConfig.howItWorks.steps[0].title,
      description: langConfig.howItWorks.steps[0].desc
    },
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: langConfig.howItWorks.steps[1].title,
      description: langConfig.howItWorks.steps[1].desc
    },
    {
      icon: <Rocket className="w-8 h-8 text-primary" />,
      title: langConfig.howItWorks.steps[2].title,
      description: langConfig.howItWorks.steps[2].desc
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8 text-primary" />,
      title: langConfig.howItWorks.steps[3].title,
      description: langConfig.howItWorks.steps[3].desc
    }
  ];

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden bg-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{langConfig.howItWorks.title} <span className="text-primary">{langConfig.howItWorks.titleHighlight}</span></h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {langConfig.howItWorks.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 -translate-y-1/2 z-0" />

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-full glass flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:neon-border">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-balance">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
