import { html } from '@bake-js/-o-id/dom';
import { characters } from '../characters'

function dijalma (props) {
  return html`
    <div class="membersdesktop_group" id="dijalma" current=${props.current === 'dijalma'}>
      <div class="membersdesktop_description">
        <at-text size="nano">
          Ao ver um amigo com um violão parado, decidi pedir emprestado para tentar aprender alguma coisa. Foi assim que consegui tocar minha primeira música, a tão temida "Ainda É Cedo", aprendida pelo Cifra Club. A partir daí, comecei a me envolver mais com música e com pessoas que compartilhavam esse universo. Até que me juntei a dois amigos para fazermos um som juntos e, então, decidimos formar uma banda (que ainda precisava de um baterista). Foi nesse momento que me dediquei a aprender de verdade, e hoje a música faz parte de quem eu sou.
        </at-text>
        <a href="https://www.instagram.com/dijacavallcante/" target="_blank">
          <at-icons use="instagramoriginal"></at-icons>
        </a>
      </div>
      <img class="membersmobile__character" src="${characters.dijalma.person}" />
    </div>
  `
}

export default dijalma