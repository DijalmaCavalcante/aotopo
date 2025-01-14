import { css } from '@bake-js/-o-id/dom'

function style () {
  return css`
    div {
      display: flex;
      gap: var(--spacing_inset-xs);
      width: 100%;
      justify-content: space-between;

      span {
        color: var(--color-pure-white);
        font-size: var(--font-size-micro);
      }
    }
`
}

export default style
