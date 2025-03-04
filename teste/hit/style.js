import { css } from '@bake-js/-o-id/dom'
import background from '../assets/backgroundgrafiato.jpg'

function style () {
  return css`
    .hit {
      align-items: center;
      background-image: url(${background});
      background-repeat: round;
      background-size: cover;
      display: flex;
      justify-content: center;
      overflow: hidden;
      padding: var(--spacing_inset-huge) var(--spacing_inset-sm);
      flex-direction: column;
      gap: var(--spacing_inset-sm);
    }

    .hit__infomusic {
      width: 100%;
      max-width: 968px;
    }

    .hit__span {
      font-weight: var(--font-weight-medium);
      color: var(--color-pure-white);
      font-size: var(--font-size-xs);
      text-shadow: 
        2px 2px 0px var(--color-pure-black),
        -2px 2px 0px var(--color-pure-black), 
        2px -2px 0px var(--color-pure-black), 
        -2px -2px 0px var(--color-pure-black);
      text-align: center;
    }
`
}

export default style
