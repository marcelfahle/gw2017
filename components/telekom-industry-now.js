import React from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import pageWithIntl from '../components/page_with_intl';
import {FormattedMessage, FormattedHTMLMessage} from 'react-intl';
import fetch from 'isomorphic-unfetch';
import data from '../static/telekom-industry-now-content.json';
import Layout from '../components/layout-no-intro';
import Projects from '../components/projects-no-title';
import Services from '../components/services';
import Offer from '../components/offer';

const PageHeader = styled.div`
  text-align: center;
  margin-top: 180px;
  margin-bottom: 3rem;
`;
const PageTitle = styled.h1`
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
  @media screen and (min-width: 410px) {
    font-size: 1.9rem;
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
  }
  @media screen and (min-width: 1060px) {
    font-size: 4.375rem;
    border-bottom: 9px solid #51ed06;
  }
`;
const PageTitleAbove = styled.p`
  color: #51ED06;
  text-align: center;
  text-transform: uppercase;
  margin-top: 0;
  font-size: 18px !important;
  letter-spacing: 0.25px;
  max-width: 90%;
  margin: 0 auto;
  strong {
    color: white;
    font-weight: bold;
  }
  @media screen and (min-width: 720px) {
    max-width: 75%;
  }
  @media screen and (min-width: 960px) {
    font-size: 22px !important;
    max-width: 75%;
    margin: 0 auto -22px;
  }
  @media screen and (min-width: 1020px) {
    max-width: 75%;
    font-size: 21px !important;
    margin: 0 auto -22px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 25px !important;
    max-width: 68%;
    margin: 0 auto -27px;
  }
  @media screen and (min-width: 1400px) {
    max-width: 50%;
  }
`;
const PageTitleBelow = styled.p`
  color: #51ED06;
  text-align: center;
  text-transform: uppercase;
  font-size: 15px !important;
  letter-spacing: 0.16px;
  max-width: 90%;
  margin: 5px auto 21px;
  strong {
    color: white;
    font-weight: bold;
  }
  @media screen and (min-width: 720px) {
    font-size: 1.25em;
    max-width: 75%;
  }
  @media screen and (min-width: 960px) {
    max-width: 75%;
  }
  @media screen and (min-width: 1020px) {
    max-width: 75%;
  }
  @media screen and (min-width: 1280px) {
    max-width: 68%;
  }
  @media screen and (min-width: 1400px) {
    max-width: 50%;
  }
`;
const Intro = styled.p`
  text-align: center;
  margin-top: 0;
  font-size: 1em;
  line-height: 1.3em;
  max-width: 90%;
  margin: 0 auto;
  strong {
    color: white;
    font-weight: bold;
  }
  @media screen and (min-width: 720px) {
    font-size: 1.25em;
    max-width: 75%;
  }
  @media screen and (min-width: 960px) {
    max-width: 75%;
  }
  @media screen and (min-width: 1020px) {
    max-width: 75%;
  }
  @media screen and (min-width: 1280px) {
    max-width: 68%;
  }
  @media screen and (min-width: 1400px) {
    max-width: 50%;
  }
`;
const Green = styled.span`
  color: #51ed06;
`;
const Handschrift = styled.p`
  margin-bottom: -40px;
  img {
    width: 100%;
    max-width: 600px;
  }
`;

const LoadMoreButton = styled.a`
  color: white;
  display: inline-block;
  text-align: center;
  line-height: 1.5rem;
  background: #51ed06;
  padding: 8px 20px;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1.2rem;
`;
const LoadMoreButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const Stripes2 = styled.div`
  height: 54px;
  background: transparent url('/static/stripes2xl.svg') no-repeat;
  width: calc(100vw);
  margin-left: -10px;
  @media screen and (min-width: 480px) {
    margin-left: -40px;
    width: calc(100vw);
  }
`;

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loadedOnce: true,
      projectsNum: 52,
      totalProjectsNum: 0,
    };
    //totalProjectsNum: data.projects.length,

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  showMoreProjects(e) {
    e.preventDefault();
    this.setState({
      projectsNum: this.state.projectsNum + 5,
      loadedOnce: true,
    });
  }

  loadMoreButton() {
    return (
      <LoadMoreButtonWrapper>
        <LoadMoreButton
          rel="noopener"
          href="#"
          onClick={this.showMoreProjects.bind(this)}>
          Mehr..
        </LoadMoreButton>
      </LoadMoreButtonWrapper>
    );
  }

  handleScroll() {
    const windowHeight =
      'innerHeight' in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight,
    );
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight - 350 && this.state.loadedOnce) {
      this.showMoreProjects({preventDefault: () => null});
    } else {
    }
  }

  render() {
    const {projects} = data;
    return (
      <Layout>
        <br/><br/><br/><br/><br/><br/><br/><br/>
        <PageHeader>
          <PageTitleAbove>Deutsche Telekom Business Applikation</PageTitleAbove>
          <PageTitle>
            Industry Now<Green>.</Green>
          </PageTitle>
          <PageTitleBelow>Text / Illustration / Animation / Development</PageTitleBelow>
          <Intro>
            <FormattedHTMLMessage
              id="page_intro_telekom_industry_now"
              defaultMessage="Für die Deutsche Telekom haben wir eine Business Applikation erstellt, die Geschäftskunden visuell verdeutlicht, wie die Deutsche Telekom im täglichen Geschäft mit digitalen Lösungen unterstützen kann. Damit sich möglichst viele Geschäftsbereiche wiederfinden, haben wir drei Kategorien definiert, die exemplarisch für die am meisten vertretenen Industriezweige in Deutschland stehen.<br><br>Unterstützt durch einen animierten Introfilm, der den selben Illustrationsstil wie die Applikation aufweist, werden Kunden in Geschäftsterminen mit ihren Ansprechpartnern vor Ort zu einer auf sie zugeschnittenen Lösung geführt."
            />
          </Intro>
        </PageHeader>

        <Projects projects={projects} projectsNum={this.state.projectsNum} />

        {!this.state.loadedOnce ? this.loadMoreButton() : ''}
      </Layout>
    );
  }
}

export default pageWithIntl(Index);
