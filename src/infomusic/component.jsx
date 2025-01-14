import { html } from '@bake-js/-o-id/dom';
import background from './background.jpg';

function component () {  
  return html`
    <div class="infomusic">
      <div class="infomusic__container">
        <img class="infomusic__image" src="${background}" alt="capa da musica" />
        <div class="infomusic__trackdetails">
          <div class="infomusic__names">
            <span class="infomusic__musicname">Fazer valer</span>
            <span class="infomusic__bandname">Ao Topo</span>
          </div>
          <div class="infomusic__mediacontrols">
            <at-player class="infomusic__player">
              <id-echo-source on="at-play/clicked:method/play"></id-echo-source>
              <id-echo-source on="at-pause/clicked:method/pause"></id-echo-source>
              <id-echo-source on="at-volume/volumechanged:method/click"></id-echo-source>
            </at-player>
            <div class="informusic__playeractions">
              <at-play>
                <id-echo-source on="at-player/play:method/hide"></id-echo-source>
                <id-echo-source on="at-player/pause:method/show"></id-echo-source>
              </at-play>
              <at-pause>
                <id-echo-source on="at-player/play:method/show"></id-echo-source>
                <id-echo-source on="at-player/pause:method/hide"></id-echo-source>
              </at-pause>
              <div class="infomusic__progress">
                <at-progress>
                  <id-echo-source on="at-player/progress:attribute/value"></id-echo-source>
                </at-progress>
                <at-music-duration>
                  <id-echo-source on="at-player/time:attribute/time|prop=currentTime"></id-echo-source>
                  <id-echo-source on="at-player/time:attribute/duration|prop=duration"></id-echo-source>
                </at-music-duration>
              </div>
            </div>
            <div class="infomusic__icons">
              <a href="#"> <at-icons use="spotify" aria-label="spotify"/> </a>
              <a href="#"> <at-icons use="youtube" aria-label="youtube"/> </a>
              <a href="#"> <at-icons use="apple" aria-label="apple"/> </a>
              <a href="#"> <at-icons use="amazon" aria-label="amazon"/> </a>
              <a href="#"> <at-icons use="deezer" aria-label="deezer"/> </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

export default component;
