import { useEffect, useRef } from 'react';
import './Scrollytelling.css';

const sections = [
  {
    id: 'big-bang',
    icon: '💥',
    title: 'O BIG BANG',
    subtitle: 'O Início de Tudo',
    text: 'Há 13,8 bilhões de anos, toda a matéria, energia, espaço e tempo emergiram de uma singularidade infinitamente densa. Em uma fração de segundo, o universo expandiu-se de maneira explosiva, criando as condições para tudo o que existiria depois.',
    accent: '#ff6b6b',
  },
  {
    id: 'estrelas',
    icon: '⭐',
    title: 'ESTRELAS',
    subtitle: 'Fornalhas Cósmicas',
    text: 'As estrelas são gigantescas esferas de gás que fusionam hidrogênio em hélio, liberando uma quantidade absurda de energia. Elas nascem, vivem e morrem — e quando morrem, espalham pelo espaço os elementos químicos que formam novos mundos.',
    accent: '#ffde4d',
  },
  {
    id: 'planetas',
    icon: '🪐',
    title: 'PLANETAS',
    subtitle: 'Mundos Diversos',
    text: 'Dos gigantes gasosos como Júpiter aos mundos rochosos como a Terra, os planetas formam-se a partir do disco de poeira e gás que sobra após o nascimento de uma estrela. Cada um carrega sua própria história geológica e atmosférica.',
    accent: '#4dabf7',
  },
  {
    id: 'buracos-negros',
    icon: '🕳️',
    title: 'BURACOS NEGROS',
    subtitle: 'Guardiões do Desconhecido',
    text: 'Quando uma estrela massiva colapsa, sua gravidade se torna tão intensa que nada — nem mesmo a luz — pode escapar. Esses monstros gravitacionais distorcem o próprio tecido do espaço-tempo, desafiando nossa compreensão da física.',
    accent: '#b197fc',
  },
  {
    id: 'galaxias',
    icon: '🌀',
    title: 'GALÁXIAS',
    subtitle: 'Ilhas de Luz',
    text: 'A Via Láctea é apenas uma entre trilhões de galáxias. Cada uma contém bilhões de estrelas, e juntas formam a maior estrutura do universo observável. As galáxias interagem gravitacionalmente, colidem e se fundem ao longo de bilhões de anos.',
    accent: '#69db7c',
  },
  {
    id: 'universo-pessoal',
    icon: '🚀',
    title: 'O UNIVERSO PESSOAL',
    subtitle: 'Construindo o Próprio Cosmo',
    text: 'Assim como o universo evolui de uma singularidade para estruturas complexas, cada desenvolvedor começa com uma ideia e constrói mundos inteiros em código. Cada projeto é uma constelação — e cada linha de código, uma estrela que brilha no seu próprio firmamento.',
    accent: '#ff6b6b',
  },
];

function ScrollSection({ section, index }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('scrolly-visible');
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      id={`astro-${section.id}`}
      className={`scrolly-section ${isEven ? 'from-left' : 'from-right'}`}
      style={{ '--accent': section.accent }}
    >
      <div className="scrolly-divider" style={{ borderColor: section.accent }} />

      <div className="scrolly-card">
        <div className="scrolly-icon">{section.icon}</div>
        <div className="scrolly-content">
          <span className="scrolly-subtitle" style={{ color: section.accent }}>
            {section.subtitle}
          </span>
          <h3 className="scrolly-title">{section.title}</h3>
          <p className="scrolly-text">{section.text}</p>
        </div>
        <div
          className="scrolly-glow"
          style={{ background: `radial-gradient(circle, ${section.accent}22 0%, transparent 70%)` }}
        />
      </div>

      <div className="scrolly-connector" style={{ backgroundColor: section.accent + '33' }}>
        <div className="scrolly-connector-dot" style={{ backgroundColor: section.accent }} />
      </div>
    </div>
  );
}

export default function Scrollytelling() {
  return (
    <section id="scrollytelling" className="scrolly-container">
      <div className="scrolly-header">
        <h2 className="scrolly-main-title">
          <span className="scrolly-bracket">[</span>
          {' '}EXPLORE O UNIVERSO{' '}
          <span className="scrolly-bracket">]</span>
        </h2>
        <p className="scrolly-main-subtitle">
          Uma jornada pelos astros — do Big Bang ao código
        </p>
        <div className="scrolly-scroll-hint">
          <span>↓ SCROLL PARA EXPLORAR ↓</span>
        </div>
      </div>

      <div className="scrolly-timeline">
        <div className="scrolly-timeline-line" />
        {sections.map((section, i) => (
          <ScrollSection key={section.id} section={section} index={i} />
        ))}
      </div>

      <div className="scrolly-footer-text">
        <span style={{ color: '#ff6b6b' }}>★</span>
        {' '}O fim do universo observável — por enquanto.{' '}
        <span style={{ color: '#ff6b6b' }}>★</span>
      </div>
    </section>
  );
}
