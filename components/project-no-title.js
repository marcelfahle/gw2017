import React from 'react';
import styled, {injectGlobal} from 'styled-components';
injectGlobal`
  .grid-item--s1 { width 25%; }
  .grid-item--s2 { width 50%; }
`;

const ProjectWrapper = styled.div`
  position: relative;
  width: calc(100%);
  height: 51.6vw;
  background: black
    ${props => (props.img ? 'url(' + props.img + ') no-repeat' : '')};
  background-size: cover;
  //margin-bottom: 8px;
  margin-bottom: 1vw;
  @media screen and (min-width: 410px) {
    width: calc(49%);
    height: 31.25vw;
    //margin-bottom: 0.5vw;
  }
  @media screen and (min-width: 1000px) {
    width: calc(24%);
    height: calc(15.625vw - 0.44vw - 0px);
  }
  &.grid-item--2 {
    @media screen and (min-width: 410px) {
      width: calc(99.5%);
      height: 51.6vw;
    }
    @media screen and (min-width: 1000px) {
      width: calc(49% - 0px);
      height: 31.25vw;
    }
  }
  &.grid-item--4 {
    @media screen and (min-width: 410px) {
      width: calc(100%);
      height: 51.6vw;
    }
    @media screen and (min-width: 1000px) {
      width: calc(99%);
      height: 51.6vw;
    }
  }
  &.category {
    border-left: 9px solid #51ed06;
    width: calc(100% - 9px);
    @media screen and (min-width: 410px) {
      width: calc(49% - 9px);
    }
    @media screen and (min-width: 1000px) {
      width: calc(24% - 9px);
    }
  }
  &.offer {
    height: 100vw;
    color: white;
    text-align: center;
    overflow: hidden;
    display: flex;

    @media screen and (min-width: 410px) {
      height: 75vw;
    }
    @media screen and (min-width: 500px) {
      height: 55vw;
    }
    @media screen and (min-width: 1420px) {
      height: 45vw;
    }
    @media screen and (min-width: 1680px) {
      height: 35vw;
    }
  }
`;

const Box = styled.div`
  position: absolute;
  z-index: 3;
  background: #7ed321;
  padding: 12px 16px;
  color: white;
  text-align: center;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 960px) {
    margin: 36px;
    padding: 32px 16px;
    transform: none;
    width: 400px;
    align-self: flex-end;
    justify-self: flex-end;
    right: 0;
  }
  @media screen and (min-width: 1200px) {
    width: 40%;
  }

  h3 {
    text-transform: uppercase;
    font-size: 1.2rem;
    margin: 0;
    @media screen and (min-width: 410px) {
      font-size: 1.4rem;
    }
    @media screen and (min-width: 520px) {
      font-size: 2.2rem;
    }
    @media screen and (min-width: 720px) {
      font-size: 2.8rem;
    }
    @media screen and (min-width: 820px) {
      font-size: 3rem;
    }
    @media screen and (min-width: 960px) {
      font-size: 1.8rem;
    }
    @media screen and (min-width: 1200px) {
      font-size: 3.5rem;
    }
  }
  p {
    font-size: 15px;
    @media screen and (min-width: 520px) {
      font-size: 18px;
    }
    @media screen and (min-width: 820px) {
      font-size: 24px;
    }
  }
  p:last-child {
    margin-bottom: 0 !important;
  }
  > span:last-child {
    display: none;
  }
  p span {
    font-size: 24px;
    font-weight: bold;

    @media screen and (min-width: 520px) {
      font-size: 2rem;
    }
    @media screen and (min-width: 820px) {
      font-size: 2.4rem;
    }
    @media screen and (min-width: 960px) {
      font-size: 3rem;
    }
    @media screen and (min-width: 1060px) {
      font-size: 5rem;
    }
  }
`;
const Title = styled.h3`
  display: none;
  position: absolute;
  left: 10px;
  bottom: 10px;
  background: black;
  color: white;
  margin: 0;
  line-height: 1em;
  padding: 5px;
  font-size: 0.8rem;
  text-transform: uppercase;
  &.category-title {
    font-size: 1.1em;
    bottom: auto;
    top: 18px;
  }
  @media screen and (min-width: 410px) {
    &.title-size-1 {
      font-size: 0.65rem;
    }
    &.category-title {
      font-size: 1em;
    }
  }
  @media screen and (min-width: 560px) {
    font-size: 1.5rem;
    &.title-size-1 {
      font-size: 1rem;
    }
    &.category-title {
      font-size: 1.875rem;
      top: 35px;
    }
  }
`;
const Link = styled.a`
  display: block;
  height: 100%;

  &.t-video {
    background: transparent url('/static/btn-play.svg') no-repeat;
    background-position: center;
    background-size: 18%;
  }
  &.t-video-4 {
    background: transparent url('/static/btn-play.svg') no-repeat;
    background-position: center;
    background-size: 18%;
  }
  @media screen and (min-width: 520px) {
    &.t-video,
    &.t-video-4 {
      background-size: 13.5%;
    }
  }
  @media screen and (min-width: 1000px) {
    &.t-video {
      background-size: 18%;
    }
    &.t-video-4 {
      background-size: 13.5%;
    }
  }
  &.t-nan {
    cursor: default;
  }
`;

//export default ({children, type, img, url, size}) => {

export default class Project extends React.Component {
  constructor(props) {
    super(props);
  }

  createMarkup(markup) {
    return {__html: markup};
  }

  category(children) {
    return (
      <ProjectWrapper className={`category grid-item grid-item--1`}>
        <Title
          className={`category-title title-size-1`}
          dangerouslySetInnerHTML={this.createMarkup(children)}
        />
      </ProjectWrapper>
    );
  }

  offer(children, img, size) {
    return (
      <ProjectWrapper
        className={`has-img offer grid-item grid-item--${size}`}
        img={img}>
        <Box
          className={`category-title title-size-1`}
          dangerouslySetInnerHTML={this.createMarkup(children)}
        />
      </ProjectWrapper>
    );
  }

  project(children, img, url, size, type) {
    return (
      <ProjectWrapper
        img={img}
        className={`has-img grid-item grid-item--${size}`}>
        <Link
          rel="noopener"
          href={url}
          target="_blank"
          className={`t-${type} t-${type}-${size}`}>
          <Title
            className={`title-size-${size}`}
            dangerouslySetInnerHTML={this.createMarkup(children)}
          />
        </Link>
      </ProjectWrapper>
    );
  }

  render() {
    const {type, children, img, url, size} = this.props;
    switch (type) {
      case 'video':
        return this.project(children, img, url, size, type);
        break;
      case 'link':
        return this.project(children, img, url, size, type);
        break;
      case 'offer':
        return this.offer(children, img, size);
        break;
      case 'category':
        return this.category(children);
        break;
      default:
        return this.project(children, img, url, size, type);
        break;
    }
  }
}
