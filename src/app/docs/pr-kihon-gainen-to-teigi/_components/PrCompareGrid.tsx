import type { ReactNode } from 'react'

interface PrCompareGridProps {
  children: ReactNode
}

export const PrCompareGrid = ({ children }: PrCompareGridProps) => {
  return <div className="compare-grid">{children}</div>
}

interface PrCompareCardProps {
  variant: 'japan' | 'west'
  title: ReactNode
  children: ReactNode
}

export const PrCompareCard = ({
  variant,
  title,
  children,
}: PrCompareCardProps) => {
  return (
    <div className={`compare-card ${variant}`}>
      <h4>{title}</h4>
      <p>{children}</p>
    </div>
  )
}
