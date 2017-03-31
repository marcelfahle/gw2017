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
  width: calc(25% - 4px);
`;

export default() => (
  <Projects className="grid" data-masonry='{ "itemSelector": ".grid-item", "columnWidth": ".grid-sizer", "percentPosition": "true", "gutter": 4 }'>

    <Sizer className="grid-sizer"></Sizer>

    <Project 
      type="video"
      url="http://google.com"
      img="/static/project-dummy.jpg"
      size="4"
      key="razer">
      YOUTUBE CHANNEL:<br/>
      RAZER BLADE PRO.
    </Project>
    <Project 
      type="url"
      url="http://europeanaviationnetwork.com"
      img="/static/project-dummy-ean.jpg"
      size="2"
      key="ean"
    >
      EUROPEAN AVIATION NETWORK.
    </Project>
    <Project 
      type="video"
      url="http://google.com"
      img="/static/project-dummy.jpg"
      size="1"
      key="dummy1"
    >
      My Project
    </Project>
    <Project 
      type="video"
      url="http://google.com"
      img="/static/project-dummy.jpg"
      size="1"
      key="dummy2"
    >
      Test 1233
    </Project>
    <Project 
      type="video"
      url="http://google.com"
      img="/static/project-dummy.jpg"
      size="1"
      key="dummy3"
    >
      Yea yea
    </Project>
    <Project 
      type="video"
      url="http://google.com"
      img="/static/project-dummy.jpg"
      size="1"
      key="dummy4"
    >
      Yea yea
    </Project>
  </Projects>
);
