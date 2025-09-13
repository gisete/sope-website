'use client'

import Link from 'next/link'

// Define the shape of a single button
type Button = {
  text: string
  link: string
  style: 'fill' | 'outline'
}

// Define the props that our CtaBanner component will accept
type CtaBannerProps = {
  title: string
  text: string
  buttons?: Button[] | null // Allows Button[], null, or undefined
}

export function CtaBanner({ title, text, buttons }: CtaBannerProps) {
  return (
    <section className="bg-[#E8E0D4] py-12 lg:py-16">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <h2 className="text-2xl lg:text-3xl font-serif mb-4 text-[#A0614A] font-normal">{title}</h2>
        <p className="text-base lg:text-lg mb-8 text-[#5D4037] leading-relaxed font-light max-w-2xl mx-auto">
          {text}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {buttons &&
            buttons.length > 0 &&
            buttons.map((button, index) => {
              // Choose the style based on the 'style' field from the CMS
              const buttonStyle =
                button.style === 'fill'
                  ? 'bg-brand-accent text-white hover:bg-opacity-90'
                  : 'border border-brand-warm text-brand-warm hover:bg-brand-warm hover:text-white'

              return (
                <Link key={index} href={button.link}>
                  <span
                    className={`inline-block px-8 py-3 text-sm transition-all duration-200 uppercase tracking-wide ${buttonStyle}`}
                  >
                    {button.text}
                  </span>
                </Link>
              )
            })}
        </div>
      </div>
    </section>
  )
}
