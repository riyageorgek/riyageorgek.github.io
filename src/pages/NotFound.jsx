import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={{ padding: '120px 32px', textAlign: 'center', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div>
        <h1 style={{ marginBottom: '16px' }}>404</h1>
        <h2 style={{ marginBottom: '16px' }}>Page not found</h2>
        <p style={{ marginBottom: '32px', color: 'var(--text-secondary)' }}>The page you're looking for doesn't exist.</p>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    </div>
  );
}
