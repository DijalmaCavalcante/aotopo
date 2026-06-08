import { useEffect, useRef, useState } from "react";

export function useMusic() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const streamingPlatforms = [
    { name: "Spotify",       href: "#", icon: "spotify"       },
    { name: "Apple Music",   href: "#", icon: "appleMusic"    },
    { name: "YouTube Music", href: "https://www.youtube.com/@AoTopoband/videos", icon: "youtubeMusicOutlined" },
    { name: "Deezer",        href: "#", icon: "deezer"        },
    { name: "SoundCloud",    href: "#", icon: "soundcloud"    },
  ];

  return { sectionRef, isVisible, streamingPlatforms };
}