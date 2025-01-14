import { html } from '@bake-js/-o-id/dom';
import bene1 from './assets/bene1.jpg';
import bene2 from './assets/bene2.jpg';
import dijalma1 from './assets/dijalma1.jpg';
import dijalma2 from './assets/dijalma2.jpg';
import kauan1 from './assets/kauan1.jpg';
import kauan2 from './assets/kauan2.jpg';
import lucas1 from './assets/lucas1.jpg';
import lucas2 from './assets/lucas2.jpg';
import wallace1 from './assets/wallace1.jpg';
import wallace2 from './assets/wallace2.jpg';
import todos from './assets/todos.png';



function component () {  
  return html`
    <section class="pictures">
      <div class="pictures__container">
        <img src="${bene1}" alt="photo 1">
        <img src="${kauan1}" alt="photo 9">
        <img src="${wallace1}" alt="photo 3">
        <img src="${lucas1}" alt="photo 4">
        <img src="${dijalma1}" alt="photo 2">
        <img src="${kauan2}" alt="photo 5">
        <img src="${bene2}" alt="photo 1">
        <img src="${lucas2}" alt="photo 10">
        <img src="${dijalma2}" alt="photo 2">
        <img src="${wallace2}" alt="photo 6">
        <img src="${todos}" alt="photo 6">
      </div>
    </section>


  `
}

export default component
