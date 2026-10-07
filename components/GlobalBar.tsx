import { site } from '@/lib/content';

export default function GlobalBar() {
  return (
    <div className="globalbar">
      <div className="wrap">
        <div className="globalbar-credentials">
          {site.credentials.map((item, i) => (
            <span key={item} style={{ display: 'contents' }}>
              <span>{item}</span>
              {i < site.credentials.length - 1 && <span className="dot" />}
            </span>
          ))}
        </div>
        <div className="globalbar-contact">
          <a href={site.phoneHref}>{site.phone}</a>
          <a href={site.emailHref}>{site.email}</a>
        </div>
      </div>
    </div>
  );
}
