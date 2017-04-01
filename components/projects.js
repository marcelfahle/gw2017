import React from 'react';
import styled from 'styled-components';

import data from './../static/data.json';

import Project from './project';
import Green from './green';

const ProjectsWrapper = styled.div`
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

//export default() => (
export default class Projects extends React.Component {

  constructor( props ) {
    super( props );

    this.msnry = null;
  }

  componentDidUpdate( prevProps, prevState ) {
    this.msnry.layout();
  }

  componentWillReceiveProps( nextProps ) {
    this.msnry.layout();
  }


  componentDidMount() {

    const imagesLoaded = require('imagesloaded');
    const grid = document.querySelector('.grid');
    this.msnry = new Masonry( grid, {
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      percentPosition: true,
      gutter: ".gutter-sizer"
    });
    imagesLoaded( grid ).on( 'progress', function() {
      this.msnry.layout();
    });
  }

  render() {
    const { projects } = data;

    return(
      <ProjectsWrapper className="grid">

        <Sizer className="grid-sizer"></Sizer>
        <GutterSizer className="gutter-sizer"></GutterSizer>

        { projects.map(
          (p) => { return (
              <Project 
                type={p.type}
                url={p.url}
                img={p.img}
                size={p.size}
                key={p.title}
              >{p.title}
              </Project>
            )}
        )}


      </ProjectsWrapper>
    );
  }
}
