import { css } from '@bake-js/-o-id/dom'

function style () {
  return css`
    .banner {
      height: 100vh;
      overflow: hidden;
      position: relative;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .banner__background {
      filter: brightness(0.5);
      height: 100%;
      object-fit: cover;
      position: absolute;
      width: 100%;
    }

    .banner__mouse {
      width: 44px;
      height: 44px;
    }

    .banner__scroll {
      align-items: center;
      align-self: start;
      animation: moveUpDown 2s ease-in-out infinite;
      color: var(--color-pure-white);
      display: flex;
      flex-direction: column;
      height: 44px;
      padding-top: var(--spacing_inset-sm);
      position: absolute;
      width: 100%;
      z-index: 1;
    }

    @keyframes moveUpDown {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }

    .banner__container {
      align-items: center;
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: center;
      position: absolute;
      text-align: center;
      top: 0;
      max-width: 1440px;
      z-index: 1;
    }

    .banner__icons {
      align-self: center;
      background-color: transparent;
      justify-self: center;
      display: flex;
      border-radius: 50%;
      transition: transform 0.3s ease;
      color: white;
      cursor: pointer;
      width: 36px;
      height: 36px;
    }

    .banner__icons:hover {
      transform: scale(1.1);
    }
`
}

export default style
