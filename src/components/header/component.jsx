import "./style.css";
import { headerscroll } from "./headerscroll.js";
import Desktop from './desktop/component'
import Mobile from './mobile/component'

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
