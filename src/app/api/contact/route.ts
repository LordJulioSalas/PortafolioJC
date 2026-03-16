import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { supabase } from '@/utils/supabaseAdmin';
import { z } from 'zod';

// ========================
// CONFIGURACIÓN DE EMAIL
// ========================
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
 },
  tls: {
    rejectUnauthorized: false
  }
});
// ========================
// VALIDACIÓN CON ZOD
// ========================
const ContactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().optional(),
  type: z.string().min(1),
  budget: z.string().min(1),
  message: z.string().min(10).max(1000),
});

// ========================
// RATE LIMITING
// ========================
interface RateLimitStore {
  count: number;
  resetTime: number;
}

const rateLimitStore = new Map<string, RateLimitStore>();

function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const limit = rateLimitStore.get(ip);

  if (!limit || now > limit.resetTime) {
    rateLimitStore.set(ip, {
      count: 1,
      resetTime: now + 15 * 60 * 1000,
    });
    return { allowed: true, remaining: 4 };
  }

  if (limit.count >= 5) {
    return { allowed: false, remaining: 0 };
  }

  limit.count++;
  return { allowed: true, remaining: 5 - limit.count };
}

// ========================
// FUNCIÓN PARA ENVIAR EMAILS
// ========================
async function sendEmails(userData: {
  name: string;
  email: string;
  message: string;
  type: string;
  budget: string;
}) {
  try {
    console.log('Intentando enviar emails...');
    console.log('Email desde:', process.env.EMAIL_USER);
    console.log('Enviando a usuario:', userData.email);

    // Email al usuario (confirmación)
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: userData.email,
      subject: 'Hemos recibido tu mensaje - Julio Salas',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); padding: 20px; border-radius: 10px 10px 0 0;">
            <h2 style="color: white; margin: 0;">Gracias por contactarnos!</h2>
          </div>
          <div style="padding: 30px; background: #f9fafb; border-radius: 0 0 10px 10px;">
            <p>Hola <strong>${userData.name}</strong>,</p>
            <p>Hemos recibido tu mensaje y nos pondremos en contacto contigo lo antes posible.</p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2563eb;">
              <h4 style="margin-top: 0;">Resumen de tu solicitud:</h4>
              <p><strong>Tipo de proyecto:</strong> ${userData.type}</p>
              <p><strong>Presupuesto:</strong> ${userData.budget}</p>
              <p><strong>Tu mensaje:</strong><br><em>${userData.message}</em></p>
            </div>
            
            <p>Tiempo de respuesta estimado: 24-48 horas</p>
          </div>
        </div>
      `,
    });

    console.log('Email enviado al usuario correctamente');

    // Email al admin (notificación)
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `Nuevo mensaje de ${userData.name} - Portafolio`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #2563eb; padding: 20px; border-radius: 10px 10px 0 0; color: white;">
            <h2 style="margin: 0;">Nuevo mensaje de contacto</h2>
          </div>
          <div style="padding: 20px; background: white; border: 1px solid #e5e7eb;">
            <p><strong>Nombre:</strong> ${userData.name}</p>
            <p><strong>Email:</strong> ${userData.email}</p>
            <p><strong>Tipo de proyecto:</strong> ${userData.type}</p>
            <p><strong>Presupuesto:</strong> ${userData.budget}</p>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
            <p><strong>Mensaje:</strong></p>
            <p style="background: #f3f4f6; padding: 15px; border-radius: 5px; white-space: pre-wrap;">
${userData.message}
            </p>
          </div>
        </div>
      `,
    });

    console.log('Email al admin enviado correctamente');
    return { success: true };
  } catch (error) {
    console.error('Error enviando emails:', error);
    return { success: false, error };
  }
}

// ========================
// ENDPOINT POST
// ========================
export async function POST(request: Request) {
  try {
    console.log('POST /api/contact recibido');

    const ip = request.headers.get('x-forwarded-for') || request.headers.get('cf-connecting-ip') || 'unknown';
    console.log('IP:', ip);

    const rateLimit = checkRateLimit(ip);
    if (!rateLimit.allowed) {
      console.warn('Rate limit excedido para:', ip);
      return NextResponse.json(
        { success: false, message: 'Demasiadas solicitudes. Intenta de nuevo en 15 minutos.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    console.log('Body recibido');

    const validated = ContactSchema.parse(body);
console.log('Validacion exitosa');

// Protección Honeypot - Si el campo "website" está lleno, es un bot
if (body.website && body.website.trim() !== '') {
  console.warn('Bot detectado - Honeypot activado');
  return NextResponse.json(
    { success: false, message: 'Solicitud inválida.' },
    { status: 400 }
  );
}

console.log('Guardando en Supabase...');

    console.log('Guardando en Supabase...');
    const { error: dbError } = await supabase.from('contact_messages').insert([
      {
        name: validated.name,
        email: validated.email,
        phone: validated.phone || null,
        type: validated.type,
        budget: validated.budget,
        message: validated.message,
        created_at: new Date().toISOString(),
      },
    ]);

    if (dbError) {
      console.error('Error Supabase:', dbError);
      return NextResponse.json(
        { success: false, message: 'Error al guardar el mensaje en la base de datos.' },
        { status: 500 }
      );
    }

    console.log('Mensaje guardado en Supabase');

    console.log('Enviando emails...');
    const emailResult = await sendEmails({
      name: validated.name,
      email: validated.email,
      message: validated.message,
      type: validated.type,
      budget: validated.budget,
    });

    if (!emailResult.success) {
      console.warn('Error en emails, pero mensaje guardado en BD');
    }

    console.log('Completado exitosamente');
    return NextResponse.json(
      {
        success: true,
        message: 'Mensaje enviado correctamente. Pronto nos contactaremos contigo.',
        remaining: rateLimit.remaining,
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error('Error validacion:', error.issues);
      return NextResponse.json(
        {
          success: false,
          message: 'Datos invalidos',
          errors: error.issues.map((e) => ({ field: e.path.join('.'), message: e.message })),
        },
        { status: 400 }
      );
    }

    console.error('Error en route:', error);
    return NextResponse.json({ success: false, message: 'Error procesando la solicitud.' }, { status: 500 });
  }
}