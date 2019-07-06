import React from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import pageWithIntl from '../components/page_with_intl';
import {FormattedMessage, FormattedHTMLMessage} from 'react-intl';
import fetch from 'isomorphic-unfetch';

import data from '../static/data.json';

import Layout from '../components/layout';
import Projects from '../components/projects';
import Services from '../components/services';
import Offer from '../components/offer';

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;
const PageTitle = styled.h1`
  color: white;
  text-transform: uppercase;
  text-align: center;
  border-bottom: 5px solid #51ed06;
  display: inline-block;
  margin-bottom: 0.4em;
  margin-top: 0.5em;
  line-height: 1em;
  padding-bottom: 3px;
  //width: 80%;
  font-size: 1.4rem;
  letter-spacing: 0.1px;
  font-weight: 800;
  @media screen and (min-width: 410px) {
    font-size: 1.9rem;
  }
  @media screen and (min-width: 520px) {
    font-size: 2.2rem;
  }
  @media screen and (min-width: 720px) {
    font-size: 2.8rem;
    border-bottom: 7px solid #51ed06;
  }
  @media screen and (min-width: 820px) {
    font-size: 3rem;
    margin-bottom: 0.4em;
  }
  @media screen and (min-width: 960px) {
    font-size: 3.75rem;
  }
  @media screen and (min-width: 1060px) {
    font-size: 4.375rem;
    border-bottom: 9px solid #51ed06;
  }
`;
const Intro = styled.p`
  text-align: center;
  margin-top: 0;
  font-size: 1em;
  line-height: 1.3em;
  max-width: 90%;
  margin: 0 auto;
  strong {
    color: white;
    font-weight: bold;
  }
  @media screen and (min-width: 720px) {
    font-size: 1.25em;
    max-width: 75%;
  }
  @media screen and (min-width: 960px) {
    max-width: 75%;
  }
  @media screen and (min-width: 1020px) {
    max-width: 75%;
  }
  @media screen and (min-width: 1280px) {
    max-width: 68%;
  }
  @media screen and (min-width: 1400px) {
    max-width: 50%;
  }
`;
const Green = styled.span`
  color: #51ed06;
`;
const Handschrift = styled.p`
  margin-bottom: -40px;
  img {
    width: 100%;
    max-width: 600px;
  }
`;

