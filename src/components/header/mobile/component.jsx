import "./style.css";
import { useMobileMenu } from "./useMobileMenu";
import Button from "@components/button/component";
import Icon from '@components/icon/component'
import link from '@helpers/links'
import Logo from "@components/logo/component";
import Text from "@components/text/component";

const NAV_LINKS = [
  { label: "Sobre",     href: "/sobre" },
  { label: "Música",    href: "/musica" },
  { label: "Vídeos",    href: "/videos" },
  { label: "Shows",     href: "/shows" },
  { label: "Fãs Clube", href: "/fas-clube" },
  { label: "Loja",      href: "/loja" },
];

function component() {
  const { isOpen, openMenu, closeMenu } = useMobileMenu();

  return (
  <div className="headerMobile__container">
    <div className="headerMobile__topbar">
      <Logo size="xs" />
      <button
        className="headerMobile__hamburger"
        onClick={openMenu}
        aria-label="Abrir menu"
        type="button"
      >
        <span className="headerMobile__hamburgerLine" />
        <span className="headerMobile__hamburgerLine" />
        <span className="headerMobile__hamburgerLine" />
      </button>
    </div>
    {isOpen && (
      <div
        className="headerMobile__overlay"
        onClick={closeMenu}
        aria-hidden="true"
      />
    )}
    <div className={`headerMobile__drawer${isOpen ? " headerMobile__drawer--open" : ""}`}>
      <div className="headerMobile__drawerHeader">
        <Logo size="xs" />
        <button
          className="headerMobile__closeButton"
          onClick={closeMenu}
          aria-label="Fechar menu"
          type="button"
        >
          ✕
        </button>
      </div>
      <nav className="headerMobile__nav">
        <ul className="headerMobile__menu">
          {NAV_LINKS.map((link, index) => (
            <li key={index} className="headerMobile__menuItem">
              <Text.A
                href={link.href}
                className="headerMobile__link"
                onClick={closeMenu}
              >
                {link.label}
              </Text.A>
            </li>
          ))}
        </ul>
      </nav>
      <div className="headerMobile__divider" />
      <div className="headerMobile__social">
        <a className="header__mediaLink" href={link.instagram} target="__blank">
          <Icon model="instagramOutlined" />
        </a>
        <a className="header__mediaLink" href={link.tiktok} target="__blank">
          <Icon model="tiktokFilled" />
        </a>
        <a className="header__mediaLink" href={link.youtube} target="__blank">
          <Icon model="youtubeFilled" />
        </a>
      </div>
      <div className="headerMobile__cta">
        <Button variant="filled" rounded="pill" href="https://open.spotify.com/">
          Ouça Agora
        </Button>
      </div>
    </div>
  </div>
  );
}

export default component;
