import Link from 'next/link'
import Head from 'next/head'
import 'glamor/reset'
import styled from 'styled-components';
import { injectGlobal } from 'styled-components';

import SocialNav from './../components/social_nav';
import Footer from './../components/footer'

injectGlobal`
  body { background: #1d1d1d; font-size: 16px; }
  //body { background: #fff; }
`;

const Page = styled.div`
  background: #1d1d1d;
  //background: #fff;
  color: #b2b2b2;
  font-family: 'Archivo Narrow', sans-serif;
`;
const Header = styled.header`
  background: #141414;
  position: relative;
  padding: 0 10px;
  height: 95px;
  border-bottom: 5px solid #51ed06;
  @media screen and (min-width: 420px) {
    padding: 0 40px;
  }
  @media screen and (min-width: 820px) {
    height: 76px;
  }
  @media screen and (min-width: 1020px) {
    height: 86px;
  }
`
const Logo = styled.h1`
  margin: 0;
  padding: 0;
  
`
const LogoImg = styled.img`
  max-width: 482px;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 10px;
  @media screen and (min-width: 1020px) {
    padding-top: 30px;

  }
`;
const Content = styled.div`
  padding: 10px;

  @media screen and (min-width: 480px) {
    padding: 40px;
    padding-top: 0;
  }
`;

export default ({ children, title = 'GEDANKENWERK. Web & Videoproduktion' }) => (
  <Page>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <Header>
      <Logo><LogoImg src="/static/logo-gw.svg" alt="GEDANKENWERK. Web & Videoproduktion"/></Logo>
      <SocialNav />
    </Header>

    <Content>
      { children }
    </Content>

    <Footer />

    <link href="https://fonts.googleapis.com/css?family=Archivo+Narrow" rel="stylesheet" />
    <script src="https://npmcdn.com/masonry-layout@4.1/dist/masonry.pkgd.min.js"></script>

  </Page>
)
