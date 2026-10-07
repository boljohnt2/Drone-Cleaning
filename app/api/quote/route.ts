import { NextResponse } from 'next/server';

export type QuoteRequest = {
  fullname: string;
  company: string;
  phone: string;
  email: string;
  assetType: string;
  height: string;
  city: string;
  notes: string;
};

/**
 * Receives a quote request from the contact form.
 *
 * Right now it only validates and logs — wire this up to your CRM, an email
 * provider (Resend / SendGrid), or a Vercel integration when you're ready.
 */
export async function POST(request: Request) {
  let body: Partial<QuoteRequest>;

  try {
    body = (await request.json()) as Partial<QuoteRequest>;
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  const required: (keyof QuoteRequest)[] = ['fullname', 'company', 'phone', 'email'];
  const missing = required.filter((key) => !body[key]?.toString().trim());

  if (missing.length > 0) {
    return NextResponse.json({ ok: false, error: 'missing_fields', missing }, { status: 422 });
  }

  console.log('[tdrone] quote request', {
    fullname: body.fullname,
    company: body.company,
    phone: body.phone,
    email: body.email,
    assetType: body.assetType,
    height: body.height,
    city: body.city,
  });

  return NextResponse.json({ ok: true });
}
