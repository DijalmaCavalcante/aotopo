import { css } from '@bake-js/-o-id/dom'

function style () {
  return css`
    .footer {
      background-color: #1b1b1b;
      width: 100%;
      display: flex;
      justify-content: center;
    }
    
    .footer__container {
      align-items: center;
      display: flex;
      max-width: 1280px;
      padding: var(--spacing_inset-md);
      width: 100%;
      justify-content: space-between;
      border-bottom: 1px solid var(--color-pure-white);
      margin-bottom: var(--spacing_inset-lg);
    }

    .footer-content {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .footer__logo {
      max-width: 100px;
    }

    .footer__link {
      text-decoration: none;
    }

  `
}

export default style
