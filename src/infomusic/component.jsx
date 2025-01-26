import { html } from '@bake-js/-o-id/dom';
import background from '../assets/musicbackground.jpg';
import music from './music.mp3'

function component () {  
  return html`
    <div class="infomusic">
      <div class="infomusic__container">
        <img class="infomusic__image" src="${background}" alt="capa da musica" />
        <at-flexframe direction="column" gap="md" width="100%">
          <at-flexframe direction="column" gap="quarck">
            <at-text class="infomusic__name" weight="medium" align="center">Fazer valer</at-text>
            <at-text class="infomusic__name" size="nano" align="center">Ao Topo!</at-text>
          </at-flexframe>
          <div class="infomusic__mediacontrols">
            <audio controls>
              <source src="${music}" type="audio/mpeg">
            </audio> 
            <div class="infomusic__icons">
              <a href="https://music.amazon.com.br/albums/B0DNKVJR7Z?marketplaceId=ART4WZ8MWBX2Y&musicTerritory=BR&ref=dm_sh_hyU835S8Aizy8tJAA1AT3cKZM" target="_blank"/> <at-icons use="amazon" aria-label="amazon"/> </a>
              <a href="https://music.apple.com/us/album/fazer-valer-single/1781030693?uo=4" target="_blank"/> <at-icons use="apple" aria-label="apple"/> </a>
              <a href="https://open.spotify.com/album/3DINa7nQ5CoJu41NGxWJu8" target="_blank"/> <at-icons use="spotify" aria-label="spotify"/> </a>
              <a href="https://www.deezer.com/album/672978831" target="_blank"/> <at-icons use="deezer" aria-label="deezer"/> </a>
              <a href="https://www.youtube.com/watch?v=LdfuPF84_OE" target="_blank"/> <at-icons use="youtube" aria-label="youtube"/> </a>
            </div>
          </div>
        </at-flexframe>
      </div>
    </div>
  `;
}

export default component;
