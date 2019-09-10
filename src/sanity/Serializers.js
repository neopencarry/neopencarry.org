import React from "react";
import {Link} from "gatsby";
import {OutboundLink} from "gatsby-plugin-google-analytics";

const serializers = {
  marks: {
    internalLink: ({mark, children}) => {
      const {to} = mark;
      if (to && to.startsWith("#")) {
        // Link component cannot be used with anchor links. Use regular <a/> element.
        return <a href={to}>{children}</a>;
      }
      return <Link to={to}>{children}</Link>;
    },
    link: ({mark, children}) => {
      const {href, newWindow, track} = mark;
      const title = href; // For now, set the title for external links as the url so it's visible on hover.
      const rel = newWindow ? `noopener noreferrer` : null;
      const target = newWindow ? `_blank` : null;

      if (track === true) {
        return (
          <OutboundLink href={href} rel={rel} target={target} title={title}>
            {children}
          </OutboundLink>
        );
      }

      return (
        <a href={href} rel={rel} target={target} title={title}>
          {children}
        </a>
      );
    },
    elementId: ({mark, children}) => {
      const {id} = mark;
      return <span id={id}>{children}</span>;
    },
  },
};

export default serializers;
