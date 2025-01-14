import { html } from '@bake-js/-o-id/dom';

function component (self) {  
  return html`
    <div>
      <span>${self.time}</span><span>4:46</span>
    </div>
  `
}

export default component