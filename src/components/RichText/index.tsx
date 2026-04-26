import React from 'react'
import { SerializedEditorState } from 'lexical'
import { serializeLexical } from './serialize'

interface RichTextProps {
  content: SerializedEditorState
  className?: string
}

export const RichText: React.FC<RichTextProps> = ({ content, className }) => {
  if (!content?.root?.children) {
    return null
  }

  return (
    <div className={className || 'rich-text'}>
      {serializeLexical({ nodes: content.root.children })}
    </div>
  )
}

export default RichText