import { LOGO_MAP } from "./logomap.js";

export function useLogo({ variant, size }) {
  const src = LOGO_MAP[variant] ?? null;

  const classNames = [
    "logo__container",
    `logo__container--size-${size}`,
  ].join(" ");

  return { src, classNames };
}
