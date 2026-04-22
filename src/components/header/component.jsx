import "./style.css";
import { headerscroll } from "./headerscroll.js";
import Logo from '@components/logo/component'

function Header() {
  const scrolled = headerscroll(60);

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="header__container">
        <div className="header__logo">
          <Logo size='xs'/>
        </div>
        <nav className="header__navigation">
          <ul className="header__menu">
            <li className="header__menuItem"><a href="/sobre">Sobre</a></li>
            <li className="header__menuItem"><a href="/musica">Música</a></li>
            <li className="header__menuItem"><a href="/videos">Vídeos</a></li>
            <li className="header__menuItem"><a href="/shows">Shows</a></li>
            <li className="header__menuItem"><a href="/loja">Loja</a></li>
          </ul>
        </nav>
        <div className="header__medias">
          <a>ins</a>
          <a>ttk</a>
          <a>ytu</a>
          <button className="header__ctaButton">Ouça Agora</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
