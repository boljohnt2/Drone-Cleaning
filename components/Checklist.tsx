import Image from 'next/image';
import { checklist, externalLinks } from '@/lib/content';
import { Check } from './Icons';

export default function Checklist() {
  return (
    <section className="section" id="checklist">
      <div className="wrap">
        <div className="editorial">
          <div className="editorial-text reveal">
            <p className="launch-label">{checklist.label}</p>
            <h2 className="feature-heading">{checklist.heading}</h2>
            <p className="body">{checklist.copy}</p>

            <ul className="checklist">
              {checklist.points.map((point) => (
                <li key={point}>
                  <Check />
                  {point}
                </li>
              ))}
            </ul>

            <p className="body body--small">
              {checklist.knowledgePrefix}
              <a className="link-blue link-blue--small" href={externalLinks.knowledge}>
                {checklist.knowledgeLink}
              </a>
              {checklist.knowledgeSuffix}
            </p>

            <div className="editorial-actions">
              <a className="pill pill--blue pill--lg" href={externalLinks.why}>
                {checklist.primaryCta}
              </a>
              <a className="pill pill--outline pill--lg" href={externalLinks.knowledge}>
                {checklist.secondaryCta}
              </a>
            </div>
          </div>

          <div className="editorial-media reveal">
            <Image
              src="/drone-closeup.avif"
              alt="תקריב של מיכל השטיפה על רחפן TDrone"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
