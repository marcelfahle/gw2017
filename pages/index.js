import styled from 'styled-components';

import Layout from '../components/layout'
import Projects from '../components/projects';

const PageHeader = styled.div`
  
`;
const PageTitle = styled.h1`
  color: white;
  text-transform: uppercase;
  text-align: center;
  border-bottom: 5px solid #51ed06;
  margin-left: 50%;
  transform: translateX(-50%);
  display: inline-block;
  margin-bottom; 20px;

`;
const Intro = styled.p`
  text-align: center;
  margin-top: 0;
`;
const Green = styled.span`
  color: #51ed06;
`;


const Services = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const Service = styled.li`
  text-align: center;
  > img {
    max-width: 430px;
    width: 90%;
  }
`;
const ServiceTitle = styled.h2`
  color: white;
  text-transform: uppercase;
`;




export default () => (
  <Layout>

    <PageHeader>
      <PageTitle>
        Agentur<br/>
        <Green>Gedanken</Green>werk<Green>.</Green>
      </PageTitle>
      <Intro>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.
      </Intro>
    </PageHeader>

    <Services>
      <Service>
        <img src="/static/services-websites@2x.png" alt="Website Entwicklung." />
        <ServiceTitle>
          Website<br/>
          Entwicklung<Green>.</Green>
        </ServiceTitle>
        <p>
          Aussergewöhnliche Websites von der Konzeption über die Gestaltung bis hin zur Programmierung und Implementierung – alles aus Sicht Ihrer Ziele und Ihrer Zielgruppe. 
        </p>
      </Service>
      <Service>
        <img src="/static/services-video@2x.png" alt="Video Produktion" />
        <ServiceTitle>
          Video<br/>
          Produktionen<Green>.</Green>
        </ServiceTitle>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam.
        </p>
      </Service>
      <Service>
        <img src="/static/services-socialmedia@2x.png" alt="Social Media." />
        <ServiceTitle>
          Social<br/>
          Media<Green>.</Green>
        </ServiceTitle>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam.
        </p>
      </Service>
    </Services>

    
    <Projects/>




  </Layout>
);
