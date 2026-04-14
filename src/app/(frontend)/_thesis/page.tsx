import React from 'react'
import { Metadata } from 'next'
import { ThesisItem } from '@/components/thesis/ThesisItem'
import { Nav } from '@/components/nav/Nav'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Rovenin | Thesis 2025',
  description: 'Our vision and thesis for 2025 and beyond.',
}

const thesisData = [
  {
    number: '01',
    title: 'Consumer is not dead',
    description:
      'Humans crave experiences, personalisation, and authenticity now more than ever. This shift creates fertile ground for tech startups that innovate in user engagement and consumer-driven solutions. Adoption has become faster and durable with better distribution. We believe startups and founders cannot ship truly valuable products fast enough. They key is to identify value-driven products quickly and bet on them.',
  },
  {
    number: '02',
    title: 'SaaS is Evergreen',
    description:
      "SaaS isn't just software; it's the ecosystem driving modern businesses. Its adaptability and scalability empower companies to innovate faster and smarter, reshaping industries globally. The breakout tech product of the last decade (ChatGPT) is SaaS. While building SaaS is now easier than ever with no-code and a more robust ecosystem, the value is lies in identifying companies less focused on featurization and more focused on moats and problem solving via good software.",
  },
  {
    number: '03',
    title: "We're on Lap one of AI",
    description:
      "AI's journey has barely begun. From augmenting human potential to reshaping industries, we're only scratching the surface of its transformative power. The future promises boundless innovation and disruption. We are bullish on purpose-built foundational models and the companies building AI for hardware.",
  },
  {
    number: '04',
    title: 'Expect a Web3 Comeback',
    description:
      "Blockchain's resurgence isn't just a trend; it's a technological rebirth. Beyond cryptocurrencies, its decentralized ledger offers trust, transparency, and efficiency providing value to sectors from finance to supply chain. We also see a use-case where the chain can be used to train large sets of community-driven and controlled data to drive research and products.",
  },
]

export default function ThesisPage() {
  return (
    <section className="flex overflow-hidden flex-col items-start px-14 pt-5 pb-96 bg-black max-md:px-5 max-md:pb-24">
      <div className="flex flex-col w-full text-lg tracking-wide text-center max-w-[1250px] max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between w-full max-md:mr-2.5 max-md:max-w-full">
          <Link href="/" className="text-custom hover:text-white transition-colors duration-300">
            ROVENIN
          </Link>
          <Nav currentPath="/thesis" />
        </div>
        <div className="shrink-0 self-end mt-8 max-w-full h-px border border-white border-solid w-[813px]" />
      </div>
      <div className="flex flex-col mt-32 w-full max-w-[1273px] max-md:mt-10 max-md:max-w-full">
        {thesisData.map((thesis, index) => (
          <div key={thesis.number} className={index > 0 ? 'mt-20 max-md:mt-10' : ''}>
            <ThesisItem
              number={thesis.number}
              title={thesis.title}
              description={thesis.description}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export const dynamic = 'force-dynamic'
