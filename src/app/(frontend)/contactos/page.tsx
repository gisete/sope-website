import Image from 'next/image'
import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { Contacto } from '@/payload-types'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sopé Forest School - Contactos',
}

export default async function ContactosPage() {
  // Direct database access
  const payload = await getPayload({ config })

  const pageData = (await payload.findGlobal({
    slug: 'contactos',
    depth: 2,
  })) as Contacto

  if (!pageData) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p>Could not load page data.</p>
      </main>
    )
  }

  const { hero, mapSection, contactInfo, openingHours } = pageData

  return (
    <main>
      {/* Hero Section - Updated to match other pages */}
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

      {/* Map Section */}
      {mapSection && (
        <section className="py-16 bg-brand-light">
          <div className="container flex align-center flex-col mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl lg:text-4xl font-serif mb-8 text-brand-warm text-center">
              {mapSection.title}
            </h2>

            {mapSection.description && (
              <p className="text-base self-center lg:text-lg text-brand-dark text-center mb-8 leading-relaxed max-w-2xl">
                {mapSection.description}
              </p>
            )}

            <div className="rounded-sm overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3081.826905594869!2d-8.949342087201506!3d39.428038471497345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd18bb2f5b79bc49%3A0xc09f30f77c295244!2sSop%C3%A9%20Ar%20Livre!5e0!3m2!1sen!2spt!4v1757970458458!5m2!1sen!2spt"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </section>
      )}

      {/* Contact Information Section */}

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column: Contact Information */}
            <div className="space-y-8">
              <h2 className="text-3xl lg:text-4xl font-serif mb-8 text-brand-warm">
                {contactInfo.sectionTitle}
              </h2>

              {/* Phone with WhatsApp */}
              <div className="space-y-3">
                {/* WhatsApp CTA */}
                <Link
                  href={`https://wa.me/${contactInfo.whatsappNumber}`}
                  target="_blank"
                  className="flex items-center space-x-3 text-brand-dark hover:text-brand-warm transition-colors"
                >
                  <Image
                    src="/whatsapp.png"
                    alt="WhatsApp Icon"
                    width={28}
                    height={28}
                    className="flex-shrink-0"
                  />
                  <span className="text-base">{contactInfo.whatsappText}</span>
                </Link>

                <div className="flex items-center space-x-4">
                  <svg
                    className="w-6 h-6 text-brand-warm flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-brand-dark hover:text-brand-warm transition-colors text-base"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4">
                <svg
                  className="w-6 h-6 text-brand-warm flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-brand-dark hover:text-brand-warm transition-colors text-base"
                >
                  {contactInfo.email}
                </a>
              </div>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <svg
                    className="w-6 h-6 mt-1 text-brand-warm flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <p className="font-medium text-brand-dark text-base">
                      {contactInfo.address.street}
                    </p>
                    <p className="text-brand-dark text-base">{contactInfo.address.postalCode}</p>
                    {contactInfo.address.description && (
                      <p className="text-base text-gray-600 mt-2 leading-relaxed">
                        {contactInfo.address.description}
                      </p>
                    )}
                  </div>
                </div>

                {/* Social Media */}
                {(contactInfo.socialMedia?.instagram || contactInfo.socialMedia?.facebook) && (
                  <div>
                    <h3 className="text-xl font-serif mb-4 text-brand-warm">
                      {contactInfo.socialMedia.title}
                    </h3>
                    <div className="flex space-x-6">
                      {contactInfo.socialMedia.instagram && (
                        <Link
                          href={contactInfo.socialMedia.instagram}
                          className="text-brand-dark hover:text-brand-warm transition-colors text-lg"
                        >
                          Instagram
                        </Link>
                      )}
                      {contactInfo.socialMedia.facebook && (
                        <Link
                          href={contactInfo.socialMedia.facebook}
                          className="text-brand-dark hover:text-brand-warm transition-colors text-lg"
                        >
                          Facebook
                        </Link>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Opening Hours */}
            {openingHours && openingHours.schedule && openingHours.schedule.length > 0 && (
              <div>
                <h2 className="text-3xl lg:text-4xl font-serif mb-8 text-brand-warm">
                  {openingHours.title || 'Horários'}
                </h2>
                <div className="space-y-4">
                  {openingHours.schedule.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-start py-3 border-b border-gray-200 last:border-b-0"
                    >
                      <span className="font-medium text-brand-dark text-lg">{item.day}</span>
                      <div className="text-right">
                        <span className="text-brand-dark text-lg">{item.hours}</span>
                        {item.notes && <p className="text-sm text-gray-600 mt-1">{item.notes}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
