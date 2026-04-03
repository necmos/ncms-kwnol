import type { ComponentProps, ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface PrDataTableProps extends Omit<ComponentProps<'table'>, 'children'> {
  children: ReactNode
  className?: string
}

export const PrDataTable = ({
  children,
  className,
  ...props
}: PrDataTableProps) => {
  return (
    <table className={cn(className)} {...props}>
      {children}
    </table>
  )
}
