import Image from 'next/image';
import { externalLinks, footer } from '@/lib/content';
import { Facebook, Instagram, LinkedIn } from './Icons';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <Image src="/tdrone-logo.png" alt="TDrone" width={97} height={26} />
            <p className="body body--small">{footer.tagline}</p>
            <div className="footer-social">
              <a href={externalLinks.about} aria-label="Facebook">
                <Facebook />
              </a>
              <a href={externalLinks.about} aria-label="Instagram">
                <Instagram />
              </a>
              <a href={externalLinks.about} aria-label="LinkedIn">
                <LinkedIn />
              </a>
            </div>
          </div>

          {footer.columns.map((column) => (
            <div key={column.title}>
              <h4>{column.title}</h4>
              <ul>
                {column.links.map((link) => (
                  <li key={`${column.title}-${link.label}`}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-base">
          <span>{footer.rights}</span>
          <span>{footer.credentials}</span>
        </div>
      </div>
    </footer>
  );
}
