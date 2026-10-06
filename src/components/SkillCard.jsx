export default function SkillCard({ skill }) {
  return (
    <div className="card reveal">
      <h3 style={{ marginBottom: '4px' }}>
        <span className="label" style={{ marginRight: '12px' }}>{skill.num}</span>
        {skill.category}
      </h3>
      <div className="tags" style={{ marginTop: '16px' }}>
        {skill.items.map((item) => (
          <span
            key={item.label}
            className={`tag ${
              item.variant === 'primary' ? '' :
              item.variant === 'violet' ? 'tag-violet' :
              'tag-dim'
            }`}
          >
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}
