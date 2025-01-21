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

    .footer-email {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        margin-bottom: 10px;
    }

    .footer-email:hover {
        text-decoration: underline;
    }

    .footer-social-icons {
        margin-top: 10px;
    }

    .social-icon {
        margin: 0 5px;
        display: inline-block;
    }

    .social-icon img {
        width: 24px;
        height: 24px;
    }

    .footer-content::after {
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background-color: #fff;
        margin: 10px 0;
    }

    .footer-copyright {
        font-size: 14px;
        margin-top: 10px;
    }

  `
}

export default style
