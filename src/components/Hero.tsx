'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import gsap from 'gsap';

export default function Hero() {
  const { t } = useLanguage();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const matrixRef = useRef<HTMLDivElement>(null);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);

  useEffect(() => {
    // Efecto de lluvia Matrix en el fondo
    if (matrixRef.current) {
      const chars = '01アイウエオカキクケコサシスセソタチツテト';
      const columns = Math.floor(window.innerWidth / 20);
      
      for (let i = 0; i < columns; i++) {
        const column = document.createElement('div');
        column.className = 'matrix-column';
        column.style.left = `${i * 20}px`;
        column.style.animationDelay = `${Math.random() * 2}s`;
        column.style.animationDuration = `${Math.random() * 3 + 2}s`;
        column.textContent = chars[Math.floor(Math.random() * chars.length)];
        matrixRef.current?.appendChild(column);
      }
    }

    // Terminal typing effect - MÁS SIMPLE
    const lines = [
      '> system@juliosalasv:~$ whoami',
      '> Julio Salas',
      '> Status: ONLINE | Ready to build'
    ];
    
    let lineIndex = 0;
    const interval = setInterval(() => {
      if (lineIndex < lines.length) {
        setTerminalLines(prev => [...prev, lines[lineIndex]]);
        lineIndex++;
      } else {
        clearInterval(interval);
      }
    }, 400);

    // Animación del título gigante - SIN BLUR
    if (titleRef.current) {
      gsap.fromTo(titleRef.current,
        { 
          opacity: 0,
          scale: 0.9
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power4.out',
          delay: 0.3
        }
      );
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Matrix rain effect */}
      <div ref={matrixRef} className="absolute inset-0 overflow-hidden opacity-15" />

      {/* Simple grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff4105_1px,transparent_1px),linear-gradient(to_bottom,#00ff4105_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center py-20">
        
        {/* Terminal window - SIMPLE Y LIMPIO */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-10"
        >
          <div className="bg-black/95 border-2 border-primary rounded-lg shadow-[0_0_30px_rgba(0,255,65,0.2)] overflow-hidden">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-2 bg-primary/5 border-b border-primary/30">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-primary/80" />
              </div>
              <span className="text-xs font-mono text-primary/60 ml-2">system@juliosalasv</span>
            </div>
            {/* Terminal content */}
            <div className="px-4 py-3 font-mono text-sm text-left min-w-[300px]">
              {terminalLines.map((line, i) => (
                <div key={i} className="text-primary mb-1">
                  {line}
                  {i === terminalLines.length - 1 && <span className="animate-pulse">_</span>}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* TÍTULO GIGANTE - SIN DIFUMINADO */}
        <h1 
          ref={titleRef}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] xl:text-[11rem] font-black tracking-tighter leading-none mb-6"
        >
          <div className="mb-2 text-white uppercase">
            {t('hero.titleLine1')}
          </div>
          <div className="relative inline-block text-primary uppercase" style={{
            textShadow: `0 0 15px rgba(74, 222, 128, 0.5), 0 0 35px rgba(74, 222, 128, 0.25)`
          }}>
            {t('hero.titleLine2')}
          </div>
        </h1>

        {/* Badge - LIMPIO */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/5 border-2 border-primary/40 mb-6"
        >
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.2s' }} />
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>
          <span className="text-sm md:text-base font-bold text-primary tracking-wide">
            {t('hero.badge')}
          </span>
        </motion.div>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-base md:text-lg text-foreground/70 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          {t('hero.subtitle')}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#portfolio"
            className="group relative px-10 py-5 rounded-lg bg-primary text-black font-black text-base uppercase tracking-wider overflow-hidden shadow-[0_0_20px_rgba(0,255,65,0.4)] hover:shadow-[0_0_40px_rgba(0,255,65,0.6)] transition-all hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              {t('hero.btnProjects')}
              <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </a>
          
          <a
            href="#about"
            className="group px-10 py-5 rounded-lg border-2 border-primary bg-transparent font-black text-base uppercase tracking-wider hover:bg-primary hover:text-black transition-all"
          >
            <span className="flex items-center gap-2">
              {t('hero.btnContact')}
              <span className="text-primary group-hover:text-black transition-colors">⚡</span>
            </span>
          </a>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-3 h-3 border-2 border-primary animate-ping" />
        <div className="absolute top-1/3 right-20 w-2 h-2 border-2 border-primary animate-ping" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-primary animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-primary animate-pulse" style={{ animationDelay: '0.3s' }} />
      </div>

      <style jsx>{`
        .matrix-column {
          position: absolute;
          top: -20px;
          color: #00ff41;
          font-family: monospace;
          font-size: 20px;
          animation: matrix-fall linear infinite;
          text-shadow: 0 0 5px #00ff41;
        }
        
        @keyframes matrix-fall {
          0% { transform: translateY(-20px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
