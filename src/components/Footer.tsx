'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const { langConfig } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-background to-primary/5 border-t border-primary/10 py-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-secondary/10 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                LORD.CODE
              </h3>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                {langConfig.footer.rights}
              </p>
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed">
              {langConfig.footer.description}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-bold text-lg mb-4 text-foreground">
              {langConfig.footer.navigation}
            </h4>
            <ul className="space-y-2">
              {[
                { href: '#about', label: langConfig.nav.about },
                { href: '#experience', label: langConfig.nav.experience },
                { href: '#portfolio', label: langConfig.nav.portfolio },
                { href: '#contact', label: langConfig.nav.contact },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground/70 hover:text-primary transition-colors inline-block hover:translate-x-1 transition-transform"
                  >
                    → {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-bold text-lg mb-4 text-foreground">
              {langConfig.footer.contact}
            </h4>
            <div className="space-y-3 mb-6">
              <a
                href="mailto:thejuliosalas@gmail.com"
                className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                thejuliosalas@gmail.com
              </a>
              <a
                href="tel:+573217749666"
                className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                +57 321 774 9666
              </a>
            </div>
            
            <div className="flex gap-3">
              <a
                href="https://github.com/LordJulioSalas"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 flex items-center justify-center hover:scale-110 hover:border-primary/40 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/juliosalasr/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 flex items-center justify-center hover:scale-110 hover:border-primary/40 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-8 border-t border-primary/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} LORD.CODE. {langConfig.footer.copyright}</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                {langConfig.footer.terms}
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                {langConfig.footer.privacy}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
