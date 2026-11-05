const Dec = ({ viewBox, w, h, top, left, opacity = 0.35, children }) => (
  <div className="dec" style={{ top, left, width: w, height: h, opacity }}>
    <svg viewBox={viewBox} stroke="white" strokeWidth="1" fill="none">
      {children}
    </svg>
  </div>
);

export default function Decorations() {
  return (
    <div className="decorations">
      <Dec viewBox="0 0 80 50" w={80} h={50} top="24px" left="24px">
        <ellipse cx="40" cy="25" rx="36" ry="22" />
        <path d="M4 25 Q40 4 76 25 T40 46 T4 25" />
        <line x1="14" y1="12" x2="66" y2="12" />
        <line x1="14" y1="38" x2="66" y2="38" />
      </Dec>

      <Dec viewBox="0 0 140 120" w={140} h={120} top="120px" left="20px" opacity={0.3}>
        <rect x="4" y="4" width="132" height="112" rx="4" />
        <path d="M4 4 L136 4 L140 8 L140 132 L8 136 Z" />
        <line x1="10" y1="10" x2="130" y2="10" />
        <line x1="10" y1="65" x2="130" y2="65" />
        <line x1="10" y1="120" x2="130" y2="120" />
        <line x1="10" y1="10" x2="10" y2="120" />
        <line x1="70" y1="10" x2="70" y2="120" />
        <line x1="130" y1="10" x2="130" y2="120" />
      </Dec>

      <Dec viewBox="0 0 120 100" w={120} h={100} top="60px" left="520px" opacity={0.35}>
        <path d="M30 30 L50 10 L70 30 L50 50 Z" />
        <path d="M70 30 L90 10 L110 30 L90 50 Z" />
        <path d="M30 60 L50 40 L70 60 L50 80 Z" />
        <path d="M70 60 L90 40 L110 60 L90 80 Z" />
      </Dec>

      <Dec viewBox="0 0 60 60" w={60} h={60} top="20px" left="860px" opacity={0.4}>
        <path d="M10 5 L45 30 L20 30 L50 55 Z" />
      </Dec>

      <Dec viewBox="0 0 40 40" w={40} h={40} top="20px" left="930px" opacity={0.35}>
        <line x1="5" y1="5" x2="35" y2="35" />
        <line x1="35" y1="5" x2="5" y2="35" />
      </Dec>

      <Dec viewBox="0 0 60 140" w={60} h={140} top="250px" left="900px" opacity={0.35}>
        <path d="M10 10 L30 10 L20 30 Z" />
        <path d="M10 50 L30 50 L20 70 Z" />
        <path d="M10 90 L30 90 L20 110 Z" />
        <path d="M10 130 L30 130 L20 110 Z" />
        <path d="M30 10 L50 10 L40 30 Z" />
        <path d="M30 50 L50 50 L40 70 Z" />
        <path d="M30 90 L50 90 L40 110 Z" />
        <path d="M30 130 L50 130 L40 110 Z" />
      </Dec>

      <Dec viewBox="0 0 60 80" w={60} h={80} top="650px" left="900px" opacity={0.35}>
        <path d="M5 75 L65 15" />
        <path d="M5 65 L65 5" />
        <path d="M5 55 L65 -5" />
      </Dec>

      <Dec viewBox="0 0 140 40" w={140} h={40} top="880px" left="820px" opacity={0.4}>
        <rect x="10" y="5" width="120" height="4" />
        <rect x="10" y="15" width="80" height="4" />
        <rect x="10" y="25" width="40" height="4" />
        <text x="100" y="36" fontSize="10" fontFamily="monospace" fill="white">EST. 2100</text>
      </Dec>

      <Dec viewBox="0 0 100 40" w={100} h={40} top="860px" left="20px" opacity={0.35}>
        <path d="M0 30 Q25 5 50 30 T100 30" />
      </Dec>

      {[
        { t: '12%', l: '8%' },
        { t: '34%', l: '45%' },
        { t: '67%', l: '22%' },
        { t: '89%', l: '78%' },
        { t: '15%', l: '92%' },
        { t: '56%', l: '60%' },
        { t: '78%', l: '33%' },
        { t: '42%', l: '88%' },
      ].map((p, i) => (
        <div
          key={i}
          className="dec star"
          style={{
            position: 'absolute',
            width: '3px',
            height: '3px',
            background: 'white',
            borderRadius: '50%',
            opacity: 0.25 + (i % 3) * 0.1,
            top: p.t,
            left: p.l,
          }}
        />
      ))}
    </div>
  );
}
