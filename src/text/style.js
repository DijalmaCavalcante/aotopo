import { css } from '@bake-js/-o-id/dom'

function style (self) {
  const size = `var(--font-size-${self.size})`
  const weight = `var(--font-weight-${self.weight})`
  const color = `var(--color-${self.color})`

  return css`
    :host {
      font-family: 'maven pro';
      font-size: ${size};
      font-weight: ${weight};
      align-self: ${self.align};
      color: ${color}
    }
  `;
}

export default style;
