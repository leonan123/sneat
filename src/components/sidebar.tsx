'use client'

import Image from 'next/image'
import Link from 'next/link'

import { NAV_LINKS } from '@/constants'
import { useSidebar } from '@/contexts/sidebar'
import { cn } from '@/lib/utils'

import { Logo } from './logo'
import { NavLinkGroup } from './nav-link-group'

export function Sidebar() {
  const { isOpen, toggleSidebar } = useSidebar()

  return (
    <>
      <div
        className={cn(
          'fixed inset-0 bg-black/40',
          isOpen ? 'block md:hidden' : 'hidden',
        )}
        onClick={toggleSidebar}
      />

      <aside
        className={cn(
          'fixed z-20 flex h-screen flex-col justify-between overflow-hidden bg-secondary px-4 transition-all duration-300 ease-in-out',
          isOpen ? 'w-64' : 'w-0 p-0',
        )}
      >
        <div>
          <a className="flex items-center gap-3 px-4 pt-7">
            <Logo className="h-[32px] w-[22px] text-secondary" />
            <h1 className="text-3xl font-semibold">sneat</h1>
          </a>

          <nav className="mt-4 overflow-y-auto overflow-x-hidden">
            {NAV_LINKS.map((linkGroup, index) => (
              <NavLinkGroup key={index} navLinkGroup={linkGroup} />
            ))}
          </nav>
        </div>

        <Link href="#">
          <Image
            src="/upgrade-banner-dark.png"
            alt="Upgrade to Pro"
            width={500}
            height={336}
            priority
          />
        </Link>
      </aside>
    </>
  )
}
