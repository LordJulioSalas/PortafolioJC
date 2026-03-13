'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function FAQ() {
  const { langConfig } = useLanguage();
  
  const faqs = [
    {
      question: langConfig.faq.questions[0].q,
      answer: langConfig.faq.questions[0].a
    },
    {
      question: langConfig.faq.questions[1].q,
      answer: langConfig.faq.questions[1].a
    },
    {
      question: langConfig.faq.questions[2].q,
      answer: langConfig.faq.questions[2].a
    },
    {
      question: langConfig.faq.questions[3].q,
      answer: langConfig.faq.questions[3].a
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{langConfig.faq.title} <span className="text-primary">{langConfig.faq.titleHighlight}</span></h2>
          <p className="text-muted-foreground text-lg">{langConfig.faq.subtitle}</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`glass rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-primary/50' : 'border-white/10'}`}
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-lg pr-8">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-primary transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 text-muted-foreground">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
