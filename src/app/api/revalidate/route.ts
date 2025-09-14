// app/api/revalidate/route.ts
import { revalidateTag, revalidatePath } from 'next/cache'
import { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { tag, path, secret } = body

    // Optional: Add a secret key for security
    if (secret !== process.env.REVALIDATE_SECRET) {
      return Response.json({ error: 'Invalid secret' }, { status: 401 })
    }

    // Revalidate specific tag if provided
    if (tag) {
      revalidateTag(tag)
      console.log(`Revalidated tag: ${tag}`)
    }

    // Revalidate specific path if provided
    if (path) {
      revalidatePath(path)
      console.log(`Revalidated path: ${path}`)
    }

    // Always revalidate common pages
    revalidatePath('/')
    revalidatePath('/quem-somos')
    console.log('Revalidated common pages')

    return Response.json({
      revalidated: true,
      now: Date.now(),
      tag,
      path,
    })
  } catch (err) {
    console.error('Error revalidating:', err)
    return Response.json({ error: 'Error revalidating' }, { status: 500 })
  }
}

// Optional: GET method for testing
export async function GET() {
  return Response.json({
    message: 'Revalidate endpoint is working',
    usage: 'Send POST request with { "tag": "homepage" } or { "path": "/" }',
  })
}
