import { html } from '@bake-js/-o-id/dom';

function component () {
  return html`
    <section class="hit">
      <span class="hit__span">Confira nosso último lançamento!</span>
      <at-infomusic class="hit__infomusic"></at-infomusic>
    </section>
  `
}

export default component
