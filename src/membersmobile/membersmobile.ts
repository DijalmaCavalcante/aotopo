import { charactersArray } from '../characters';
import { define } from "@bake-js/-o-id";
import { paint, repaint } from "@bake-js/-o-id/dom";
import component from "./component";
import on from "@bake-js/-o-id/event";
import style from "./style";

@define('at-members-mobile')
@paint(component, style)
class Membersmobile extends HTMLElement {

  get charactersArray () {
    return charactersArray[0];
  }

  constructor () {
    super()
    this.attachShadow({ mode: "open" })
  }

  @repaint
  @on.click("#prev")
  onPrev() {
    charactersArray.unshift(charactersArray.pop() as any);
  }

  @repaint
  @on.click("#next")
  onNext() {
    charactersArray.push(charactersArray.shift() as any);
  }
}

export default Membersmobile
