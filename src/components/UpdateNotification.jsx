import { useEffect, useState } from 'react';

export default function UpdateNotification() {
  const [showUpdate, setShowUpdate] = useState(false);

  useEffect(() => {
    // Check for updates on component mount
    const checkForUpdates = async () => {
      try {
        const response = await fetch('/index.html?v=' + Date.now());
        const html = await response.text();
        
        // Extract build hash from the fetched HTML
        const newBuildHash = html.match(/index-([a-zA-Z0-9]+)\.js/)?.[1];
        const currentBuildHash = localStorage.getItem('app_build_hash');
        
        if (currentBuildHash && newBuildHash && currentBuildHash !== newBuildHash) {
          // New version detected - show update button
          setShowUpdate(true);
        } else if (!currentBuildHash && newBuildHash) {
          // First visit - store the hash
          localStorage.setItem('app_build_hash', newBuildHash);
        }
      } catch (error) {
        console.error('Error checking for updates:', error);
      }
    };

    checkForUpdates();

    // Check for updates every 10 seconds while page is open
    const interval = setInterval(checkForUpdates, 10000);
    return () => clearInterval(interval);
  }, []);

  if (!showUpdate) return null;

  const handleUpdate = () => {
    // Clear cache and reload
    if ('caches' in window) {
      caches.keys().then(cacheNames => {
        cacheNames.forEach(cacheName => {
          caches.delete(cacheName);
        });
      });
    }
    // Clear only app-specific storage, keep user preferences
    const keysToKeep = ['app_build_hash'];
    const keysToDelete = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!keysToKeep.includes(key)) {
        keysToDelete.push(key);
      }
    }
    keysToDelete.forEach(key => localStorage.removeItem(key));
    // Force hard reload
    window.location.href = window.location.href;
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      zIndex: 9999,
      animation: 'slideIn 0.3s ease-out'
    }}>
      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(400px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(59, 139, 235, 0.7);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(59, 139, 235, 0);
          }
        }
      `}</style>
      
      <button
        onClick={handleUpdate}
        style={{
          padding: '16px 24px',
          background: 'linear-gradient(135deg, #3B8BEB 0%, #7C6EF5 100%)',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '0.95rem',
          fontWeight: '600',
          cursor: 'pointer',
          boxShadow: '0 8px 24px rgba(59, 139, 235, 0.3)',
          animation: 'pulse 2s infinite',
          fontFamily: 'var(--font-heading)',
          letterSpacing: '0.02em',
          transition: 'all var(--transition-base)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'translateY(-2px)';
          e.target.style.boxShadow = '0 12px 32px rgba(59, 139, 235, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 8px 24px rgba(59, 139, 235, 0.3)';
        }}
      >
        <span style={{ fontSize: '18px' }}>⚡</span>
        New Update Available
      </button>
    </div>
  );
}
