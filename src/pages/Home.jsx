import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SocialLinks from '../components/SocialLinks.jsx';
import HeroVisual from '../components/HeroVisual.jsx';
import { useReveal } from '../hooks/useReveal.js';

export default function Home() {
  useReveal();

  useEffect(() => {
    document.title = 'Riya George — AI Engineer';
    document.documentElement.setAttribute('data-page', 'home');
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <h1 className="hero-name">Riya George</h1>
            <h2 className="hero-title">AI Engineer</h2>
            <p className="hero-statement">
              I build AI systems that reason, act, and integrate with the real world.
            </p>
            <p className="hero-sub">
              I focus on agentic AI, multi-agent architectures, voice AI, and production AI systems on AWS. I'm particularly interested in exploring how AI agents can handle complex multi-step tasks reliably at scale.
            </p>
            <div className="hero-actions">
              <Link to="/projects" className="btn btn-primary">
                Explore My Work
              </Link>
            </div>
            <SocialLinks />
          </div>
          <div className="hero-visual">
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section>
        <div className="container">
          <div className="section-header centered reveal">
            <span className="label">About</span>
            <h2>Building AI systems, one agent at a time.</h2>
            <p>I'm an AI Engineer focused on agentic systems and production AI. My work spans multi-agent architectures, voice AI, and building the infrastructure that makes AI reliable enough to run continuously in real business environments.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="container">
          <div className="contact-cta card reveal" style={{ padding: '80px 64px', textAlign: 'center', background: 'linear-gradient(135deg, var(--accent-blue-dim) 0%, var(--accent-violet-dim) 100%)', border: '1px solid var(--border-card)' }}>
            <h2 style={{ marginBottom: '16px' }}>Let's build something useful with AI.</h2>
            <p style={{ marginBottom: '32px', maxWidth: '560px', margin: '0 auto 32px' }}>
              I'm open to conversations about interesting AI problems, agentic system design, and building production AI systems. Feel free to reach out.
            </p>
            <Link to="/contact" className="btn btn-primary">Get In Touch →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
