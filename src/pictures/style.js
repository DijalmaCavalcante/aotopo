import { css } from '@bake-js/-o-id/dom'


function style () {
  return css`
    .pictures {
      background-color: #1b1b1b;
      width: 100%;
    }

    .pictures__container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: 150px;
      grid-gap: 10px;
      max-width: 1280px;
      margin: 0 auto;
      padding: var(--spacing_inset-xs);
    }

    @media(width >= 768px) {
      .pictures__container {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .pictures__container img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 5px;
    }

    .pictures__container img:nth-child(1) { grid-column: span 1; grid-row: span 1; }
    .pictures__container img:nth-child(2) { grid-column: span 1; grid-row: span 1; }
    .pictures__container img:nth-child(3) { grid-column: span 1; grid-row: span 1; }
    .pictures__container img:nth-child(4) { grid-column: span 1; grid-row: span 1; }
    .pictures__container img:nth-child(5) { grid-column: span 1; grid-row: span 1; }
    .pictures__container img:nth-child(6) { grid-column: span 1; grid-row: span 1; }
    .pictures__container img:nth-child(7) { grid-column: span 1; grid-row: span 1; }
    .pictures__container img:nth-child(8) { grid-column: span 1; grid-row: span 1; }
    .pictures__container img:nth-child(9) { grid-column: span 1; grid-row: span 1; }
    .pictures__container img:nth-child(10) { display: none; }
    .pictures__container img:nth-child(11) { grid-column: span 3; grid-row: span 1; }

    @media(width >= 768px) {
      .pictures__container img:nth-child(1) { grid-column: span 1; grid-row: span 3; }
      .pictures__container img:nth-child(2) { grid-column: span 1; grid-row: span 2; }
      .pictures__container img:nth-child(3) { grid-column: span 1; grid-row: span 3; }
      .pictures__container img:nth-child(4) { grid-column: span 1; grid-row: span 2; }
      .pictures__container img:nth-child(5) { grid-column: span 1; grid-row: span 3; }
      .pictures__container img:nth-child(6) { grid-column: span 1; grid-row: span 3; }
      .pictures__container img:nth-child(7) { grid-column: span 1; grid-row: span 3; }
      .pictures__container img:nth-child(8) { grid-column: span 1; grid-row: span 3; }
      .pictures__container img:nth-child(9) { grid-column: span 1; grid-row: span 3; }
      .pictures__container img:nth-child(10) { grid-column: span 1; grid-row: span 2; display: block; }
      .pictures__container img:nth-child(11) { grid-column: span 3; grid-row: span 3; }
    }
  `
}

export default style
