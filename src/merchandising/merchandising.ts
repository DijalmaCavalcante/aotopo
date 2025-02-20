import { define } from "@bake-js/-o-id";
import { paint } from "@bake-js/-o-id/dom";
import component from "./component";
import style from "./style";

@define('at-merchandising')
@paint(component, style)
class Merchandising extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: "open" })
  }
}

export default Merchandising
