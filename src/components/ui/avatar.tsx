import Image from 'next/image'
import { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

type TAvatarProps = ComponentProps<'div'> & {
  src?: string
  alt?: string
  status?: 'online' | 'offline'
}

export function Avatar({
  className,
  src = '/avatar.png',
  alt = 'User Name',
  status,
  ...props
}: TAvatarProps) {
  return (
    <div {...props} className={cn('relative size-10', className)}>
      <Image
        src={src}
        alt={alt}
        width={40}
        height={40}
        className="w-full rounded-full object-cover"
      />

      {status === 'online' && (
        <div className="border-foreground absolute bottom-px right-0.5 z-10 size-2.5 rounded-full border-2 bg-green-500" />
      )}

      {status === 'offline' && (
        <div className="border-foreground absolute bottom-px right-0.5 z-10 size-2.5 rounded-full border-2 bg-red-500" />
      )}
    </div>
  )
}
