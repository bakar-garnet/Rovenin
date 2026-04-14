import React from 'react'
import { Metadata } from 'next'
import { Nav } from '@/components/nav/Nav'
import { ServiceCard } from '@/components/about/ServiceCard'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About | Rovenin',
  description: 'Learn about our investment expertise and approach.',
}

const services = [
  {
    number: '01',
    title: 'Investment Stage\nExpertise',
    description:
      'Customized research, whether agnostic or focused, to align with your investment strategies.',
  },
  {
    number: '02',
    title: 'Industry\nIntelligence',
    description: 'Deep insights from experts who truly understand the sectors you care about.',
  },
  {
    number: '03',
    title: 'Technical\nPrecision',
    description:
      'Comprehensive analysis that bridges complex technology with market opportunities.',
  },
]

export default function AboutPage() {
  return (
    <section className="flex overflow-hidden flex-col items-start px-14 pt-5 pb-40 bg-black max-md:px-5 max-md:pb-24">
      <div className="flex flex-col w-full text-lg tracking-wide text-center max-w-[1250px] max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between w-full max-md:mr-2.5 max-md:max-w-full">
          <Link href="/" className="text-custom hover:text-white transition-colors duration-300">
            ROVENIN
          </Link>
          <Nav currentPath="/about" />
        </div>
        <div className="shrink-0 self-end mt-8 max-w-full h-px border border-white border-solid w-[813px] max-md:w-full" />
      </div>

      <div className="flex flex-col items-start mt-12 w-full max-w-[1273px] max-md:mt-10 max-md:max-w-full">
        <div className="text-3xl tracking-wider text-custom max-w-[1170px] max-md:text-2xl max-md:max-w-full">
          The world is increasingly uncertain and the future is unknowable. We believe by
          understanding the past, and keeping a trained eye on the present, we can identify the best
          investment opportunities of the future.
        </div>

        <div className="mt-36 w-full max-w-[1170px] max-md:mt-20 max-md:max-w-full">
          <div className="grid grid-cols-3 gap-20 max-md:grid-cols-1">
            {services.map((service, index) => (
              <div key={service.number} className={`${index === 0 ? 'col-span-1' : ''}`}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>

          <div className="hidden max-md:block mt-32 text-base tracking-wide text-white">
            You can reach out for queries to mas@rovenin.com
          </div>
          <div className="self-stretch mt-44 text-base tracking-wide text-white max-md:hidden">
            You can reach out for queries to mas@rovenin.com
          </div>
        </div>
      </div>
    </section>
  )
}
