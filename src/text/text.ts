import { paint, repaint } from "@bake-js/-o-id/dom";
import component from "./component";
import { attributeChanged, define } from "@bake-js/-o-id";
import style from "./style";
import dispatchEvent from "../dispatchEvent";

@define("at-text")
@paint(component, style)
class Text extends HTMLElement {
  #size;
  #weight;
  #align;
  #color;

  get color() {
    return (this.#color ??= "pure-white")
  }

  @attributeChanged("color")
  @dispatchEvent("colorChanged")
  @repaint
  set color(value) {
    this.#color = value;
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

  get size() {
    return (this.#size ??= "xs")
  }

  @attributeChanged("size")
  @dispatchEvent("sizeChanged")
  @repaint
  set size(value) {
    this.#size = value;
  }

  get weight() {
    return (this.#weight ??= "")
  }

  @attributeChanged("weight")
  @dispatchEvent("weightChanged")
  @repaint
  set weight(value) {
    this.#weight = value;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
}

export default Text;
