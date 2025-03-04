import { html } from '@bake-js/-o-id/dom';
import svg from './svg'

function component (self) {
  return html`
    ${svg[self.use]?.() ?? ""}
  `
}

export default component
