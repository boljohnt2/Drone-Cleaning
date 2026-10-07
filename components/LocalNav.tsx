'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { navLinks } from '@/lib/content';
import { Close, Menu } from './Icons';

export default function LocalNav() {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [close]);

  return (
    <>
      <header className="localnav">
        <div className="wrap">
          <a className="localnav-brand" href="#top" aria-label="TDrone">
            <Image src="/tdrone-logo.png" alt="TDrone" width={82} height={22} priority />
          </a>

          <nav aria-label="ניווט ראשי">
            <ul className="localnav-links">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="localnav-actions">
            <a className="pill pill--outline" href="#checklist">
              מה חשוב לבדוק?
            </a>
            <a className="pill pill--blue" href="#contact">
              קבלו הצעת מחיר
            </a>
            <button
              className="navtoggle"
              type="button"
              aria-label="פתיחת תפריט"
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <Menu />
            </button>
          </div>
        </div>
      </header>

      <div className={`drawer${open ? ' is-open' : ''}`}>
        <div className="drawer-top">
          <Image src="/tdrone-logo.png" alt="TDrone" width={82} height={22} />
          <button
            className="navtoggle"
            type="button"
            aria-label="סגירת תפריט"
            style={{ display: 'inline-flex' }}
            onClick={close}
          >
            <Close />
          </button>
        </div>

        {navLinks.map((link) => (
          <a key={link.label} className="drawer-link" href={link.href} onClick={close}>
            {link.label}
          </a>
        ))}
        <a className="drawer-link" href="#contact" onClick={close}>
          צור קשר
        </a>
        <a className="pill pill--blue pill--lg" href="#contact" onClick={close}>
          קבלו הצעת מחיר
        </a>
      </div>
    </>
  );
}
