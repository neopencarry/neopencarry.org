import React, {Component} from "react";
import PortableText from "@sanity/block-content-to-react";
import serializers from "../sanity/Serializers";
import styled from "styled-components";
import Layout from "../components/Layout";

class Page extends Component {
  render() {
    const body = this.props.pageContext.page._rawBody;

    return (
      <Layout>
        <div className={`${this.props.className}`}>
          <PortableText
            blocks={body}
            serializers={serializers}
            projectId={process.env.SANITY_PROJECT_ID}
            dataset={process.env.SANITY_DATASET}
          />
        </div>
      </Layout>
    );
  }
}

export default styled(Page)`
  text-align: left;

  figure {
    text-align: center;

    img {
      width: 50%;
    }
  }
`;
