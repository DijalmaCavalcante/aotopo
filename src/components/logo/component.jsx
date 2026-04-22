import { useLogo } from "./uselogo";
import "./style.css";

export default function Logo({
  variant = "brancoTexturaSf",
  size = "md",
}) {
  const { src, classNames } = useLogo({ variant, size });

  if (!src) {
    if (process.env.NODE_ENV === "development") {
      console.warn(`[Logo] Variante "${variant}" não encontrada no LOGO_MAP.`);
    }
    return null;
  }

  return (
    <div className={classNames}>
      <img
        className="logo__image"
        src={src}
        alt="AO TOPO!"
        draggable={false}
      />
    </div>
  );
}