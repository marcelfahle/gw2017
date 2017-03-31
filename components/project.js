import styled, { injectGlobal } from 'styled-components';
injectGlobal`
  .grid-item--s1 { width 25%; }
  .grid-item--s2 { width 50%; }
`;


const Project = styled.div`
  position: relative;
  width: calc(100% - 4px);
  height: 48.6vw;
  background: black url(${props => props.img}) no-repeat;
  background-size: cover;
  margin-bottom: 8px;
  @media screen and (min-width: 500px) {
    width: calc(50% - 4px);
    height: 31.25vw;
  }
  @media screen and (min-width: 1000px) {
    width: calc(25% - 4px);
    height: 15vw;
  }
  &.grid-item--2 {
    @media screen and (min-width: 500px) {
      width: calc(100% - 4px);
      height: 48.6vw;
    }
    @media screen and (min-width: 1000px) {
      width: calc(50% - 8px);
      height: 31.25vw;
    }
  }
  &.grid-item--4 {
    @media screen and (min-width: 500px) {
      width: calc(100% - 4px);
      height: 48.6vw;
    }
    @media screen and (min-width: 1000px) {
      width: calc(100% - 4px);
      height: 48.6vw;
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
`;
const Link = styled.a`
  display: block;
  height: 100%; 
`;


export default ({children, type, img, url, size}) => (
  <Project img={img} className={`grid-item grid-item--${size}`}>
    <Link href={url} target="_blank">
      <Title>
        { children }
      </Title>
    </Link>
  </Project>

)
