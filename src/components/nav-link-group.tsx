import { NAV_LINKS } from '@/constants'

import { NavItem } from './nav-item'

type TNavLinkGroup = (typeof NAV_LINKS)[number]

interface INavLinkGroupProps {
  navLinkGroup: TNavLinkGroup
}

export function NavLinkGroup({ navLinkGroup }: INavLinkGroupProps) {
  return (
    <>
      {navLinkGroup.title && (
        <span className="relative my-3 block px-4 text-xs font-medium tracking-wide text-muted/40 before:absolute before:-left-2 before:bottom-1/2 before:h-px before:w-4 before:-translate-y-1/2 before:bg-white/10">
          {navLinkGroup.title}
        </span>
      )}

      <ul className="space-y-1">
        {navLinkGroup.links.map((link, index) => (
          <NavItem key={index} link={link} />
        ))}
      </ul>
    </>
  )
}
