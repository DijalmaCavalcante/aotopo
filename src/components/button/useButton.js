import { useCallback } from "react";

/**
 * useButton
 * Encapsula toda a lógica de comportamento do componente Button.
 * - Gerencia modo anchor vs button
 * - Bloqueia interações quando disabled ou loading
 * - Expõe props computadas prontas para o JSX
 */
export function useButton({
  href = null,
  disabled = false,
  loading = false,
  onClick = null,
  type = "button",
}) {
  const isInteractionBlocked = disabled || loading;

  const handleClick = useCallback(
    (event) => {
      if (isInteractionBlocked) {
        event.preventDefault();
        return;
      }
      if (onClick) onClick(event);
    },
    [isInteractionBlocked, onClick]
  );

  const isAnchorMode = href !== null && !isInteractionBlocked;

  const sharedProps = {
    onClick: handleClick,
    "aria-disabled": isInteractionBlocked,
    tabIndex: isInteractionBlocked ? -1 : 0,
  };

  const buttonProps = {
    ...sharedProps,
    type,
    disabled: isInteractionBlocked,
  };

  const anchorProps = {
    ...sharedProps,
    href: isAnchorMode ? href : undefined,
    role: "button",
    rel: "noopener noreferrer",
  };

  return {
    isAnchorMode,
    isInteractionBlocked,
    buttonProps,
    anchorProps,
  };
}