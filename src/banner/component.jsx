import { html } from '@bake-js/-o-id/dom';
import background from '../assets/background.jpg'
import link from '../links'

function component () {
  return html`
    <section class="banner">
      <img class="banner__background" src="${background}" alt="background com imagem da banda junta"/>
      <div class="banner__scroll">
        <at-icons use="mouse" class="banner__mouse" alt="icone de mouse"></at-icons>
        <at-text size="nano">Pra cima!</at-text>
      </div>
      <div class="banner__container">
        <at-logo alt="logo da banda"></at-logo>
        <at-flexframe>
          <a href=${link.instagram} target="_blank">
            <at-icons class="banner__icons" use="strokeinstagram" alt="icone de instagram"/>
          </a>
          <a href=${link.instagram} target="_blank">
            <at-icons class="banner__icons" use="tiktokbranco" alt="icone de instagram"/>
          </a>
        </at-flexframe>
      </div>
    </section>
  `

}

export default component
