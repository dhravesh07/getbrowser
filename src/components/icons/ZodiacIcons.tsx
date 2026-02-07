// Zodiac sign SVG icons as React components
// All icons are custom SVGs with an astrology aesthetic

interface IconProps {
  className?: string;
  size?: number;
}

export function SunIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="24" r="3" fill="currentColor" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <line
          key={angle}
          x1="24"
          y1="4"
          x2="24"
          y2="10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          transform={`rotate(${angle} 24 24)`}
        />
      ))}
    </svg>
  );
}

export function MoonIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <path
        d="M36 24c0-8-5.5-14.5-13-16 1.5 2 2.5 5 2.5 8.5 0 7.5-6 13.5-13.5 13.5-1.5 0-3-.2-4.5-.7C10 37 16.5 42 24 42c9.9 0 18-8.1 18-18h-6z"
        stroke="currentColor"
        strokeWidth="2"
        fill="currentColor"
        fillOpacity="0.1"
      />
    </svg>
  );
}

export function JupiterIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <path d="M14 8c8 0 14 6 14 14s-6 14-14 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="28" y1="22" x2="28" y2="40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="22" y1="34" x2="34" y2="34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function SaturnIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <circle cx="24" cy="26" r="10" stroke="currentColor" strokeWidth="2" />
      <ellipse cx="24" cy="26" rx="18" ry="5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" transform="rotate(-20 24 26)" />
      <line x1="24" y1="6" x2="24" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="18" y1="10" x2="30" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function RahuIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <circle cx="24" cy="20" r="12" stroke="currentColor" strokeWidth="2" />
      <path d="M16 32c0 0 4 8 8 8s8-8 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="24" cy="20" r="4" fill="currentColor" fillOpacity="0.3" />
    </svg>
  );
}

export function VenusIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <circle cx="24" cy="18" r="10" stroke="currentColor" strokeWidth="2" />
      <line x1="24" y1="28" x2="24" y2="42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="17" y1="36" x2="31" y2="36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function MarsIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <circle cx="20" cy="28" r="12" stroke="currentColor" strokeWidth="2" />
      <line x1="29" y1="19" x2="40" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <polyline points="32,8 40,8 40,16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MercuryIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <circle cx="24" cy="20" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M16 14c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="24" y1="29" x2="24" y2="42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="18" y1="36" x2="30" y2="36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// Zodiac wheel for decorative use
export function ZodiacWheel({ className = "", size = 300 }: IconProps) {
  const signs = ["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"];
  return (
    <svg width={size} height={size} viewBox="0 0 300 300" fill="none" className={className}>
      {/* Outer ring */}
      <circle cx="150" cy="150" r="140" stroke="rgba(245,166,35,0.2)" strokeWidth="1" />
      <circle cx="150" cy="150" r="120" stroke="rgba(245,166,35,0.15)" strokeWidth="1" />
      <circle cx="150" cy="150" r="100" stroke="rgba(245,166,35,0.1)" strokeWidth="1" />
      <circle cx="150" cy="150" r="60" stroke="rgba(245,166,35,0.15)" strokeWidth="1" />

      {/* Division lines */}
      {signs.map((_, i) => {
        const angle = (i * 30 - 90) * (Math.PI / 180);
        const x1 = 150 + 60 * Math.cos(angle);
        const y1 = 150 + 60 * Math.sin(angle);
        const x2 = 150 + 140 * Math.cos(angle);
        const y2 = 150 + 140 * Math.sin(angle);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="rgba(245,166,35,0.08)"
            strokeWidth="1"
          />
        );
      })}

      {/* Zodiac symbols */}
      {signs.map((sign, i) => {
        const angle = (i * 30 + 15 - 90) * (Math.PI / 180);
        const x = 150 + 110 * Math.cos(angle);
        const y = 150 + 110 * Math.sin(angle);
        return (
          <text
            key={i}
            x={x}
            y={y}
            textAnchor="middle"
            dominantBaseline="central"
            fill="rgba(245,166,35,0.4)"
            fontSize="16"
          >
            {sign}
          </text>
        );
      })}

      {/* Center sun */}
      <circle cx="150" cy="150" r="8" fill="rgba(255,215,0,0.3)" />
      <circle cx="150" cy="150" r="4" fill="rgba(255,215,0,0.6)" />
    </svg>
  );
}

