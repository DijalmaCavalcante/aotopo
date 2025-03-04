import { characters } from '../characters'
import { html } from '@bake-js/-o-id/dom';
import background from '../assets/backgroundbm.jpg'
import Bene from './bene'
import Dijalma from './dijalma'
import Kauan from './kauan'
import Lucas from './lucas'
import Wallace from './wallace'

function component (self) {
  return html`
    <section class="membersdesktop">
      <img class="membersdesktop_background" src="${background}" />
      <div class="membersdesktop__title">
        <at-text size="sm" class="membersdesktop__members">Membros</at-text>
        <div class="membersdesktop__line"></div>
      </div>
      <div class="membersdesktop_container">
        ${Wallace(self)}
        ${Dijalma(self)}
        ${Bene(self)}
        ${Lucas(self)}
        ${Kauan(self)}
        <div class="membersdesktop_nav">
          <button class="membersdesktop__button" id="wallaceButton" current=${self.current === 'wallace'}>
            <img src="${characters.wallace.risk}" class="membersdesktop__person"/>
          </button>
          <button class="membersdesktop__button" id="beneButton" current=${self.current === 'bene'}>
            <img src="${characters.bene.risk}" class="membersdesktop__person"/>
          </button>
          <button class="membersdesktop__button" id="dijalmaButton" current=${self.current === 'dijalma'}>
            <img src="${characters.dijalma.risk}" class="membersdesktop__person"/>
          </button>
          <button class="membersdesktop__button" id="lucasButton" current=${self.current === 'lucas'}>
            <img src="${characters.lucas.risk}" class="membersdesktop__person"/>
          </button>
          <button class="membersdesktop__button" id="kauanButton" current=${self.current === 'kauan'}>
            <img src="${characters.kauan.risk}" class="membersdesktop__person"/>
          </button>
        </div>
      </div>
    </section>
  `
}

export default component