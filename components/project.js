import styled, { injectGlobal } from 'styled-components';
injectGlobal`
  .grid-item--s1 { width 25%; }
  .grid-item--s2 { width 50%; }
`;


const Project = styled.div`
  position: relative;
  height: 200px;
  width: 100%;
  background: black url(${props => props.img}) no-repeat;
  background-size: cover;
  @media screen and (min-width: 500px) {
    width: 50%;
  }
  @media screen and (min-width: 1000px) {
    width: 25%;
  }
  &.grid-item--2 {
    @media screen and (min-width: 500px) {
      width: 100%;
    }
    @media screen and (min-width: 1000px) {
      width: 50%;
    }
  }
  &.grid-item--4 {
    @media screen and (min-width: 500px) {
      width: 100%;
    }
    @media screen and (min-width: 1000px) {
      width: 100%;
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


export default ({title, type, img, url, size}) => (
  <Project img={img} className={`grid-item grid-item--${size}`}>
    <Link href={url} target="_blank">
      <Title>
        { title }
      </Title>
    </Link>
  </Project>

)
