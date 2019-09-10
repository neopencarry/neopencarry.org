import React, {PureComponent} from "react";
import styled from "styled-components";
import logo from "../images/logo.png";
import {Link} from "gatsby";

class Logo extends PureComponent {
  render() {
    return (
      <Link className={`logo ${this.props.className}`} to={`/`}>
        <img src={logo} alt={`Nebraska Open Carry Logo`} />
      </Link>
    );
  }
}

export default styled(Logo)`
  img {
    height: 3.5rem;
    margin-top: 0.5rem;
  }
`;
