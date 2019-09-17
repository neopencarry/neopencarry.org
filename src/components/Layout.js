/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import {StaticQuery, graphql} from "gatsby";
import styled from "styled-components";
import "./base.css";

import {primaryColor, secondaryColor} from "../constants/style";

import Header from "./Header";
import MainLayoutSidebar from "./MainLayoutSidebar";
import Footer from "./Footer";

const Layout = ({children, className}) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        sanityContentArea(identifier: {eq: "main-layout-sidebar"}) {
          _rawBody
        }
      }
    `}
    render={(data) => (
      <div className={`main-content ${className}`}>
        <Header />
        <main>
          <MainLayoutSidebar
            className={`sidebar`}
            content={data.sanityContentArea._rawBody}
          />
          <section className={`main-content`}>{children}</section>
          <div className={`footer-filler`} />
        </main>
        <Footer />
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default styled(Layout)`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  color: #333333;

  font-family: "Helvetica Neue", sans-serif;

  text-align: center;

  .sidebar,
  .main-content,
  footer {
    float: left;
  }

  .sidebar {
    width: 20%;
    padding-right: 5%;
  }

  .main-content {
    width: 75%;
  }

  @media (max-width: 740px) {
    .sidebar {
      display: none;
    }

    .main-content {
      width: 100%;
    }
  }

  a {
    color: inherit;
    text-decoration: underline;

    &:hover,
    &:focus {
      color: ${secondaryColor};
    }
  }

  header {
    background: ${primaryColor};
    color: white;
    height: 5rem;
    font-size: 1rem;
  }

  main {
    margin: 3rem 10vw 0 10vw;
  }

  .page-body {
    text-align: left;
  }

  footer,
  div.footer-filler {
    min-height: 5rem;
    font-size: 1rem;
    margin-top: 3rem;
  }

  footer {
    background: ${primaryColor};
    color: white;
    width: 100%;

    .social-media {
      margin: 0.5rem 0;

      .icon {
        margin: 0 0.5rem;

        &:hover,
        &:focus {
          color: inherit;
          opacity: 0.6;
        }

        svg {
          height: 2rem;
          width: 2rem;
        }
      }
    }
  }
`;
