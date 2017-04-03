

export default ({ children }) => (
  <nav className="social-nav">

    <style jsx>{`
      .social-nav {
        position: absolute;
        right: 10px;
      }
      @media screen and (min-width: 420px) {
        .social-nav { right: 40px; }
      }
      @media screen and (min-width: 820px) {
        .social-nav { top: 24px; }
      }
      @media screen and (min-width: 1020px) {
        .social-nav { top: 28px; }
      }
      .icon {
        height: 24px;
        padding-left: 5px;
        padding-right: 5px;
      }
      @media screen and (min-width: 960px) {
        .icon {
          height: 28px;
          padding-left: 10px;
          padding-right: 10px;
        }
      }
      @media screen and (min-width: 1060px) {
        .icon {
          height: 32px;
          padding-left: 15px;
          padding-right: 15px;
        }
      }

    `}</style>


    <a rel="noopener" href='https://www.facebook.com/gedankenwerk' target="_blank">
      <img className="icon"src="/static/icon-facebook@2x.png" alt="Gedankenwerk auf Facebook" />
    </a>
    <a rel="noopener" href='https://www.instagram.com/gedankenwerk_com/' target="_blank">
      <img className="icon"src="/static/icon-instagram@2x.png" alt="Gedankenwerk auf Instagram" />
    </a>
    <a rel="noopener" href='https://vimeo.com/gedankenwerk' target="_blank">
      <img className="icon"src="/static/icon-vimeo@2x.png" alt="Gedankenwerk auf Vimeo" />
    </a>
    <a rel="noopener" href='https://www.youtube.com/channel/UCIt6mou8e8jgyA5-z2konww' target="_blank">
      <img className="icon"src="/static/icon-gadgetstage@2x.png" alt="Gadget Stage YouTube Channel" />
    </a>
    <a rel="noopener" href='https://www.youtube.com/channel/UCkYe1j5dm2LkG9Pdvnm4VEQ' target="_blank">
      <img className="icon"src="/static/icon-youtube@2x.png" alt="Gedankenwerk auf YouTube" />
    </a>
  </nav>
);


