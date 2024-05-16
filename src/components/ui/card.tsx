import type { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

interface CardRootProps extends ComponentProps<'div'> {}

function Root({ className, ...props }: CardRootProps) {
  return (
    <div
      className={cn(
        'relative rounded-lg bg-secondary p-6 shadow-md',
        className,
      )}
      {...props}
    />
  )
}

interface CardHeaderProps extends ComponentProps<'div'> {}

function Header({ className, ...props }: CardHeaderProps) {
  return (
    <div
      className={cn('flex items-center justify-between', className)}
      {...props}
    />
  )
}

interface CardContentProps extends ComponentProps<'div'> {}

function Content({ className, ...props }: CardContentProps) {
  return <div className={cn('', className)} {...props} />
}

export { Root, Header, Content }
