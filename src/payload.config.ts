import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { s3Storage } from '@payloadcms/storage-s3'
import path from 'path'
import { fileURLToPath } from 'url'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { QuemSomos } from './globals/QuemSomos'
import { Homepage } from './globals/Homepage'
import { Contactos } from './globals/Contactos'
import { Inscricoes } from './globals/Inscricoes'
import { Pages } from './collections/Pages'
import { MainMenu } from './globals/MainMenu'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Pages],
  globals: [QuemSomos, Homepage, Contactos, Inscricoes, MainMenu],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL, // Your Supabase PostgreSQL connection string
    },
  }),
  plugins: [
    // Configure S3 storage for Supabase (S3-compatible)
    s3Storage({
      collections: {
        media: true,
      },
      bucket: process.env.S3_BUCKET!,
      config: {
        endpoint: process.env.S3_ENDPOINT,
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID!,
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
        },
        region: process.env.S3_REGION,
        forcePathStyle: true, // Important for Supabase compatibility
      },
    }),
    payloadCloudPlugin(),
  ],
})
