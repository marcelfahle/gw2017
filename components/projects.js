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
  width: 25%;
`;

export default() => (
  <Projects className="grid" data-masonry='{ "itemSelector": ".grid-item", "columnWidth": ".grid-sizer", "percentPosition": "true" }'>

    <Sizer className="grid-sizer"></Sizer>

    <Project 
      type="video"
      url="http://google.com"
      img="/static/project-dummy.jpg"
      title="My Project"
      size="4"
    />
    <Project 
      type="url"
      url="http://europeanaviationnetwork.com"
      img="/static/project-dummy-ean.jpg"
      title="EUROPEAN AVIATION NETWORK."
      size="2"
    />
    <Project 
      type="video"
      url="http://google.com"
      img="/static/project-dummy.jpg"
      title="My Project"
      size="1"
    />
    <Project 
      type="video"
      url="http://google.com"
      img="/static/project-dummy.jpg"
      title="My Project"
      size="1"
    />
  </Projects>
);
