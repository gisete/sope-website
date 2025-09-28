import { GlobalConfig } from 'payload'

export const Atividades: GlobalConfig = {
  slug: 'atividades',
  access: {
    read: () => true, // Make it public
  },
  hooks: {
    afterChange: [
      async ({ doc, req }) => {
        // Revalidate when atividades changes
        try {
          await fetch(`${process.env.NEXTJS_URL || 'http://localhost:3000'}/api/revalidate`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              secret: process.env.REVALIDATE_SECRET,
              path: '/atividades',
            }),
          })
        } catch (error) {
          console.error('Failed to revalidate atividades:', error)
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
          defaultValue: 'Atividades',
        },
        {
          name: 'description',
          type: 'textarea',
          required: false,
          defaultValue:
            'Descubra as nossas atividades ao ar livre para crianças de todas as idades.',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    // Section 2: Activity Images
    {
      name: 'activityImages',
      label: 'Activity Images',
      type: 'group',
      fields: [
        {
          name: 'section1Images',
          label: 'Section 1 Images (Comunidade de aprendizagem)',
          type: 'group',
          fields: [
            {
              name: 'image1',
              label: 'Image 1',
              type: 'upload',
              relationTo: 'media',
              required: false,
            },
            {
              name: 'image2',
              label: 'Image 2',
              type: 'upload',
              relationTo: 'media',
              required: false,
            },
            {
              name: 'image3',
              label: 'Image 3',
              type: 'upload',
              relationTo: 'media',
              required: false,
            },
          ],
        },
        {
          name: 'section2Images',
          label: 'Section 2 Images (Playgroups para bebés)',
          type: 'group',
          fields: [
            {
              name: 'image1',
              label: 'Image 1',
              type: 'upload',
              relationTo: 'media',
              required: false,
            },
            {
              name: 'image2',
              label: 'Image 2',
              type: 'upload',
              relationTo: 'media',
              required: false,
            },
            {
              name: 'image3',
              label: 'Image 3',
              type: 'upload',
              relationTo: 'media',
              required: false,
            },
          ],
        },
        {
          name: 'section3Images',
          label: 'Section 3 Images (Férias no Sopé)',
          type: 'group',
          fields: [
            {
              name: 'image1',
              label: 'Image 1',
              type: 'upload',
              relationTo: 'media',
              required: false,
            },
            {
              name: 'image2',
              label: 'Image 2',
              type: 'upload',
              relationTo: 'media',
              required: false,
            },
            {
              name: 'image3',
              label: 'Image 3',
              type: 'upload',
              relationTo: 'media',
              required: false,
            },
          ],
        },
      ],
    },
    // Section 3: CTA Banner (Optional - keeping for future use)
    {
      name: 'ctaBanner',
      label: 'CTA Banner',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: false,
          defaultValue: 'Pronto para começar?',
        },
        {
          name: 'text',
          type: 'textarea',
          required: false,
          defaultValue:
            'Inscreva-se nas nossas atividades e proporcione ao seu filho uma experiência única na natureza.',
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
              required: false,
            },
            {
              name: 'link',
              type: 'text',
              required: false,
            },
            {
              name: 'style',
              type: 'select',
              options: ['fill', 'outline'],
              defaultValue: 'fill',
              required: false,
            },
          ],
        },
      ],
    },
  ],
}
