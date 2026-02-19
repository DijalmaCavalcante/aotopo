import { useState, useEffect } from "react";
import "./style.css";

const NAV_LINKS = [
  { label: "Sobre", href: "/sobre" },
  { label: "Música", href: "/musica" },
  { label: "Vídeos", href: "/videos" },
  { label: "Shows", href: "/shows" },
  { label: "Loja", href: "/loja" },
];

function Header({ hideLogo = false, ctaLabel, onCtaClick }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header__container ${scrolled ? "header__container--scrolled" : ""}`}>
      <div className="header__inner">
        {!hideLogo && (
          <div className="header__logo">
            <span className="header__logoText">Logo</span>
          </div>
        )}
        <nav className="header__navigation">
          <ul className="header__menu">
            {NAV_LINKS.map((link, index) => (
              <li key={index} className="header__menuItem">
                <a href={link.href} className="header__link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {ctaLabel && (
          <button className="header__ctaButton" onClick={onCtaClick}>
            {ctaLabel}
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;