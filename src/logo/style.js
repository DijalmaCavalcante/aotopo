import { css } from '@bake-js/-o-id/dom'

function style () {
  return css`
    .banner_logo {
      width: 500px;
      z-index: 1;
    }

    @media(width >= 500px) {
      .banner_logo {
        width: 100%;
      }
    }

    @media(width >= 768px) {
      .banner_logo {
        width: 70%;
      }
    }

    @media(width >= 1000px) {
      .banner_logo {
        width: 60%;
      }
    }

    @media(width >= 1200px) {
      .banner_logo {
        width: 50%;
      }
    }
`
}

export default style
