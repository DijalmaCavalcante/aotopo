import Logo from '@components/logo/component'
import "./style.css"
import Text from '@components/text/component'
import Icon from "@components/icon/component"
import link from "@helpers/links"

function component () {
  return (
    <div className="header__container">
      <div className="header__logo">
        <Logo size='xs'/>
      </div>
      <nav className="header__navigation">
        <ul className="header__menu">
          <li className="header__menuItem"><Text.A href="/sobre" color='inverted' hoverEffect>Sobre</Text.A></li>
          <li className="header__menuItem"><Text.A href="/sobre" color='inverted' hoverEffect>Vídeos</Text.A></li>
          <li className="header__menuItem"><Text.A href="/sobre" color='inverted' hoverEffect>Shows</Text.A></li>
          <li className="header__menuItem"><Text.A href="/sobre" color='inverted' hoverEffect>Loja</Text.A></li>
        </ul>
      </nav>
      <div className="header__medias">
        <a className="header__mediaLink" href={link.instagram} target="__blank">
          <Icon model="instagramOutlined" />
        </a>
        <a className="header__mediaLink" href={link.tiktok} target="__blank">
          <Icon model="tiktokFilled" />
        </a>
        <a className="header__mediaLink" href={link.youtube} target="__blank">
          <Icon model="youtubeFilled" />
        </a>
        <button className="header__ctaButton">
          <Text color='inverted' weight='bold'>Ouça Agora</Text>
        </button>
      </div>
    </div>
  )
}

export default component
