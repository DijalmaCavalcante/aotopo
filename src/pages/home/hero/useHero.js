import { useEffect, useState } from "react";

const SOCIAL_LINKS = [
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/oficialaotopo/",
    icon: "instagram",
  },
  {
    id: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/@AoTopoband/videos",
    icon: "youtube",
  },
  {
    id: "tiktok",
    label: "TikTok",
    href: "https://www.tiktok.com/@aotopooficial",
    icon: "tiktok",
  },
];

export function useHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return {
    isVisible,
    socialLinks: SOCIAL_LINKS,
  };
}