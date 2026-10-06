export default function ExperienceItem({ experience }) {
  return (
    <div className="timeline-item reveal">
      <div className="timeline-dot" />
      <div className="timeline-content card">
        <div style={{ marginBottom: '4px' }}>
          <span className="label">{experience.period}</span>
        </div>
        <h3 style={{ marginBottom: '2px' }}>{experience.role}</h3>
        <p style={{ marginBottom: '16px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          {experience.company}
        </p>
        <p style={{ marginBottom: '16px' }}>{experience.description}</p>
        {experience.highlights && (
          <>
            <p style={{ marginTop: '12px', marginBottom: '8px', fontSize: '0.85rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>
              Highlights
            </p>
            <ul style={{ listStyle: 'none', marginBottom: '16px' }}>
              {experience.highlights.map((highlight, i) => (
                <li key={i} style={{ marginBottom: '6px', paddingLeft: '20px', position: 'relative', fontSize: '0.9rem' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--accent-blue)' }}>→</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </>
        )}
        {experience.technologies && (
          <div className="tags" style={{ marginTop: '12px' }}>
            {experience.technologies.map((tech) => (
              <span key={tech} className="tag tag-dim">{tech}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
