'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useLanguage } from '@/i18n/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const { theme, setTheme } = useTheme();
  const { langConfig, language, setLanguage, t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      );
    }
  }, []);

  return (
    <motion.nav
      ref={navRef}
      translate="no"
      className={`notranslate fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl shadow-lg border-b border-primary/10 py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start"
        >
          <a
            href="#"
            className="text-2xl font-bold tracking-tighter leading-none bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
          >
            LORD<span className="text-primary">.</span>CODE
          </a>
          <div className="w-full h-[1px] bg-gradient-to-r from-primary via-secondary to-accent mt-1"></div>
          <span className="text-[0.65rem] font-medium tracking-[0.2em] text-muted-foreground uppercase pt-1">
            {t('nav.subtitle')}
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:flex items-center space-x-8"
        >
          {[
            { href: '#about', label: langConfig.nav.about },
            { href: '#experience', label: langConfig.nav.experience },
            { href: '#pricing', label: langConfig.nav.pricing },
            { href: '#portfolio', label: langConfig.nav.portfolio },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium text-foreground/80 hover:text-foreground transition-colors group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}

          <div className="flex items-center space-x-2 pl-6 border-l border-border">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
              className="p-2 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20 transition-all text-foreground flex items-center gap-1"
              title="Change language"
            >
              <Globe className="w-4 h-4" />
              <span className="text-xs font-bold">{language === 'es' ? 'EN' : 'ES'}</span>
            </motion.button>
            {mounted && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20 transition-all text-foreground"
                title="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </motion.button>
            )}
          </div>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </motion.button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-t border-primary/10 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-8 space-y-6 flex flex-col items-center">
              {[
                { href: '#about', label: langConfig.nav.about },
                { href: '#experience', label: langConfig.nav.experience },
                { href: '#pricing', label: langConfig.nav.pricing },
                { href: '#portfolio', label: langConfig.nav.portfolio },
              ].map((item, index) => (
                <motion.a
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}

              <div className="flex items-center space-x-4 pt-4 border-t border-border w-2/3 justify-center">
                <button
                  onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                  className="p-3 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 transition-all text-foreground flex items-center gap-2"
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-bold">{language === 'es' ? 'EN' : 'ES'}</span>
                </button>
                {mounted && (
                  <button
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="p-3 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 transition-all text-foreground"
                  >
                    {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  </button>
                )}
              </div>

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:scale-105 transition-transform"
              >
                {langConfig.nav.contact}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
