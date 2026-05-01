import Logo from '@components/logo/component'
import "./style.css"
import Text from '@components/text/component'

function component () {
  return (
    <div className="header__container">
      <div className="header__logo">
        <Logo size='xs'/>
      </div>
      <nav className="header__navigation">
        <ul className="header__menu">
          <li className="header__menuItem"><Text.A href="/sobre" color='inverted'>Sobre</Text.A></li>
          <li className="header__menuItem"><Text.A href="/sobre" color='inverted'>Vídeos</Text.A></li>
          <li className="header__menuItem"><Text.A href="/sobre" color='inverted'>Shows</Text.A></li>
          <li className="header__menuItem"><Text.A href="/sobre" color='inverted'>Loja</Text.A></li>
        </ul>
      </nav>
      <div className="header__medias">
        <Text.A href="https://instagram.com/aotopo" target="_blank" color='inverted'>ins</Text.A>
        <Text.A href="https://tiktok.com/@aotopo" target="_blank" color='inverted'>ttk</Text.A>
        <Text.A href="https://youtube.com/aotopo" target="_blank" color='inverted'>ytu</Text.A>
        <button className="header__ctaButton">
          <Text as="span">Ouça Agora</Text>
        </button>
      </div>
    </div>
  )
}

export default component