// Constellation pattern decoration
export function ConstellationDecor({ className = "", size = 200 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" className={className}>
      {/* Stars */}
      <circle cx="30" cy="40" r="2" fill="rgba(255,215,0,0.6)" />
      <circle cx="80" cy="20" r="1.5" fill="rgba(255,215,0,0.4)" />
      <circle cx="120" cy="60" r="2" fill="rgba(255,215,0,0.5)" />
      <circle cx="160" cy="30" r="1.5" fill="rgba(255,215,0,0.4)" />
      <circle cx="50" cy="100" r="2" fill="rgba(255,215,0,0.6)" />
      <circle cx="140" cy="110" r="1.5" fill="rgba(255,215,0,0.4)" />
      <circle cx="100" cy="150" r="2" fill="rgba(255,215,0,0.5)" />
      <circle cx="170" cy="160" r="1.5" fill="rgba(255,215,0,0.3)" />
      <circle cx="40" cy="170" r="2" fill="rgba(255,215,0,0.4)" />

      {/* Connection lines */}
      <line x1="30" y1="40" x2="80" y2="20" stroke="rgba(245,166,35,0.12)" strokeWidth="1" />
      <line x1="80" y1="20" x2="120" y2="60" stroke="rgba(245,166,35,0.12)" strokeWidth="1" />
      <line x1="120" y1="60" x2="160" y2="30" stroke="rgba(245,166,35,0.12)" strokeWidth="1" />
      <line x1="50" y1="100" x2="120" y2="60" stroke="rgba(245,166,35,0.08)" strokeWidth="1" />
      <line x1="50" y1="100" x2="140" y2="110" stroke="rgba(245,166,35,0.1)" strokeWidth="1" />
      <line x1="140" y1="110" x2="100" y2="150" stroke="rgba(245,166,35,0.1)" strokeWidth="1" />
      <line x1="100" y1="150" x2="40" y2="170" stroke="rgba(245,166,35,0.08)" strokeWidth="1" />
      <line x1="170" y1="160" x2="140" y2="110" stroke="rgba(245,166,35,0.08)" strokeWidth="1" />
    </svg>
  );
}

// Navagraha (9 planets) symbol
export function NavagrahaSymbol({ className = "", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" />
      <circle cx="24" cy="24" r="6" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
      {/* 9 planet dots around the circle */}
      {[0, 40, 80, 120, 160, 200, 240, 280, 320].map((angle, i) => {
        const rad = (angle - 90) * (Math.PI / 180);
        const cx = 24 + 15 * Math.cos(rad);
        const cy = 24 + 15 * Math.sin(rad);
        return <circle key={i} cx={cx} cy={cy} r="2" fill="currentColor" fillOpacity={0.4 + i * 0.06} />;
      })}
    </svg>
  );
}

// Kundli / Birth chart grid
export function KundliIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <rect x="4" y="4" width="40" height="40" stroke="currentColor" strokeWidth="2" />
      <line x1="4" y1="4" x2="44" y2="44" stroke="currentColor" strokeWidth="1.5" />
      <line x1="44" y1="4" x2="4" y2="44" stroke="currentColor" strokeWidth="1.5" />
      <line x1="24" y1="4" x2="24" y2="44" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
      <line x1="4" y1="24" x2="44" y2="24" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
    </svg>
  );
}

// Star / sparkle decoration
export function SparkleIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 2L13.5 9.5L20 8L14.5 12L20 16L13.5 14.5L12 22L10.5 14.5L4 16L9.5 12L4 8L10.5 9.5L12 2Z"
        fill="currentColor"
        fillOpacity="0.8"
      />
    </svg>
  );
}

// Om symbol for spiritual branding
export function OmIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <path
        d="M16 32c-4 0-8-3-8-8 0-6 6-10 12-10s10 3 12 8c1 3 0 6-2 8-2 1.5-5 1-6-1-1.5-2.5 0-5 3-6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="34" cy="12" r="3" fill="currentColor" fillOpacity="0.6" />
      <path d="M30 8c2-3 6-3 8-1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
