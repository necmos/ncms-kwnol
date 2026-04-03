import type { ReactNode } from 'react'

interface PrCoronaGridProps {
  children: ReactNode
}

export const PrCoronaGrid = ({ children }: PrCoronaGridProps) => {
  return <div className="corona-grid">{children}</div>
}

interface PrCoronaCardProps {
  title: ReactNode
  children: ReactNode
}

export const PrCoronaCard = ({ title, children }: PrCoronaCardProps) => {
  return (
    <div className="corona-card">
      <h4>{title}</h4>
      {children}
    </div>
  )
}
