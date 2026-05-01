const sizes = [
  "xs","sm","base","md","lg",
  "xl","2xl","3xl","4xl","5xl",
  "6xl","7xl","8xl","9xl","10xl"
];

const weights = ["regular","medium","semibold","bold"];
const colors = ["default","subtle","muted","inverted","orange","blue","ocean"];
const aligns = ["left","center","right"];
const lineHeights = ["tight","normal","relaxed"];

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
  /* Validação defensiva */
  if (!sizes.includes(size)) {
    throw new Error(`Invalid size: ${size}`);
  }

  if (!weights.includes(weight)) {
    throw new Error(`Invalid weight: ${weight}`);
  }

  if (!colors.includes(color)) {
    throw new Error(`Invalid color: ${color}`);
  }

  if (!aligns.includes(align)) {
    throw new Error(`Invalid align: ${align}`);
  }

  if (!lineHeights.includes(lineHeight)) {
    throw new Error(`Invalid lineHeight: ${lineHeight}`);
  }

  const classNames = [
    "text__content",
    `text__content--size-${size}`,
    `text__content--weight-${weight}`,
    `text__content--color-${color}`,
    `text__content--align-${align}`,
    `text__content--lh-${lineHeight}`,
    truncate && "text__content--truncate",
    uppercase && "text__content--uppercase",
  ]
    .filter(Boolean)
    .join(" ");

  return {
    tag: as,
    classNames,
  };
}