import { SITE } from '../data/site.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <p className="footer-copy">
            © {SITE.year} <span>{SITE.name}</span> &nbsp;·&nbsp; {SITE.title}
          </p>
          <nav className="footer-links" aria-label="Footer links">
            <a href={SITE.github}   target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
