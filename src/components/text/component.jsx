import { useText } from "./useText.js";
import "./style.css";

export default function Text({
  as = "p",
  size = "base",
  weight = "regular",
  color = "default",
  align = "left",
  lineHeight = "normal",
  truncate = false,
  uppercase = false,
  children,
}) {
  const { tag: Tag, classNames } = useText({
    as,
    size,
    weight,
    color,
    align,
    lineHeight,
    truncate,
    uppercase,
  });

  return <Tag className={classNames}>{children}</Tag>;
}