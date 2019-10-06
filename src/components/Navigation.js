import React, {PureComponent} from "react";
import styled from "styled-components";
import {Link} from "gatsby";
import MobileNavMenuToggle from "./MobileNavMenuToggle";

class Navigation extends PureComponent {
  constructor(props) {
    super(props);

    this.toggleMobileNavMenu = this.toggleMobileNavMenu.bind(this);

    this.state = {
      isMobileNavOpen: false,
    };
  }

  toggleMobileNavMenu() {
    this.setState((state) => {
      return {
        isMobileNavOpen: !state.isMobileNavOpen,
      };
    });
  }

  render() {
    return (
      <nav
        className={`${this.props.className} ${
          this.state.isMobileNavOpen
            ? "mobile-nav-expanded"
            : "mobile-nav-collapsed"
        }`}
      >
        <MobileNavMenuToggle
          className={`mobile-nav-menu-toggle`}
          isMobileNavOpen={this.state.isMobileNavOpen}
          onClick={this.toggleMobileNavMenu}
        />
        <ul>
          <div className={`left`}>
            <li className={`nav-item`}>
              <Link to={`/about-us`}>About</Link>
            </li>
            <li className={`nav-item`}>
              <Link to={`/resources`}>Resources</Link>
            </li>
            <li className={`nav-item`}>
              <Link to={`/blog`}>Blog</Link>
            </li>
          </div>
          <div className={`right`}>
            <li className={`nav-item`}>
              <Link to={`/faq`}>FAQs</Link>
            </li>
            <li className={`nav-item`}>
              <Link to={`/events`}>Events</Link>
            </li>
            <li className={`nav-item last`}>
              <Link to={`/contact-us`}>Contact</Link>
            </li>
          </div>
        </ul>
      </nav>
    );
  }
}

const navHorizontalPosition = "25px";
const mobileNavItemHeight = "3.75rem";

export default styled(Navigation)`
  position: absolute;
  left: 0;
  right: 0;

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  @media (min-width: 741px) {
    .mobile-nav-menu-toggle {
      display: none;
    }

    .left,
    .right {
      position: absolute;
      top: 2rem;
    }

    .left {
      left: ${navHorizontalPosition};
      li {
        margin-left: 20px;
      }
    }

    .right {
      right: ${navHorizontalPosition};
      li {
        margin-right: 20px;
      }
    }

    li {
      display: inline-block;
    }

    li.nav-item a {
      color: inherit;
      &:visited {
        color: inherit;
      }
      text-decoration: none;

      &:hover,
      &:focus {
        text-decoration: underline;
      }
    }
  }

  @media (max-width: 740px) {
    background: inherit;

    &.mobile-nav-collapsed {
      ul {
        display: none;
      }
    }

    li {
      line-height: ${mobileNavItemHeight};

      a {
        display: inline-block;
        height: ${mobileNavItemHeight};
        width: 100%;
        text-decoration: none;
      }

      // For mobile navigation, all items should have a bottom border except the
      // last (bottom) item.
      &:not(.last) {
        border-bottom: solid 1px;
      }
    }
  }
`;
