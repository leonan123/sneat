import { twMerge } from 'tailwind-merge'

import { NAV_LINKS } from '@/constants'

interface INavItemProps {
  link: (typeof NAV_LINKS)[number]['links'][number]
}

export function NavItem({ link }: INavItemProps) {
  const isActive = link.href === '/'

  return (
    <li
      className={twMerge(
        'rounded-md opacity-60 hover:bg-foreground-hover',
        isActive &&
          'bg-primary text-primary-foreground opacity-100 hover:bg-primary/95',
      )}
    >
      <a href={link.href} className="flex items-center gap-2 px-4 py-2">
        {link.icon}
        <span className="pt-1">{link.text}</span>
      </a>
    </li>
  )
}
