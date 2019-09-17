import React, {Component} from "react";
import PortableText from "@sanity/block-content-to-react";
import serializers from "../sanity/Serializers";
import styled from "styled-components";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

class Page extends Component {
  render() {
    const body = this.props.pageContext.page._rawBody;
    const title = this.props.pageContext.page.title
      ? this.props.pageContext.page.title
      : "Open Carry";
    const description = this.props.pageContext.page.description
      ? this.props.pageContext.page.description
      : "Working to maintain the right to keep and bear arms.";

    return (
      <Layout>
        <SEO
          title={title}
          slug={this.props.pageContext.page.slug}
          description={description}
        />
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
