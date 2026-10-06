import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects.js';
import { useReveal } from '../hooks/useReveal.js';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  useReveal();

  useEffect(() => {
    if (project) {
      document.title = `${project.title} — Riya George`;
    }
  }, [project]);

  if (!project) {
    return (
      <div style={{ padding: '120px 32px', textAlign: 'center' }}>
        <h1>Project not found</h1>
        <p style={{ margin: '16px 0 32px' }}>This project doesn't exist or has been moved.</p>
        <Link to="/projects" className="btn btn-primary">Back to Projects</Link>
      </div>
    );
  }

  return (
    <>
      {/* Header */}
      <div className="page-header">
        <div className="container">
          <Link to="/projects" className="back-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
            </svg>
            Back to Projects
          </Link>
          <div style={{ marginBottom: '16px', fontSize: '3rem' }}>{project.emoji}</div>
          <span className="label">{project.num} — {project.category}</span>
          <h1>{project.title}</h1>
          <div style={{ marginBottom: '16px', color: 'var(--text-secondary)' }}>
            <span>📅 {project.period}</span>
            {project.company && <span style={{ marginLeft: '16px' }}>🏢 {project.company}</span>}
          </div>
          <p>{project.shortDesc}</p>
        </div>
      </div>

      <section>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            {/* Description */}
            <div className="reveal" style={{ marginBottom: '48px' }}>
              <h2 style={{ marginBottom: '16px' }}>Overview</h2>
              <p>{project.description}</p>
            </div>

            {/* Technologies */}
            <div className="reveal" style={{ marginBottom: '48px', paddingTop: '24px', borderTop: '1px solid var(--border-dim)' }}>
              <h3 style={{ marginBottom: '16px' }}>Technologies Used</h3>
              <div className="tags">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>
            </div>

            {/* Links */}
            {project.links && project.links.length > 0 && (
              <div className="reveal" style={{ marginBottom: '48px' }}>
                <h3 style={{ marginBottom: '16px' }}>Links</h3>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  {project.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                    >
                      {link.type === 'github' && '→ '}
                      {link.type === 'article' && '📄 '}
                      {link.type === 'demo' && '▶ '}
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>


    </>
  );
}
