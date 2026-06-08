import "./style.css";
import backgroundImg from './background.webp'
import Icon from "@components/icon/component"
import link from '@helpers/links'
import music from './music.mp3'
import Text from "@components/text/component";

export default function Music() {
  return (
    <section className='music'>
      <div className="music__blob music__blob--right" aria-hidden="true" />
      <div className="music__blob music__blob--left"  aria-hidden="true" />
      <div className="music__container">
        <header className="music__header">
          <Text.P color="orange" weight="semiBold" size="xs" uppercase className="music__eyebrow" align='center'>
            Música
          </Text.P>
          <Text.H2 font="display" size="5xl" weight="bold" color="inverted" align='center'>
            Fazer Valer
          </Text.H2>
        </header>
        <div className="music__card">
          <div className="music__artwork" aria-label="Capa do single Fazer Valer">
            <img className='music__backgroundImg' src={backgroundImg} />
          </div>
          <div className="music__info">
            <div className="music__meta">
              <Text.H3 font="display" size="2xl" weight="bold" color="inverted" align='center'>
                Fazer Valer
              </Text.H3>
              <Text.P color="muted" size="sm" align='center'>
                Ao Topo! • Single • 2024
              </Text.P>
            </div>
            <div className="music__player-placeholder" aria-label="Player do Spotify em breve">
              <Icon model="playFilled" size="lg" color="var(--color-orange)" />
            </div>
            <div className="music__platforms">
              <div className="music__platforms-grid">
                <a className="" target="__blank">
                  <Icon model="spotifyFilled" />
                </a>
                <a className="" href={link.youtube} target="__blank">
                  <Icon model="youtubeFilled" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}