import "./style.css";
import Text from "@components/text/component";
import allBand from '@assets/allBand.webp'
import { useAbout } from "./useAbout";

function About() {
  const { anosDeCaminhada } = useAbout();
  
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
            <Text className="about__label" size="xs" weight="semibold" color="orange">SOBRE A BANDA</Text>
            <Text.H2 className="about__title" font="display" size="6xl" color="inverted">QUEM SOMOS</Text.H2>
            <div className="about__paragraphs">
              <Text.P className="about__paragraph" size="md" color="muted">
                Somos uma banda
                {' '}
                <Text color='blue' weight='semibold'>autoral</Text>
                {' '}
                de 
                {' '}
                <Text color='orange' weight='semibold'>Guarulhos</Text>
                , com mais de
                {' '}
                <Text color='blue' weight='semibold'>{anosDeCaminhada} anos</Text>
                {' '} 
                de caminhada, unidos por um sonho: ser feliz fazendo o que amamos e transformar em música tudo o que carregamos dentro de nós.
                Nossas composições falam sobre a sobrevivência, a luta, o amor, os desafios do dia a dia e a vontade de seguir em frente. Cada música nasce de experiências, sentimentos e histórias que acreditamos valer a pena compartilhar.
                Assim como nosso Brasil, nosso som é pura mistura. Passeamos pelo rock alternativo, rap, hip hop, MPB, reggae e outras influências que ajudam a construir nossa identidade. Mais do que seguir estilos, buscamos manter a essência e a musicalidade em tudo o que fazemos.
                Acima de tudo, fazemos música de forma verdadeira, autoral e com propósito, sempre mostrando ao mundo o que temos a oferecer.
                <br />
                <Text color='orange' weight='bold'>ANOTA A PLACA.</Text>
              </Text.P>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
