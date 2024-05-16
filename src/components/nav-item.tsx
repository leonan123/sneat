import { NAV_LINKS } from '@/constants'
import { cn } from '@/lib/utils'

interface INavItemProps {
  link: (typeof NAV_LINKS)[number]['links'][number]
}

export function NavItem({ link }: INavItemProps) {
  const isActive = link.href === '/'

  return (
    <li
      className={cn(
        'rounded-md text-muted transition-colors hover:bg-hover-secondary',
        isActive &&
          'bg-active font-medium text-active opacity-100 hover:bg-active/90',
      )}
    >
      <a href={link.href} className="flex items-center gap-2 px-4 py-2">
        {link.icon}
        <span className="pt-1">{link.text}</span>
      </a>
    </li>
  )
}
