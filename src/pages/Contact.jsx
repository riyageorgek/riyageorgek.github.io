import { useEffect } from 'react';
import PageHeader from '../components/PageHeader.jsx';
import { SITE } from '../data/site.js';
import { useReveal } from '../hooks/useReveal.js';

export default function Contact() {
  useReveal();
  useEffect(() => { document.title = 'Contact — Riya George'; }, []);

  return (
    <>
      <PageHeader 
        num="07 — Contact"
        title="Let's build something useful with AI."
        description="I'm open to conversations about interesting problems, collaborations, and opportunities in AI engineering."
      />

      <section>
        <div className="container">
          <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', maxWidth: '900px', margin: '0 auto' }}>

            {/* Contact Links */}
            <div className="reveal">
              <p style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-faint)', fontFamily: 'var(--font-heading)', marginBottom: '20px' }}>
                Get in touch
              </p>

              <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', padding: '16px', marginBottom: '12px', borderRadius: '8px', border: '1px solid var(--border-dim)', textDecoration: 'none', color: 'inherit', transition: 'all var(--transition-base)' }}>
                <div style={{ color: 'var(--text-muted)', marginTop: '2px', minWidth: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                  </svg>
                </div>
                <div>
                  <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>LinkedIn</span>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '4px 0 0' }}>linkedin.com/in/riyageorgek</p>
                </div>
              </a>

              <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="contact-link-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', padding: '16px', marginBottom: '12px', borderRadius: '8px', border: '1px solid var(--border-dim)', textDecoration: 'none', color: 'inherit', transition: 'all var(--transition-base)' }}>
                <div style={{ color: 'var(--text-muted)', marginTop: '2px', minWidth: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                  </svg>
                </div>
                <div>
                  <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>GitHub</span>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '4px 0 0' }}>github.com/riyageorgek</p>
                </div>
              </a>
            </div>

            {/* Info Panel */}
            <div className="contact-info-panel reveal" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div className="card" style={{ padding: '20px', borderColor: 'var(--border-card)', background: 'var(--bg-card-hover)' }}>
                <p style={{ fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-faint)', fontFamily: 'var(--font-heading)', marginBottom: '8px' }}>
                  Also on
                </p>
                <a href={SITE.credly} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.9rem', color: 'var(--accent-blue-light)', display: 'inline-flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}>
                  Credly — Verified Badges ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
