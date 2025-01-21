import { html } from '@bake-js/-o-id/dom';
import logo from '../assets/logo.png'
import link from '../links'

function component () {  
  return html`
    <footer class="footer">
      <div class="footer__container">
        <img src=${logo} class="footer__logo"/>
        <at-text size="micro">
          © 2025 Ao Topo!
        </at-text>
        <at-flexframe gap="xs">
          <a target="_blank" href=${link.instagram}><at-icons use="instagramOriginal"></at-icons></a>
          <a target="_blank" href=${link.youtube}><at-icons use="youtubeOriginal"></at-icons></a>
          <a target="_blank" href=${link.tiktok}><at-icons use="tiktokOriginal"></at-icons></a>
        </at-flexframe>
      </div>
    </footer>
  `;
}

export default component;
