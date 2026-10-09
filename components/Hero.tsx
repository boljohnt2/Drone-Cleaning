'use client';

import { useRef, useState } from 'react';
import { externalLinks, hero, trustItems } from '@/lib/content';
import { Chevron, CrossCircle, ShieldSmall, Star } from './Icons';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [hasVideo, setHasVideo] = useState(true);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-head">
          <p className="kicker">{hero.kicker}</p>
          <h1 className="display">
            {hero.headline[0]}
            <br />
            {hero.headline[1]}
          </h1>
          <p className="hero-copy">{hero.copy}</p>
          <div className="hero-actions">
            <a className="pill pill--blue pill--lg" href="#contact">
              {hero.primaryCta}
            </a>
            <a className="pill pill--outline pill--lg" href={externalLinks.partnerships}>
              {hero.secondaryCta}
            </a>
          </div>
        </div>
      </div>

      <div className="wrap wrap--wide">
        <div className="hero-stage reveal">
          <div className="hero-media">
            <video
              ref={videoRef}
              src="/hero.mp4"
              poster="/service-buildings.avif"
              autoPlay
              muted
              loop
              playsInline
              onError={() => setHasVideo(false)}
            />
            {hasVideo && (
              <button
                className="media-toggle"
                type="button"
                onClick={toggle}
                aria-label={playing ? 'השהיית וידאו רקע' : 'הפעלת וידאו רקע'}
              >
                <svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor" aria-hidden="true">
                  {playing ? (
                    <>
                      <rect x="0" y="0" width="3" height="12" rx="1" />
                      <rect x="7" y="0" width="3" height="12" rx="1" />
                    </>
                  ) : (
                    <path d="M1 1l8 5-8 5V1z" />
                  )}
                </svg>
              </button>
            )}
          </div>

          <div className="floating-callout">
            <span className="cert">
              <Star />
              אישורי רת״א
            </span>
            <span className="divider" />
            <span className="cert">
              <ShieldSmall />
              הסמכת יצרן
            </span>
            <span className="divider" />
            <span className="cert">
              <CrossCircle />
              ביטוח אווירי
            </span>
            <span className="divider" />
            <a className="link-blue link-blue--small" href={externalLinks.portfolio}>
              {hero.portfolioLink}
              <Chevron />
            </a>
          </div>
        </div>
      </div>

      <div className="trustline">
        <div className="trustline-track">
          {[...trustItems, ...trustItems].map((item, i) => (
            <span key={`${item}-${i}`}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
