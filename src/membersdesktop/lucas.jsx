import { html } from '@bake-js/-o-id/dom';
import { characters } from '../characters'

function lucas (props) {
  return html`
    <div class="membersdesktop_group" id="lucas" current=${props.current === 'lucas'}>
      <div class="membersdesktop_description">
        <at-text size="nano">
          Minha história com a música começou na casa da minha avó, com um violão que ela tinha. Sempre que eu ia lá, tocava um pouco. Quando ela percebeu o quanto eu gostava, decidiu arrumar um violão e me presentear. Comecei aprendendo músicas de iniciante, como o clássico "Smoke on the Water", e ouvindo muitas canções com violão. Com o tempo, meu interesse se expandiu para outros instrumentos, e passei a buscar formas de estar sempre envolvido com a música.
        </at-text>
        <a href="https://www.instagram.com/lusgascorrea/" target="_blank">
          <at-icons use="instagramoriginal"></at-icons>
        </a>
      </div>
      <img class="membersmobile__character" src="${characters.lucas.person}" />
    </div>
  `
}

export default lucas