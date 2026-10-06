import { useEffect } from 'react';
import PageHeader from '../components/PageHeader.jsx';
import { award, credentialSections } from '../data/credentials.js';
import { useReveal } from '../hooks/useReveal.js';

export default function Credentials() {
  useReveal();
  useEffect(() => { document.title = 'Credentials — Riya George'; }, []);

  return (
    <>
      <PageHeader 
        num="05 — Credentials"
        title="Certifications & Awards"
        description="Professional certifications and recognition across AI, cloud, machine learning, and data technologies."
      />

      {/* Award Highlight */}
      <section>
        <div className="container">
          <div className="card reveal" style={{ padding: '32px', background: 'linear-gradient(135deg, var(--accent-blue-dim) 0%, var(--accent-violet-dim) 100%)', border: '1px solid var(--border-card)' }}>
            <h3 style={{ marginBottom: '8px' }}>{award.title}</h3>
            <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
              {award.issuer} • {award.year}
            </p>
            {award.url && (
              <a href={award.url} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                View Badge →
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Certifications by Category */}
      <section>
        <div className="container">
          {credentialSections.map((section) => (
            <div key={section.heading} style={{ marginBottom: '60px' }}>
              <h2 style={{ marginBottom: '24px' }}>
                {section.heading}
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginLeft: '12px' }}>
                  {section.count} certificate{section.count !== 1 ? 's' : ''}
                </span>
              </h2>
              <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
                {section.items.map((cert) => (
                  <div key={cert.title} className="card reveal" style={{ padding: '20px', display: 'flex', flexDirection: 'column' }}>
                    <h4 style={{ marginBottom: '4px' }}>{cert.title}</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
                      {cert.issuer}
                    </p>
                    {cert.date && (
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-faint)', marginBottom: '12px' }}>
                        {cert.date}
                      </p>
                    )}
                    {cert.url && (
                      <a href={cert.url} target="_blank" rel="noopener noreferrer" style={{ marginTop: 'auto', fontSize: '0.85rem' }} className="btn btn-ghost">
                        {cert.url.includes('verify') ? 'Verify →' : 'View →'}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
