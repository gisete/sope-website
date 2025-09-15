import Image from 'next/image'
import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { Homepage } from '@/payload-types'
import { CtaBanner } from '@/components/CtaBanner'

export default async function Home() {
  const payload = await getPayload({ config })

  const homepage = (await payload.findGlobal({
    slug: 'homepage',
    depth: 2,
  })) as Homepage

  if (!homepage) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p>Could not load homepage data.</p>
      </main>
    )
  }

  const { hero, ctaBanner, activitiesSection } = homepage

  return (
    <main>
      {/* Hero Section */}
      <section className="py-12 lg:py-20 pt-8 lg:pt-8">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-14 items-center">
            {/* Left Column: Text Content */}
            <div className="flex flex-col items-start text-left flex-shrink-0 w-full lg:w-2/6">
              <h1 className="text-4xl lg:text-6xl xl:text-6xl font-serif mb-4 lg:mb-6 text-brand-warm leading-tight">
                {hero.title}
              </h1>
              <p className="text-base lg:text-lg mb-8 text-brand-dark leading-relaxed max-w-md">
                {hero.subtitle}
              </p>
              <Link href={hero.button.link}>
                <span className="inline-block border border-brand-warm text-brand-warm px-6 py-4 text-sm hover:bg-brand-warm hover:text-white transition-all duration-200 uppercase tracking-wide font-medium rounded-sm">
                  {hero.button.text}
                </span>
              </Link>
            </div>

            {/* Right Column: Image */}
            <div className="relative h-80 lg:h-96 xl:h-[648px] rounded-sm overflow-hidden flex-1 w-full">
              {typeof hero.image === 'object' && hero.image?.url && (
                <Image
                  src={hero.image.url}
                  alt={hero.image.alt}
                  fill
                  className="object-cover"
                  priority
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CtaBanner {...ctaBanner} />

      {/* Activities Section */}
      <section className="bg-white py-14 lg:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 flex justify-center items-center gap-12 lg:gap-16">
            {/* Left Column: Single Activities Image */}
            <div className="relative aspect-3/4 rounded-sm overflow-hidden">
              {typeof activitiesSection.image === 'object' && activitiesSection.image?.url && (
                <Image
                  src={activitiesSection.image.url}
                  alt={activitiesSection.image.alt}
                  fill
                  className="object-cover"
                />
              )}
            </div>

            {/* Right Column: Text Content */}
            <div className="flex flex-col lg:pl-8">
              <h2 className="text-3xl lg:text-4xl font-serif mb-6 text-brand-warm">
                {activitiesSection.title}
              </h2>
              <p className="text-base mb-8 leading-relaxed">{activitiesSection.text}</p>
              <Link href={activitiesSection.button.link}>
                <span className="inline-block border border-brand-warm text-brand-warm px-6 py-4 text-sm hover:bg-brand-warm hover:text-white transition-all duration-200 uppercase tracking-wide font-medium rounded-sm">
                  {activitiesSection.button.text}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
