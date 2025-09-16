import Image from 'next/image'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { ForestSchool } from '@/payload-types' // You'll need to add this type after generating types

export default async function ForestSchoolPage() {
  const payload = await getPayload({ config })

  const pageData = (await payload.findGlobal({
    slug: 'forest-school',
    depth: 2,
  })) as ForestSchool

  if (!pageData) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p>Could not load page data.</p>
      </main>
    )
  }

  const { hero, bannerSection, contentBlocks } = pageData

  return (
    <main>
      {/* Hero Section */}
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

      {/* Banner Section - Similar to O Sopé Section */}
      <section className="bg-brand-light py-18 lg:py-24">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-2xl lg:text-4xl font-serif mb-6 text-black">{bannerSection.title}</h2>
          <div className="space-y-4 text-brand-dark">
            {bannerSection.text &&
              bannerSection.text.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-base lg:text-lg leading-relaxed font-light">
                  {paragraph}
                </p>
              ))}
          </div>
        </div>
      </section>

      {/* Content Blocks Section - Two Column Layout */}
      <section className="py-18 lg:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="space-y-16 lg:space-y-20">
            {contentBlocks &&
              contentBlocks.length > 0 &&
              contentBlocks.map((block, index) => (
                <div key={index} className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                  {/* Left Column: Title */}
                  <div className="lg:col-span-1">
                    <h3 className="text-2xl lg:text-3xl font-serif text-brand-warm leading-tight mb-4">
                      {block.title}
                    </h3>
                    {/* Decorative line under the title */}
                    <div className="w-16 h-0.5 bg-brand-warm"></div>
                  </div>

                  {/* Right Column: Text Content and Subsections */}
                  <div className="lg:col-span-2 space-y-6">
                    {/* Optional introductory text */}
                    {block.text && (
                      <div className="space-y-4">
                        {block.text.split('\n\n').map((paragraph, paragraphIndex) => (
                          <p
                            key={paragraphIndex}
                            className="text-base text-brand-dark leading-relaxed"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    )}

                    {/* Subsections with subtitles and lists */}
                    {block.subsections &&
                      block.subsections.length > 0 &&
                      block.subsections.map((subsection, subsectionIndex) => (
                        <div key={subsectionIndex} className="space-y-3 mb-8">
                          {/* Subtitle - Bold base font */}
                          <p className="lg:text-lg font-bold text-brand-dark">
                            {subsection.subtitle}
                          </p>

                          {/* List items */}
                          {subsection.items && subsection.items.length > 0 && (
                            <ul className="space-y-2">
                              {subsection.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-start space-x-3">
                                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-brand-warm rounded-full mt-2.5"></span>
                                  <span className="text-base lg:text-base text-brand-dark leading-relaxed">
                                    {item.text}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </main>
  )
}
