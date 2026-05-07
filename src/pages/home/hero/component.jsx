import "./style.css";
import BgEffect from './bgEffect'
import Icon from "@components/icon/component"
import link from '@helpers/links'
import Text from '@components/text/component'

function Hero () {
  return (
    <section className="hero">
      <BgEffect />
      <div className="hero__container">
        <div className='hero__inner'>
          <h1 className="hero__title">
            <Text font='display' color='inverted' size='heroTitle'>Ao Topo</Text>
            <Text color='orange' size='heroTitle' weight='bold'>!</Text>
          </h1>
          <div className="hero__actions">
            <a href="#musica" className="hero__btnPrimary">
              <Icon model="playFilled" />
              <Text color='inverted' weight='bold'>Ouça - Fazer Valer</Text>
            </a>
            <a href="#sobre" className="hero__btnSecondary">
              <Text color='inverted' weight='bold'>Conheça a banda</Text>
            </a>
          </div>
          <div className="hero__socialMidias">
            <a className="hero__socialLink" href={link.instagram} target="__blank">
              <Icon model="instagramOutlined" />
            </a>
            <a className="hero__socialLink" href={link.tiktok} target="__blank">
              <Icon model="tiktokFilled" />
            </a>
            <a className="hero__socialLink" href={link.youtube} target="__blank">
              <Icon model="youtubeFilled" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
