import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

export type SectionNumVariant = 'default' | 'lecture3' | 'lecture4'

interface PrSectionLabelProps {
  num: string
  title: ReactNode
  badge?: ReactNode
  sectionNumVariant?: SectionNumVariant
}

export const PrSectionLabel = ({
  num,
  title,
  badge,
  sectionNumVariant = 'default',
}: PrSectionLabelProps) => {
  return (
    <div className="section-label">
      <div
        className={cn(
          'section-num',
          sectionNumVariant === 'lecture3' && 'lecture3',
          sectionNumVariant === 'lecture4' && 'lecture4'
        )}
      >
        {num}
      </div>
      <h2>
        {title} {badge}
      </h2>
    </div>
  )
}
