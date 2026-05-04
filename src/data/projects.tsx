import type { Project } from './portfolio'

export const PROJECTS: Project[] = [
  {
    title: 'Lumen Analytics',
    tagline: 'Real-time SaaS dashboard with live charting & dark mode.',
    year: '2025',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'Recharts'],
    bg: 'linear-gradient(135deg, #F4F1EC 0%, #E8E0D4 100%)',
    svg: (
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet" className="w-full h-full max-w-[320px]" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="400" height="300" fill="#0A0A0A" rx="8"/>
        <circle cx="20" cy="20" r="4" fill="#D14E2A"/>
        <circle cx="34" cy="20" r="4" fill="#3a3a3a"/>
        <circle cx="48" cy="20" r="4" fill="#3a3a3a"/>
        <text x="20" y="60" fill="#FBFBFA" fontFamily="serif" fontSize="22" fontStyle="italic">Revenue</text>
        <text x="20" y="90" fill="#D14E2A" fontFamily="monospace" fontSize="32" fontWeight="300">$847.2K</text>
        <path d="M 20 220 Q 80 180 120 200 T 220 160 T 320 130 T 380 100" stroke="#D14E2A" strokeWidth="2" fill="none"/>
        <path d="M 20 220 Q 80 180 120 200 T 220 160 T 320 130 T 380 100 L 380 280 L 20 280 Z" fill="#D14E2A" fillOpacity="0.15"/>
        <line x1="20" y1="280" x2="380" y2="280" stroke="#3a3a3a" strokeWidth="1"/>
        {[60, 120, 180, 240, 300].map((x, i) => (
          <text key={i} x={x} y="295" fill="#6B6B6B" fontFamily="monospace" fontSize="9">M{i + 1}</text>
        ))}
      </svg>
    ),
  },
  {
    title: 'Atelier Commerce',
    tagline: 'Editorial e-commerce front-end with Stripe checkout.',
    year: '2024',
    stack: ['React', 'Tailwind', 'Stripe', 'Framer'],
    bg: 'linear-gradient(135deg, #FBFBFA 0%, #F0EBE2 100%)',
    svg: (
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet" className="w-full h-full max-w-[320px]" xmlns="http://www.w3.org/2000/svg">
        <rect x="40" y="30" width="320" height="240" fill="#FBFBFA" stroke="#0A0A0A" strokeWidth="1"/>
        <text x="60" y="65" fill="#0A0A0A" fontFamily="serif" fontStyle="italic" fontSize="13">Atelier</text>
        <text x="320" y="65" fill="#0A0A0A" fontFamily="monospace" fontSize="9" textAnchor="end">CART (2)</text>
        <line x1="60" y1="80" x2="340" y2="80" stroke="#E8E6E1"/>
        <rect x="60" y="100" width="120" height="120" fill="#E8E0D4"/>
        <circle cx="120" cy="160" r="32" fill="#D14E2A" fillOpacity="0.7"/>
        <text x="200" y="130" fill="#0A0A0A" fontFamily="serif" fontSize="22">Linen</text>
        <text x="200" y="150" fill="#0A0A0A" fontFamily="serif" fontSize="22" fontStyle="italic">Overshirt</text>
        <text x="200" y="180" fill="#6B6B6B" fontFamily="monospace" fontSize="10">USD 248.00</text>
        <rect x="200" y="200" width="100" height="28" fill="#0A0A0A"/>
        <text x="250" y="218" fill="#FBFBFA" fontFamily="monospace" fontSize="9" textAnchor="middle">ADD TO BAG</text>
      </svg>
    ),
  },
  {
    title: 'Forecast Weather',
    tagline: 'Minimal weather PWA with geolocation & offline mode.',
    year: '2024',
    stack: ['React', 'PWA', 'Tailwind', 'OpenWeather'],
    bg: 'linear-gradient(135deg, #E8E6E1 0%, #C9C5BD 100%)',
    svg: (
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet" className="w-full h-full max-w-[320px]" xmlns="http://www.w3.org/2000/svg">
        <rect x="100" y="20" width="200" height="260" rx="24" fill="#FBFBFA" stroke="#0A0A0A"/>
        <text x="200" y="60" fill="#6B6B6B" fontFamily="monospace" fontSize="9" textAnchor="middle">ISLAMABAD</text>
        <circle cx="200" cy="115" r="28" fill="#D14E2A" fillOpacity="0.85"/>
        <text x="200" y="180" fill="#0A0A0A" fontFamily="serif" fontSize="58" fontWeight="300" textAnchor="middle">24°</text>
        <text x="200" y="205" fill="#0A0A0A" fontFamily="serif" fontStyle="italic" fontSize="14" textAnchor="middle">Mostly clear</text>
        <line x1="130" y1="225" x2="270" y2="225" stroke="#E8E6E1"/>
        {['Mon', 'Tue', 'Wed', 'Thu'].map((d, i) => (
          <g key={i}>
            <text x={140 + i * 40} y="245" fill="#6B6B6B" fontFamily="monospace" fontSize="8" textAnchor="middle">{d}</text>
            <circle cx={140 + i * 40} cy="258" r="4" fill="#D14E2A" fillOpacity={0.3 + i * 0.2}/>
            <text x={140 + i * 40} y="272" fill="#0A0A0A" fontFamily="monospace" fontSize="9" textAnchor="middle">{22 + i}°</text>
          </g>
        ))}
      </svg>
    ),
  },
  {
    title: 'Kanban OS',
    tagline: 'Drag-and-drop task system with realtime sync.',
    year: '2023',
    stack: ['React', 'TypeScript', 'dnd-kit', 'Tailwind'],
    bg: 'linear-gradient(135deg, #F4F1EC 0%, #DCD5C7 100%)',
    svg: (
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet" className="w-full h-full max-w-[320px]" xmlns="http://www.w3.org/2000/svg">
        {[0, 1, 2].map(c => (
          <g key={c} transform={`translate(${30 + c * 120}, 30)`}>
            <rect width="110" height="240" rx="6" fill="#FBFBFA" stroke="#0A0A0A" strokeOpacity="0.1"/>
            <text x="14" y="22" fill="#6B6B6B" fontFamily="monospace" fontSize="8">
              {['TODO', 'DOING', 'DONE'][c]}
            </text>
            {[0, 1, 2].slice(0, 3 - c).map(i => {
              const isActive = c === 1 && i === 0
              return (
                <g key={i} transform={`translate(10, ${40 + i * 56})`}>
                  <rect width="90" height="46" rx="4" fill={isActive ? '#D14E2A' : '#F4F1EC'}/>
                  <line x1="8" y1="14" x2="60" y2="14" stroke={isActive ? '#FBFBFA' : '#0A0A0A'} strokeOpacity={isActive ? 1 : 0.7} strokeWidth="2"/>
                  <line x1="8" y1="22" x2="40" y2="22" stroke={isActive ? '#FBFBFA' : '#0A0A0A'} strokeOpacity={isActive ? 0.6 : 0.3} strokeWidth="1"/>
                  <circle cx="78" cy="36" r="4" fill={isActive ? '#FBFBFA' : '#D14E2A'} fillOpacity="0.6"/>
                </g>
              )
            })}
          </g>
        ))}
      </svg>
    ),
  },
]