const LoadMoreButton = styled.a`
  color: white;
  display: inline-block;
  text-align: center;
  line-height: 1.5rem;
  background: #51ed06;
  padding: 8px 20px;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1.2rem;
`;
const LoadMoreButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const Stripes2 = styled.div`
  height: 54px;
  background: transparent url('/static/stripes2xl.svg') no-repeat;
  width: calc(100vw);
  margin-left: -10px;
  @media screen and (min-width: 480px) {
    margin-left: -40px;
    width: calc(100vw);
  }
`;

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loadedOnce: true,
      projectsNum: 52,
      totalProjectsNum: 0,
    };
    //totalProjectsNum: data.projects.length,

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  showMoreProjects(e) {
    e.preventDefault();
    this.setState({
      projectsNum: this.state.projectsNum + 5,
      loadedOnce: true,
    });
  }

  loadMoreButton() {
    return (
      <LoadMoreButtonWrapper>
        <LoadMoreButton
          rel="noopener"
          href="#"
          onClick={this.showMoreProjects.bind(this)}>
          Mehr..
        </LoadMoreButton>
      </LoadMoreButtonWrapper>
    );
  }

  handleScroll() {
    const windowHeight =
      'innerHeight' in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight,
    );
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight - 350 && this.state.loadedOnce) {
      this.showMoreProjects({preventDefault: () => null});
    } else {
    }
  }

  render() {
    const {projects} = data;
    return (
      <Layout>
        <PageHeader>
          <PageTitle>
            Ideen für die Digitale Welt<Green>.</Green>
          </PageTitle>
          <Intro>
            <FormattedHTMLMessage
              id="page_intro"
              defaultMessage="Wir lieben das Web. Und wir entwickeln für unsere Kunden, was das Web liebt: innovative Websites, professionelle Videos und ausgereiften Content für die Sozialen Medien. Das tun wir bei Gedankenwerk seit über 15 Jahren für große und kleine Unternehmen – und mit den passenden Spezialisten für jede Herausforderung. Sprechen Sie uns einfach an. Denn mit uns kann man reden."
            />
          </Intro>
        </PageHeader>

        <Services />

        <Stripes2 />

        <PageHeader>
          <PageTitle>
            Eine Handschrift<Green>.</Green>
          </PageTitle>
          <Intro>
            <FormattedHTMLMessage
              id="page_intro2"
              defaultMessage="<strong>Online-Konzepte, Webseiten, Filme und Social-Media. Alles aus einer Hand.</strong><br>Für die Wahrnehmung und die Wiedererkennbarkeit ist es wichtig, dass alles aus einem Guss ist. Das ist keine neue Erkenntnis. Gedankenwerk erstellt alles Digitale in einem Look. Vom Konzept der Webseite und deren Erstellung, die Produktion eines Image-, Marken- oder Produktfilmes zum Einsatz auf dieser Webseite bis hin zum Content für Ihre Social-Media Kanäle – kurz: Eine Handschrift.<br><br>Dabei steckt Leidenschaft in jeder einzelnen Disziplin, die wir ohne das Gesamtpaket anbieten, wobei wir das große Ganze niemals aus den Augen verlieren."
            />
          </Intro>
          <Handschrift>
            <br />
            <img src="/static/Handschrift_2@2x.png" />
          </Handschrift>
        </PageHeader>

        <Stripes2 />

        <PageHeader>
          <PageTitle>
            Unsere Arbeit<Green>.</Green>
          </PageTitle>
        </PageHeader>

        <Projects projects={projects} projectsNum={this.state.projectsNum} />

        {!this.state.loadedOnce ? this.loadMoreButton() : ''}
      </Layout>
    );
  }
}

