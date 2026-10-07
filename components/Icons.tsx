import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

export function Chevron(props: IconProps) {
  // Points toward the reading direction in RTL (leftward).
  return (
    <svg className="chev" width="6" height="10" viewBox="0 0 6 10" fill="none" aria-hidden="true" {...props}>
      <path d="M5 1L1 5l4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Check({ size = 14, ...props }: IconProps & { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true" {...props}>
      <path d="M2.5 7.4l3 3 6-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Star(props: IconProps) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7 1l1.7 3.5 3.8.5-2.8 2.7.7 3.8L7 9.7 3.6 11.5l.7-3.8L1.5 5l3.8-.5L7 1z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ShieldSmall(props: IconProps) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" {...props}>
      <path d="M7 1l5 2v4c0 3-2.1 5.3-5 6-2.9-.7-5-3-5-6V3l5-2z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}

export function CrossCircle(props: IconProps) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" {...props}>
      <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M1.5 7h11M7 1.5v11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function Phone(props: IconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M2.5 3.5c0-.6.4-1 1-1h2l1 3-1.6 1a9 9 0 004.6 4.6l1-1.6 3 1v2c0 .6-.4 1-1 1A11.5 11.5 0 012.5 3.5z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Mail(props: IconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <rect x="1.5" y="3.5" width="13" height="9" rx="2" stroke="currentColor" strokeWidth="1.2" />
      <path d="M2 5l6 4 6-4" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}

/* ---- Pillar glyphs (small, monochrome, per the style guide) ---- */

const pillarGlyphs = {
  shield: (
    <>
      <path d="M10 1.5l7 3v5c0 4.3-3 7.7-7 9-4-1.3-7-4.7-7-9v-5l7-3z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M7 10l2.2 2.2L13.5 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  bolt: <path d="M11 1.5L4 11h5l-1 7.5L16 9h-5l1-7.5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />,
  badge: (
    <>
      <rect x="2.5" y="2.5" width="15" height="15" rx="4" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6.5 10.2l2.4 2.4 4.6-5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  insurance: (
    <>
      <path d="M3 6.5l7-3.5 7 3.5v4c0 4-3 6.8-7 8-4-1.2-7-4-7-8v-4z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M10 7.2v5.6M7.2 10h5.6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </>
  ),
} as const;

export type PillarIcon = keyof typeof pillarGlyphs;

export function PillarGlyph({ name }: { name: PillarIcon }) {
  return (
    <span className="pillar-glyph">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        {pillarGlyphs[name]}
      </svg>
    </span>
  );
}

/* ---- Social ---- */

export function Facebook(props: IconProps) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M10.3 17V9.8h2.4l.4-2.8h-2.8V5.2c0-.8.2-1.4 1.4-1.4h1.5V1.3C12.9 1.2 12.1 1.1 11.2 1.1 9 1.1 7.5 2.5 7.5 5v2H5.1v2.8h2.4V17h2.8z" />
    </svg>
  );
}

export function Instagram(props: IconProps) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" {...props}>
      <rect x="1.8" y="1.8" width="14.4" height="14.4" rx="4.4" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="9" cy="9" r="3.4" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="13.3" cy="4.7" r="1" fill="currentColor" />
    </svg>
  );
}

export function LinkedIn(props: IconProps) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M3.6 6.4h2.6V16H3.6V6.4zM4.9 2a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM8.2 6.4h2.5v1.3h.1c.35-.66 1.2-1.35 2.5-1.35 2.65 0 3.15 1.75 3.15 4V16h-2.6v-4.3c0-1.03-.02-2.35-1.43-2.35-1.43 0-1.65 1.12-1.65 2.27V16H8.2V6.4z" />
    </svg>
  );
}

export function Menu(props: IconProps) {
  return (
    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden="true" {...props}>
      <path d="M0 1h20M0 7h20M0 13h20" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function Close(props: IconProps) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" {...props}>
      <path d="M1 1l16 16M17 1L1 17" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
