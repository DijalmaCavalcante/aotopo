import { define } from "@bake-js/-o-id";
import { paint, repaint } from "@bake-js/-o-id/dom";
import component from "./component";
import style from "./style";

@define('at-members')
@paint(component, style)
class Members extends HTMLElement {
  #desktop;
  #mobile;

  get desktop () {
    return (this.#desktop ??= false)
  }

  get mobile () {
    return (this.#mobile ??= false)
  }

  constructor () {
    super()
    this.attachShadow({ mode: "open" })

    this.screenwidth()
  }

  @repaint
  screenwidth () {
    if (window.innerWidth >= 1080) {
      this.#desktop = true;
    } else {
      this.#mobile = true;
    }
  }
}

export default Members
