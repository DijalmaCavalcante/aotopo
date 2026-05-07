import { useEffect, useRef, useState } from "react";

const STATS = [
  {
    id: "years",
    value: "5+",
    label: "Anos de Estrada",
    color: "orange",
  },
  {
    id: "genres",
    value: "6",
    label: "Gêneros Musicais",
    color: "ocean",
  },
  {
    id: "authentic",
    value: "100%",
    label: "Autêntico",
    color: "blue",
  },
];

export function useAbout() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const current = sectionRef.current;
    if (current) observer.observe(current);

    return () => observer.disconnect();
  }, []);

  return {
    sectionRef,
    isVisible,
    stats: STATS,
  };
}
