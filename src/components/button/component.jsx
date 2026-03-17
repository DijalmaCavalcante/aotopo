import { useButton } from "./useButton.js";
import "./style.css";

export default function Button({
  variant = "filled",
  disabled = false,
  loading = false,
  href = null,
  type = "button",
  onClick = null,
  children,
}) {
  const { isAnchorMode, isInteractionBlocked, buttonProps, anchorProps } =
    useButton({ href, disabled, loading, onClick, type });

  const className = [
    "button__container",
    `button__container--${variant}`,
    isInteractionBlocked ? "button__container--blocked" : "",
    loading ? "button__container--loading" : "",
    disabled ? "button__container--disabled" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {loading && <span className="button__spinner" aria-hidden="true" />}
      <span className={`button__label${loading ? " button__label--hidden" : ""}`}>
        {children}
      </span>
    </>
  );

  if (isAnchorMode) {
    return (
      <a className={className} {...anchorProps}>
        {content}
      </a>
    );
  }

  return (
    <button className={className} {...buttonProps}>
      {content}
    </button>
  );
}
