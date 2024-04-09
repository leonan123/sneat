'use client'

import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

import { NAV_LINKS } from '@/constants'
import { useSidebar } from '@/contexts/sidebar'

import { Logo } from './logo'
import { NavLinkGroup } from './nav-link-group'

export function Sidebar() {
  const { isOpen, toggleSidebar } = useSidebar()

  return (
    <>
      {/* Sidebar overlay when is small screen */}
      <div
        className={twMerge(
          'fixed inset-0 bg-black/40',
          isOpen ? 'block md:hidden' : 'hidden',
        )}
        onClick={toggleSidebar}
      />

      <aside
        className={twMerge(
          'fixed z-20 flex h-screen flex-col justify-between overflow-hidden bg-foreground px-4 transition-all duration-300 ease-in-out',
          isOpen ? 'w-64' : 'w-0 p-0',
        )}
      >
        <div>
          <a className="flex items-center gap-3 px-4 pt-7">
            <Logo className="h-[32px] w-[22px] text-primary" />
            <h1 className="text-3xl font-semibold text-muted">sneat</h1>
          </a>

          <nav className="mt-4 overflow-y-auto overflow-x-hidden">
            {NAV_LINKS.map((linkGroup, index) => (
              <NavLinkGroup key={index} navLinkGroup={linkGroup} />
            ))}
          </nav>
        </div>

        <a href="#">
          <Image
            src="/upgrade-banner-dark.png"
            alt="Upgrade to Pro"
            width={500}
            height={336}
            priority
          />
        </a>
      </aside>
    </>
  )
}
