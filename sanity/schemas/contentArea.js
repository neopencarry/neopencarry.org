export default {
  name: "contentArea",
  title: "Content Area",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Content Area Title",
      type: "string",
    },
    {
      name: "identifier",
      title: "Unique Identifier (DO NOT CHANGE ONCE SET)",
      type: "string",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],

  preview: {
    select: {
      title: "title",
    },
  },
};
