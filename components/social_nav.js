

export default ({ children }) => (
  <nav className="social-nav">

    <style jsx>{`
      .social-nav {
        position: relative;
        margin-top: 3px;
      }
      .nav-contact {
        display: inline-block;
      }
      .social-nav-wrapper {
        display: inline-block;
        width: 258px;
      }
      a[href^="tel"] {
        color: white;
        text-decoration: none;
      }
      .navbar_phonenumber {
        position: relative;
        bottom: 5px;
        display: inline-block;
        height: 30px;
        padding: 0 0 0 26px;
        font-family: 'Archivo Narrow',sans-serif;
        font-size: 20px;
        font-weight: light;
        color: white;
        text-decoration: none;
        background-image: url("../static/icon-phone.svg");
        background-repeat: no-repeat;
        background-position: 0 1px;
        background-size: 24px;
      }
      .navbar_email {
        position: relative;
        bottom: -14px;
        bottom: -9px;
        display: inline-block;
        height: 30px;
        padding: 0 0 0 26px;
        margin: 0 21px 0 0;
        font-family: 'Archivo Narrow',sans-serif;
        font-size: 20px;
        font-weight: light;
        color: white;
        text-decoration: none;
        background-image: url("../static/icon-email.svg");
        background-repeat: no-repeat;
        background-position: 0 1px;
        background-size: 24px;
      }
      .navbar_divider {
        position: absolute;
        top: 5px;
        left: 37px;
        width: 2px;
        height: 30px;
        background-color: #fff;
      }
      .navbar_phonenumber:hover,
      .navbar_email:hover {
        opacity: 0.8;
      }
      .icon {
        height: 32px;
        padding-left: 30px;
      }
      .social-nav a:nth-child(6) .icon {
        height: 28px;
      }

      @media screen and (max-width: 528px) {
        .social-nav {
          margin-top: 0;
        }
        .navbar_divider {
          top: 6px;
          height: 26px;
        }
        .social-nav-wrapper {
          display: none;
          margin-top: 6px;
          margin-bottom: 6px;
        }
        .social-nav a:nth-child(1) .icon {
          padding-left: 0;
        }
      }

      /* @media screen and (min-width: 580px) {
        .navbar_email {
          background-size: 24px;
          font-size: 20px;
          padding: 0 0 0 26px;
          margin: 0 16px 0 0;
          bottom: -9px;
        }
        .navbar_divider {
          height: 30px;
          top: 4px;
          left: 35px;
        }
        .navbar_phonenumber {
          background-size: 24px;
          font-size: 20px;
          padding: 0 0 0 26px;
          margin: 0 15px 0 0;
        }
      }
      @media screen and (min-width: 960px) {
        .icon {
          height: 28px;
          padding-left: 10px;
          padding-right: 10px;
        }
      }
      @media screen and (min-width: 1147px) {
        .icon {
          height: 24px;
          padding-left: 5px;
          padding-right: 5px;
        }
      }
      @media screen and (min-width: 1120px) {
        .navbar_email {
          margin: 0 21px 0 0;
        }
        .navbar_divider {
          left: 37px;
          top: 6px;
        }
      } */

/*
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
      .navbar_email {
        background-image: url("../static/icon-email.svg");
        background-position: 0 1px;
        background-repeat: no-repeat;
        background-size: 16px;
        bottom: -14px;
        color: white;
        display: inline-block;
        font-family: 'Archivo Narrow',sans-serif;
        font-size: 14px;
        font-weight: light;
        height: 30px;
        margin: 0 16px 0 0;
        padding: 0 0 0 18px;
        position: relative;
        text-decoration: none;
      }
      .navbar_divider {
        width: 2px;
        height: 22px;
        background-color: #fff;
        position: absolute;
        top: 10px;
        left: 26px;
      }
*/
    `}</style>
    <div className="nav-contact">
      <a className="navbar_email" href='mailto:info@gedankenwerk.com'></a>
      <div className="navbar_divider"></div>
      <a className="navbar_phonenumber" href='tel:+4920163019133'>0201 630191-33</a>
    </div>
    <div className="social-nav-wrapper">
      <a rel="noopener" href='https://www.instagram.com/gedankenwerk_com/' target="_blank">
        <img className="icon"src="/static/icon-instagram@2x.png" alt="Gedankenwerk auf Instagram" />
      </a>
      <a rel="noopener" href='https://vimeo.com/gedankenwerk' target="_blank">
        <img className="icon"src="/static/icon-vimeo@2x.png" alt="Gedankenwerk auf Vimeo" />
      </a>
      <a rel="noopener" href='https://www.youtube.com/channel/UCkYe1j5dm2LkG9Pdvnm4VEQ' target="_blank">
        <img className="icon"src="/static/icon-youtube@2x.png" alt="Gedankenwerk auf YouTube" />
      </a>
      <a rel="noopener" href='https://www.youtube.com/channel/UCIt6mou8e8jgyA5-z2konww' target="_blank">
        <img className="icon"src="/static/icon-gadgetstage@2x.png" alt="Gadget Stage YouTube Channel" />
      </a>
    </div>
  </nav>
);
