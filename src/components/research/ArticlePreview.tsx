import React from 'react'
import Link from 'next/link'

export interface ArticleProps {
  date: string
  tags: string[]
  title: string
  slug?: string
}

export const ArticlePreview: React.FC<ArticleProps> = ({ date, tags, title, slug }) => {
  return (
    <div className="flex flex-col items-start mb-12">
      <div className="flex gap-5 justify-between text-sm tracking-wide text-textlight">
        <div>{date}</div>
        <div className="flex gap-2">
          {tags.map((tag, index) => (
            <div key={index} className="text-textlight">
              #{tag}
            </div>
          ))}
        </div>
      </div>
      <Link
        href={`/research/${slug || '#'}`}
        className="mt-2 text-2xl tracking-wide text-custom hover:text-white transition-colors duration-300"
      >
        {title}
      </Link>
    </div>
  )
}
