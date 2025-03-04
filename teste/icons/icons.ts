import { paint, repaint } from "@bake-js/-o-id/dom";
import component from "./component";
import { attributeChanged, define } from "@bake-js/-o-id";
import style from "./style";
import dispatchEvent from "../dispatchEvent";

@define("at-icons")
@paint(component, style)
class Icons extends HTMLElement {
  #use;

  get use() {
    return (this.#use ??= "").toLowerCase();
  }

  @attributeChanged("use")
  @dispatchEvent("useChanged")
  @repaint
  set use(value) {
    this.#use = value;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
}

export default Icons;
