import styled from 'styled-components';


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
  
)
