import { GlobalConfig } from 'payload'

export const ForestSchool: GlobalConfig = {
  slug: 'forest-school',
  access: {
    read: () => true, // Make it public
  },
  fields: [
    // Section 1: Hero
    {
      name: 'hero',
      label: 'Hero Section',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    // Section 2: Banner (similar to O Sopé section)
    {
      name: 'bannerSection',
      label: 'Banner Section',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          defaultValue: 'Forest School',
        },
        {
          name: 'text',
          type: 'textarea',
          required: true,
        },
      ],
    },
    // Section 3: Content Blocks (two-column layout)
    {
      name: 'contentBlocks',
      label: 'Content Blocks',
      type: 'array',
      minRows: 1,
      maxRows: 20,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'text',
          type: 'textarea',
          required: false,
          admin: {
            description: 'Optional introductory text before the subsections',
          },
        },
        {
          name: 'subsections',
          label: 'Subsections',
          type: 'array',
          minRows: 0,
          maxRows: 10,
          fields: [
            {
              name: 'subtitle',
              type: 'text',
              required: true,
              admin: {
                description: 'Bold subtitle (e.g., "Sessões regulares na natureza")',
              },
            },
            {
              name: 'items',
              label: 'List Items',
              type: 'array',
              minRows: 1,
              maxRows: 10,
              fields: [
                {
                  name: 'text',
                  type: 'text',
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
