import "./style.css";
import { headerscroll } from "./headerscroll.js";
import Desktop from '@components/header/desktop/component'
import Mobile from '@components/header/mobile/component'

function Header() {
  const scrolled = headerscroll(60);

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="header__desktop">
        <Desktop />
      </div>
      <div className="header__mobile">
        <Mobile />
      </div>
    </header>
  );
}

export default Header;
