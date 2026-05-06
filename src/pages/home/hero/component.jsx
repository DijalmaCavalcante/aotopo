import { useHero } from "./useHero";
import "./style.css";
import { Icon } from "@components/icon/component"

function Hero() {
  const { isVisible, socialLinks } = useHero();

  return (
    <section className="hero">
      <div className="hero__bgGradient" />
      <div className="hero__bgBlobs">
        <div className="hero__blob hero__blob--orange" />
        <div className="hero__blob hero__blob--blue" />
        <div className="hero__blob hero__blob--center" />
      </div>
      <div className="hero__bgGrid" />
      <div className="hero__container">
        <div className={`hero__inner${isVisible ? " hero__inner--visible" : ""}`}>
          <h1 className="hero__title">
            <span className="hero__titleMain">AO TOPO</span>
            <span className="hero__titleAccent">!</span>
            <Icon name="instagramOutlined" />
          </h1>
          <div className="hero__actions">
            <a href="#musica" className="hero__btnPrimary">
              <Icon name="playFilled" />
              Ouça Fazer Valer
            </a>
            <a href="#sobre" className="hero__btnSecondary">
              Conheça a Banda
            </a>
          </div>
          <div className="hero__socialLink">
            <Icon name="instagramOutlined" className="hero__socials" />
          </div>
        </div>
      </div>

    </section>
  );
}

export default Hero