import { paint } from '@bake-js/-o-id/dom';
import component from './component'
import { define } from '@bake-js/-o-id';
import style from './style'
import Echo from '@bake-js/-o-id/echo'
import on from '@bake-js/-o-id/event'

@define('at-play')
@paint(component, style)
class Play extends Echo(HTMLElement) {
  #internals;

  constructor () {
    super();
    this.attachShadow({ mode: "open" });
    this.#internals = this.attachInternals()
  }

  @on.click(":host *")
  click () {
    const event = new CustomEvent("clicked")
    this.dispatchEvent(event)
    return this
  }

  show () {
    this.#internals.states.delete('hidden')
    return this
  }

  hide () {
    this.#internals.states.add('hidden')
    return this
  }

}

export default Play;

