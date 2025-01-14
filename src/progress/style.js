import { css } from '@bake-js/-o-id/dom'

function style (self) {
  return css`
    :host {
      width: 100%;
      height: 8px;
      background-color: grey;
      border-radius: var(--radius-small);
      
      div {
        width: ${self.value}%;
        height: 8px;
        background-color: var(--color-orange);
        border-radius: var(--radius-small);
      }
    }
  `
}

export default style
