import { css } from '@bake-js/-o-id/dom'

function style (self) {
  const justifyValue = `flex-${self.justify}`;
  const alignValue = `flex-${self.align}`;
  const gap = `var(--spacing_inset-${self.gap})`;

  return css`
    :host {
      display: flex;
      justify-content: ${justifyValue};
      align-items: ${alignValue};
      gap: ${gap};
      flex-direction: ${self.direction}
    }
  `;
}

export default style;
