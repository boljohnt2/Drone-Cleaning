import Image from 'next/image';
import { externalLinks, services } from '@/lib/content';
import { Chevron } from './Icons';

export default function Services() {
  return (
    <section className="section section--mist" id="services">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="sh-text">
            <h2 className="feature-heading">{services.heading}</h2>
            <p className="body">{services.copy}</p>
          </div>
          <a className="link-blue" href={externalLinks.portfolio}>
            {services.link}
            <Chevron />
          </a>
        </div>

        <div className="cards">
          {services.items.map((item) => (
            <article className="card reveal" key={item.title}>
              <div className="card-media">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
              </div>
              <div className="card-body">
                <h3 className="sub-heading">{item.title}</h3>
                <p className="body">{item.copy}</p>
                <a className="link-blue link-blue--small" href="#contact">
                  {services.cardLink}
                  <Chevron />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
