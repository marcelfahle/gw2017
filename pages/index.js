import React from 'react';
import styled from 'styled-components';
import pageWithIntl from '../components/page_with_intl';
import { FormattedMessage } from 'react-intl';

import data from './../static/data.json';

import Layout from '../components/layout';
import Projects from '../components/projects';
import Services from '../components/services';

const PageHeader = styled.div`
  text-align: center;
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
const Intro = styled.p`
  text-align: center;
  margin-top: 0;
  font-size: 1em;
  line-height: 1.3em;
  max-width: 90%;
  margin: 0 auto;
  @media screen and (min-width: 720px) {
    font-size: 1.25em;
    max-width: 75%;
  }
  @media screen and (min-width: 960px) {
    max-width: 68%;
  }
  @media screen and (min-width: 1020px) {
    max-width: 65%;
  }
  @media screen and (min-width: 1280px) {
    max-width: 55%;
  }
  @media screen and (min-width: 1400px) {
    max-width: 50%;
  }
`;
const Green = styled.span`
  color: #51ed06;
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
      totalProjectsNum: data.projects.length,
    };

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
          onClick={this.showMoreProjects.bind(this)}
        >
          Mehr...
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
      html.offsetHeight
    );
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight - 50 && this.state.loadedOnce) {
      this.showMoreProjects({ preventDefault: () => null });
    } else {
    }
  }

  render() {
    const { projects } = data;
    return (
      <Layout>
        <PageHeader>
          <PageTitle>
            <Green>Gedanken</Green>werk:<br />
            <FormattedMessage
              id="page_tagline"
              defaultMessage="IDEEN FÜR DIE DIGITALE WELT"
            />
            <Green>.</Green>
          </PageTitle>
          <Intro>
            <FormattedMessage
              id="page_intro"
              defaultMessage="Wir lieben das Web. Und wir entwickeln für unsere Kunden, was das Web liebt: innovative Websites, professionelle Videos und ausgereiften Content für die Sozialen Medien. Das tun wir bei Gedankenwerk seit über 15 Jahren für große und kleine Unternehmen – und mit den passenden Spezialisten für jede Herausforderung. Sprechen Sie uns einfach an. Denn mit uns kann man reden."
            />
          </Intro>
        </PageHeader>

        <Services />

        <Stripes2 />

        <PageHeader>
          <PageTitle>
            Unsere Arbeit<Green>.</Green>
          </PageTitle>
        </PageHeader>

        <Projects projects={projects} projectsNum={this.state.projectsNum} />

        {!this.state.loadedOnce ? this.loadMoreButton() : ''}
      </Layout>
    );
  }
}

export default pageWithIntl(Index);
