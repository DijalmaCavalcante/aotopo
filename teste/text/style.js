import { css } from '@bake-js/-o-id/dom'

function style (self) {
  const size = `var(--font-size-${self.size})`
  const weight = `var(--font-weight-${self.weight})`
  const color = `var(--color-${self.color})`
  const shadow = `
    2px 2px 0px var(--color-pure-black),
    -2px 2px 0px var(--color-pure-black), 
    2px -2px 0px var(--color-pure-black), 
    -2px -2px 0px var(--color-pure-black);
  `

  return css`
    :host {
      font-family: 'maven pro';
      font-size: ${size};
      font-weight: ${weight};
      text-align: ${self.align};
      color: ${color};
      text-shadow: ${self.shadow ? shadow : ""}
    }
  `;
}

export default style;
