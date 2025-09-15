import Image from 'next/image'
import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { Inscricoe } from '@/payload-types' // 1. Import the type

export default async function InscricoesPage() {
  const payload = await getPayload({ config })

  // 2. Apply the type here
  const pageData = (await payload.findGlobal({
    slug: 'inscricoes',
    depth: 2,
  })) as Inscricoe

  if (!pageData) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p>Could not load page data.</p>
      </main>
    )
  }

  const { hero, programs } = pageData

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
              {hero.description && (
                <div className="space-y-4 mb-8">
                  {hero.description.split('\n').map((line: string, index: number) => (
                    <p key={index} className="text-base lg:text-lg text-brand-dark">
                      {line}
                    </p>
                  ))}
                </div>
              )}
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

      {/* Programs Section */}
      <section className="py-16 bg-brand-light lg:py-20 flex align-center justify-center">
        <div className="container max-w-6xl px-6 space-y-16">
          {programs &&
            programs.length > 0 &&
            programs.map((program, index) => (
              <div key={index} className={`rounded-2xl overflow-hidden`}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 min-h-[400px] ${
                    program.imagePosition === 'right' ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  {/* Image Side */}
                  <div
                    className={`relative min-h-[300px] lg:min-h-[400px] ${
                      program.imagePosition === 'right' ? 'lg:col-start-2' : ''
                    }`}
                  >
                    {typeof program.image === 'object' && program.image?.url && (
                      <Image
                        src={program.image.url}
                        alt={program.image.alt}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>

                  {/* Content Side */}
                  <div
                    className={`flex flex-col justify-center p-8 lg:p-12 ${
                      program.imagePosition === 'right' ? 'lg:col-start-1' : ''
                    }`}
                  >
                    <div className="max-w-lg">
                      <h2 className="text-2xl lg:text-3xl font-serif mb-4 text-brand-warm">
                        {program.title}
                      </h2>

                      {program.ageRange && (
                        <p className="text-base lg:text-lg mb-4 text-brand-dark font-medium">
                          {program.ageRange}
                        </p>
                      )}

                      <p className="text-base lg:text-lg mb-8 text-brand-dark leading-relaxed">
                        {program.description}
                      </p>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link href={program.buttons.inscricaoButton.link}>
                          <span className="inline-block bg-brand-accent text-white px-6 py-3 text-sm font-medium hover:bg-opacity-90 transition-all duration-200 text-center min-w-[140px]">
                            {program.buttons.inscricaoButton.text}
                          </span>
                        </Link>
                        <Link href={program.buttons.informacoesButton.link}>
                          <span className="inline-block border border-brand-dark text-brand-dark px-6 py-3 text-sm font-medium hover:bg-brand-dark hover:text-white transition-all duration-200 text-center min-w-[140px]">
                            {program.buttons.informacoesButton.text}
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </main>
  )
}
