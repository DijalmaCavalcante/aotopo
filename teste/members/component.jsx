import { html } from '@bake-js/-o-id/dom';

function component (self) {  
  return html`
    <at-members-desktop class="desktop" desktop=${self.desktop}></at-members-desktop>
    <at-members-mobile class="mobile" mobile=${self.mobile}></at-members-mobile>
  `
}

export default component
