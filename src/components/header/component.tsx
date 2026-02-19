
import React from 'react';
import './style.css';

interface HeaderProps {
  showLogo?: boolean;
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ showLogo = true, children }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerClassName = `header__container ${scrolled ? 'header__container--scrolled' : ''}`;
  const hamburgerClassName = `header__hamburger ${isMenuOpen ? 'header__hamburger--open' : ''}`;
  const mobileNavClassName = `header__mobileNav ${isMenuOpen ? 'header__mobileNav--open' : ''}`;

  return (
    <header className={headerClassName}>
      <div className="header__content">
        {showLogo && <div className="header__logo">Ao Topo!</div>}
        
        {/* Desktop Navigation */}
        <div className="header__desktopNav">
          {children}
        </div>

        {/* Hamburger Button */}
        <button className={hamburgerClassName} onClick={toggleMenu} aria-label="Toggle menu">
          <div className="header__hamburgerBar" />
          <div className="header__hamburgerBar" />
          <div className="header__hamburgerBar" />
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav className={mobileNavClassName}>
        {children}
      </nav>
    </header>
  );
};

export default Header;
