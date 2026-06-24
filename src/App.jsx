import React from 'react';
import { dados } from './data/curriculo';

export default function App() {
  return (
    <div className="container">
      
      {/* HEADER BRUTALISTA */}
      <header style={{ marginBottom: '40px' }}>
        <h1 className="titulo-brutal">Portfolio.</h1>
        <p style={{ fontSize: '1.6rem', fontWeight: '900', textTransform: 'uppercase', margin: '15px 0 10px 0' }}>
          {dados.subtitulo}
        </p>
        
        {/* Contatos Rápidos */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', marginBottom: '20px', fontWeight: 'bold' }}>
          {dados.contatos.map((c, i) => (
            c.url ? <a key={i} href={c.url} style={{ color: '#f8f8f8', textDecoration: 'underline' }}>{c.label}</a> : <span key={i}>{c.label}</span>
          ))}
        </div>

        {/* Resumo */}
        <div className="card-brutal" style={{ color: '#272727', backgroundColor: '#fff', fontSize: '1.05rem', lineHeight: '1.6' }}>
          <strong>// RESUMO: </strong>{dados.resumo}
        </div>
      </header>

      {/* GRADE PRINCIPAL: DUAS COLUNAS */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px', alignItems: 'start' }}>
        
        {/* COLUNA DA ESQUERDA: PROJETOS */}
        <main>
          <h2 style={{ textTransform: 'uppercase', fontSize: '1.4rem', fontWeight: '900', marginBottom: '20px', borderBottom: '4px solid #000' }}>
            [ PROJETOS_DE_DESTAQUE ]
          </h2>
          {dados.projetos.map((p, i) => (
            <div key={i} className="card-brutal" style={{ color: '#272727', backgroundColor: '#fff' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', flexWrap: 'wrap', gap: '5px' }}>
                <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: '900' }}>{p.titulo}</h3>
                <span style={{ color: '#272727', backgroundColor: '#ffde4d', border: '2px solid #000', padding: '1px 6px', fontSize: '0.75rem', fontWeight: 'bold' }}>{p.tags}</span>
              </div>
              <p style={{ fontSize: '0.95rem', margin: 0 }}>{p.desc}</p>
            </div>
          ))}
        </main>

        {/* COLUNA DA DIREITA: SKILLS & FORMAÇÃO */}
        <aside>
          {/* Formação */}
          <h2 style={{ textTransform: 'uppercase', fontSize: '1.4rem', fontWeight: '900', marginBottom: '20px', borderBottom: '4px solid #000' }}>
            [ EDUCACAO ]
          </h2>
          <div className="card-brutal" style={{color: '#272727', backgroundColor: '#fff', fontSize: '0.9rem' }}>
            {dados.formacao}
          </div>

          {/* Stacks */}
          <h2 style={{ textTransform: 'uppercase', fontSize: '1.4rem', fontWeight: '900', margin: '30px 0 20px 0', borderBottom: '4px solid #000' }}>
            [ TECH_STACK ]
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {dados.skills.map((s, i) => (
              <span key={i} style={{ color: '#272727', backgroundColor: '#ffffff', border: '2px solid #000', padding: '5px 10px', fontWeight: 'bold', fontSize: '0.85rem', boxShadow: '2px 2px 0px #000' }}>
                {s}
              </span>
            ))}
          </div>

          {/* Certificados */}
          <h2 style={{ textTransform: 'uppercase', fontSize: '1.4rem', fontWeight: '900', margin: '30px 0 20px 0', borderBottom: '4px solid #000' }}>
            [ CERTIFICACOES ]
          </h2>
          <ul style={{ paddingLeft: '15px', fontWeight: 'bold', fontSize: '0.85rem', lineHeight: '1.6' }}>
            {dados.certificados.map((c, i) => <li key={i} style={{ marginBottom: '8px' }}>{c}</li>)}
          </ul>
        </aside>

      </div>

      {/* FOOTER COM LINKS DE VERDADE */}
      <footer style={{ border: '4px solid #000', backgroundColor: '#ff6b6b', padding: '25px', boxShadow: '6px 6px 0px 0px #000', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px', marginTop: '5px' }}>
        <div>
          <span style={{ fontWeight: '900', textTransform: 'uppercase', display: 'block', fontSize: '1.1rem' }}>CONECTE-SE COMIGO</span>
          <span style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>INGLÊS INTERMEDIÁRIO (LEITURA TÉCNICA)</span>
        </div>
        <div style={{ display: 'flex', gap: '15px' }}>
          {dados.redes.map((r, i) => (
            <a key={i} href={r.url} className="botao-brutal" target="_blank" rel="noreferrer">
              {r.nome}
            </a>
          ))}
        </div>
      </footer>

    </div>
  );
}