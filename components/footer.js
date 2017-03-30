import styled from 'styled-components';

import SocialFooterNav from './../components/social_footer_nav';

const Footer = styled.footer`
  padding: 10px;
  border-top: 5px solid #51ed06;
`;
const Title = styled.h2`
  size: 50px;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
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
      Tel. 0201 630 191 - 33<br/>
      Fax 0201 630 191 - 88<br/>
    </p>

    <H3>Folge uns</H3>

    <SocialFooterNav />

  </Footer>
)
