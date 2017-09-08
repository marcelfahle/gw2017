import styled from "styled-components";
import { FormattedHTMLMessage, FormattedMessage } from "react-intl";

const Green = styled.span`color: #51ed06;`;
const Services = styled.ul`
  position: relative;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-bottom: 5em;
`;
const Service = styled.li`
  position: relative;
  z-index: 10;
  text-align: center;
  > img {
    max-width: 430px;
    width: 90%;
    display: block;
    margin: 0 auto;
  }
  @media screen and (min-width: 820px) {
    display: table-cell;
    //padding-left: 1.5%;
    //padding-right: 1.5%;
    width: 33%;
  }
`;
const ServiceTitle = styled.h2`
  color: white;
  text-transform: uppercase;
  display: inline-block;
  line-height: 0.9em;
  padding-bottom: 3px;
  border-bottom: 5px solid #51ed06;
  margin-bottom: 0;

  font-size: 1.3em;
  margin-top: 0.4em;
  @media screen and (min-width: 410px) {
    font-size: 1.6em;
  }
  @media screen and (min-width: 720px) {
    font-size: 2.5em;
  }
  @media screen and (min-width: 820px) {
    font-size: 1.8em;
  }
  @media screen and (min-width: 1020px) {
    font-size: 2.4em;
  }
`;
const ServiceCopy = styled.p`
  font-size: 1rem;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 1em;
  margin-bottom: 3em;
  line-height: 1.4em;
  @media screen and (min-width: 720px) {
    font-size: 1.25rem;
  }
  @media screen and (min-width: 820px) {
    font-size: 1rem;
  }
  @media screen and (min-width: 960px) {
    margin-top: 1.4em;
    font-size: 1.2rem;
  }
`;
const Stripes1 = styled.div`
  top: 16%;
  position: absolute;
  height: 70px;
  background: transparent url('/static/stripes1xl.svg') no-repeat;
  width: calc(100vw);
  margin-left: -40px;
  display: none;
  @media screen and (min-width: 820px) {
    display: block;
  }
  @media screen and (min-width: 1020px) {
    height: 120px;
  }
`;

export default () =>
  <Services>
    <Stripes1 />
    <Service>
      <img
        style={{ marginTop: "-200px" }}
        src="/static/services-websites@2x.png"
        alt="Website Entwicklung."
      />
      <ServiceTitle>
        <FormattedHTMLMessage
          id="services.web.title"
          defaultMessage="Website<br>Entwicklung"
        />
        <Green>.</Green>
      </ServiceTitle>
      <ServiceCopy>
        <FormattedMessage
          id="services.web.copy"
          defaultMessage="Zeigen Sie sich von Ihrer besten Seite: Gedankenwerk sorgt für beeindruckende Web-Auftritte – von Konzeption und Gestaltung bis hin zur Programmierung und Implementierung."
        />
      </ServiceCopy>
    </Service>
    <Service>
      <img src="/static/services-video@2x.png" alt="Video Produktion" />
      <ServiceTitle>
        <FormattedHTMLMessage
          id="services.video.title"
          defaultMessage="Video<br>Produktionen"
        />
        <Green>.</Green>
      </ServiceTitle>
      <ServiceCopy>
        <FormattedMessage
          id="services.video.copy"
          defaultMessage="So beeindruckt man Kunden heute: Gedankenwerk konzipiert und realisiert kreative Imagevideos, die Ihr Unternehmen oder Ihr Produkt fürs Web ins beste Licht rücken."
        />
      </ServiceCopy>
    </Service>
    <Service>
      <img src="/static/services-socialmedia@2x.png" alt="Social Media." />
      <ServiceTitle>
        <FormattedHTMLMessage
          id="services.social.title"
          defaultMessage="Social<br>Media"
        />
        <Green>.</Green>
      </ServiceTitle>
      <ServiceCopy>
        <FormattedMessage
          id="services.social.copy"
          defaultMessage="Kommen Sie schneller ins Gespräch – und zwar auf allen Kanälen: Gedankenwerk entwickelt SocialMedia-Strategien und relevanten Content, der Ihre Zielgruppen fesselt."
        />
      </ServiceCopy>
    </Service>
  </Services>;
