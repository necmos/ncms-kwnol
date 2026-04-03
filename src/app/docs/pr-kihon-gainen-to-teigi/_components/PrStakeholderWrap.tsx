import type { ReactNode } from 'react'

interface PrStakeholderWrapProps {
  title: ReactNode
  tags: ReadonlyArray<string>
  footnote?: ReactNode
}

export const PrStakeholderWrap = ({
  title,
  tags,
  footnote,
}: PrStakeholderWrapProps) => {
  return (
    <div className="stakeholder-wrap">
      <h4>{title}</h4>
      <div className="sh-tags">
        {tags.map((t) => (
          <span key={t} className="sh-tag">
            {t}
          </span>
        ))}
      </div>
      {footnote != null ? (
        <p className="muted-note" style={{ marginTop: 10, fontSize: '0.8rem' }}>
          {footnote}
        </p>
      ) : null}
    </div>
  )
}
