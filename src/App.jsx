import { useState } from 'react';
import { dados } from './data/curriculo';
import MatrixRain from './components/MatrixRain';
import ProjectModal from './components/ProjectModal';

export default function App() {
  const [projetoSelecionado, setProjetoSelecionado] = useState(null);

  return (
    <div className="container">

      {/* NAVEGAÇÃO RÁPIDA */}
      <nav style={{
        marginBottom: '40px',
        borderBottom: '2px solid #00ff41',
        paddingBottom: '15px',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        boxShadow: '0 0 12px rgba(0, 255, 65, 0.3)'
      }}>
        <a href="#resumo" className="botao-brutal" style={{ fontSize: '0.85rem' }}>
          [ RESUMO ]
        </a>
        <a href="#projetos" className="botao-brutal" style={{ fontSize: '0.85rem' }}>
          [ PROJETOS EM DESTAQUE ]
        </a>
        <a href="#tech-stack" className="botao-brutal" style={{ fontSize: '0.85rem' }}>
          [ TECH STACKS ]
        </a>
      </nav>

      {/* HEADER */}
      <header style={{ marginBottom: '40px' }}>
        <h1 className="titulo-brutal">Portfolio.</h1>
        <p style={{
          fontSize: '1.6rem', fontWeight: '900', textTransform: 'uppercase',
          margin: '15px 0 10px 0', color: '#00e5ff', textShadow: '0 0 8px #00e5ff'
        }}>
          {dados.subtitulo}
        </p>

        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: '15px',
          marginBottom: '20px', fontWeight: 'bold', color: '#00ff41'
        }}>
          {dados.contatos.map((c, i) => (
            c.url
              ? <a key={i} href={c.url} style={{ color: '#00ff41', textDecoration: 'underline', textShadow: '0 0 6px #00ff41' }}>{c.label}</a>
              : <span key={i}>{c.label}</span>
          ))}
        </div>

        <div
          id="resumo"
          className="card-brutal"
          style={{ color: '#b6ffb6', backgroundColor: 'rgba(8, 16, 10, 0.78)', fontSize: '1.05rem', lineHeight: '1.6' }}
        >
          <strong style={{ color: '#00e5ff' }}>// RESUMO: </strong>{dados.resumo}
        </div>
      </header>

      {/* PROJETOS EM DESTAQUE */}
      <section id="projetos" style={{ marginBottom: '40px' }}>
        <h2 style={{
          textTransform: 'uppercase', fontSize: '1.4rem', fontWeight: '900',
          marginBottom: '20px', borderBottom: '2px solid #00ff41', paddingBottom: '8px',
          textShadow: '0 0 8px #00e5ff'
        }}>
          &gt; PROJETOS_EM_DESTAQUE
        </h2>
        {dados.projetos.map((p, i) => (
          <div
            key={i}
            className="card-brutal project-card"
            style={{ color: '#b6ffb6', backgroundColor: 'rgba(8, 16, 10, 0.78)' }}
            onClick={() => setProjetoSelecionado(p)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter') setProjetoSelecionado(p); }}
          >
            <div className="project-image">
              {p.imagem ? (
                <img src={p.imagem} alt={p.titulo} />
              ) : (
                <span className="placeholder">[ SLOT_DE_FOTO — INSIRA UMA IMAGEM ]</span>
              )}
            </div>
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              marginBottom: '10px', flexWrap: 'wrap', gap: '5px'
            }}>
              <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: '900' }}>{p.titulo}</h3>
              <span className="project-tag">
                {p.tags}
              </span>
            </div>
            <p style={{ fontSize: '0.95rem', margin: 0 }}>{p.desc}</p>
            <div style={{ marginTop: '12px', display: 'flex', justifyContent: 'flex-end' }}>
              <span className="botao-brutal" style={{ fontSize: '0.8rem', padding: '6px 12px' }}>
                [ VER MAIS ]
              </span>
            </div>
          </div>
        ))}
      </section>

      {/* TECH STACK */}
      <section id="tech-stack" style={{ marginBottom: '40px' }}>
        <h2 style={{
          textTransform: 'uppercase', fontSize: '1.4rem', fontWeight: '900',
          marginBottom: '20px', borderBottom: '2px solid #00ff41', paddingBottom: '8px'
        }}>
          &gt; TECH_STACK
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {dados.skills.map((s, i) => (
            <a
              key={i}
              href="#tech-stack"
              style={{
                textDecoration: 'none', color: '#00ff41', backgroundColor: 'rgba(0, 255, 65, 0.06)',
                border: '1px solid #00ff41', padding: '5px 10px', fontWeight: 'bold',
                fontSize: '0.85rem', boxShadow: '0 0 6px rgba(0, 255, 65, 0.3)', display: 'inline-block',
                transition: 'transform 0.05s ease', textShadow: '0 0 4px #00ff41'
              }}
              onMouseEnter={(e) => { e.target.style.transform = 'translate(2px, 2px)'; e.target.style.boxShadow = '0 0 12px #00ff41'; e.target.style.background = '#00ff41'; e.target.style.color = '#050508'; }}
              onMouseLeave={(e) => { e.target.style.transform = 'translate(0, 0)'; e.target.style.boxShadow = '0 0 6px rgba(0, 255, 65, 0.3)'; e.target.style.background = 'rgba(0, 255, 65, 0.06)'; e.target.style.color = '#00ff41'; }}
            >
              {s}
            </a>
          ))}
        </div>
      </section>

      {/* MATRIX RAIN BACKGROUND */}
      <MatrixRain />

      {/* FORMAÇÃO */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{
          textTransform: 'uppercase', fontSize: '1.4rem', fontWeight: '900',
          marginBottom: '20px', borderBottom: '2px solid #00ff41', paddingBottom: '8px'
        }}>
          &gt; EDUCACAO
        </h2>
        <div className="card-brutal" style={{ color: '#b6ffb6', backgroundColor: 'rgba(8, 16, 10, 0.78)', fontSize: '0.9rem' }}>
          {dados.formacao}
        </div>
      </section>

      {/* CERTIFICADOS */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{
          textTransform: 'uppercase', fontSize: '1.4rem', fontWeight: '900',
          marginBottom: '20px', borderBottom: '2px solid #00ff41', paddingBottom: '8px'
        }}>
          &gt; CERTIFICACOES
        </h2>
        <ul style={{ paddingLeft: '15px', fontWeight: 'bold', fontSize: '0.85rem', lineHeight: '1.6', color: '#b6ffb6' }}>
          {dados.certificados.map((c, i) => (
            <li key={i} style={{ marginBottom: '8px' }}>{c}</li>
          ))}
        </ul>
      </section>

      {/* FOOTER */}
      <footer style={{
        border: '2px solid #ff00ff', backgroundColor: 'rgba(255, 0, 255, 0.06)', padding: '25px',
        boxShadow: '0 0 18px rgba(255, 0, 255, 0.3)', display: 'flex',
        justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap',
        gap: '15px', marginTop: '5px'
      }}>
        <div>
          <span style={{ fontWeight: '900', textTransform: 'uppercase', display: 'block', fontSize: '1.1rem', color: '#ff00ff', textShadow: '0 0 8px #ff00ff' }}>
            CONECTE-SE COMIGO
          </span>
          <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#b6ffb6' }}>
            INGLÊS INTERMEDIÁRIO (LEITURA TÉCNICA)
          </span>
        </div>
        <div style={{ display: 'flex', gap: '15px' }}>
          {dados.redes.map((r, i) => (
            <a key={i} href={r.url} className="botao-brutal" target="_blank" rel="noreferrer" style={{ borderColor: '#ff00ff', color: '#ff00ff', boxShadow: '0 0 10px rgba(255,0,255,0.4)' }}>
              {r.nome}
            </a>
          ))}
        </div>
      </footer>

      {/* MODAL DE PROJETO */}
      <ProjectModal projeto={projetoSelecionado} onClose={() => setProjetoSelecionado(null)} />

    </div>
  );
}
