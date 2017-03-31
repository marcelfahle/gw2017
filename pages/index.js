import styled from 'styled-components';

import Layout from '../components/layout'
import Projects from '../components/projects';

const PageHeader = styled.div`
  text-align: center; 
`;
const PageTitle = styled.h1`
  color: white;
  text-transform: uppercase;
  text-align: center;
  border-bottom: 5px solid #51ed06;
  display: inline-block;
  margin-bottom: 1rem;
  line-height: 1em;
  padding-bottom: 3px;
  //width: 80%;
  font-size: 1.4rem;
  @media screen and (min-width: 420px) {
    font-size: 1.6rem;
  }
  @media screen and (min-width: 520px) {
    font-size: 1.8rem;
  }
  @media screen and (min-width: 720px) {
    font-size: 2.8rem;
  }
  @media screen and (min-width: 820px) {
    font-size: 3rem;
    margin-bottom: 0.5em;
  }
  @media screen and (min-width: 960px) {
    font-size: 3.75rem;
  }
  @media screen and (min-width: 1060px) {
    font-size: 4.375rem;
  }

`;
const Intro = styled.p`
  text-align: center;
  margin-top: 0;
  font-size: 1em;
  @media screen and (min-width: 720px) {
    font-size: 1.25em;

  }
`;
const Green = styled.span`
  color: #51ed06;
`;


const Services = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  margin-bottom: 5em;
`;
const Service = styled.li`
  text-align: center;
  > img {
    max-width: 430px;
    width: 90%;
    display: block;
    margin: 0 auto;
  }
  @media screen and (min-width: 820px) {
    display: table-cell;
    padding-left: 1.5%;
    padding-right: 1.5%;
    width: 30%;
  }
`;
const ServiceTitle = styled.h2`
  color: white;
  text-transform: uppercase;
  display: inline-block;
  line-height: 1em;
  padding-bottom: 3px;
  border-bottom: 5px solid #51ed06;
  margin-bottom: 0;
`;
const ServiceCopy = styled.p`
  font-size: 1rem;
  @media screen and (min-width: 720px) {
    font-size: 1.25rem;

  }
`




export default () => (
  <Layout>

    <PageHeader>
      <PageTitle>
        Gedankenwerk:<br/>
        Ideen für die digitale Welt<Green>.</Green>
      </PageTitle>
      <Intro>
        Wir lieben das Web. Und wir entwickeln für unsere Kunden, was das Web liebt: innovative Websites, professionelle Videos und ausgereiften Content für die Sozialen Medien. Das tun wir bei Gedankenwerk für große und kleine Unternehmen – und mit den passenden Spezialisten für jede Herausforderung. Sprechen Sie uns einfach an. Denn mit uns kann man reden.
      </Intro>
    </PageHeader>

    <Services>
      <Service>
        <img src="/static/services-websites@2x.png" alt="Website Entwicklung." />
        <ServiceTitle>
          Website<br/>
          Entwicklung<Green>.</Green>
        </ServiceTitle>
        <ServiceCopy>
          Zeigen Sie sich von Ihrer besten Seite: Gedankenwerk sorgt für beeindruckende Web-Auftritte – von Konzeption und Gestaltung bis hin zur Programmierung und Implementierung.
        </ServiceCopy>
      </Service>
      <Service>
        <img src="/static/services-video@2x.png" alt="Video Produktion" />
        <ServiceTitle>
          Video<br/>
          Produktionen<Green>.</Green>
        </ServiceTitle>
        <ServiceCopy>
          So beeindruckt man Kunden heute: Gedankenwerk konzipiert und realisiert kreative Imagevideos, die Ihr Unternehmen oder Ihr Produkt fürs Web ins beste Licht rücken.
        </ServiceCopy>
      </Service>
      <Service>
        <img src="/static/services-socialmedia@2x.png" alt="Social Media." />
        <ServiceTitle>
          Social<br/>
          Media<Green>.</Green>
        </ServiceTitle>
        <ServiceCopy>
          Kommen Sie schneller ins Gespräch – und zwar auf allen Kanälen: Gedankenwerk entwickelt SocialMedia-Strategien und relevanten Content, der Ihre Zielgruppen fesselt.
        </ServiceCopy>
      </Service>
    </Services>



    <PageHeader>
      <PageTitle>
        Unsere Arbeit<Green>.</Green>
      </PageTitle>
    </PageHeader>
    
    <Projects/>




  </Layout>
);
