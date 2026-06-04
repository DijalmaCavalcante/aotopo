import "./style.css";
import Text from "@components/text/component";
import allBand from '@assets/allBand.webp'

function About() {
  const inicioDaBanda = 2021;
  const anosDeCaminhada = new Date().getFullYear() - inicioDaBanda;
  
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
                Somos uma banda 
                <Text color='blue' weight='semibold'>autoral</Text>
                 de 
                 <Text color='orange' weight='semibold'>Guarulhos</Text>
                 , formada por quatro pessoas que há mais de
                {' '}
                <Text color='blue' weight='semibold'>{anosDeCaminhada} anos</Text>
                {' '} 
                compartilham a mesma caminhada, o mesmo sonho e a mesma vontade de transformar sentimentos em música. Nosso objetivo sempre foi simples: ser feliz fazendo o que amamos e dar voz a tudo aquilo que carregamos por dentro.
                Nossas composições falam sobre a sobrevivência na vida, os desafios, o amor em suas diferentes formas e a vontade de seguir em frente, mesmo quando o caminho parece difícil. Cada música nasce de experiências reais, reflexões sinceras e histórias que acreditamos merecer ser contadas.
                Assim como o Brasil, nosso som é feito de mistura. Entre o rock alternativo, o rap, a MPB, o reggae, o funky soul e tudo aquilo que faça sentido no momento. Não acreditamos em rótulos rígidos. Acreditamos na música como linguagem, sentimento e conexão.
                Acima de qualquer estilo, buscamos preservar nossa essência: criar algo verdadeiro, autoral e humano. Música feita por quem vive, sente, erra, aprende e continua seguindo em frente.
                Porque, no fim, cada canção é um pedaço da nossa história.
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
