import { html } from '@bake-js/-o-id/dom';
import background from '../assets/background.jpg'

function component (self) {  
  return html`
    <section class="membersmobile">
      <img class="membersmobile__background" src="${background}" />
      <div class="membersdesktop__title">
        <span class="membersdesktop__members">Membros</span>
        <div class="membersdesktop__line"></div>
      </div>
      <div class="membersmobile__container">
        <div class="membersmobile__actions">
          <at-icons id="prev" class="membersmobile__action" use="arrowleft" ></at-icons>
          <at-icons class="membersmobile__action" use="arrowright" id="next"></at-icons>
        </div>
        <div class="membersmobile__persons">
          <img class="membersmobile__character" src="${self.charactersArray.person}" />
          <img class="membersmobile__risk" src="${self.charactersArray.risk}" />
        </div>
      </div>
    </section>
  `
}

export default component