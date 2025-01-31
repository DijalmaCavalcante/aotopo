import { html } from '@bake-js/-o-id/dom';
import logo from '../assets/logo.png'
import link from '../links'

function component () {  
  return html`
    <footer class="footer">
      <div class="footer__container">
        <img src="${logo}" />
        <at-flexframe direction="column" gap="quarck">
          <at-text size="micro" align="center">© 2025 Ao Topo!</at-text>
          <at-text size="micro" align="center">aotopoband@gmail.com</at-text>
        </at-flexframe>
        <div class="footer__social">
          <a target="_blank" href="${link.instagram}"><at-icons use="instagramoriginal"></at-icons></a>
          <a target="_blank" href="${link.tiktok}"><at-icons use="tiktokoriginal"></at-icons></a>
          <a target="_blank" href="${link.youtube}"><at-icons use="youtubeoriginal"></at-icons></a>
        </div>
      </div>
    </footer>
  `;
}

export default component;
