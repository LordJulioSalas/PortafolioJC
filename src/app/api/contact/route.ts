import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Here you would normally:
    // 1. Validate 'body' data
    // 2. Save to Database (e.g. Supabase or MongoDB)
    // 3. Send email using SendGrid or Nodemailer

    console.log('Received Form Data:', body);

    return NextResponse.json({ success: true, message: 'Message sent successfully.' }, { status: 200 });
  } catch (error) {
    console.error('Error in contact route:', error);
    return NextResponse.json({ success: false, message: 'Error processing request.' }, { status: 500 });
  }
}
