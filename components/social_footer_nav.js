import styled from 'styled-components';

const Icon = styled.img`
  height: 24px;
  padding-left: 5px;
  padding-right: 5px;
  &:first-child { padding-left: 0; }
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
  &:first-child { padding-left: 0; }
`;

export default() => (
  <nav>
    <a rel="noopener" href='https://www.facebook.com/gedankenwerk' target="_blank">
      <Icon src="/static/monoicon-facebook@2x.png" alt="Gedankenwerk auf Facebook" />
    </a>
    <a rel="noopener" href='https://www.instagram.com/gedankenwerk_com/' target="_blank">
      <Icon src="/static/monoicon-instagram@2x.png" alt="Gedankenwerk auf Instagram" />
    </a>
    <a rel="noopener" href='https://vimeo.com/gedankenwerk' target="_blank">
      <Icon src="/static/monoicon-vimeo@2x.png" alt="Gedankenwerk auf Vimeo" />
    </a>
    <a rel="noopener" href='https://www.youtube.com/channel/UCkYe1j5dm2LkG9Pdvnm4VEQ' target="_blank">
      <Icon src="/static/monoicon-youtube@2x.png" alt="Gedankenwerk auf YouTube" />
    </a>
    <a rel="noopener" href='https://www.youtube.com/channel/UCIt6mou8e8jgyA5-z2konww' target="_blank">
      <Icon src="/static/monoicon-gadgetstage@2x.png" alt="Gadget Stage YouTube Channel" />
    </a>
  </nav>
)
