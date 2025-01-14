import { paint, repaint } from '@bake-js/-o-id/dom';
import component from './component'
import { attributeChanged, define, on } from '@bake-js/-o-id';
import style from './style'
import Echo from '@bake-js/-o-id/echo'
import on from '@bake-js/-o-id/event'

@define('at-progress')
@paint(component, style)
class Progress extends Echo(HTMLElement) {
  #value

  @attributeChanged('value')
  @repaint
  set value (value) {    
    this.#value = value
  }

  get value () {
    return this.#value ??= 0
  }

  constructor () {
    super();
    this.attachShadow({ mode: "open" });
  }

  @on.click(":host *")
  click () {
    const event = new CustomEvent("clicked")
    this.dispatchEvent(event)

    return this
  }

}

export default Progress;

