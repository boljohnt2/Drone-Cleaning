'use client';

import Image from 'next/image';
import { useState, type FormEvent } from 'react';
import { contact, site } from '@/lib/content';
import { Mail, Phone } from './Icons';

type Errors = Record<string, boolean>;

export default function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    const nextErrors: Errors = {};
    (['fullname', 'company', 'phone'] as const).forEach((key) => {
      if (!data[key]?.trim()) nextErrors[key] = true;
    });
    if (!/\S+@\S+\.\S+/.test(data.email ?? '')) nextErrors.email = true;

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus('sending');
    try {
      await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
    } catch {
      /* The confirmation is shown either way — details are also logged server-side. */
    }
    setStatus('sent');
    form.reset();
  }

  const cls = (key: string) => (errors[key] ? 'has-error' : undefined);

  return (
    <section className="section section--mist" id="contact">
      <div className="wrap">
        <div className="contact-grid">
          <aside className="contact-aside reveal">
            <h2 className="feature-heading">{contact.heading}</h2>
            <p className="body">{contact.copy}</p>
            <div className="contact-lines">
              <a href={site.phoneHref}>
                <Phone />
                {site.phone}
              </a>
              <a href={site.emailHref}>
                <Mail />
                {site.email}
              </a>
            </div>
            <div className="contact-aside-media">
              <Image
                src="/drone-closeup.avif"
                alt="רחפן השטיפה של TDrone"
                fill
                sizes="(max-width: 900px) 100vw, 40vw"
              />
            </div>
          </aside>

          <div className="form-card reveal">
            <form className="form-grid" onSubmit={onSubmit} noValidate>
              <div className="field">
                <label htmlFor="fullname">
                  {contact.fields.fullname}
                  <span className="req">*</span>
                </label>
                <input id="fullname" name="fullname" type="text" className={cls('fullname')} placeholder="ישראל ישראלי" />
              </div>

              <div className="field">
                <label htmlFor="company">
                  {contact.fields.company}
                  <span className="req">*</span>
                </label>
                <input id="company" name="company" type="text" className={cls('company')} placeholder="שם החברה" />
              </div>

              <div className="field">
                <label htmlFor="phone">
                  {contact.fields.phone}
                  <span className="req">*</span>
                </label>
                <input id="phone" name="phone" type="tel" className={cls('phone')} placeholder="050-0000000" />
              </div>

              <div className="field">
                <label htmlFor="email">
                  {contact.fields.email}
                  <span className="req">*</span>
                </label>
                <input id="email" name="email" type="email" className={cls('email')} placeholder="name@company.co.il" />
              </div>

              <fieldset className="field field--full" style={{ border: 0, padding: 0, margin: 0 }}>
                <legend className="field-legend" style={{ padding: 0, marginBottom: 8 }}>
                  {contact.fields.assetType}
                  <span className="req">*</span>
                </legend>
                <div className="choices">
                  {contact.assetTypes.map((type, i) => (
                    <label className="choice" key={type}>
                      <input type="radio" name="assetType" value={type} defaultChecked={i === 0} />
                      <span>{type}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="field">
                <label htmlFor="height">{contact.fields.height}</label>
                <input id="height" name="height" type="number" min={0} placeholder="לדוגמה: 24" />
              </div>

              <div className="field">
                <label htmlFor="city">{contact.fields.city}</label>
                <input id="city" name="city" type="text" placeholder="עיר" />
              </div>

              <div className="field field--full">
                <label htmlFor="notes">{contact.fields.notes}</label>
                <textarea id="notes" name="notes" rows={4} placeholder="גישה לאתר, לוחות זמנים, דרישות מיוחדות…" />
              </div>

              <div className="form-footer">
                <p className="form-note">{contact.note}</p>
                <button className="pill pill--blue pill--lg" type="submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'שולח…' : contact.submit}
                </button>
              </div>

              {status === 'sent' && <p className="form-success">{contact.success}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
