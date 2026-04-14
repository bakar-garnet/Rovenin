import React from 'react'

interface ServiceCardProps {
  number: string
  title: string
  description: string
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ number, title, description }) => {
  return (
    <div className="flex flex-col w-full">
      <div className="shrink-0 max-w-full h-px border border-textlight border-solid w-[300px] max-md:w-full" />
      <div className="flex gap-0 text-2xl tracking-wide text-white max-md:mt-0">
        <div className="shrink-0 w-px border border-textlight border-solid h-[243px] max-md:h-[200px]" />
        <div className="flex flex-col items-start my-auto pl-5">
          <div className="text-center text-textlight">{number}</div>
          <div className="whitespace-pre-line max-md:mt-2">{title}</div>
          <div className="self-stretch mt-16 text-sm tracking-wide text-textlight max-md:mt-8 line-clamp-3 max-w-[280px]">
            {description}
          </div>
        </div>
      </div>
    </div>
  )
}
