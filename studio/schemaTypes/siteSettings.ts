import { CogIcon } from "@sanity/icons/Cog";
import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  icon: CogIcon,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "discipline",
      title: "Line under the name",
      type: "string",
      description: "For example Fashion and Portrait Photographer.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "email",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "instagram",
      title: "Instagram handle",
      type: "string",
      description: "Without the @, for example edoardo_pallaoro.",
      validation: (rule) => rule.required().regex(/^[A-Za-z0-9._]+$/, { name: "handle" }),
    }),
    defineField({
      name: "description",
      title: "Search description",
      type: "text",
      rows: 3,
      description: "The short summary search engines and link previews show.",
      validation: (rule) => rule.required().max(200),
    }),
  ],
  preview: {
    prepare: () => ({ title: "Site settings" }),
  },
});
