import { html } from '@bake-js/-o-id/dom';
import background from '../assets/musicbackground.jpg';

function component () {  
  return html`
    <div class="infomusic">
      <div class="infomusic__container">
        <img class="infomusic__image" src="${background}" alt="capa da musica" />
        <at-flexframe direction="column" gap="md" width="100%">
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
              <a href="https://open.spotify.com/album/3DINa7nQ5CoJu41NGxWJu8" target="_blank"/> <at-icons use="spotify" aria-label="spotify"/> </a>
              <a href="https://www.youtube.com/watch?v=LdfuPF84_OE" target="_blank"/> <at-icons use="youtube" aria-label="youtube"/> </a>
              <a href="https://music.apple.com/us/album/fazer-valer-single/1781030693?uo=4" target="_blank"/> <at-icons use="apple" aria-label="apple"/> </a>
              <a href="https://music.amazon.com.br/albums/B0DNKVJR7Z?marketplaceId=ART4WZ8MWBX2Y&musicTerritory=BR&ref=dm_sh_hyU835S8Aizy8tJAA1AT3cKZM" target="_blank"/> <at-icons use="amazon" aria-label="amazon"/> </a>
              <a href="https://www.deezer.com/album/672978831" target="_blank"/> <at-icons use="deezer" aria-label="deezer"/> </a>
            </div>
          </div>
        </at-flexframe>
      </div>
    </div>
  `;
}

export default component;
