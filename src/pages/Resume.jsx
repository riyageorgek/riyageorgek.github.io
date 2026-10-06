import { useEffect } from 'react';
import PageHeader from '../components/PageHeader.jsx';
import { Link } from 'react-router-dom';

export default function Resume() {
  useEffect(() => { document.title = 'Resume — Riya George'; }, []);

  return (
    <>
      <PageHeader 
        num="06 — Resume"
        title="Download my resume"
        description="A comprehensive overview of my experience, skills, and education."
      />

      <section>
        <div className="container" style={{ maxWidth: '680px', textAlign: 'center' }}>
          <div className="card reveal" style={{ padding: '48px 32px' }}>
            <p style={{ marginBottom: '24px' }}>My resume is available as a PDF for download. It includes:</p>
            <ul style={{ textAlign: 'left', maxWidth: '400px', margin: '24px auto', listStyle: 'none', paddingLeft: 0 }}>
              <li style={{ marginBottom: '8px', paddingLeft: '24px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--accent-blue)' }}>→</span>
                Professional experience
              </li>
              <li style={{ marginBottom: '8px', paddingLeft: '24px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--accent-blue)' }}>→</span>
                Technical skills
              </li>
              <li style={{ marginBottom: '8px', paddingLeft: '24px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--accent-blue)' }}>→</span>
                Certifications
              </li>
              <li style={{ marginBottom: '8px', paddingLeft: '24px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--accent-blue)' }}>→</span>
                Education
              </li>
            </ul>

            <div style={{ marginTop: '32px' }}>
              <a href="/Riya-George-Resume.pdf" download className="btn btn-primary" style={{ marginRight: '12px' }}>
                Download PDF
              </a>
              <Link to="/contact" className="btn btn-secondary">
                Get In Touch
              </Link>
            </div>
          </div>

          <p style={{ marginTop: '48px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            For more details, check out my <Link to="/experience" style={{ color: 'var(--accent-blue-light)' }}>full experience timeline</Link>, <Link to="/projects" style={{ color: 'var(--accent-blue-light)' }}>project details</Link>, or <Link to="/credentials" style={{ color: 'var(--accent-blue-light)' }}>credentials</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
