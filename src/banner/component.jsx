import { html } from '@bake-js/-o-id/dom';
import background from '../assets/background.png'
import link from '../links'

function component () {
  return html`
    <section class="banner">
      <img class="banner__background" src="${background}" alt="background com imagem da banda junta"/>
      <div class="banner__scroll">
        <at-icons use="mouse" class="banner__mouse" alt="icone de mouse"></at-icons>
        <span>Pra cima!</span>
      </div>
      <div class="banner__container">
        <at-logo alt="logo da banda"></at-logo>
        <a href=${link.instagram} target="_blank">
          <at-icons class="banner__icons" use="strokeinstagram" alt="icone de instagram"/>
        </a>
      </div>
    </section>
  `

}

export default component
