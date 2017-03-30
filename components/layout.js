import Link from 'next/link'
import Head from 'next/head'
import 'glamor/reset'
import styled from 'styled-components';

import SocialNav from './../components/social_nav';

const Page = styled.div`
  background: #1d1d1d;
  color: #b2b2b2;
`;
const Header = styled.header`
  background: #141414;
  position: relative;
  padding: 0 10px;
  height: 95px;
  border-bottom: 5px solid #5ceb00;
  @media screen and (min-width: 420px) {
    padding: 0 40px;
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
`;
const Content = styled.div`
  padding: 40px;
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

    <footer>
      I`m here to stay
    </footer>
  </Page>
)
