import Hero from '@components/hero/component';

function HomeHero () {
  return (
    <Hero
      title={
        <>AO TOPO<span style={{ color: "var(--color-orange)" }}>!</span></>
      }
      buttons={[
      {
        label: "Ouça Fazer Valer",
        variant: "filled",
        href: "https://open.spotify.com/",
      },
      {
        label: "Conheça a Banda",
        variant: "outlined",
        href: "/sobre",
      },
      ]}
      socialLinks={[
        { label: "Instagram", href: "https://instagram.com/aotopo", },
        { label: "YouTube",   href: "https://youtube.com/aotopo",   },
        { label: "TikTok",    href: "https://tiktok.com/@aotopo",   },
      ]}
      scrollTargetId="sobre"
    />
  );
}

export default HomeHero;
