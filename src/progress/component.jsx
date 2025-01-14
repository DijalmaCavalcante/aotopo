import { html } from '@bake-js/-o-id/dom';

function component () {
  return html`
    <div>
      <slot></slot>
    </div>
  `
}

export default component
