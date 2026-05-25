import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS, SITE_NAME } from '../../helpers/constants';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <header 
      data-testid="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-xl bg-white/70 border-b border-black/5 shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/" 
            data-testid="logo-link"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img 
              src="/assets/sitash-logo-header.png" 
              alt="Sitash" 
              className="h-36 w-auto object-contain"
              style={{ maxHeight: '144px' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav data-testid="desktop-nav" className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-testid={`nav-link-${link.label.toLowerCase()}`}
                className={`text-sm font-semibold tracking-wide transition-colors ${
                  isActive(link.path)
                    ? 'text-[#2563EB]'
                    : 'text-[#52525B] hover:text-[#0A0A0A]'
                }`}
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              to="/contact"
              data-testid="cta-button-header"
              className="bg-[#0A0A0A] text-white hover:bg-[#2563EB] hover:-translate-y-1 transition-all duration-300 px-6 py-3 font-bold tracking-wide text-sm"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              LET'S TALK
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            data-testid="mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#0A0A0A] hover:text-[#2563EB] transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          data-testid="mobile-menu"
          className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-black/10 shadow-lg"
        >
          <nav className="flex flex-col px-6 py-4 gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-testid={`mobile-nav-link-${link.label.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-base font-semibold py-2 transition-colors ${
                  isActive(link.path)
                    ? 'text-[#2563EB]'
                    : 'text-[#52525B] hover:text-[#0A0A0A]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              to="/contact"
              data-testid="cta-button-mobile"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-[#0A0A0A] text-white text-center hover:bg-[#2563EB] transition-all duration-300 px-6 py-3 font-bold tracking-wide mt-2"
            >
              LET'S TALK
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};