import styled from 'styled-components';

const SocialNav = styled.nav`

  position: absolute;
  right: 10px;
  @media screen and (min-width: 420px) {
    right: 40px;
  }
  @media screen and (min-width: 820px) {
    top: 24px;
  }
  @media screen and (min-width: 1020px) {
    top: 28px;
  }
`;

const Icon = styled.img`
  height: 24px;
  padding-left: 5px;
  padding-right: 5px;
  @media screen and (min-width: 960px) {
    height: 28px;
    padding-left: 10px;
    padding-right: 10px;
  }
  @media screen and (min-width: 1060px) {
    height: 32px;
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export default ({ children }) => (
  <SocialNav>
    <a href='https://www.facebook.com/gedankenwerk' target="_blank">
      <Icon src="/static/icon-facebook@2x.png" alt="Gedankenwerk auf Facebook" />
    </a>
    <a href='https://www.instagram.com/gedankenwerk_com/' target="_blank">
      <Icon src="/static/icon-instagram@2x.png" alt="Gedankenwerk auf Instagram" />
    </a>
    <a href='https://vimeo.com/gedankenwerk' target="_blank">
      <Icon src="/static/icon-vimeo@2x.png" alt="Gedankenwerk auf Vimeo" />
    </a>
    <a href='https://www.youtube.com/channel/UCIt6mou8e8jgyA5-z2konww' target="_blank">
      <Icon src="/static/icon-gadgetstage@2x.png" alt="Gadget Stage YouTube Channel" />
    </a>
    <a href='https://www.youtube.com/channel/UCkYe1j5dm2LkG9Pdvnm4VEQ' target="_blank">
      <Icon src="/static/icon-youtube@2x.png" alt="Gedankenwerk auf YouTube" />
    </a>
  </SocialNav>
);


