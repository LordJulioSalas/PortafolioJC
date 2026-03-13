"use client";

import { Star } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function Testimonials() {
  const { langConfig } = useLanguage();
  
  const testimonials = [
    {
      quote: langConfig.testimonials.items[0].text,
      name: langConfig.testimonials.items[0].name,
      role: langConfig.testimonials.items[0].role,
      rating: 5,
    },
    {
      quote: langConfig.testimonials.items[1].text,
      name: langConfig.testimonials.items[1].name,
      role: langConfig.testimonials.items[1].role,
      rating: 5,
    },
    {
      quote: langConfig.testimonials.items[2].text,
      name: langConfig.testimonials.items[2].name,
      role: langConfig.testimonials.items[2].role,
      rating: 5,
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{langConfig.testimonials.title} <span className="text-primary">{langConfig.testimonials.titleHighlight}</span></h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {langConfig.testimonials.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="glass p-8 rounded-2xl relative group hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute top-0 right-0 p-8 opacity-10 font-serif text-8xl text-primary leading-none group-hover:text-secondary group-hover:opacity-20 transition-colors">
                &quot;
              </div>
              
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              
              <p className="text-lg italic mb-8 relative z-10 text-foreground">
                &quot;{testimonial.quote}&quot;
              </p>
              
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-primary">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
