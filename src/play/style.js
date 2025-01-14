import { css } from '@bake-js/-o-id/dom'

function style () {
  return css`
    :host(:state(hidden)) {
      display: none;
    }

    button {
      color: var(--color-orange);
      background: none;
      border: 1px solid var(--color-orange);
      cursor: pointer;
      width: 52px;
      height: 52px;
      border-radius: 50%;
    }

    @media(width >= 768px) {
      button {
        border: none;
        width: 42px;
        height: 42px;
      }
    }
  `
}

export default style
