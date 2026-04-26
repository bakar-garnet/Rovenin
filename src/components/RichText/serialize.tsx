import { BannerBlock } from '@/blocks/Banner/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { CodeBlock } from '@/blocks/Code/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import React, { Fragment } from 'react'
import { CMSLink } from '@/components/Link'

import {
  IS_BOLD,
  IS_CODE,
  IS_ITALIC,
  IS_STRIKETHROUGH,
  IS_SUBSCRIPT,
  IS_SUPERSCRIPT,
  IS_UNDERLINE,
} from './nodeFormat'

interface SerializedLexicalNode {
  type: string
  format?: number
  text?: string
  tag?: string
  children?: SerializedLexicalNode[]
  fields?: {
    blockType?: string
    newTab?: boolean
    doc?: any
    linkType?: string
    url?: string
    [key: string]: any
  }
}

interface Props {
  nodes: SerializedLexicalNode[]
}

export function serializeLexical({ nodes }: Props): React.ReactElement {
  return (
    <Fragment>
      {nodes?.map((node, index): React.ReactElement | null => {
        if (!node) return null

        if (node.type === 'text') {
          let text = <Fragment key={index}>{node.text}</Fragment>

          if (node.format & IS_BOLD) {
            text = <strong key={index}>{text}</strong>
          }
          if (node.format & IS_ITALIC) {
            text = <em key={index}>{text}</em>
          }
          if (node.format & IS_STRIKETHROUGH) {
            text = (
              <span key={index} style={{ textDecoration: 'line-through' }}>
                {text}
              </span>
            )
          }
          if (node.format & IS_UNDERLINE) {
            text = (
              <span key={index} style={{ textDecoration: 'underline' }}>
                {text}
              </span>
            )
          }
          if (node.format & IS_CODE) {
            text = <code key={index}>{text}</code>
          }
          if (node.format & IS_SUBSCRIPT) {
            text = <sub key={index}>{text}</sub>
          }
          if (node.format & IS_SUPERSCRIPT) {
            text = <sup key={index}>{text}</sup>
          }

          return text
        }

        const serializedChildren = node.children ? serializeLexical({ nodes: node.children }) : null

        if (node.type === 'block') {
          const block = node.fields
          const blockType = block?.blockType

          if (!block || !blockType) {
            return null
          }

          switch (blockType) {
            case 'cta':
              return <CallToActionBlock key={index} {...block} />
            case 'mediaBlock':
              return (
                <MediaBlock
                  className="w-full my-8"
                  imgClassName="m-0"
                  key={index}
                  {...block}
                  captionClassName="text-center text-textlight mt-4"
                />
              )
            case 'banner':
              return <BannerBlock className="my-8" key={index} {...block} />
            case 'code':
              return <CodeBlock className="my-8" key={index} {...block} />
            default:
              return null
          }
        }

        if (node.type === 'heading') {
          const Tag = node.tag as keyof JSX.IntrinsicElements

          const headingClasses: Record<string, string> = {
            h1: 'mt-12 mb-6 text-5xl font-semibold leading-tight',
            h2: 'mt-10 mb-5 text-3xl font-semibold leading-tight',
            h3: 'mt-8 mb-4 text-2xl font-semibold leading-tight',
            h4: 'mt-6 mb-3 text-xl font-semibold leading-tight',
            h5: 'mt-5 mb-2 text-lg font-semibold leading-tight',
            h6: 'mt-4 mb-2 text-base font-semibold leading-tight',
          }

          return (
            <Tag key={index} className={headingClasses[node.tag || 'h2'] || headingClasses.h2}>
              {serializedChildren}
            </Tag>
          )
        }

        switch (node.type) {
          case 'quote':
            return (
              <blockquote key={index} className="my-6 border-l-4 pl-4 italic opacity-80">
                {serializedChildren}
              </blockquote>
            )
          case 'list':
            return node.tag === 'ol' ? (
              <ol key={index} className="my-5 list-decimal pl-6">
                {serializedChildren}
              </ol>
            ) : (
              <ul key={index} className="my-5 list-disc pl-6">
                {serializedChildren}
              </ul>
            )
          case 'listitem':
            return (
              <li key={index} className="mb-2 leading-relaxed">
                {serializedChildren}
              </li>
            )
          case 'paragraph':
            return (
              <p key={index} className="mb-5 leading-relaxed">
                {serializedChildren}
              </p>
            )
          case 'link': {
            const fields = node.fields
            return (
              <CMSLink
                key={index}
                newTab={Boolean(fields?.newTab)}
                reference={fields?.doc}
                type={fields?.linkType === 'internal' ? 'reference' : 'custom'}
                url={fields?.url}
              >
                {serializedChildren}
              </CMSLink>
            )
          }
          default:
            return null
        }
      })}
    </Fragment>
  )
}