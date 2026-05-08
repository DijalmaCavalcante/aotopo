import "./style.css";
import Text from "@components/text/component";
import allBand from '@assets/allBand.webp'

function About() {

  return (
    <section id="sobre" className="about">
      <div className="about__sectionSeparation" />
      <div className="about__bgBlob" />
      <div className="about__container">
        <div className='about__grid'>
          <div>
            <div className="about__visualFrame">
              <div className="about__visualBorder" />
              <div className="about__visualCard">
                <img src={allBand} className='about__bandImg'/>
                <div className="about__visualOverlay" />
              </div>
              <div className="about__blobOrange" />
            <div className="about__blobBlue" />
          </div>
          </div>
          <div className="about__content">
            <Text size="xs" weight="semibold" color="orange" uppercase className="about__label">Sobre a Banda</Text>
            <Text.H2 font="display" size="6xl" color="inverted" className="about__title">QUEM SOMOS</Text.H2>
            <div className="about__paragraphs">
              <Text.P size="md" color="subtle" lineHeight="relaxed" className="about__paragraph">
                A banda{" "}
                <Text as="strong" weight="semibold" color="inverted">Ao Topo!</Text>{" "}
                nasceu em março de 2021, em Guarulhos/SP, daqueles rolês
                aleatórios que viraram conexão de verdade. A vibe? É uma
                mistura doida de tudo que é bom: do peso do rock nacional,
                passando pela malandragem do samba, até a consciência do rap
                e a leveza da MPB.
              </Text.P>
              <Text.P size="md" color="subtle" lineHeight="relaxed" className="about__paragraph">
                Somos underground, somos viscerais. Nossas letras falam sobre
                viver de verdade, amar sem medo e buscar se conhecer nessa
                jornada louca que é a vida. Cada música é um processo
                colaborativo, experimental, sem fórmulas prontas.
              </Text.P>
              <Text.P size="md" color="subtle" lineHeight="relaxed" className="about__paragraph">
                De{" "}
                <Text as="span" color="orange">Charlie Brown Jr.</Text>
                {" "}a{" "}
                <Text as="span" color="ocean">Djavan</Text>, de{" "}
                <Text as="span" color="orange">O Rappa</Text>{" "}a{" "}
                <Text as="span" color="ocean">Chico Buarque</Text>
                {" "}— bebemos de várias fontes pra criar algo nosso, algo
                real, algo que conecta.
              </Text.P>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
