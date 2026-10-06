import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.id}`} className="card project-card reveal" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}>
      <div style={{ marginBottom: '12px', fontSize: '2rem' }}>{project.emoji}</div>
      <div style={{ marginBottom: '12px' }}>
        <span className="label" style={{ color: project.categoryVariant === 'violet' ? 'var(--accent-violet)' : 'var(--accent-blue)' }}>
          {project.num} — {project.category}
        </span>
      </div>
      <h3 style={{ marginBottom: '8px' }}>{project.title}</h3>
      <div style={{ marginBottom: '12px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
        <span>📅 {project.period}</span>
        {project.company && <span style={{ marginLeft: '16px' }}>🏢 {project.company}</span>}
      </div>
      <p style={{ marginBottom: '16px', fontSize: '0.95rem', flex: 1 }}>{project.shortDesc}</p>
      <div className="tags" style={{ marginTop: 'auto' }}>
        {project.technologies.slice(0, 3).map((tech) => (
          <span key={tech} className="tag">{tech}</span>
        ))}
        {project.technologies.length > 3 && (
          <span className="tag tag-dim">+{project.technologies.length - 3}</span>
        )}
      </div>
    </Link>
  );
}
