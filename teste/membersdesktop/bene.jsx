import { html } from '@bake-js/-o-id/dom';
import { characters } from '../characters'

function bene (props) {
  return html`
    <div class="membersdesktop_group" id="bene" current=${props.current === 'bene'}>
      <div class="membersdesktop_description">
        <at-text size="nano">
          Minha história começou quando eu comecei a tocar violão, e comecei a criar melodias. Com base nas músicas que eu aprendia, a partir disso, comecei a escrever e compor, sem compromisso nenhum, apenas por gosto. Até que, ao tocar com alguns amigos meus, decidimos começar uma banda, e hoje somos a Ao Topo!
        </at-text>
        <a href="https://www.instagram.com/videsbene/" target="_blank">
          <at-icons use="instagramoriginal"></at-icons>
        </a>
      </div>
      <img class="membersmobile__character" src="${characters.bene.person}" />
    </div>
  `
}

export default bene