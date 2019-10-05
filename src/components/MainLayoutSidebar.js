import React, {Component} from "react";
import styled from "styled-components";
import PortableText from "@sanity/block-content-to-react";
import serializers from "../sanity/Serializers";

class MainLayoutSidebar extends Component {
  render() {
    return (
      <section className={this.props.className}>
        <PortableText
          className={`main-layout-sidebar`}
          blocks={this.props.content}
          serializers={serializers}
        />
      </section>
    );
  }
}

export default styled(MainLayoutSidebar)`
  text-align: left;
  ul {
    padding: 0;
    line-height: 1.75;
    list-style: none;
    li::marker {
      display: none;
    }
  }
`;
