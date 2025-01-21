import { html } from '@bake-js/-o-id/dom';
import background from '../assets/backgroundbm.jpg'
import { characters } from '../characters'

function component (self) {  
  return html`
    <section class="membersdesktop">
      <img class="membersdesktop_background" src="${background}" />
      <div class="membersdesktop__title">
        <span class="membersdesktop__members">Membros</span>
        <div class="membersdesktop__line"></div>
      </div>
      <div class="membersdesktop_container">
        <div class="membersdesktop_group" id="wallace" current=${self.current === 'wallace'}>
          <img class="membersdesktop_description" src="${characters.wallace.description}" />
          <img class="membersmobile__character" src="${characters.wallace.person}" />
        </div>
        <div class="membersdesktop_group" id="dijalma" current=${self.current === 'dijalma'}>
          <img class="membersdesktop_description" src="${characters.dijalma.description}" />
          <img class="membersmobile__character" src="${characters.dijalma.person}" />
        </div>
        <div class="membersdesktop_group" id="bene" current=${self.current === 'bene'}>
          <img class="membersdesktop_description" src="${characters.bene.description}" />
          <img class="membersmobile__character" src="${characters.bene.person}" />
        </div>
        <div class="membersdesktop_group" id="lucas" current=${self.current === 'lucas'}>
          <img class="membersdesktop_description" src="${characters.lucas.description}" />
          <img class="membersmobile__character" src="${characters.lucas.person}" />
        </div>
        <div class="membersdesktop_group" id="kauan" current=${self.current === 'kauan'}>
          <img class="membersdesktop_description" src="${characters.kauan.description}" />
          <img class="membersmobile__character" src="${characters.kauan.person}" />
        </div>

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