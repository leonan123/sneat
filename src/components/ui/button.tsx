import { ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

import { cn } from '@/lib/utils'

const button = tv({
  base: 'text-muted transition-colors',

  variants: {
    variant: {
      primary: 'bg-primary rounded-md hover:bg-primary/95',
      secondary: 'bg-tertiary/75 rounded-md text-secondary hover:bg-tertiary',
      ghost:
        'size-10 flex items-center justify-center rounded-full hover:bg-hover-secondary',
    },

    size: {
      sm: 'px-3 py-2 text-xs',
      md: 'px-4 py-2',
      none: 'p-0',
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

type TButtonProps = VariantProps<typeof button> & ComponentProps<'button'>

export function Button({ variant, size, className, ...props }: TButtonProps) {
  return (
    <button className={cn(button({ variant, size }), className)} {...props} />
  )
}
