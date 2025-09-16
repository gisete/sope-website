import { GlobalConfig } from 'payload'

export const MainMenu: GlobalConfig = {
  slug: 'main-menu',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [
      async ({ doc, req }) => {
        try {
          await fetch(`${process.env.NEXTJS_URL || 'http://localhost:3000'}/api/revalidate`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              secret: process.env.REVALIDATE_SECRET,
              paths: ['/', '/quem-somos', '/inscricoes', '/contactos', '/forest-school'],
            }),
          })
        } catch (error) {
          console.error('Failed to revalidate main menu:', error)
        }
      },
    ],
  },
  fields: [
    {
      name: 'navItems',
      label: 'Navigation Items',
      type: 'array',
      minRows: 1,
      maxRows: 6,
      fields: [
        {
          name: 'label',
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
}
