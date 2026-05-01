import { useText } from "./useText.js";
import "./style.css";

function Text({
  as = "p",
  size = "base",
  weight = "regular",
  color = "default",
  align = "left",
  lineHeight = "normal",
  truncate = false,
  uppercase = false,
  children,
  className = "",
  ...rest
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

  return (
    <Tag className={`${classNames} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}

/* Factory */
function createTextComponent(defaultTag, defaultProps = {}) {
  return function Variant(props) {
    return (
      <Text
        as={defaultTag}
        {...defaultProps}
        {...props}
      />
    );
  };
}

/* Variantes */
Text.A = createTextComponent("a");
Text.P = createTextComponent("p");
Text.Span = createTextComponent("span");

Text.H1 = createTextComponent("h1", {
  size: "4xl",
  weight: "bold",
});

Text.H2 = createTextComponent("h2", {
  size: "3xl",
  weight: "bold",
});

Text.H3 = createTextComponent("h3", {
  size: "2xl",
  weight: "semibold",
});

export default Text;