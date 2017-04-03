import React from 'react';
import Link from 'next/link'
import Head from 'next/head'
import 'glamor/reset'
import ReactGA from 'react-ga';
import { injectGlobal } from 'styled-components';

import SocialNav from './../components/social_nav';
import Footer from './../components/footer'




export default class Layout extends React.Component {

  componentDidMount() {
    ReactGA.initialize('UA-21442306-1');
    ReactGA.set({ page: '/' });
    ReactGA.pageview('/');
  }

  render() {
    return (
      <div className="page">
        <Head>
          <title>GEDANKENWERK. Web & Videoproduktion</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <meta name="author" content="Gedankenwerk" />
          <meta name="description" content="Wir lieben das Web. Und wir entwickeln für unsere Kunden, was das Web liebt: innovative Websites, professionelle Videos und ausgereiften Content für die Sozialen Medien. Das tun wir bei Gedankenwerk für große und kleine Unternehmen" />
          <meta name="robots" content="index,follow" />

					<link rel="manifest" href="/static/manifest.json" />

          <meta name="theme-color" content="#51de06" />

          <meta property="og:title" content="GEDANKENWERK. Web & Videoproduktion" />
          <meta property="og:description" content="Wir lieben das Web. Und wir entwickeln für unsere Kunden, was das Web liebt: innovative Websites, professionelle Videos und ausgereiften Content für die Sozialen Medien. Das tun wir bei Gedankenwerk für große und kleine Unternehmen." />
          <meta property="og:image" content="https://gedankenwerk.com/static/social.jpg" />
          <meta property="og:url" content="https://gedankenwerk.com" />

          <meta name="twitter:title" content="GEDANKENWERK. Web & Videoproduktion" />
          <meta name="twitter:description" content="Wir lieben das Web. Und wir entwickeln für unsere Kunden, was das Web liebt: innovative Websites, professionelle Videos und ausgereiften Content für die Sozialen Medien. Das tun wir bei Gedankenwerk für große und kleine Unternehmen." />
          <meta name="twitter:image" content="https://gedankenwerk.com/static/social.jpg"/>
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <header>
          <h1 className="page-title">
            <a rel="noopener" href="/">
              <img className="logo" src="/static/logo-gw.svg" alt="GEDANKENWERK. Web & Videoproduktion"/>
            </a>
          </h1>
          <SocialNav />
        </header>

        <style jsx global>{`
          body { background: #1d1d1d; font-size: 16px; }
        `}</style>
        <style jsx>{`
          .page {
            background: #1d1d1d;
            //background: #fff;
            color: #b2b2b2;
            font-family: 'Archivo Narrow', sans-serif;
          }
          header {
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
            @media screen and (min-width: 1020px) {
              padding-top: 30px;
            }
          }
          .content {
            padding: 10px;

            @media screen and (min-width: 480px) {
              padding: 40px;
              padding-top: 0;
            }
          }
        `}</style>

        <div className="content">
          { this.props.children }
        </div>

        <Footer />

        <link href="https://fonts.googleapis.com/css?family=Archivo+Narrow" rel="stylesheet" />
        <script src="https://npmcdn.com/masonry-layout@4.1/dist/masonry.pkgd.min.js"></script>

      </div>
    )
  }
}
