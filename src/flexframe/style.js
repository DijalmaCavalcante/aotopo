import { css } from '@bake-js/-o-id/dom'

function style (self) {
  const justifyValue = `${self.justify}`;
  const gap = `var(--spacing_inset-${self.gap})`;
  const padding = `var(--spacing_inset-${self.padding})`

  return css`
    :host {
      align-items: ${self.align};
      display: flex;
      flex-direction: ${self.direction};
      gap: ${gap};
      justify-content: ${justifyValue};
      padding: ${padding};
      width: ${self.width}
    }
  `;
}

export default style;
