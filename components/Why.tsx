import { externalLinks, why } from '@/lib/content';
import { Chevron, PillarGlyph, type PillarIcon } from './Icons';

export default function Why() {
  return (
    <section className="section" id="why">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="sh-text">
            <h2 className="feature-heading">{why.heading}</h2>
          </div>
          <a className="link-blue" href={externalLinks.why}>
            {why.link}
            <Chevron />
          </a>
        </div>

        <div className="pillars">
          {why.items.map((item) => (
            <div className="pillar reveal" key={item.title}>
              <PillarGlyph name={item.icon as PillarIcon} />
              <h3 className="sub-heading">{item.title}</h3>
              <p className="body">{item.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
