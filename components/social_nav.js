

export default ({ children }) => (
  <nav className="social-nav">

    <style jsx>{`
      .social-nav {
        position: absolute;
        right: 55px;
      }
      @media screen and (min-width: 420px) {
        .social-nav { right: 40px; }
      }
      @media screen and (min-width: 1120px) {
        .social-nav { top: 24px; }
      }
      a[href^="tel"] {
        color: white;
        text-decoration: none;
      }
      .navbar_phonenumber {
        background-image: url("../static/icon-phone.svg");
        background-position: 0 1px;
        background-repeat: no-repeat;
        background-size: 16px;
        bottom: 5px;
        color: white;
        display: inline-block;
        font-family: 'Archivo Narrow',sans-serif;
        font-size: 14px;
        font-weight: light;
        height: 30px;
        margin: 0 6px 0 0;
        padding: 0 0 0 18px;
        position: relative;
        text-decoration: none;
      }
      .navbar_phonenumber:hover {
        opacity: 0.8;
      }
      @media screen and (min-width: 580px) {
        .navbar_phonenumber {
          background-size: 24px;
          font-size: 20px;
          padding: 0 0 0 26px;
          margin: 0 15px 0 0;
        }
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

    <a className="navbar_phonenumber" href='tel:+4920163019133'>0201 630 191 - 33</a>
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


