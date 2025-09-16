import Image from 'next/image'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { QuemSomo } from '@/payload-types'

export default async function QuemSomosPage() {
  const payload = await getPayload({ config })

  const pageData = (await payload.findGlobal({
    slug: 'quem-somos',
  })) as QuemSomo

  if (!pageData) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p>Could not load page data.</p>
      </main>
    )
  }

  const { hero, oSopeSection, principiosSection, pretendemoSection, equipaSection } = pageData

  return (
    <main>
      <section className="py-12 lg:py-20 pt-8 lg:pt-8">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-center">
            {/* Mobile: Text Second, Desktop: Text First */}
            <div className="flex items-center flex-col lg:items-start text-center lg:text-left flex-shrink-0 w-full lg:w-2/6">
              <h1 className="text-4xl lg:text-6xl xl:text-6xl font-serif mb-4 lg:mb-6 text-brand-warm leading-tight">
                {hero.title}
              </h1>
            </div>

            {/* Mobile: Image First, Desktop: Text First */}
            <div className="relative h-80 lg:h-96 xl:h-[648px] rounded-sm overflow-hidden w-full ">
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

      {/* O Sopé Section - Brown Background */}
      <section className="bg-brand-light py-18 lg:py-24">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-2xl lg:text-4xl font-serif mb-6 text-black">{oSopeSection.title}</h2>
          <div className="space-y-4 text-brand-dark">
            {oSopeSection.text &&
              oSopeSection.text.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-base lg:text-lg leading-relaxed font-light">
                  {paragraph}
                </p>
              ))}
          </div>
        </div>
      </section>

      {/* Nossos Princípios Section */}
      <section className="py-18 lg:py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          {principiosSection.content &&
            principiosSection.content.length > 0 &&
            (() => {
              const textBlocks = principiosSection.content.filter((block) => block.type === 'text')
              const imageBlock = principiosSection.content.find((block) => block.type === 'image')

              return (
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
                  {/* Left Side: Image - 50% */}
                  <div className="flex-shrink-0 w-full lg:w-1/2">
                    {imageBlock && imageBlock.image && (
                      <div className="relative h-96 lg:h-[550px] rounded-sm overflow-hidden w-full">
                        {typeof imageBlock.image === 'object' && imageBlock.image?.url && (
                          <Image
                            src={imageBlock.image.url}
                            alt={imageBlock.image.alt}
                            fill
                            className="object-cover"
                          />
                        )}
                      </div>
                    )}
                  </div>

                  {/* Right Side: Content - 50% */}
                  <div className="flex-shrink-0 w-full lg:w-1/2 space-y-6">
                    <h2 className="text-3xl lg:text-4xl font-serif text-brand-warm">
                      {principiosSection.title}
                    </h2>
                    {textBlocks.map((textBlock, index) => (
                      <div key={index} className="space-y-4">
                        {textBlock.text &&
                          textBlock.text.length > 0 &&
                          textBlock.text.split('\n\n').map((paragraph, paragraphIndex) => (
                            <p
                              key={paragraphIndex}
                              className="text-base pb-2 lg:text-base text-brand-dark leading-relaxed"
                            >
                              {paragraph}
                            </p>
                          ))}
                      </div>
                    ))}
                  </div>
                </div>
              )
            })()}
        </div>
      </section>

      {/* O Que Pretendemos Section */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            {/* Left Side: Text Content - 50% */}
            <div className="flex-shrink-0 w-full lg:w-1/2 order-2 lg:order-1">
              <h2 className="text-3xl lg:text-4xl font-serif mb-8 text-brand-warm">
                {pretendemoSection.title}
              </h2>
              <ul className="space-y-4">
                {pretendemoSection.bulletPoints &&
                  pretendemoSection.bulletPoints.length > 0 &&
                  pretendemoSection.bulletPoints.map((point, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-2 h-2 bg-brand-warm rounded-full mt-3"></span>
                      <span className="text-base lg:text-base text-brand-dark leading-relaxed">
                        {point.text}
                      </span>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Right Side: Image - 50% */}
            <div className="flex-shrink-0 w-full lg:w-1/2 order-1 lg:order-2">
              {pretendemoSection.image && (
                <div className="relative h-96 lg:h-[550px] rounded-sm overflow-hidden w-full">
                  {typeof pretendemoSection.image === 'object' && pretendemoSection.image?.url && (
                    <Image
                      src={pretendemoSection.image.url}
                      alt={pretendemoSection.image.alt}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* A Nossa Equipa Section */}
      <section className="py-12 pt-6 lg:pt-10 lg:py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-serif mb-16 text-brand-warm text-center">
            {equipaSection.title}
          </h2>

          {/* Team Members - Side by Side */}
          <div className="flex flex-col lg:flex-row justify-center gap-12 lg:gap-16 max-w-4xl mx-auto">
            {equipaSection.teamMembers &&
              equipaSection.teamMembers.length > 0 &&
              equipaSection.teamMembers.map((member, index) => (
                <div key={index} className="text-center flex-1 max-w-sm mx-auto lg:mx-0">
                  {/* Team Member Photo */}
                  <div className="relative w-60 h-100 mx-auto mb-4 rounded-lg overflow-hidden">
                    {typeof member.image === 'object' && member.image?.url && (
                      <Image
                        src={member.image.url}
                        alt={member.image.alt}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>

                  {/* Team Member Info */}
                  <h3 className="text-xl mb-6 font-serif mb-1 text-brand-dark">{member.name}</h3>
                  <p className="text-md text-brand-dark leading-relaxed">{member.description}</p>
                </div>
              ))}
          </div>
        </div>
      </section>
    </main>
  )
}
