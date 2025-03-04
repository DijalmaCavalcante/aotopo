import { html } from '@bake-js/-o-id/dom';
import { characters } from '../characters'

function kauan (props) {
  return html`
    <div class="membersdesktop_group" id="kauan" current=${props.current === 'kauan'}>
      <div class="membersdesktop_description">
        <at-text size="nano">
          Em uma noite de domingo, aos 6 anos de idade, ao entrar na sala da casa da minha madrinha, vi aquele personagem do Guitar Hero segurando uma Les Paul azul. Eu não entendia nada na época, mas foi ali que começou minha paixão pela música. Aos 12 anos, comecei a tocar violão e, desde então, sigo nessa vida, da qual não me arrependo nem por um instante.
        </at-text>
        <a href="https://www.instagram.com/kauan_sottero/" target="_blank">
          <at-icons use="instagramoriginal"></at-icons>
        </a>
      </div>
      <img class="membersmobile__character" src="${characters.kauan.person}" />
    </div>
  `
}

export default kauan