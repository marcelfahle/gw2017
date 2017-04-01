import React from 'react';
import styled, { injectGlobal } from 'styled-components';
injectGlobal`
  .grid-item--s1 { width 25%; }
  .grid-item--s2 { width 50%; }
`;


const ProjectWrapper = styled.div`
  position: relative;
  width: calc(100% );
  height: 48.6vw;
  background: black ${props => props.img ? 'url('+props.img+') no-repeat' : ''};
  background-size: cover;
  //margin-bottom: 8px;
  margin-bottom: 1vw;
  @media screen and (min-width: 500px) {
    width: calc(49% );
    height: 31.25vw;
    //margin-bottom: 0.5vw;
  }
  @media screen and (min-width: 1000px) {
    width: calc(24% );
    height: calc(15.625vw - 0.44vw - 0px);
  }
  &.grid-item--2 {
    @media screen and (min-width: 500px) {
      width: calc(99.5% );
      height: 48.6vw;
    }
    @media screen and (min-width: 1000px) {
      width: calc(49% - 0px );
      height: 31.25vw;
    }
  }
  &.grid-item--4 {
    @media screen and (min-width: 500px) {
      width: calc(100% );
      height: 48.6vw;
    }
    @media screen and (min-width: 1000px) {
      width: calc(99%);
      height: 48.6vw;
    }
  }
  &.category {
    border-left: 9px solid #51ed06;
    width: calc(100% - 9px);
    @media screen and (min-width: 500px) {
      width: calc(49% - 9px);

    }
    @media screen and (min-width: 1000px) {
      width: calc(24% - 9px );
    }
  }
`;
const Title = styled.h3`
  position: absolute;
  left: 10px;
  bottom: 10px;
  background: black;
  color: white;
  padding: 5px;
  text-transform: uppercase;
`;
const Link = styled.a`
  display: block;
  height: 100%; 

  &.t-video {
    background: transparent url('/static/btn-play.svg') no-repeat;
    background-size: 18%;
    background-position: center;
  }


`;

//export default ({children, type, img, url, size}) => {

export default class Project extends React.Component {
  constructor( props ) {
    super( props );
  }

  createMarkup( markup ) {
    return { __html: markup + '<span style="color: #51ed06">.</span>' };
  }



  category (children) {
    return (
      <ProjectWrapper className={`category grid-item grid-item--1`}>
        <Title 
          dangerouslySetInnerHTML={this.createMarkup( children )} />
      </ProjectWrapper>
    )
  }

  project (children, img, url, size, type) {
    return (
      <ProjectWrapper img={img} className={`has-img grid-item grid-item--${size}`}>
        <Link href={url} target="_blank" className={`t-${type} t-${type}-${size}`}>
          <Title
            dangerouslySetInnerHTML={this.createMarkup( children )} />
        </Link>
      </ProjectWrapper>
    )
  }

  render() {
    const { type, children, img, url, size } = this.props;
    switch (type) {
      case "video":
        return this.project( children, img, url, size, type)
        break;
      case "link":
        return this.project( children, img, url, size, type)
        break;
      case "category":
        return this.category( children )
      default:
        return this.project( children, img, url, size, type)
        break;
    }
  }

}