//const data = {
//  projects: [
//    {
//      type: 'url',
//      url: 'https://mgbessen.de',
//      img: '/static/project-mgbsite.png',
//      size: '4',
//      title: 'Städtisches Mädchengymnasium Borbeck<br/>Website',
//    },
//    {
//      type: 'video',
//      url: 'https://vimeo.com/285500475',
//      img: '/static/project-telekom1.jpg',
//      size: '4',
//      title: 'Deutsche Telekom:<br/>Neue Sporterfahrung - Blindenfußball',
//    },
//    {
//      type: 'video',
//      url: 'https://vimeo.com/286004839',
//      img: '/static/project-mgbfilm.jpg',
//      size: '2',
//      title: 'Städtisches Mädchengymnasium Borbeck:<br/>Imagefilm',
//    },
//    {
//      type: 'video',
//      url: 'https://www.youtube.com/watch?v=Ize61mw_ylc',
//      img: '/static/project-canon1.jpg',
//      size: '2',
//      title: 'Canon Deutschland:<br/>Lass es raus',
//    },
//
//    {
//      type: 'video',
//      url: 'https://www.youtube.com/watch?v=CYfB6gIrItg',
//      img: '/static/project-canon2.jpg',
//      size: '2',
//      title: 'Canon Spot "Lass es raus":<br/>Making-Of',
//    },
//
//    {
//      type: 'video',
//      url: 'https://vimeo.com/271828373',
//      img: '/static/project-musikmenschen3.jpg',
//      size: '2',
//      title: 'HiFi-Pawlak präsentiert:<br/>MUSIKMENSCHEN Folge 3',
//    },
//
//    {
//      type: 'video',
//      url: 'https://vimeo.com/269345531',
//      img: '/static/project-musikmenschen2.jpg',
//      size: '2',
//      title: 'HiFi-Pawlak präsentiert:<br/>MUSIKMENSCHEN Folge 2',
//    },
//    {
//      type: 'video',
//      url: 'https://vimeo.com/263708440',
//      img: '/static/project-musikmenschen1.jpg',
//      size: '2',
//      title: 'HiFi-Pawlak präsentiert:<br/>MUSIKMENSCHEN Folge 1',
//    },
//
//    {
//      type: 'video',
//      url: 'https://youtu.be/CKUzYWfMCNs',
//      img: '/static/project-kamrad.jpg',
//      size: '4',
//      title: 'Musikvideo<br/>Tim Kamrad - Ruin Me',
//    },
//
//    {
//      type: 'video',
//      url: 'https://vimeo.com/274834217',
//      img: '/static/project-mako.jpg',
//      size: '2',
//      title: 'Out of Bounds<br/>Mako 2018',
//    },
//    {
//      type: 'video',
//      url: 'https://vimeo.com/268284350',
//      img: '/static/project-workitout.png',
//      size: '2',
//      title: 'Zeche Zollverein<br/>Work it out (ERIH)',
//    },
//
//    {
//      type: 'video',
//      url: 'https://vimeo.com/237192469',
//      img: '/static/project-kabue.jpg',
//      size: '2',
//      title: 'Corporate Video<br/>KaBü ANNA RÜ',
//    },
//    {
//      type: 'video',
//      url: 'https://vimeo.com/258937652',
//      img: '/static/project-drk-muehleim.jpg',
//      size: '2',
//      title: 'Deutsches Rotes Kreuz<br/>Kindertageseinrichtung Mülheim',
//    },
//
//    {
//      type: 'video',
//      url: 'https://www.youtube.com/watch?v=QwuHeQJMRpA',
//      img: '/static/project-albanese.jpg',
//      size: '2',
//      title: 'Albanese Music<br/>Weihnachtszeit 2017',
//    },
//    {
//      type: 'video',
//      url: 'https://vimeo.com/246472349',
//      img: '/static/project-haut.png',
//      size: '2',
//      title: 'Corporate Video<br/>Hautästheten',
//    },
//
//    {
//      type: 'video',
//      url: 'https://vimeo.com/262372508',
//      img: '/static/project-extraklang.jpg',
//      size: '1',
//      title:
//        'Folkwang Kammerorchester Esssen<br/>ExtraKlang I - Von Göttern und Sagen',
//    },
//
//    {
//      type: 'url',
//      url: 'http://cebit2016.gedankenwerk-hosting.com/',
//      img: '/static/project-smartideas.png',
//      size: '1',
//      title: 'SMART IDEAS<br/>SMARTER BUSINESS',
//    },
//    {
//      type: 'video',
//      url: 'https://vimeo.com/231114292',
//      img: '/static/project-hugenpoet.jpg',
//      size: '2',
//      title: 'Schlosshotel Hugenpoet<br/>Tag der offenen Tür',
//    },
//    {
//      type: 'video',
//      url: 'https://www.youtube.com/watch?v=l9UIEGmSvG0',
//      img: '/static/project-p20.jpg',
//      size: '1',
//      title: 'YouTube Channel<br/>Huawei P20 Pro',
//    },
//    {
//      type: 'video',
//      url: 'https://www.youtube.com/watch?v=gF7G6Oha7Cs&feature=youtu.be',
//      img: '/static/project-imagefilm.jpg',
//      size: '1',
//      title: 'Behind the scenes<br/>So entsteht ein Imagefilm',
//    },
//
//    {
//      type: 'video',
//      url: 'https://vimeo.com/258316377',
//      img: '/static/project-drk-blankenheim.jpg',
//      size: '2',
//      title: 'Deutsches Rotes Kreuz<br/>Kreisverband Euskirchen',
//    },
//    {
//      type: 'video',
//      url: 'https://vimeo.com/259297752',
//      img: '/static/project-drk-einleitung.jpg',
//      size: '2',
//      title: 'Deutsches Rotes Kreuz<br/>AquaFun - KiTaFit',
//    },
//
//    {
//      type: 'video',
//      url: 'https://vimeo.com/221903048',
//      img: '/static/project-hoerstken.jpg',
//      size: '1',
//      title: "CORPORATE VIDEO:<br/>Hörstken's Gärten",
//    },
//    {
//      type: 'video',
//      url: 'https://vimeo.com/232815776',
//      img: '/static/project-pilgrim.jpg',
//      size: '1',
//      title: 'Corporate Video<br/>Pilgrim - Recruiting',
//    },
//    {
//      type: 'video',
//      url: 'https://vimeo.com/226290147',
//      img: '/static/project-pawlak2.jpg',
//      size: '2',
//      title: 'CORPORATE VIDEO:<br/>Hifi-Pawlak',
//    },
//    {
//      type: 'category',
//      title: 'KREATIVE<br/>KONZEPTE',
//    },
//    {
//      type: 'video',
//      url: 'https://youtu.be/BoQsdsJZnOw',
//      img: '/static/project-kamradtour.jpg',
//      size: '1',
//      title: 'Tim Kamrad<br/>Tour Diary Dresden',
//    },
//
//    {
//      type: 'video',
//      url: 'https://vimeo.com/244304286',
//      img: '/static/project-dieschoepfung.jpg',
//      size: '2',
//      title: 'Haydn - Die Schöpfung<br/>Erlöserkirche',
//    },
//    {
//      type: 'video',
//      url: 'https://vimeo.com/253811727',
//      img: '/static/project-hornsound.jpg',
//      size: '2',
//      title: 'German Hornsound<br/>hornlikes CD-Release',
//    },
//
//    {
//      type: 'video',
//      url: 'https://youtu.be/mxuPsbFKjPE',
//      img: '/static/project-kamradtour2.jpg',
//      size: '1',
//      title: 'Tim Kamrad<br/>Tour Diary Frankfurt',
//    },
//    {
//      type: 'url',
//      url: 'http://inflight-presentation.gedankenwerk-hosting.com/',
//      img: '/static/project-inflight.png',
//      size: '1',
//      title: 'INFLIGHT WIRELESS<br/>CONNECTIVITY',
//    },
//    {
//      type: 'video',
//      url: 'https://vimeo.com/225648713',
//      img: '/static/project-ledermanufaktur.jpg',
//      size: '2',
//      title: 'CORPORATE VIDEO:<br/>Mays Berlin - Ledermanufaktur',
//    },
//    {
//      type: 'category',
//      title: 'Responsive<br/>Websites',
//    },
//    {
//      type: 'video',
//      url: 'https://vimeo.com/261442813',
//      img: '/static/project-ihk1.jpg',
//      size: '1',
//      title: 'IHK Ruhr<br/>Ankündigung der Kampagne',
//    },
//
//    {
//      type: 'video',
//      url: 'https://vimeo.com/256548527',
//      img: '/static/project-drk-rheinberg.jpg',
//      size: '2',
//      title: 'Deutsches Rotes Kreuz<br/>Kindertagesstätte Flohkiste Rheinberg',
//    },
//    {
//      type: 'video',
//      url: 'https://vimeo.com/262372508',
//      img: '/static/project-uwaga.png',
//      size: '2',
//      title:
//        'Folkwang Kammerorchester & Uwaga<br/>ExtraKlang II - Konzertrückblick ',
//    },
//
//    {
//      type: 'url',
//      url: 'http://europeanaviationnetwork.com/',
//      img: '/static/project-ean.png',
//      size: '2',
//      title: 'EUROPEAN AVIATION NETWORK',
//    },
//    {
//      type: 'video',
//      url: 'https://vimeo.com/164551782/0065810230',
//      img: '/static/project-fiber.png',
//      size: '1',
//      title: 'Fiber to the home',
//    },
//    {
//      type: 'url',
//      url: 'http://kunden.gedankenwerk.com/smart/Smart-City/preview/',
//      img: '/static/project-smartcity.png',
//      size: '1',
//      title: 'Smart City',
//    },
//    {
//      type: 'category',
//      title: 'Produkt<br/>Videos',
//    },
//    {
//      type: 'video',
//      url: 'https://vimeo.com/gedankenwerk/review/85516897/1a8099c7f9',
//      img: '/static/project-mobileworkplace.png',
//      size: '1',
//      title: 'Mobile Workplace',
//    },
//
//    {
//      type: 'video',
//      url: 'https://youtu.be/xmJZ5QuHMgE',
//      img: '/static/project-music-toseland.png',
//      size: '2',
//      title: "Musikvideo:<br/>Toseland - We'll Stop At Nothing",
//    },
//    {
//      type: 'video',
//      url: 'https://youtu.be/d08HU0LzrmY',
//      img: '/static/project-music-ghosts.png',
//      size: '2',
//      title: 'Musikvideo:<br/>To the Rats and Wolves - Ghosts',
//    },
//
//    {
//      type: 'video',
//      url: 'https://www.youtube.com/watch?v=HfgZ-tYUUaA',
//      img: '/static/project-red1.jpg',
//      size: '1',
//      title: 'YouTube Channel<br/>RED SCARLET-W REVIEW Teil 1',
//    },
//    {
//      type: 'video',
//      url: 'https://www.youtube.com/watch?v=gvZbxDoBBxU&feature=youtu.be',
//      img: '/static/project-htcu12.jpg',
//      size: '1',
//      title: 'YOUTUBE CHANNEL:<br/>HTC U12+ (Plus)',
//    },
//    {
//      type: 'nan',
//      url: '',
//      img: '/static/project-stollenhelden.png',
//      size: '2',
//      title: 'Stollenhelden',
//    },
//    {
//      type: 'category',
//      title: 'Facebook<br/>Videos',
//    },
//
//    {
//      type: 'video',
//      url: 'https://vimeo.com/249036615',
//      img: '/static/project-bachchor.jpg',
//      size: '1',
//      title: 'Essener Bachchor<br/>Weihnachtsoratorium',
//    },
//
//    {
//      type: 'video',
//      url: 'https://youtu.be/xk6zL8597dw',
//      img: '/static/project-music-paralyzed.png',
//      size: '2',
//      title: 'Musikvideo:<br/>CALIBAN - Paralyzed',
//    },
//    {
//      type: 'video',
//      url: 'https://www.youtube.com/watch?v=g8ZDWLSPUFo&feature=youtu.be',
//      img: '/static/project-music-kaerbholz.png',
//      size: '2',
//      title: 'Musikvideo:<br/>KÄRBHOLZ - Ich kann es nicht ändern',
//    },
//
//    {
//      type: 'video',
//      url: 'https://vimeo.com/196893314',
//      img: '/static/project-eisdisco.jpg',
//      size: '2',
//      title: 'Zeche Zollverein:<br/>Eisdisco',
//    },
//
//    {
//      type: 'video',
//      url: 'https://www.youtube.com/watch?v=_uUctxvLy3M',
//      img: '/static/project-littleweekender.jpg',
//      size: '1',
//      title: 'YOUTUBE CHANNEL:<br/>The Little Weekender',
//    },
//    {
//      type: 'url',
//      url: 'http://mvno.telekom.net/',
//      img: '/static/project-wholesale.png',
//      size: '1',
//      title: 'INTERNATIONAL<br/>MOBILE WHOLESALE',
//    },
//    {
//      type: 'category',
//      title: 'Support<br/>Videos',
//    },
//    {
//      type: 'url',
//      url: 'https://internet-business-suite.com/de/home',
//      img: '/static/project-ibs.png',
//      size: '1',
//      title: 'TELEKOM INTERNET<br/>BUSINESS SUITE',
//    },
//    {
//      type: 'nan',
//      url: '',
//      img: '/static/project-tventure.png',
//      size: '1',
//      title: 'T-VENTURE WEBSITE',
//    },
//    {
//      type: 'nan',
//      url: '',
//      img: '/static/project-techday.png',
//      size: '1',
//      title: 'TELEKOM TECHDAY',
//    },
//    {
//      type: 'url',
//      url: 'http://kunden.gedankenwerk.com/Telekom_Digitale_Filiale/index.html',
//      img: '/static/project-geschaeftskunden.jpg',
//      size: '2',
//      title: 'GESCHÄFTSKUNDEN PRÄSENTATIONSTOOL',
//    },
//    {
//      type: 'url',
//      url: 'http://inflight.telekom.net/',
//      img: '/static/project-inflight2.png',
//      size: '1',
//      title: 'TELEKOM INFLIGHT',
//    },
//    {
//      type: 'category',
//      title: 'Youtube<br/>Channel',
//    },
//    {
//      type: 'url',
//      url: 'https://hifi-pawlak.de/',
//      img: '/static/project-pawlak.png',
//      size: '2',
//      title: 'HIFI PAWLAK',
//    },
//    {
//      type: 'nan',
//      url: '',
//      img: '/static/project-fanmeile.png',
//      size: '1',
//      title: 'FANMEILE BERLIN',
//    },
//    {
//      type: 'nan',
//      url: '',
//      img: '/static/project-smart2.png',
//      size: '1',
//      title: 'SMART KAMPAGNE<br/>STEVE APPLETON',
//    },
//    {
//      type: 'video',
//      url: 'https://vimeo.com/145406594/e10246896b',
//      img: '/static/project-umzugsservice.png',
//      size: '1',
//      title: 'TELEKOM UMZUGSSERVICE',
//    },
//    {
//      type: 'category',
//      title: 'Art<br/>Direction',
//    },
//    {
//      type: 'video',
//      url: 'https://www.youtube.com/watch?v=pYGUMBQ58RQ',
//      img: '/static/project-samsungs8.jpg',
//      size: '1',
//      title: 'YOUTUBE CHANNEL:<br/>Samsung Galaxy S8 Plus',
//    },
//    {
//      type: 'url',
//      url: 'http://clintonharn.com',
//      img: '/static/project-clinton.png',
//      size: '1',
//      title: 'Clinton Harn',
//    },
//    {
//      type: 'nan',
//      url: '',
//      img: '/static/project-tke.png',
//      size: '2',
//      title: 'THYSSENKRUPP',
//    },
//    {
//      type: 'url',
//      url: 'http://kunden.gedankenwerk.com/Telekom/infoservice02/',
//      img: '/static/project-infoservice.png',
//      size: '1',
//      title: 'Telekom Infoservice',
//    },
//    {
//      type: 'category',
//      title: 'Illustrationen',
//    },
//    {
//      type: 'video',
//      url: 'https://www.youtube.com/watch?v=zp5hnzWPydw',
//      img: '/static/project-segway.jpg',
//      size: '1',
//      title: 'YOUTUBE CHANNEL:<br/>NINEBOT MINI PRO',
//    },
//    {
//      type: 'category',
//      title: 'Beratung',
//    },
//    {
//      type: 'url',
//      url: 'http://entertain.gedankenwerk-hosting.com/',
//      img: '/static/project-entertain.png',
//      size: '1',
//      title: 'ENTERTAIN INSTALLATION &<br/>VERKABELUNG',
//    },
//    {
//      type: 'video',
//      url: 'https://vimeo.com/gedankenwerk/review/61343382/ca6ede7e47',
//      img: '/static/project-nokiax6.png',
//      size: '1',
//      title: 'NOKIA X6 PRODUKTVIDEO',
//    },
//    {
//      type: 'category',
//      title: 'Mobile<br/>Websites',
//    },
//
//    {
//      type: 'nan',
//      url: '',
//      img: '/static/project-virtuellecompany.png',
//      size: '1',
//      title: 'T-Systems:<br/>Virtuelle Company',
//    },
//    {
//      type: 'nan',
//      url: '',
//      img: '/static/project-youandme.png',
//      size: '1',
//      title: 'Deutsche Telekom:<br/>You and Me',
//    },
//    {
//      type: 'video',
//      url: 'https://vimeo.com/233954894',
//      img: '/static/project-folkwang.jpg',
//      size: '1',
//      title: 'Folkwang Kammerorchester Essen<br/>Saisonstart 2017',
//    },
//    {
//      type: 'nan',
//      url: '',
//      img: '/static/project-produkteundloesungen.png',
//      size: '1',
//      title: 'T-Systems:<br/>Produkte & Lösungen',
//    },
//    {
//      type: 'nan',
//      url: '',
//      img: '/static/project-nokiaxmas.png',
//      size: '1',
//      title: 'Nokia<br/>Christmas Special 2009',
//    },
//  ],
//};

export default pageWithIntl(Index);
