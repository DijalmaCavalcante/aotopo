const sizes = [
  "xs","sm","base","md","lg",
  "xl","2xl","3xl","4xl","5xl",
  "6xl","7xl","8xl","9xl","10xl",
  "heroTitle"
];

const weights = ["regular","medium","semibold","bold"];
const colors = ["default","subtle","muted","inverted","orange","blue","ocean"];
const aligns = ["left","center","right"];
const lineHeights = ["tight","normal","relaxed"];
const fonts = ['principal', 'display'];

export function useText({
  as = "p",
  size = "base",
  weight = "regular",
  color = "default",
  align = "left",
  lineHeight = "normal",
  font = "principal",
  truncate = false,
  uppercase = false,
  hoverEffect
}) {

  const classNames = [
    "text__content",
    `text__content--size-${size}`,
    `text__content--weight-${weight}`,
    `text__content--color-${color}`,
    `text__content--align-${align}`,
    `text__content--lh-${lineHeight}`,
    `text__content--font-${font}`,
    hoverEffect ? `text__content--hoverEffect` : false,
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