import styled from 'styled-components';
import {FormattedHTMLMessage, FormattedMessage} from 'react-intl';

const Green = styled.span`
  color: #51ed06;
`;
const Offer = styled.div`
  position: relative;
`;
const Content = styled.div`
  position: relative;
  margin-bottom: 5em;
  background: transparent url('/static/angebot.jpg') top center no-repeat;
  background-size: contain;
  padding-top: 50%;

  @media screen and (min-width: 960px) {
    display: flex;
    justify-content: flex-end;
    background: transparent url('/static/angebot.jpg') center center no-repeat;
    background-size: cover;
    padding-top: 0;
  }
`;
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
    font-size: 3rem;
  }
  @media screen and (min-width: 1060px) {
    font-size: 4.375rem;
    border-bottom: 9px solid #51ed06;
  }
`;
const Box = styled.div`
  position: relative;
  z-index: 3;
  background: #7ed321;
  padding: 32px 16px;
  color: white;
  text-align: center;

  @media screen and (min-width: 960px) {
    margin: 36px;
    padding: 32px 16px;
    transform: none;
    width: 400px;
    align-self: flex-end;
  }
  @media screen and (min-width: 1360px) {
    width: 400px;
  }

  h3 {
    text-transform: uppercase;
    font-size: 1.6rem;
    margin: 0;
    @media screen and (min-width: 410px) {
      font-size: 1.9rem;
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
    font-size: 20px;
  }
  p span {
    font-size: 4rem;
    font-weight: bold;

    @media screen and (min-width: 960px) {
      font-size: 3rem;
    }
    @media screen and (min-width: 1060px) {
      font-size: 5rem;
    }
  }
`;

export default () => (
  <Offer>
    <PageHeader>
      <PageTitle>
        Einstiegsangebot<Green>.</Green>
      </PageTitle>
    </PageHeader>
    <Content>
      <Box>
        <h3>
          Ein Imagefilm ist teuer.
          <br />
          Wer sagt das?
        </h3>
        <p>
          <strong>Die Eckdaten:</strong>
          <br />
          Ein Drehtag im Unternehmen // Ein weiterer halber Drehtag für ein
          Interview // Schnitt und Musik inklusive // Online-Lizenz
        </p>
        <p>
          Machen wir – in einem Radius vom 50 Kilometern ohne Anfahrtskosten.
          Tut auch gar nicht weh. VERSPROCHEN!
        </p>
        <p>
          <span>2.799,- &euro;</span>
          <br />
          zzgl. Mehrwertsteuer
        </p>
      </Box>
    </Content>
  </Offer>
);
