
// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';


export async function GET() {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const data = await resend.emails.send({
      from: 'azizmahon10@gmail.com',
      to: ['azizmahon@gmail.com'],
      subject: 'Hello world',
      html: `<h1>HELLO MF</h1>`,
    });

    return NextResponse.json({data});
  } catch (error) {
    return NextResponse.json({ error });
  }
}