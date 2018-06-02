import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Head from 'next/head';
import 'glamor/reset';
import ReactGA from 'react-ga';
import {defineMessages, injectIntl, FormattedMessage} from 'react-intl';

import SocialNav from './../components/social_nav';
import Footer from './../components/footer';

const PageTitle = styled.h1`
  position: absolute;
  z-index: 20;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-4%);

  color: white;
  text-transform: uppercase;
  text-align: center;
  border-bottom: 5px solid #51ed06;
  display: inline-block;
  margin-bottom: 0.4em;
  margin-top: 0.5em;
  line-height: 1em;
  padding-bottom: 3px;
  //width: 80%;
  font-size: 1.4rem;
  letter-spacing: 0.1px;
  font-weight: 800;
  white-space: nowrap;
  @media screen and (min-width: 410px) {
    font-size: 1.9rem;
  }
  @media screen and (min-width: 480px) {
    transform: translateX(-50%) translateY(-24%);
  }
  @media screen and (min-width: 520px) {
    font-size: 2.2rem;
  }
  @media screen and (min-width: 720px) {
    font-size: 2.8rem;
    border-bottom: 7px solid #51ed06;
  }
  @media screen and (min-width: 820px) {
    font-size: 3rem;
    margin-bottom: 0.4em;
  }
  @media screen and (min-width: 960px) {
    font-size: 3.75rem;
    transform: translateX(-50%) translateY(-74%);
  }
  @media screen and (min-width: 1060px) {
    font-size: 4.375rem;
    border-bottom: 9px solid #51ed06;
  }
`;

const Green = styled.span`
  color: #51ed06;
`;

const VideoHeader = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 39%;
  margin-bottom: 30%;
  @media screen and (min-width: 480px) {
    margin-bottom: 20%;
  }
  @media screen and (min-width: 960px) {
    margin-bottom: 5%;
  }
`;
const Video = styled.video`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  width: 160%;
  z-index: 10;

  @media screen and (min-width: 480px) {
    width: 140%;
  }
  @media screen and (min-width: 960px) {
    width: 100%;
  }
`;

class Layout extends React.Component {
  componentDidMount() {
    ReactGA.initialize('UA-21442306-1');
    ReactGA.set({page: '/'});
    ReactGA.pageview('/');
  }

  render() {
    return (
      <div className="page">
        <Head>
          <title>GEDANKENWERK. Web & Videoproduktion</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta name="author" content="Gedankenwerk" />
          <meta
            name="description"
            content="Wir lieben das Web. Und wir entwickeln für unsere Kunden, was das Web liebt: innovative Websites, professionelle Videos und ausgereiften Content für die Sozialen Medien. Das tun wir bei Gedankenwerk für große und kleine Unternehmen"
          />
          <meta name="robots" content="index,follow" />

          <link rel="manifest" href="/static/manifest.json" />

          <meta name="theme-color" content="#51de06" />

          <meta
            property="og:title"
            content="GEDANKENWERK. Web & Videoproduktion"
          />
          <meta
            property="og:description"
            content="Wir lieben das Web. Und wir entwickeln für unsere Kunden, was das Web liebt: innovative Websites, professionelle Videos und ausgereiften Content für die Sozialen Medien. Das tun wir bei Gedankenwerk für große und kleine Unternehmen."
          />
          <meta
            property="og:image"
            content="https://gedankenwerk.com/static/social.jpg"
          />
          <meta property="og:url" content="https://gedankenwerk.com" />

          <meta
            name="twitter:title"
            content="GEDANKENWERK. Web & Videoproduktion"
          />
          <meta
            name="twitter:description"
            content="Wir lieben das Web. Und wir entwickeln für unsere Kunden, was das Web liebt: innovative Websites, professionelle Videos und ausgereiften Content für die Sozialen Medien. Das tun wir bei Gedankenwerk für große und kleine Unternehmen."
          />
          <meta
            name="twitter:image"
            content="https://gedankenwerk.com/static/social.jpg"
          />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <header>
          <h1 className="page-title">
            <a rel="noopener" href="/">
              <img
                className="logo"
                src="/static/logo-gw.svg"
                alt="GEDANKENWERK. Web & Videoproduktion"
              />
            </a>
          </h1>
          <SocialNav />
        </header>

        <style jsx global>{`
          body {
            background: #1d1d1d;
            font-size: 16px;
          }
        `}</style>
        <style jsx>{`
          .page {
            background: #1d1d1d;
            //background: #fff;
            color: #b2b2b2;
            font-family: 'Archivo Narrow', sans-serif;
            overflow-x: hidden;
          }
          header {
            background: #141414;
            position: relative;
            padding: 0 10px;
            height: 95px;
            border-bottom: 5px solid #51ed06;
          }
          @media screen and (min-width: 420px) {
            header {
              padding: 0 40px;
            }
          }
          @media screen and (min-width: 820px) {
            header {
              height: 76px;
            }
          }
          @media screen and (min-width: 1020px) {
            header {
              height: 86px;
            }
          }
          .page-title {
            margin: 0;
            padding: 0;
          }
          .logo {
            max-width: 482px;
            width: 100%;
            padding-top: 20px;
            padding-bottom: 10px;
          }
          @media screen and (min-width: 1020px) {
            .logo {
              padding-top: 30px;
            }
          }
          .content {
            padding: 10px;
          }
          @media screen and (min-width: 480px) {
            .content {
              padding: 40px;
              padding-top: 0;
            }
          }
        `}</style>

        <VideoHeader>
          <Video id="header-video" autoPlay loop muted playsInline>
            <source src="/static/gw-header.mp4" />
          </Video>
          <PageTitle>
            <Green>Gedanken</Green>werk:<br />
            <FormattedMessage
              id="page_tagline"
              defaultMessage="IDEEN FÜR DIE DIGITALE WELT"
            />
            <Green>.</Green>
          </PageTitle>
        </VideoHeader>
        <div className="content">{this.props.children}</div>

        <Footer />

        <link
          href="https://fonts.googleapis.com/css?family=Archivo+Narrow"
          rel="stylesheet"
        />
        <script src="https://npmcdn.com/masonry-layout@4.1/dist/masonry.pkgd.min.js" />
      </div>
    );
  }
}

export default injectIntl(Layout);
