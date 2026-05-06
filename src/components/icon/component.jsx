import { icons } from "./icons";
import "./style.css";

function Icon({ model, size = "md", label, color, className }) {
  const content = icons[model];

  if (!content) {
    console.warn(`[Icon] modelo não encontrado: "${model}"`);
    return null;
  }

  const svgClasses = ["icon__svg", `icon__svg--${size}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <span
      className="icon"
      aria-label={label}
      aria-hidden={!label}
      role={label ? "img" : undefined}
    >
      <svg
        className={svgClasses}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        style={color ? { color } : undefined}
        aria-hidden="true"
        focusable="false"
      >
        {content}
      </svg>
    </span>
  );
}

export default Icon
