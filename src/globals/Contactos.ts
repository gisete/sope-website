import { GlobalConfig } from 'payload'

export const Contactos: GlobalConfig = {
  slug: 'contactos',
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
          defaultValue: 'Contactos',
        },
        {
          name: 'description',
          type: 'textarea',
          required: false,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    // Section 2: Map Section
    {
      name: 'mapSection',
      label: 'Map Section',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          defaultValue: 'Encontre-nos',
        },
        {
          name: 'description',
          type: 'textarea',
          required: false,
          defaultValue:
            'O Sopé desenvolve este projeto num terreno arborizado ao ar livre, localizado no final da Estrada da Charneca, após a casa número 85.',
        },
        {
          name: 'mapEmbedUrl',
          label: 'Google Maps Embed URL',
          type: 'text',
          required: true,
          admin: {
            description: 'Paste the full iframe src URL from Google Maps embed',
          },
          defaultValue:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d-9.0631!3d39.4074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDI0JzI2LjYiTiA5wrAwMyczNy4xIlc!5e0!3m2!1sen!2spt!4v1234567890',
        },
      ],
    },
    // Section 3: Contact Information
    {
      name: 'contactInfo',
      label: 'Contact Information',
      type: 'group',
      fields: [
        {
          name: 'sectionTitle',
          label: 'Section Title',
          type: 'text',
          required: true,
          defaultValue: 'Informações de Contacto',
        },
        {
          name: 'phone',
          label: 'Phone Number',
          type: 'text',
          required: true,
          defaultValue: '+351 950 270 856',
        },
        {
          name: 'whatsappNumber',
          label: 'WhatsApp Number (for link)',
          type: 'text',
          required: true,
          defaultValue: '351950270856',
          admin: {
            description: 'Phone number without spaces or + for WhatsApp link',
          },
        },
        {
          name: 'whatsappText',
          label: 'WhatsApp Link Text',
          type: 'text',
          required: true,
          defaultValue: 'Conversar no WhatsApp',
        },
        {
          name: 'email',
          label: 'Email Address',
          type: 'text',
          required: true,
          defaultValue: 'sope.arlivre@gmail.com',
        },
        {
          name: 'address',
          label: 'Address',
          type: 'group',
          fields: [
            {
              name: 'street',
              label: 'Street Address',
              type: 'text',
              required: true,
              defaultValue: 'Est. da Charneca, Benedita',
            },
            {
              name: 'postalCode',
              label: 'Postal Code',
              type: 'text',
              required: true,
              defaultValue: '2475-024',
            },
            {
              name: 'description',
              label: 'Location Description',
              type: 'textarea',
              admin: {
                description: 'Additional details about how to find the location',
              },
            },
          ],
        },
        {
          name: 'socialMedia',
          label: 'Social Media',
          type: 'group',
          fields: [
            {
              name: 'title',
              label: 'Social Media Title',
              type: 'text',
              required: false,
              defaultValue: 'Siga-nos',
            },
            {
              name: 'instagram',
              label: 'Instagram URL',
              type: 'text',
              required: false,
            },
            {
              name: 'facebook',
              label: 'Facebook URL',
              type: 'text',
              required: false,
            },
          ],
        },
      ],
    },
    // Section 4: Contact Form Settings
    {
      name: 'contactForm',
      label: 'Contact Form',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          defaultValue: 'Fale Connosco',
        },
        {
          name: 'description',
          type: 'textarea',
          required: false,
          defaultValue: 'Tem alguma questão? Não hesite em contactar-nos.',
        },
        {
          name: 'submitButtonText',
          label: 'Submit Button Text',
          type: 'text',
          required: true,
          defaultValue: 'Enviar Mensagem',
        },
      ],
    },
    // Section 5: Opening Hours (Optional)
    {
      name: 'openingHours',
      label: 'Opening Hours',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          defaultValue: 'Horários',
        },
        {
          name: 'schedule',
          label: 'Weekly Schedule',
          type: 'array',
          minRows: 1,
          maxRows: 7,
          fields: [
            {
              name: 'day',
              type: 'text',
              required: true,
            },
            {
              name: 'hours',
              type: 'text',
              required: true,
            },
            {
              name: 'notes',
              type: 'text',
              required: false,
            },
          ],
        },
      ],
    },
  ],
}
