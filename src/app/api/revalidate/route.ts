// src/app/api/revalidate/route.ts (you already have this)
import { revalidateTag, revalidatePath } from 'next/cache'
import { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { tag, path, secret } = body

    if (secret !== process.env.REVALIDATE_SECRET) {
      return Response.json({ error: 'Invalid secret' }, { status: 401 })
    }

    if (tag) {
      revalidateTag(tag)
    }

    if (path) {
      revalidatePath(path)
    }

    // Revalidate common pages
    revalidatePath('/')
    revalidatePath('/quem-somos')
    revalidatePath('/inscricoes')
    revalidatePath('/contactos')
    revalidatePath('/forest-school')

    return Response.json({ revalidated: true, now: Date.now() })
  } catch (err) {
    return Response.json({ error: 'Error revalidating' }, { status: 500 })
  }
}
