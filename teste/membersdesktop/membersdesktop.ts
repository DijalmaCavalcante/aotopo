import { define } from "@bake-js/-o-id";
import { paint, repaint } from "@bake-js/-o-id/dom";
import component from "./component";
import style from "./style";
import on from "@bake-js/-o-id/event"

@define('at-members-desktop')
@paint(component, style)
class Membersdesktop extends HTMLElement {
  #current

  get current () {
    return (this.#current??= 'wallace')
  }

  constructor () {
    super()
    this.attachShadow({ mode: "open" })
  }

  @repaint
  change (member) {       
    this.#current = member
    return this
  }

  @on.click('#beneButton')
  beneButtonClick() {
    this.change('bene')
  }

  @on.click('#dijalmaButton')
  dijalmaButtonClick() {
    this.change('dijalma')
  }

  @on.click('#wallaceButton')
  wallaceButtonClick() {
    this.change('wallace')
  }

  @on.click('#kauanButton')
  kauanButtonClick() {
    this.change('kauan')
  }

  @on.click('#lucasButton')
  lucasButtonClick() {
    this.change('lucas')
  }
}

export default Membersdesktop
