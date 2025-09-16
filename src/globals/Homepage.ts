import { GlobalConfig } from 'payload'

export const Homepage: GlobalConfig = {
  slug: 'homepage',
  access: {
    read: () => true, // Make it public
  },
  hooks: {
    afterChange: [
      async ({ doc, req }) => {
        // Revalidate when homepage changes
        try {
          await fetch(`${process.env.NEXTJS_URL || 'http://localhost:3000'}/api/revalidate`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              secret: process.env.REVALIDATE_SECRET,
              path: '/',
            }),
          })
        } catch (error) {
          console.error('Failed to revalidate homepage:', error)
        }
      },
    ],
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
          name: 'subtitle',
          type: 'textarea',
        },
        {
          name: 'button',
          label: 'Button',
          type: 'group',
          fields: [
            {
              name: 'text',
              type: 'text',
              required: true,
            },
            {
              name: 'link',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    // Section 2: CTA Banner
    {
      name: 'ctaBanner',
      label: 'CTA Banner',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'text',
          type: 'textarea',
          required: true,
        },
        {
          name: 'buttons',
          label: 'Buttons',
          type: 'array',
          minRows: 1,
          maxRows: 2,
          fields: [
            {
              name: 'text',
              type: 'text',
              required: true,
            },
            {
              name: 'link',
              type: 'text',
              required: true,
            },
            {
              name: 'style',
              type: 'select',
              options: ['fill', 'outline'],
              defaultValue: 'fill',
              required: true,
            },
          ],
        },
      ],
    },
    // Section 3: Activities
    {
      name: 'activitiesSection',
      label: 'Activities Section',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'text',
          type: 'textarea',
          required: true,
        },
        {
          name: 'image',
          label: 'Activities Image (2x2 Grid)',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            description: 'Upload a single image that contains 4 activities arranged in a 2x2 grid',
          },
        },
        {
          name: 'button',
          label: 'Button',
          type: 'group',
          fields: [
            {
              name: 'text',
              type: 'text',
              required: true,
            },
            {
              name: 'link',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
