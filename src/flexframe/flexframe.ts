import { paint, repaint } from "@bake-js/-o-id/dom";
import component from "./component";
import { attributeChanged, define } from "@bake-js/-o-id";
import style from "./style";
import dispatchEvent from "../dispatchEvent";

@define("at-flexframe")
@paint(component, style)
class Flexframe extends HTMLElement {
  #align;
  #justify;
  #gap;
  #direction;
  #padding;
  #width;

  get width() {
    return (this.#width ??= "auto")
  }

  @attributeChanged("width")
  @dispatchEvent("widthChanged")
  @repaint
  set width(value) {
    this.#width = value;
  }

  get padding() {
    return (this.#padding ??= "")
  }

  @attributeChanged("padding")
  @dispatchEvent("paddingChanged")
  @repaint
  set padding(value) {
    this.#padding = value;
  }

  get direction() {
    return (this.#direction ??= "")
  }

  @attributeChanged("direction")
  @dispatchEvent("directionChanged")
  @repaint
  set direction(value) {
    this.#direction = value;
  }

  get gap() {
    return (this.#gap ??= "xs")
  }

  @attributeChanged("gap")
  @dispatchEvent("gapChanged")
  @repaint
  set gap(value) {
    this.#gap = value;
  }

  get align() {
    return (this.#align ??= "")
  }

  @attributeChanged("align")
  @dispatchEvent("alignChanged")
  @repaint
  set align(value) {
    this.#align = value;
  }

  get justify() {
    return (this.#justify ??= "")
  }

  @attributeChanged("justify")
  @dispatchEvent("justifyChanged")
  @repaint
  set justify(value) {
    this.#justify = value;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
}

export default Flexframe;
