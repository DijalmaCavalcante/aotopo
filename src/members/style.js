import { css } from '@bake-js/-o-id/dom'

function style () {
  return css`
    .members {
      align-items: center;
      display: flex;
      height: 100vh;
      justify-content: center;
      overflow: hidden;
      position: relative;
      width: 100%;
    }

    .members_background {
      background-repeat: no-repeat;
      filter: brightness(0.3);
      height: 100%;
      object-fit: cover;
      position: absolute;
      width: 100%;
    }

    .teste1 {
      align-items: center;
      display: flex;
      height: 100%;
      justify-content: center;
      max-width: 1280px;
      position: absolute;
      text-align: center;
      top: 0;
      width: 100%;
      z-index: 1;
    }

    .desktop {
      display: none;
    }

    .mobile {
      display: none;
    }

    .desktop[desktop = 'true'] {
      display: block;
    }

    .mobile[mobile = 'true'] {
      display: block;
    }
  `
}

export default style
