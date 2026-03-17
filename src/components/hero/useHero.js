import { useState, useEffect } from "react";

/**
 * useHero
 * Encapsula toda a lógica de comportamento do componente Hero.
 * - Controla animação de entrada (mounted)
 * - Gerencia scroll suave ao clicar na seta
 */
export function useHero({ scrollTargetId = null } = {}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  function handleScrollDown() {
    if (!scrollTargetId) {
      window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
      return;
    }
    const target = document.getElementById(scrollTargetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }

  return { mounted, handleScrollDown };
}