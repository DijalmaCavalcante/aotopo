import { useMobileMenu } from "./useMobileMenu";
import Logo from "@components/logo/component";
import Button from "@components/button/component";
import Text from "@components/text/component";
import "./style.css";

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
        <Text.A href="https://instagram.com/aotopo" className="headerMobile__socialLink" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
          <Text as="span" className="headerMobile__socialIcon">ins</Text>
        </Text.A>
        <Text.A href="https://youtube.com/aotopo" className="headerMobile__socialLink" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
          <Text as="span" className="headerMobile__socialIcon">ytu</Text>
        </Text.A>
        <Text.A href="https://tiktok.com/@aotopo" className="headerMobile__socialLink" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
          <Text as="span" className="headerMobile__socialIcon">ttk</Text>
        </Text.A>
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
