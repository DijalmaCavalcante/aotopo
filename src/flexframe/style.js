import { css } from '@bake-js/-o-id/dom'

function style (self) {
  const justifyValue = `flex-${self.justify}`;
  const gap = `var(--spacing_inset-${self.gap})`;
  const padding = `var(--spacing_inset-${self.padding})`

  return css`
    :host {
      display: flex;
      justify-content: ${justifyValue};
      align-items: ${self.align};
      gap: ${gap};
      flex-direction: ${self.direction};
      padding: ${padding};
      width: ${self.width}
    }
  `;
}

export default style;
