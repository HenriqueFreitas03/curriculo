import { useEffect } from 'react';

export default function ProjectModal({ projeto, onClose }) {
  useEffect(() => {
    if (!projeto) return;
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [projeto, onClose]);

  if (!projeto) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>[ X ]</button>
        <div className="modal-image">
          {projeto.imagem ? (
            <img src={projeto.imagem} alt={projeto.titulo} />
          ) : (
            <span className="placeholder">[ SLOT_DE_FOTO — INSIRA UMA IMAGEM ]</span>
          )}
        </div>
        <div className="modal-title">{projeto.titulo}</div>
        <div className="modal-tags">{projeto.tags}</div>
        <p className="modal-text">{projeto.desc}</p>
        {projeto.detalhes && (
          <div className="modal-detalhes">{projeto.detalhes}</div>
        )}
        {projeto.link && (
          <a
            href={projeto.link}
            target="_blank"
            rel="noreferrer"
            className="botao-brutal"
            style={{ marginTop: '15px', display: 'inline-block' }}
          >
            ABRIR PROJETO
          </a>
        )}
      </div>
    </div>
  );
}
