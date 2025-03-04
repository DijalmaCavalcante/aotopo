import { css } from '@bake-js/-o-id/dom'

function style () {
  return css`
    .footer {
      background-color: #1b1b1b;
      display: flex;
      justify-content: center;
      width: 100%;
    }

    .footer__container {
      align-items: center;
      border-bottom: 1px solid var(--color-pure-white);
      display: flex;
      flex-direction: column;
      gap: var(--spacing_inset-xs);
      justify-content: center;
      margin-bottom: var(--spacing_inset-xs);
      max-width: 1280px;
      padding: var(--spacing_inset-xs);
      width: 90%;

      img {
        width: 104px;
      }
    }

    @media(width >= 596px) {
      .footer__container {
        flex-direction: row;
        justify-content: space-between;
      }
    }

    .footer__social {
      display: flex;
      gap: var(--spacing_inset-xs);
    }

  `
}

export default style
