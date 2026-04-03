import type { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

interface AnchorNavLinkProps extends ComponentProps<'a'> {
  newBadge?: boolean
}

export const AnchorNavLink = ({
  className,
  newBadge,
  children,
  ...props
}: AnchorNavLinkProps) => {
  return (
    <a className={cn(newBadge ? 'new-badge' : undefined, className)} {...props}>
      {children}
    </a>
  )
}
