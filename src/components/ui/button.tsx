import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { tv, type VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'text-primary-foreground transition-colors',

  variants: {
    variant: {
      primary: 'bg-primary rounded-md hover:bg-primary/95',
      secondary: 'bg-transparent rounded-md hover:bg-foreground-hover',
      ghost:
        'size-10 flex items-center justify-center rounded-full hover:bg-foreground-hover',
    },

    size: {
      sm: 'px-3 py-2',
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
    <button
      className={twMerge(button({ variant, size }), className)}
      {...props}
    />
  )
}
