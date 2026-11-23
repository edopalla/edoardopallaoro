import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list";
import { ImagesIcon } from "@sanity/icons/Images";
import { defineArrayMember, defineField, defineType } from "sanity";
import { BatchImageInput } from "../components/BatchImageInput";

export const project = defineType({
  name: "project",
  title: "Story",
  type: "document",
  icon: ImagesIcon,
  orderings: [orderRankOrdering],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "The client or publication, for example Kaltblut Magazine.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Web address",
      type: "slug",
      description: "Used in the page address. Click Generate to create it from the title.",
      options: { source: "title", maxLength: 64 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "story",
      title: "Story title",
      type: "string",
      description: "Optional. The name of the editorial, for example So F*cking Bored.",
    }),
    defineField({
      name: "category",
      title: "Type",
      type: "string",
      description: "For example Editorial, Model tests, Campaign or Portrait.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "photos",
      title: "Photos",
      type: "array",
      description: "Drag photos to change their order. Use Upload multiple to add many at once.",
      options: { layout: "grid" },
      components: { input: BatchImageInput },
      of: [defineArrayMember({ type: "image", options: { hotspot: true } })],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "cover",
      title: "Cover",
      type: "image",
      description: "Optional. Shown full width on the homepage. Leave empty to use the first photo.",
      options: { hotspot: true },
    }),
    orderRankField({ type: "project" }),
  ],
  preview: {
    select: { title: "title", subtitle: "category", media: "photos.0" },
  },
});
