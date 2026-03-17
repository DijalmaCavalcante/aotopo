import Button from "@components/button/component";
import Text from "@components/text/component";
import { useHero } from "./useHero";
import "./style.css";

export default function Hero({
  badge = null,
  title,
  subtitle = null,
  description = null,
  buttons = [],
  socialLinks = [],
  scrollTargetId = null,
}) {
  const { mounted, handleScrollDown } = useHero({ scrollTargetId });

  return (
    <section className={`hero__container${mounted ? " hero__container--visible" : ""}`}>
      <div className="hero__inner">
        {badge && (
          <div className="hero__badge">
            <span className="hero__badgeDot" aria-hidden="true" />
            <Text as="span" size="sm" weight="medium" color="muted">{badge}</Text>
          </div>
        )}
        <div className="hero__content">
          {title && (
            <Text as="h1" size="10xl" weight="bold" color="inverted" lineHeight="tight">{title}</Text>
          )}
          {subtitle && (
            <Text as="p" size="lg" weight="regular" color="muted">{subtitle}</Text>
          )}
          {description && (
            <Text as="p" size="base" weight="regular" color="muted">{description}</Text>
          )}
        </div>
        {buttons.length > 0 && (
          <div className="hero__buttons">
            {buttons.map((btn, index) => (
              <Button
                key={index}
                variant={btn.variant ?? "filled"}
                href={btn.href ?? null}
                onClick={btn.onClick ?? null}
              >
                {btn.icon && (
                  <span className="hero__buttonIcon" aria-hidden="true">
                    {btn.icon}
                  </span>
                )}
                {btn.label}
              </Button>
            ))}
          </div>
        )}
        {socialLinks.length > 0 && (
          <div className="hero__social">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="hero__socialLink"
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="hero__socialIcon" aria-hidden="true">
                  {social.icon}
                </span>
              </a>
            ))}
          </div>
        )}
        <button
          className="hero__scrollDown"
          onClick={handleScrollDown}
          aria-label="Rolar para próxima seção"
          type="button"
        >
          <svg
            className="hero__scrollDownIcon"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

      </div>
    </section>
  );
}