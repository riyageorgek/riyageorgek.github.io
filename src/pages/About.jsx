import { useEffect } from 'react';
import PageHeader from '../components/PageHeader.jsx';
import { useReveal } from '../hooks/useReveal.js';

export default function About() {
  useReveal();
  useEffect(() => { document.title = 'About — Riya George'; }, []);

  return (
    <>
      <PageHeader 
        num="01 — About"
        title="Building reliable AI systems."
        description="I focus on making AI practical—designing systems that reason, integrate with real services, and operate reliably in production."
      />

      <section>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="reveal" style={{ marginBottom: '48px' }}>
              <h3 style={{ marginBottom: '16px' }}>Who I am</h3>
              <p>I'm an AI Engineer based in Kerala, India, focused on building agentic AI systems and production AI infrastructure. I work with Amazon Bedrock, multi-agent architectures, voice AI, and the AWS ecosystem.</p>
              <p style={{ marginTop: '16px' }}>My work spans both experimentation—exploring what's possible with new AI capabilities—and engineering—building the systems, patterns, and infrastructure that make AI reliable enough for real business use.</p>
            </div>

            <div className="reveal" style={{ marginBottom: '48px' }}>
              <h3 style={{ marginBottom: '16px' }}>What I focus on</h3>
              <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                <li style={{ marginBottom: '12px', paddingLeft: '24px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--accent-blue)' }}>→</span>
                  <strong>Agentic AI</strong> — Designing AI agents that can reason, use tools, and coordinate complex workflows
                </li>
                <li style={{ marginBottom: '12px', paddingLeft: '24px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--accent-blue)' }}>→</span>
                  <strong>Voice AI</strong> — Building real-time conversational experiences that feel natural and responsive
                </li>
                <li style={{ marginBottom: '12px', paddingLeft: '24px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--accent-blue)' }}>→</span>
                  <strong>Production systems</strong> — Infrastructure, observability, and reliability patterns for AI at scale
                </li>
                <li style={{ marginBottom: '12px', paddingLeft: '24px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--accent-blue)' }}>→</span>
                  <strong>AWS ecosystem</strong> — Deep integration with Bedrock, Lambda, S3, EventBridge, and related services
                </li>
              </ul>
            </div>

            <div className="reveal" style={{ marginBottom: '48px' }}>
              <h3 style={{ marginBottom: '16px' }}>My approach</h3>
              <p>I believe the most interesting AI work happens at the intersection of capability and practicality. It's not enough for systems to be powerful—they need to be:</p>
              <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: '12px' }}>
                <li style={{ marginBottom: '8px', paddingLeft: '24px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--accent-blue)' }}>◆</span>
                  <strong>Observable</strong> — you can understand what's happening inside
                </li>
                <li style={{ marginBottom: '8px', paddingLeft: '24px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--accent-blue)' }}>◆</span>
                  <strong>Reliable</strong> — they work consistently, with appropriate guardrails
                </li>
                <li style={{ marginBottom: '8px', paddingLeft: '24px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--accent-blue)' }}>◆</span>
                  <strong>Maintainable</strong> — others can understand, modify, and extend them
                </li>
                <li style={{ marginBottom: '8px', paddingLeft: '24px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--accent-blue)' }}>◆</span>
                  <strong>Scoped</strong> — designed for specific problems, not generic catch-alls
                </li>
              </ul>
            </div>

            <div className="reveal">
              <h3 style={{ marginBottom: '16px' }}>Outside of work</h3>
              <p>I'm interested in how organizations adopt AI—particularly the organizational and technical patterns that make AI integration successful rather than just experimental. I enjoy exploring emerging capabilities through hands-on prototyping and thinking about how to bridge the gap between research and production.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
