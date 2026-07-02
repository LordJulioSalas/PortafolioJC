'use client';

import { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Loader2, Send, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { motion, useInView } from 'framer-motion';

const formSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().optional(),
  type: z.string().min(1, 'Selecciona un tipo de web').refine(val => val !== '', { message: 'Selecciona un tipo de web' }),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
  website: z.string().optional(),
});

type ContactFormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (submitSuccess) {
      const timer = setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitSuccess]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: '',
      website: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Network error');
      
      setSubmitSuccess(true);
      reset();
    } catch {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-secondary/10 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
            {t('contact.title')}{' '}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {t('contact.titleHighlight')}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="rounded-3xl border border-primary/20 bg-card/50 backdrop-blur-xl p-8 md:p-12 shadow-2xl">
            {/* Top gradient line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-t-3xl" />
            
            {submitSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', duration: 0.6 }}
                  className="w-24 h-24 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle2 className="w-12 h-12 text-green-500" />
                </motion.div>
                <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {t('contact.form.successTitle')}
                </h3>
                <p className="text-foreground/70 text-lg mb-8">{t('contact.form.successText')}</p>
                <button 
                  onClick={() => setSubmitSuccess(false)}
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 hover:scale-105 transition-transform font-semibold"
                >
                  {t('contact.form.successButton')}
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <input
                  {...register('website')}
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  style={{
                    position: 'absolute',
                    left: '-9999px',
                    width: '1px',
                    height: '1px',
                    opacity: 0,
                  }}
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">{t('contact.form.name')}</label>
                    <input 
                      {...register('name')} 
                      className="w-full bg-background/50 border border-primary/20 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/40 text-foreground transition-all placeholder:text-muted-foreground"
                      placeholder={t('contact.form.namePlaceholder')}
                    />
                    {errors.name && <p className="text-red-400 text-xs">{errors.name.message}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">{t('contact.form.email')}</label>
                    <input 
                      {...register('email')} 
                      type="email"
                      className="w-full bg-background/50 border border-primary/20 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/40 text-foreground transition-all placeholder:text-muted-foreground"
                      placeholder={t('contact.form.emailPlaceholder')}
                    />
                    {errors.email && <p className="text-red-400 text-xs">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">{t('contact.form.phone')}</label>
                    <input 
                      {...register('phone')} 
                      className="w-full bg-background/50 border border-primary/20 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/40 text-foreground transition-all placeholder:text-muted-foreground"
                      placeholder="+57 300 000 0000"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">{t('contact.form.projectType')}</label>
                    <select 
                      {...register('type')} 
                      className="w-full bg-background/50 border border-primary/20 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/40 text-foreground transition-all appearance-none cursor-pointer"
                    >
                      <option value="" disabled>{t('contact.form.projectTypePlaceholder')}</option>
                      <option value="web">{t('contact.form.optionWeb')}</option>
                      <option value="ecommerce">{t('contact.form.optionEcommerce')}</option>
                      <option value="app">{t('contact.form.optionApp')}</option>
                      <option value="consulting">{t('contact.form.optionConsulting')}</option>
                      <option value="opportunity">{t('contact.form.optionOpportunity')}</option>
                      <option value="collaboration">{t('contact.form.optionCollaboration')}</option>
                      <option value="other">{t('contact.form.optionOther')}</option>
                    </select>
                    {errors.type && <p className="text-red-400 text-xs">{errors.type.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">{t('contact.form.requirement')}</label>
                  <textarea 
                    {...register('message')} 
                    rows={5}
                    className="w-full bg-background/50 border border-primary/20 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/40 text-foreground transition-all resize-none placeholder:text-muted-foreground"
                    placeholder={t('contact.form.requirementPlaceholder')}
                  ></textarea>
                  {errors.message && <p className="text-red-400 text-xs">{errors.message.message}</p>}
                </div>
                
                {submitError && (
                  <p className="text-red-400 text-sm text-center py-2 bg-red-500/10 rounded-xl border border-red-500/20">
                    {t('contact.form.errorText')}
                  </p>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent text-white font-bold text-lg hover:shadow-2xl transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
                >
                  {isSubmitting ? (
                    <><Loader2 className="w-5 h-5 animate-spin" /> {t('contact.form.sending')}</>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      {t('contact.form.btnSend')}
                    </>
                  )}
                </motion.button>

                <div className="flex items-center gap-4 my-2">
                  <div className="flex-1 h-px bg-border" />
                  <span className="text-xs text-muted-foreground uppercase tracking-widest">or</span>
                  <div className="flex-1 h-px bg-border" />
                </div>

                <motion.a
                  href="https://wa.me/573217749666"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all text-white"
                  style={{ backgroundColor: '#25D366' }}
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </motion.a>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
