"use client";

import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function Footer() {
  const { langConfig } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-1">
            <div className="inline-block mb-6">
              <span className="text-2xl font-bold neon-text tracking-tighter">
                LORD<span className="text-primary">.</span>CODE
              </span>
              <div className="w-full h-[1px] bg-gradient-to-r from-primary to-transparent mt-[2px] mb-[1px]"></div>
              <span className="text-[0.7rem] font-medium tracking-[0.25em] text-muted-foreground uppercase pl-1 leading-none pt-1">
                developer
              </span>
            </div>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              Desarrollo web full-stack profesional para negocios que buscan escalar rápido con bases sólidas y diseño futurista.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white/90">Navegación</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-primary transition-colors">Sobre Mí</a></li>
              <li><a href="#how-it-works" className="hover:text-primary transition-colors">Cómo Funciona</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors">Paquetes</a></li>
              <li><a href="#portfolio" className="hover:text-primary transition-colors">Portafolio</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white/90">Contacto</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> thejuliosalas@gmail.com</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> +57 321 774 9666</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Rionegro, Antioquia, CO</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white/90">Redes Sociales</h4>
            <div className="flex gap-4">
              <a href="https://github.com/LordJulioSalas" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-primary/20 hover:text-primary transition-all border border-white/10 hover:border-primary/50">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/julio-salas-711b27184" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-primary/20 hover:text-primary transition-all border border-white/10 hover:border-primary/50">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            
            <div className="mt-6">
              <p className="text-xs text-muted-foreground flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]" />
                Disponible para nuevos proyectos
              </p>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>&copy; {currentYear} {langConfig.footer.text}</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
