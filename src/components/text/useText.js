export function useText({
  as = "p",
  size = "base",
  weight = "regular",
  color = "default",
  align = "left",
  lineHeight = "normal",
  truncate = false,
  uppercase = false,
}) {
  const classNames = [
    "text__content",
    `text__content--size-${size}`,
    `text__content--weight-${weight}`,
    `text__content--color-${color}`,
    `text__content--align-${align}`,
    `text__content--lh-${lineHeight}`,
    truncate ? "text__content--truncate" : "",
    uppercase ? "text__content--uppercase" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return { tag: as, classNames };
}