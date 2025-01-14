import { html } from '@bake-js/-o-id/dom';
import music from './music.mp3'

function component () {
  return html`
    <audio >
      <source src="${music}" type="audio/mpeg">
    </audio> 
  `
}

export default component
