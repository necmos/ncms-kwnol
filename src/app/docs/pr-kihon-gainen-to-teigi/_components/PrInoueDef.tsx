import type { ReactNode } from 'react'

interface PrInoueDefProps {
  title: ReactNode
  core: ReactNode
  keywordsBlock: ReactNode
  source: ReactNode
}

export const PrInoueDef = ({
  title,
  core,
  keywordsBlock,
  source,
}: PrInoueDefProps) => {
  return (
    <div className="inoue-def">
      <div className="title">{title}</div>
      <div className="core">{core}</div>
      {keywordsBlock}
      <div className="source">{source}</div>
    </div>
  )
}
