
import Header from '@components/header/component';
import Hero from '@components/hero/component';
import Text from '@components/text/component';

function App() {

  return (
    <>
      <Header>
      </Header>
      <Hero
        title={
          <>AO TOPO<Text as="span" color="orange">!</Text></>
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
    </>
  )
}

export default App
