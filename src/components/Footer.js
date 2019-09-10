import React, {Component} from "react";
import styled from "styled-components";
import {IoIosMail, IoLogoGithub, IoLogoFacebook} from "react-icons/io";
import {OutboundLink} from "gatsby-plugin-google-analytics";
import {Link} from "gatsby";

class Footer extends Component {
  render() {
    return (
      <footer className={this.props.className}>
        <div className={`social-media`}>
          <OutboundLink
            className={`icon`}
            title={`Nebraska Open Carry Email Address`}
            href="mailto:neopencarry@mail.com"
            target={`_blank`}
            rel={`noopener noreferrer`}
          >
            <IoIosMail />
          </OutboundLink>
          <OutboundLink
            className={`icon`}
            title={`Nebraska Open Carry Facebook Page`}
            href="https://www.facebook.com/neopencarry"
            target={`_blank`}
            rel={`noopener noreferrer`}
          >
            <IoLogoFacebook />
          </OutboundLink>
          <OutboundLink
            className={`icon`}
            title={`Nebraska Open Carry GitHub Repository`}
            href="https://github.com/neopencarry/neopencarry.org"
            target={`_blank`}
            rel={`noopener noreferrer`}
          >
            <IoLogoGithub />
          </OutboundLink>
        </div>
        <div className={`copyright terms privacy`}>
          <span>© {new Date().getFullYear()} neopencarry.org</span>
          <span className={`terms`}>
            <Link to={`/terms-of-use`}>Terms</Link>
          </span>
          <span className={`privacy`}>
            <Link to={`/privacy-policy`}>Privacy</Link>
          </span>
        </div>
      </footer>
    );
  }
}

export default styled(Footer)`
  span.terms,
  span.privacy {
    margin-left: 2em;
  }
`;
