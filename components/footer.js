import styled from 'styled-components';
import Copyright from './copyright';

import SocialFooterNav from './../components/social_footer_nav';

const Footer = styled.footer`
  position: relative;
  padding: 10px;
  border-top: 5px solid #51ed06;
  margin-bottom: 20px;
  @media screen and (min-width: 420px) {
    padding: 0 40px;
  }
`;
const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
  @media screen and (min-width: 520px) {
    font-size: 2.8rem;
  }
  @media screen and (min-width: 720px) {
    font-size: 3.125rem;

  }

`
const Dot = styled.span`
  color: #51ed06;
`
const Link = styled.a`
  color: white;
  text-decoration: none;
  &:link { color: white; }
  &:visited { color: white; }
  &:hover { color: #51ed06; }
  &:active { color: #51ed06; }
`

const H3 = styled.h3`
  text-transform: uppercase;
  color: #51ed06;
  font-size: 1rem;
  @media screen and (min-width: 720px) {
    font-size: 1.25rem;

  }
`;

export default () => (
  <Footer>
    <Title>
      Kontakt
      <Dot>.</Dot>
    </Title>

    <H3>
      GEDANKENWERK –<br/>
      AGENTUR FÜR NEUE MEDIEN
    </H3>
    <p>
      Sascha Panter und Yvonne Schweiger GbR <br/>
      Gentweg 10, 45356 Essen
    </p>

    <p>
      <Link href="mailto:info@gedankenwerk.com">info@gedankenwerk.com</Link><br/>
      Tel. 0201 630191-33<br/>
      Fax 0201 630191-88<br/>
    </p>

    <p>
      <Link href="/impressum">Impressum</Link>
    </p>

    <H3>Folge uns</H3>

    <SocialFooterNav />

    <Copyright co="Gedankenwerk" />  

  </Footer>
)
