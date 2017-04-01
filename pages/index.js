import React from 'react';
import styled from 'styled-components';

import data from './../static/data.json';

import Layout from '../components/layout'
import Projects from '../components/projects';
import Services from '../components/services';

const PageHeader = styled.div`
  text-align: center; 
`;
const PageTitle = styled.h1`
  color: white;
  text-transform: uppercase;
  text-align: center;
  border-bottom: 5px solid #51ed06;
  display: inline-block;
  margin-bottom: 1rem;
  line-height: 1em;
  padding-bottom: 3px;
  //width: 80%;
  font-size: 1.4rem;
  @media screen and (min-width: 420px) {
    font-size: 1.6rem;
  }
  @media screen and (min-width: 520px) {
    font-size: 1.8rem;
  }
  @media screen and (min-width: 720px) {
    font-size: 2.8rem;
  }
  @media screen and (min-width: 820px) {
    font-size: 3rem;
    margin-bottom: 0.5em;
  }
  @media screen and (min-width: 960px) {
    font-size: 3.75rem;
  }
  @media screen and (min-width: 1060px) {
    font-size: 4.375rem;
  }

`;
const Intro = styled.p`
  text-align: center;
  margin-top: 0;
  font-size: 1em;
  @media screen and (min-width: 720px) {
    font-size: 1.25em;

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
  margin-top: 20px;
  padding: 8px 20px;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1.2rem;
`;
const LoadMoreButtonWrapper = styled.div`
  text-align: center;
`;




export default class Index extends React.Component {

  constructor( props ) {
    super( props ) 

    this.state = {
      projectsNum: 6,
      totalProjectsNum: data.projects.length
    }
  }

  showMoreProjects( e ) {
    e.preventDefault();
    this.setState( { projectsNum: this.state.projectsNum + 5 } )
  }

  loadMoreButton() {
    return (
      <LoadMoreButtonWrapper>
        <LoadMoreButton 
          href="#"
          onClick={ this.showMoreProjects.bind(this) }
        >Mehr...</LoadMoreButton>
      </LoadMoreButtonWrapper>
    )
  }



  render() {
    const { projects } = data;
    return (
      
      <Layout>

        <PageHeader>
          <PageTitle>
            Gedankenwerk:<br/>
            Ideen für die digitale Welt<Green>.</Green>
          </PageTitle>
          <Intro>
            Wir lieben das Web. Und wir entwickeln für unsere Kunden, was das Web liebt: innovative Websites, professionelle Videos und ausgereiften Content für die Sozialen Medien. Das tun wir bei Gedankenwerk für große und kleine Unternehmen – und mit den passenden Spezialisten für jede Herausforderung. Sprechen Sie uns einfach an. Denn mit uns kann man reden.
          </Intro>
        </PageHeader>

        <Services />


        <PageHeader>
          <PageTitle>
            Unsere Arbeit<Green>.</Green>
          </PageTitle>
        </PageHeader>
        
        <Projects 
          projects={projects}
          projectsNum={ this.state.projectsNum }
        />

        {
          (this.state.projectsNum < this.state.totalProjectsNum) ?
            this.loadMoreButton() :
            ''
          
        }



      </Layout>

    )
  }
}
