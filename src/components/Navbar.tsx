'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useLanguage } from '@/i18n/LanguageContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { theme, setTheme } = useTheme();
  const { langConfig, language, setLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex flex-col items-start translate-y-1">
          <a href="#" className="text-2xl font-bold neon-text tracking-tighter leading-none">
            LORD<span className="text-primary">.</span>CODE
          </a>
          <div className="w-full h-[1px] bg-gradient-to-r from-primary to-transparent mt-[2px] mb-[1px]"></div>
          <span className="text-[0.7rem] font-medium tracking-[0.25em] text-muted-foreground uppercase pl-1 leading-none pt-1">
            developer
          </span>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">{langConfig.nav.about}</a>
          <a href="#experience" className="text-sm font-medium hover:text-primary transition-colors">{langConfig.nav.experience}</a>
          <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">{langConfig.nav.howItWorks}</a>
          <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">{langConfig.nav.pricing}</a>
          <a href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">{langConfig.nav.portfolio}</a>
          
          <div className="flex items-center space-x-2 border-l border-border pl-6">
            <button
              onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
              className="p-2 rounded-full hover:bg-primary/10 transition-colors text-foreground flex items-center gap-1"
              title="Cambiar idioma / Change language"
            >
              <Globe className="w-4 h-4" />
              <span className="text-xs font-bold">{language === 'es' ? 'EN' : 'ES'}</span>
            </button>
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full hover:bg-primary/10 transition-colors text-foreground"
                title="Cambiar tema / Toggle theme"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            )}
          </div>

          <a href="#contact" className="ml-4 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/50 text-primary font-medium hover:bg-primary hover:text-white transition-all neon-border">
            {langConfig.nav.contact}
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden glass absolute top-full left-0 w-full flex flex-col items-center py-8 space-y-6 border-t border-white/10">
          <a href="#about" onClick={() => setIsOpen(false)} className="text-lg font-medium">{langConfig.nav.about}</a>
          <a href="#experience" onClick={() => setIsOpen(false)} className="text-lg font-medium">{langConfig.nav.experience}</a>
          <a href="#how-it-works" onClick={() => setIsOpen(false)} className="text-lg font-medium">{langConfig.nav.howItWorks}</a>
          <a href="#pricing" onClick={() => setIsOpen(false)} className="text-lg font-medium">{langConfig.nav.pricing}</a>
          <a href="#portfolio" onClick={() => setIsOpen(false)} className="text-lg font-medium">{langConfig.nav.portfolio}</a>
          
          <div className="flex items-center space-x-4 pt-4 border-t border-border w-2/3 justify-center">
            <button
              onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
              className="p-2 rounded-full bg-primary/10 transition-colors text-foreground flex items-center justify-center w-12 h-12 gap-1"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-bold">{language === 'es' ? 'EN' : 'ES'}</span>
            </button>
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full bg-primary/10 transition-colors text-foreground flex items-center justify-center w-12 h-12"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            )}
          </div>

          <a href="#contact" onClick={() => setIsOpen(false)} className="px-6 py-3 rounded-full bg-primary text-white font-medium neon-border">
            {langConfig.nav.contact}
          </a>
        </div>
      )}
    </nav>
  );
}
