'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Loader2, Send } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const formSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().optional(),
  type: z.string().min(1, 'Selecciona un tipo de web').refine(val => val !== '', { message: 'Selecciona un tipo de web' }),
  budget: z.string().min(1, 'Selecciona un presupuesto aproximado').refine(val => val !== '', { message: 'Selecciona un presupuesto aproximado' }),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres')
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const { langConfig } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: '',
      budget: ''
    }
  });

  const onSubmit = async (data: FormData) => {
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
    <section id="contact" className="py-24 relative overflow-hidden bg-black/40">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[128px] -z-10 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 max-w-3xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{langConfig.contact.title} <span className="text-primary">{langConfig.contact.titleHighlight}</span></h2>
          <p className="text-muted-foreground text-lg">
            {langConfig.contact.subtitle}
          </p>
        </div>

        <div className="glass rounded-3xl p-8 md:p-12 relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-t-3xl" />
          
          {submitSuccess ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-2">¡Mensaje Enviado!</h3>
              <p className="text-muted-foreground">Gracias por contactarme. Me pondré en contacto contigo muy pronto.</p>
              <button 
                onClick={() => setSubmitSuccess(false)}
                className="mt-8 px-6 py-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">{langConfig.contact.form.name}</label>
                  <input 
                    {...register('name')} 
                    className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground transition-all placeholder:text-gray-400"
                    placeholder="Tu nombre"
                  />
                  {errors.name && <p className="text-red-400 text-xs">{errors.name.message}</p>}
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">{langConfig.contact.form.email}</label>
                  <input 
                    {...register('email')} 
                    type="email"
                    className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground transition-all placeholder:text-gray-400"
                    placeholder="tu@email.com"
                  />
                  {errors.email && <p className="text-red-400 text-xs">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">Teléfono (Opcional)</label>
                  <input 
                    {...register('phone')} 
                    className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground transition-all placeholder:text-gray-400"
                    placeholder="+57 300 000 0000"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">Tipo de Proyecto *</label>
                  <select 
                    {...register('type')} 
                    className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground transition-all appearance-none"
                  >
                    <option value="" disabled>Selecciona una opción</option>
                    <option value="Veterinaria">Veterinaria</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Agendamiento">Agendamiento / Reservas</option>
                    <option value="Otro">Otro</option>
                  </select>
                  {errors.type && <p className="text-red-400 text-xs">{errors.type.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80">Presupuesto Aproximado *</label>
                <select 
                  {...register('budget')} 
                  className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground transition-all appearance-none"
                >
                  <option value="" disabled>Selecciona una opción</option>
                  <option value="$2-3k">$2,000 - $3,500 (Básico)</option>
                  <option value="$4-6k">$4,000 - $6,500 (Profesional)</option>
                  <option value="$7k+">$7,000+ (Custom)</option>
                  <option value="No sé">No estoy seguro aún</option>
                </select>
                {errors.budget && <p className="text-red-400 text-xs">{errors.budget.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80">{langConfig.contact.form.message}</label>
                <textarea 
                  {...register('message')} 
                  rows={4}
                  className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground transition-all resize-none placeholder:text-gray-400"
                  placeholder="Cuéntame sobre tu idea o requerimientos..."
                ></textarea>
                {errors.message && <p className="text-red-400 text-xs">{errors.message.message}</p>}
              </div>
              
              {submitError && (
                <p className="text-red-400 text-sm text-center">Hubo un error al enviar el mensaje. Por favor intenta de nuevo.</p>
              )}

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-primary text-white font-bold text-lg hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <><Loader2 className="w-5 h-5 animate-spin" /> {langConfig.contact.form.sending}</>
                ) : (
                  <><Send className="w-5 h-5" /> {langConfig.contact.form.btnSend}</>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
