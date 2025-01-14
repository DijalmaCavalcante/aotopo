import { attributeChanged, define } from '@bake-js/-o-id';
import { paint, repaint } from '@bake-js/-o-id/dom';
import component from './component'
import Echo from '@bake-js/-o-id/echo'
import style from './style'

@define('at-music-duration')
@paint(component, style)
class Musicduration extends Echo(HTMLElement) {
  #time

  @attributeChanged('time')
  @repaint
  set time(value) {
    this.#time = value;
  }

  get time () {
    return this.#time ??= '0:00'
  }

  constructor () {
    super();
    this.attachShadow({ mode: "open" });
  }

  

}

export default Musicduration;

