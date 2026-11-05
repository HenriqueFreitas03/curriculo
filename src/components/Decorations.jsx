const Dec = ({ viewBox, w, h, top, left, opacity = 0.35, children }) => (
  <div className="dec" style={{ top, left, width: w, height: h, opacity }}>
    <svg viewBox={viewBox} stroke="white" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  </div>
);

export default function Decorations() {
  return (
    <div className="decorations">
      {/* CLUSTER SUPERIOR DIREITO — cubos, cristais e pontos conectados */}
      <Dec viewBox="0 0 220 160" w={220} h={160} top="40px" left="620px" opacity={0.45}>
        {/* cubos wireframe */}
        <path d="M20 40 L40 20 L60 40 L40 60 Z M20 40 L40 60 L20 60 L0 40 Z" />
        <path d="M80 30 L100 10 L120 30 L100 50 Z M80 30 L100 50 L80 50 L60 30 Z" />
        <path d="M140 50 L160 30 L180 50 L160 70 Z M140 50 L160 70 L140 70 L120 50 Z" />
        <path d="M20 100 L40 80 L60 100 L40 120 Z M20 100 L40 120 L20 120 L0 100 Z" />
        <path d="M80 110 L100 90 L120 110 L100 130 Z" />
        {/* cristal grande */}
        <path d="M180 20 L200 0 L220 30 L200 60 L180 30 Z" />
        <path d="M180 20 L200 60 L180 60 L160 30 Z" />
        <path d="M200 0 L220 30 L200 90 L180 60 Z" />
        {/* pontos flutuantes conectados por linhas finas */}
        <circle cx="30" cy="20" r="1.5" />
        <circle cx="50" cy="10" r="1.5" />
        <circle cx="70" cy="25" r="1.5" />
        <circle cx="90" cy="15" r="1.5" />
        <line x1="30" y1="20" x2="50" y2="10" />
        <line x1="50" y1="10" x2="70" y2="25" />
        <line x1="70" y1="25" x2="90" y2="15" />
        <circle cx="130" cy="60" r="1.5" />
        <circle cx="150" cy="50" r="1.5" />
        <circle cx="170" cy="65" r="1.5" />
        <line x1="130" y1="60" x2="150" y2="50" />
        <line x1="150" y1="50" x2="170" y2="65" />
        <circle cx="190" cy="35" r="1.5" />
        <line x1="170" y1="65" x2="190" y2="35" />
      </Dec>

      {/* CLUSTER INFERIOR ESQUERDO — ondas, barra de áudio e pontos */}
      <Dec viewBox="0 0 200 100" w={200} h={100} top="620px" left="0px" opacity={0.4}>
        <path d="M0 60 Q40 20 80 60 T160 60 T200 60" />
        <rect x="10" y="40" width="4" height="12" />
        <rect x="20" y="30" width="4" height="22" />
        <rect x="30" y="45" width="4" height="7" />
        <rect x="40" y="20" width="4" height="32" />
        <rect x="50" y="50" width="4" height="2" />
        <rect x="60" y="25" width="4" height="27" />
        <circle cx="150" cy="80" r="2" />
        <circle cx="170" cy="70" r="2" />
        <circle cx="190" cy="85" r="2" />
      </Dec>

      {/* CLUSTER INFERIOR DIREITO — barras horizontais, EST. e bordas */}
      <Dec viewBox="0 0 220 60" w={220} h={60} top="900px" left="780px" opacity={0.45}>
        <rect x="0" y="5" width="140" height="2" />
        <rect x="0" y="15" width="90" height="2" />
        <rect x="0" y="25" width="50" height="2" />
        <rect x="0" y="35" width="30" height="2" />
        <text x="160" y="52" fontSize="10" fontFamily="monospace" fill="white" letterSpacing="2">EST. 2100</text>
        <line x1="160" y1="48" x2="210" y2="48" />
      </Dec>

      {/* Canto superior esquerdo — globo e linhas */}
      <Dec viewBox="0 0 80 50" w={80} h={50} top="20px" left="20px" opacity={0.35}>
        <ellipse cx="40" cy="25" rx="36" ry="22" />
        <path d="M4 25 Q40 4 76 25 T40 46 T4 25" />
        <line x1="14" y1="12" x2="66" y2="12" />
        <line x1="14" y1="38" x2="66" y2="38" />
        <line x1="40" y1="3" x2="40" y2="47" />
      </Dec>

      {/* Canto superior direito — X e raio */}
      <Dec viewBox="0 0 60 60" w={60} h={60} top="20px" left="920px" opacity={0.4}>
        <path d="M10 5 L45 30 L20 30 L50 55 Z" />
        <line x1="5" y1="5" x2="35" y2="35" />
        <line x1="35" y1="5" x2="5" y2="35" />
      </Dec>

      {/* Triângulos grade — direita média */}
      <Dec viewBox="0 0 60 160" w={60} h={160} top="300px" left="940px" opacity={0.35}>
        <path d="M10 10 L30 10 L20 30 Z" />
        <path d="M10 50 L30 50 L20 70 Z" />
        <path d="M10 90 L30 90 L20 110 Z" />
        <path d="M10 130 L30 130 L20 110 Z" />
        <path d="M30 10 L50 10 L40 30 Z" />
        <path d="M30 50 L50 50 L40 70 Z" />
        <path d="M30 90 L50 90 L40 110 Z" />
        <path d="M30 130 L50 130 L40 110 Z" />
      </Dec>

      {/* Linhas pontilhadas diagonais — borda inferior esquerda */}
      <Dec viewBox="0 0 100 40" w={100} h={40} top="860px" left="0px" opacity={0.35}>
        <path d="M0 30 Q25 5 50 30 T100 30" />
        <path d="M10 30 Q35 5 60 30 T90 30" />
      </Dec>

      {/* Estrelas/pontos dispersos */}
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
        <div
          key={i}
          className="dec star"
          style={{
            position: 'absolute',
            width: '2px',
            height: '2px',
            background: 'white',
            borderRadius: '50%',
            opacity: 0.2 + (i % 4) * 0.15,
            top: `${10 + (i * 9)}%`,
            left: `${5 + (i * 11)}%`,
          }}
        />
      ))}
    </div>
  );
}
