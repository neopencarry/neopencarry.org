import {IoMdLink, IoMdOpen, IoIosGrid} from "react-icons/io";
import IdIcon from "./components/idIcon";

/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
export default {
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",
      // Styles let you set what your user can mark up blocks with. These
      // corrensponds with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        {title: "Normal", value: "normal"},
        {title: "H1", value: "h1"},
        {title: "H2", value: "h2"},
        {title: "H3", value: "h3"},
        {title: "H4", value: "h4"},
        {title: "Quote", value: "blockquote"},
      ],
      lists: [{title: "Bullet", value: "bullet"}],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          {title: "Strong", value: "strong"},
          {title: "Emphasis", value: "em"},
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: "External Link",
            name: "link",
            type: "object",
            blockEditor: {
              icon: IoMdOpen,
            },
            fields: [
              {
                title: "Full URL",
                name: "href",
                type: "url",
                validation: (Rule) =>
                  Rule.uri({
                    allowRelative: false,
                    scheme: ["https", "http", "mailto", "tel"],
                  }),
              },
              {
                title: "Open in New Window?",
                name: "newWindow",
                type: "boolean",
              },
              {
                title: "Enable GA Tracking?",
                name: "track",
                type: "boolean",
              },
            ],
          },
          {
            title: "Internal Link",
            name: "internalLink",
            type: "object",
            blockEditor: {
              icon: IoMdLink,
            },
            fields: [
              {
                title: "Relative URL",
                name: "to",
                type: "url",
                validation: (Rule) => Rule.uri({allowRelative: true}),
              },
            ],
          },
          {
            title: "Element ID",
            name: "elementId",
            type: "object",
            blockEditor: {
              icon: IoIosGrid,
              render: IdIcon,
            },
            fields: [
              {
                title: "ID Value",
                name: "id",
                type: "string",
                validation: (Rule) =>
                  Rule.regex(/^[a-zA-Z][\w:.-]*$/).warning(
                    "Invalid HTML ID value."
                  ),
              },
            ],
          },
        ],
      },
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    {
      type: "image",
      options: {hotspot: true},
    },
  ],
};
