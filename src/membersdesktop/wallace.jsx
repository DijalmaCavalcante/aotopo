import { html } from '@bake-js/-o-id/dom';
import { characters } from '../characters'

function wallace (props) {
  return html`
    <div class="membersdesktop_group" id="wallace" current=${props.current === 'wallace'}>
      <div class="membersdesktop_description">
        <at-text size="nano">Desde pequeno, sempre estive conectado à música de alguma forma, seja com um violão de brinquedo, criando minhas próprias músicas, cantando ou explorando sons. Aos 12 anos, ganhei meu primeiro violão, o que fez meu amor pela música crescer ainda mais. Meu pai, percebendo o quanto eu me dedicava e gostava disso, decidiu me presentear com uma guitarra. Foi nesse momento que tudo começou a fazer mais sentido, e eu passei a entender o quanto a música era importante para mim, moldando quem sou hoje.</at-text>
        <a href="https://www.instagram.com/wallace.amorim/" target="_blank">
          <at-icons use="instagramoriginal"></at-icons>
        </a>
      </div>
      <img class="membersmobile__character" src="${characters.wallace.person}" />
    </div>
  `
}

export default wallace