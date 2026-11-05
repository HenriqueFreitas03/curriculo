import { useState } from 'react';
import { dados } from './data/curriculo';
import ProjectModal from './components/ProjectModal';

export default function App() {
  const [projetoSelecionado, setProjetoSelecionado] = useState(null);

  return (
    <div className="container">

      {/* NAVEGAÇÃO RÁPIDA */}
      <nav>
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
          margin: '15px 0 10px 0', color: '#fff'
        }}>
          {dados.subtitulo}
        </p>

        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: '15px',
          marginBottom: '20px', fontWeight: 'bold', color: '#ccc'
        }}>
          {dados.contatos.map((c, i) => (
            c.url
              ? <a key={i} href={c.url} style={{ color: '#fff', textDecoration: 'underline' }}>{c.label}</a>
              : <span key={i}>{c.label}</span>
          ))}
        </div>

        <div
          id="resumo"
          className="card-brutal"
          style={{ color: '#ccc', backgroundColor: '#0a0a0a', fontSize: '1.05rem', lineHeight: '1.6' }}
        >
          <strong style={{ color: '#fff' }}>// RESUMO: </strong>{dados.resumo}
        </div>
      </header>

      {/* PROJETOS EM DESTAQUE */}
      <section id="projetos" style={{ marginBottom: '40px' }}>
        <h2>
          PROJETOS EM DESTAQUE
        </h2>
        {dados.projetos.map((p, i) => (
          <div
            key={i}
            className="card-brutal project-card"
            style={{ color: '#ccc', backgroundColor: '#0a0a0a' }}
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
            <p style={{ fontSize: '0.95rem', margin: 0, color: '#ccc' }}>{p.desc}</p>
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
        <h2>
          TECH STACK
        </h2>
        <div className="tech-list">
          {dados.skills.map((s, i) => (
            <a
              key={i}
              href="#tech-stack"
              className="tech-item"
            >
              {s}
            </a>
          ))}
        </div>
      </section>

      {/* FORMAÇÃO */}
      <section style={{ marginBottom: '40px' }}>
        <h2>
          EDUCACAO
        </h2>
        <div className="card-brutal" style={{ color: '#ccc', backgroundColor: '#0a0a0a', fontSize: '0.9rem' }}>
          {dados.formacao}
        </div>
      </section>

      {/* CERTIFICADOS */}
      <section style={{ marginBottom: '40px' }}>
        <h2>
          CERTIFICACOES
        </h2>
        <ul style={{ paddingLeft: '15px', fontWeight: 'bold', fontSize: '0.85rem', lineHeight: '1.6', color: '#ccc' }}>
          {dados.certificados.map((c, i) => (
            <li key={i} style={{ marginBottom: '8px' }}>{c}</li>
          ))}
        </ul>
      </section>

      {/* FOOTER */}
      <footer>
        <div>
          <span style={{ fontWeight: '900', textTransform: 'uppercase', display: 'block', fontSize: '1.1rem', color: '#fff' }}>
            CONECTE-SE COMIGO
          </span>
          <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#ccc' }}>
            INGLÊS INTERMEDIÁRIO (LEITURA TÉCNICA)
          </span>
        </div>
        <div style={{ display: 'flex', gap: '15px' }}>
          {dados.redes.map((r, i) => (
            <a key={i} href={r.url} className="botao-brutal" target="_blank" rel="noreferrer">
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
