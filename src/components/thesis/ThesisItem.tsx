import React from 'react'

export interface ThesisItemProps {
  number: string
  title: string
  description?: string
}

export const ThesisItem: React.FC<ThesisItemProps> = ({ number, title, description }) => {
  return (
    <div className="flex flex-col">
      <div className="flex gap-3 items-baseline">
        <div className="text-2xl tracking-wide text-textlight">{number}</div>
        <div className="text-5xl tracking-wider text-custom max-md:max-w-full max-md:text-4xl font-gilda">
          {title}
        </div>
      </div>
      {description && (
        <div className="self-end mt-3.5 text-base tracking-wide text-white w-[807px] max-md:mr-1 max-md:max-w-full">
          {description}
        </div>
      )}
    </div>
  )
}
