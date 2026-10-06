export default function PageHeader({ num, title, description }) {
  return (
    <div className="page-header">
      <div className="container">
        {num && <span className="label">{num}</span>}
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
}
