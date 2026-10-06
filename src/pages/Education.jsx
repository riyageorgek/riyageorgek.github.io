import { useEffect } from 'react';
import PageHeader from '../components/PageHeader.jsx';
import { education } from '../data/credentials.js';
import { useReveal } from '../hooks/useReveal.js';

export default function Education() {
  useReveal();
  useEffect(() => { document.title = 'Education — Riya George'; }, []);

  return (
    <>
      <PageHeader 
        num="02 — Education"
        title="My educational background"
        description="Formal education and learning journey in computer science, mathematics, and related fields."
      />

      <section>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {education.map((edu, i) => (
              <div key={i} className="card reveal" style={{ marginBottom: i < education.length - 1 ? '24px' : 0, padding: '32px' }}>
                <h3 style={{ marginBottom: '8px' }}>{edu.degree}</h3>
                <p style={{ marginBottom: '12px', fontSize: '0.95rem', color: 'var(--text-muted)', fontWeight: '500' }}>
                  {edu.institution}
                </p>
                <div style={{ display: 'flex', gap: '24px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <div>
                    <span style={{ color: 'var(--text-muted)' }}>Period:</span> {edu.period}
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-muted)' }}>Score:</span> {edu.score}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
