import React from 'react'
import { SerializedEditorState } from 'lexical'
import { serializeLexical } from './serialize'

interface RichTextProps {
  content: SerializedEditorState
}

export const RichText: React.FC<RichTextProps> = ({ content }) => {
  if (!content || !content.root || !content.root.children) {
    return null
  }

  return <div className="rich-text">{serializeLexical({ nodes: content.root.children })}</div>
}

export default RichText
