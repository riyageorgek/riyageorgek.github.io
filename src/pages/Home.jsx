import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SocialLinks from '../components/SocialLinks.jsx';
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
              <a href="/Riya-George-Resume.pdf" download className="btn btn-secondary">
                Download Resume
              </a>
            </div>
            <SocialLinks />
          </div>
          <div className="hero-visual">
            <svg className="ai-canvas" viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <style>{`
                  .ai-orbit-1 { animation: orbit-rotate 18s linear infinite; transform-origin: 240px 240px; }
                  .ai-orbit-2 { animation: orbit-rotate 28s linear infinite reverse; transform-origin: 240px 240px; }
                  @keyframes orbit-rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                  .ai-node-core { animation: node-pulse 3s ease-in-out infinite; }
                  @keyframes node-pulse { 0%, 100% { opacity: 1; r: 20; } 50% { opacity: 0.7; r: 22; } }
                  .ai-signal { animation: signal-flow 3s ease-in-out infinite; }
                  .ai-signal-2 { animation: signal-flow 3s ease-in-out 1s infinite; }
                  .ai-signal-3 { animation: signal-flow 3s ease-in-out 2s infinite; }
                  @keyframes signal-flow { 0% { opacity: 0; stroke-dashoffset: 200; } 20% { opacity: 0.8; } 80% { opacity: 0.8; } 100% { opacity: 0; stroke-dashoffset: 0; } }
                `}</style>
              </defs>

              {/* Background grid */}
              <rect width="480" height="480" fill="none" opacity="0.05" stroke="currentColor" strokeWidth="1" strokeDasharray="40,10" />

              {/* Outer orbit */}
              <circle className="ai-orbit-1" cx="240" cy="240" r="200" fill="none" stroke="url(#gradOrbit1)" strokeWidth="1" opacity="0.3" strokeDasharray="4,4" />

              {/* Inner orbit */}
              <circle className="ai-orbit-2" cx="240" cy="240" r="120" fill="none" stroke="url(#gradOrbit2)" strokeWidth="1" opacity="0.3" strokeDasharray="4,4" />

              {/* Center node */}
              <circle className="ai-node-core" cx="240" cy="240" r="20" fill="none" stroke="url(#gradNode)" strokeWidth="2" />
              <circle cx="240" cy="240" r="20" fill="none" stroke="rgba(59, 139, 235, 0.1)" strokeWidth="8" />

              {/* Nodes on orbits */}
              <circle cx="440" cy="240" r="8" fill="rgba(59, 139, 235, 0.4)" opacity="0.6" />
              <circle cx="240" cy="40" r="8" fill="rgba(124, 110, 245, 0.4)" opacity="0.6" />
              <circle cx="40" cy="240" r="8" fill="rgba(59, 139, 235, 0.4)" opacity="0.6" />

              {/* Signal paths */}
              <path className="ai-signal" d="M 240 240 L 440 240" stroke="rgba(59, 139, 235, 0.6)" strokeWidth="2" fill="none" strokeDasharray="10,5" />
              <path className="ai-signal-2" d="M 240 240 L 240 40" stroke="rgba(124, 110, 245, 0.6)" strokeWidth="2" fill="none" strokeDasharray="10,5" />
              <path className="ai-signal-3" d="M 240 240 L 40 240" stroke="rgba(59, 139, 235, 0.6)" strokeWidth="2" fill="none" strokeDasharray="10,5" />

              {/* Gradients */}
              <defs>
                <linearGradient id="gradNode" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(59, 139, 235, 0.8)" />
                  <stop offset="100%" stopColor="rgba(124, 110, 245, 0.8)" />
                </linearGradient>
                <linearGradient id="gradOrbit1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(59, 139, 235, 0.4)" />
                  <stop offset="100%" stopColor="rgba(124, 110, 245, 0.4)" />
                </linearGradient>
                <linearGradient id="gradOrbit2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(124, 110, 245, 0.4)" />
                  <stop offset="100%" stopColor="rgba(59, 139, 235, 0.4)" />
                </linearGradient>
              </defs>
            </svg>
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
