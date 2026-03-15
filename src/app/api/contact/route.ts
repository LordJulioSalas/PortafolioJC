import { NextResponse } from 'next/server';
import { supabase } from '@/utils/supabaseAdmin';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Guardar el mensaje en Supabase
    const { data, error } = await supabase.from('contact_messages').insert([
      {
        name: body.name,
        email: body.email,
        phone: body.phone,
        type: body.type,
        budget: body.budget,
        message: body.message,
        created_at: new Date().toISOString(),
      },
    ]);

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ success: false, message: 'Error al guardar en la base de datos.' }, { status: 500 });
    }

    // Simulación de envío de correo
    console.log('Enviar correo a juliosalas01@icloud.com con:', body);

    return NextResponse.json({ success: true, message: 'Mensaje enviado correctamente.' }, { status: 200 });
  } catch (error) {
    console.error('Error en contact route:', error);
    return NextResponse.json({ success: false, message: 'Error procesando la solicitud.' }, { status: 500 });
  }
}
