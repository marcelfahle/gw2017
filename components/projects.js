import styled from 'styled-components';

import Project from './project';
import Green from './green';

const Projects = styled.div`
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
`;
const Title = styled.h2`
  text-transform: uppercase;
  text-align: center;
  display: inline-block;
  margin-left: 50%;
  transform: translateX(-50%);
  border-bottom: 5px solid #51ed06;
`;
const Sizer = styled.div`
  width: calc(24% );
`;
const GutterSizer = styled.div`
  width: 1%;
`;

export default() => (
  <Projects className="grid" data-masonry='{ "itemSelector": ".grid-item", "columnWidth": ".grid-sizer", "percentPosition": "true", "gutter": ".gutter-sizer" }'>

    <Sizer className="grid-sizer"></Sizer>
    <GutterSizer className="gutter-sizer"></GutterSizer>

    <Project 
      type="video"
      url="http://google.com"
      img="/static/project-razerblade.png"
      size="4"
      key="razer">
      YOUTUBE CHANNEL:<br/>
      RAZER BLADE PRO<Green>.</Green>
    </Project>
    <Project 
      type="url"
      url="http://europeanaviationnetwork.com"
      img="/static/project-ean.png"
      size="2"
      key="ean"
    >
      EUROPEAN AVIATION NETWORK<Green>.</Green>
    </Project>
    <Project 
      type="link"
      url="http://google.com"
      img="/static/project-smartideas.png"
      size="1"
    >
      SMART IDEAS<br/>
      SMARTER BUSINESS<Green>.</Green>
    </Project>
    <Project 
      type="video"
      url="http://google.com"
      img="/static/project-eisbahn.png"
      size="1"
    >
      ZECHE ZOLLVEREIN <br/>EISBAHN<Green>.</Green>
    </Project>
    <Project type="category">
      KREATIVE<br/>
      KONZEPTE<Green>.</Green>
    </Project>
    <Project 
      type="video"
      url="http://google.com"
      img="/static/project-inflight.png"
      size="1"
    >
      INFLIGHT WIRELESS<br/>CONNECTIVITY<Green>.</Green>
    </Project>



    <Project 
      type="video"
      url="http://google.com"
      img="/static/project-razerbladestealth.png"
      size="1"
    >
      YOUTUBE CHANNEL:<br/>
      RAZER BLADE STEALTH<Green>.</Green>
    </Project>
    <Project 
      type="video"
      url="http://google.com"
      img="/static/project-ibs.png"
      size="1"
    >
      TELEKOM INTERNET<br/>
      BUSINESS SUITE<Green>.</Green>
    </Project>

    <Project 
      type="video"
      url="http://google.com"
      img="/static/project-stollenhelden.png"
      size="2"
    >
      Stollenhelden<Green>.</Green>
    </Project>

    <Project type="category">
      Responsive<br/>
      Websites<Green>.</Green>
    </Project>

    <Project 
      type="video"
      url="http://google.com"
      img="/static/project-wholesale.png"
      size="1"
    >
      INTERNATIONAL<br/>
      MOBILE WHOLESALE<Green>.</Green>
    </Project>


    {/*  THREE   */}
    <Project 
      type="video"
      url="http://google.com"
      img="/static/project-kokerei.png"
      size="2"
    >
      ZECHE ZOLLVEREIN KOKEREI<Green>.</Green>
    </Project>
    <Project 
      type="video"
      url="http://google.com"
      img="/static/project-fiber.png"
      size="1"
    >
      Fiber to the home<Green>.</Green>
    </Project>
    <Project 
      type="video"
      url="http://google.com"
      img="/static/project-smartcity.png"
      size="1"
    >
      Smart City<Green>.</Green>
    </Project>
    <Project type="category">
      Produkt<br/>
      Videos<Green>.</Green>
    </Project>
    <Project 
      type="video"
      url="http://google.com"
      img="/static/project-mobileworkplace.png"
      size="1"
    >
      Mobile Workplace<Green>.</Green>
    </Project>
    {/*  THREE -end   */}



    {/*  FOUR   */}
    <Project 
      type="video"
      url="http://google.com"
      img="/static/project-macbookpro.png"
      size="1"
    >
      YOUTUBE CHANNEL:<br/>
      MACBOOK PRO ZUBEHÖR<Green>.</Green>
    </Project>
    <Project 
      type="video"
      url="http://google.com"
      img="/static/project-amazonecho.png"
      size="1"
    >
      YOUTUBE CHANNEL:<br/>
      Amazon Echo<Green>.</Green>
    </Project>
    <Project 
      type="video"
      url="http://google.com"
      img="/static/project-huawei.png"
      size="2"
    >
      YOUTUBE CHANNEL:<br/>
      HUAWEI MATE 9<Green>.</Green>
    </Project>
    <Project type="category">
      Facebook<br/>
      Videos<Green>.</Green>
    </Project>

    <Project 
      type="video"
      url="http://google.com"
      img="/static/project-audeze.png"
      size="1"
    >
      YOUTUBE CHANNEL:<br/>
      AUDEZE EL-8 TITANIUM<Green>.</Green>
    </Project>
    {/*  FOUR -end   */}

    {/*  FIVE   */}
    <Project 
      type="video"
      url="http://google.com"
      img="/static/project-geschaeftskunden.png"
      size="2"
    >
      GESCHÄFTSKUNDEN
      PRÄSENTATIONSTOOL<Green>.</Green>
    </Project>
    <Project 
      type="video"
      url="http://google.com"
      img="/static/project-umzugsservice.png"
      size="1"
    >
      TELEKOM UMZUGSSERVICE<Green>.</Green>
    </Project>
    <Project 
      type="video"
      url="http://google.com"
      img="/static/project-lametric.png"
      size="1"
    >
      YOUTUBE CHANNEL:
      LAMETRIC TIME<Green>.</Green>
    </Project>
    <Project type="category">
      Support<br/>
      Videos<Green>.</Green>
    </Project>
    <Project 
      type="video"
      url="http://google.com"
      img="/static/project-inflight2.png"
      size="1"
    >
      TELEKOM INFLIGHT<Green>.</Green>
    </Project>
    {/*  FIVE -end  */}


    {/*  SIX  */}
    <Project 
      type="video"
      url="http://google.com"
      img="/static/project-tventure.png"
      size="1"
    >
      T-VENTURE WEBSITE<Green>.</Green>
    </Project>
    <Project 
      type="video"
      url="http://google.com"
      img="/static/project-techday.png"
      size="1"
    >
      TELEKOM TECHDAY<Green>.</Green>
    </Project>
    <Project 
      type="video"
      url="http://google.com"
      img="/static/project-pawlak.png"
      size="2"
    >
      HIFI PAWLAK<Green>.</Green>
    </Project>
    <Project 
      type="video"
      url="http://google.com"
      img="/static/project-duet.png"
      size="1"
    >
      YOUTUBE CHANNEL:<br/>
      DUET DISPLAY FÜR IOS<Green>.</Green>
    </Project>
    <Project type="category">
      Youtube<br/>
      Channel<Green>.</Green>
    </Project>
    {/*  SIX -end  */}

    {/*  SEVEN  */}
    <Project 
      type="video"
      url="http://google.com"
      img="/static/project-macbookpro2.png"
      size="2"
    >
      YOUTUBE CHANNEL:<br/>
      MACBOOK PRO 15“ MIT TOUCH BAR 2016<Green>.</Green>
    </Project>
    <Project 
      type="video"
      url="http://google.com"
      img="/static/project-fanmeile.png"
      size="1"
    >
      FANMEILE BERLIN<Green>.</Green>
    </Project>
    <Project 
      type="video"
      url="http://google.com"
      img="/static/project-smart2.png"
      size="1"
    >
      SMART KAMPAGNE<br/>
      STEVE APPLETON<Green>.</Green>
    </Project>
    <Project 
      type="video"
      url="http://google.com"
      img="/static/project-nokiax6.png"
      size="1"
    >
      NOKIA X6 PRODUKTVIDEO<Green>.</Green>
    </Project>
    <Project type="category">
      Art<br/>
      Direction<Green>.</Green>
    </Project>
    {/*  SEVEN  -end */}

    {/*  EIGHT  */}
    <Project 
      type="video"
      url="http://google.com"
      img="/static/project-produktshows.png"
      size="1"
    >
      3D PRODUKshows<Green>.</Green>
    </Project>
    <Project 
      type="video"
      url="http://clintonharn.com"
      img="/static/project-clinton.png"
      size="1"
    >
      Clinton Harn<Green>.</Green>
    </Project>
    <Project 
      type="video"
      url="http://google.com"
      img="/static/project-eisdisco.png"
      size="2"
    >
      ZECHE ZOLLVEREIN EISDICSO<Green>.</Green>
    </Project>
    <Project 
      type="video"
      url="http://google.com"
      img="/static/project-infoservice.png"
      size="1"
    >
      Telekom Infoservice<Green>.</Green>
    </Project>
    <Project type="category">
      Illustrationen<Green>.</Green>
    </Project>
    {/*  EIGHT  -end */}

    {/*  NINE */}
    <Project 
      type="video"
      url="http://google.com"
      img="/static/project-ruhrmuseum.png"
      size="2"
    >
      ZECHE ZOLLVEREIN RUHR MUSEUM<Green>.</Green>
    </Project>
    <Project type="category">
      Beratung<Green>.</Green>
    </Project>
    <Project 
      type="video"
      url="http://google.com"
      img="/static/project-entertain.png"
      size="1"
    >
      ENTERTAIN INSTALLATION &<br/>
      VERKABELUNG<Green>.</Green>
    </Project>
    <Project 
      type="video"
      url="http://google.com"
      img="/static/project-demail.png"
      size="1"
    >
      DE-MAIL FILIALFINDER<Green>.</Green>
    </Project>
    <Project type="category">
      Mobile<br/>
      Websites<Green>.</Green>
    </Project>

    {/*  NINE -end */}



  </Projects>
);
