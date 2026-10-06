import { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { SITE, NAV_LINKS } from '../data/site.js';
import ThemeToggle from './ThemeToggle.jsx';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  // Scroll state
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  // Close mobile menu when route changes (NavLink handles this via re-render)
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}`} role="banner" ref={navRef}>
      <div className="nav-inner">
        <Link to="/" className="nav-logo" aria-label={`${SITE.name} — Home`}>
          <span className="nav-logo-mark" aria-hidden="true">{SITE.initials}</span>
          {SITE.name}
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Primary navigation">
          <ul className="nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) => isActive ? 'active' : ''}
                  aria-current={({ isActive }) => isActive ? 'page' : undefined}
                  end={link.to === '/'}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <ThemeToggle />
          <button
            className={`nav-toggle${menuOpen ? ' open' : ''}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <nav
        className={`nav-mobile${menuOpen ? ' open' : ''}`}
        id="mobile-nav"
        aria-label="Mobile navigation"
      >
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) => isActive ? 'active' : ''}
                onClick={closeMenu}
                end={link.to === '/'}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
