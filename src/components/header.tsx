'use client'

import {
  BiBell,
  BiCommand,
  BiLogoGithub,
  BiMenu,
  BiSearch,
  BiSun,
} from 'react-icons/bi'

import { useSidebar } from '@/contexts/sidebar'

import { Avatar } from './ui/avatar'
import { Button } from './ui/button'

export function Header() {
  const { toggleSidebar } = useSidebar()

  return (
    <header className="ml-0 px-6 pt-3 md:ml-64">
      <div className="flex items-center justify-between rounded-md bg-secondary px-6 py-3">
        <div className="flex items-center gap-0.5">
          <Button
            variant="ghost"
            size="none"
            onClick={toggleSidebar}
            className="md:hidden"
          >
            <BiMenu size={22} />
            <span className="sr-only">Toggle Menu</span>
          </Button>

          <Button
            variant="ghost"
            size="none"
            id="search"
            type="button"
            onClick={() => console.log('clicado')}
          >
            <BiSearch size={22} />
            <span className="sr-only">Search</span>
          </Button>

          <label
            htmlFor="search"
            className="flex cursor-pointer select-none items-center gap-2 opacity-45"
          >
            <span>Search</span>
            <div className="flex items-center gap-px rounded-md border border-muted/25 px-1 py-0.5">
              <BiCommand size={12} />
              <span className="text-sm">K</span>
            </div>
          </label>
        </div>

        <div className="flex items-center gap-1.5">
          <Button variant="ghost" size="none" type="button">
            <BiLogoGithub size={22} />
            <span className="sr-only">GitHub</span>
          </Button>

          <Button variant="ghost" size="none" type="button">
            <BiBell size={22} />
            <span className="sr-only">Notifications</span>
          </Button>

          <Button variant="ghost" size="none" type="button">
            <BiSun size={22} />
            <span className="sr-only">Toggle theme</span>
          </Button>

          <button>
            <Avatar src="/avatar.png" status="online" />
          </button>
        </div>
      </div>
    </header>
  )
}
