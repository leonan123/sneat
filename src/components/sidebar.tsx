import Image from 'next/image'
import { Fragment } from 'react'
import { twMerge } from 'tailwind-merge'

import { NAV_LINKS } from '@/constants'

import { Logo } from './logo'

export function Sidebar() {
  return (
    <aside className="fixed flex h-screen w-64 flex-col justify-between bg-foreground px-4">
      <div>
        <a className="flex items-center gap-3 px-4 pt-7">
          <Logo className="h-[32px] w-[22px] text-primary" />
          <h1 className="text-3xl font-semibold text-muted">sneat</h1>
        </a>

        <nav className="mt-4 overflow-y-auto">
          {NAV_LINKS.map((link, index) => (
            <Fragment key={index}>
              {link.title && (
                <span className="relative my-3 block px-4 text-xs font-extralight tracking-wide opacity-25 before:absolute before:-left-2 before:bottom-1/2 before:h-px before:w-4 before:-translate-y-1/2 before:bg-primary-foreground">
                  {link.title}
                </span>
              )}

              <ul className="space-y-1">
                {link.links.map((link, index) => (
                  <li
                    key={index}
                    className={twMerge(
                      'rounded-md opacity-60 hover:bg-foreground-hover',
                      link.href === '/' &&
                        'bg-primary text-primary-foreground opacity-100 hover:bg-primary/95',
                    )}
                  >
                    <a
                      href={link.href}
                      className="flex items-center gap-2 px-4 py-2"
                    >
                      {link.icon}
                      <span className="pt-1">{link.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </Fragment>
          ))}
        </nav>
      </div>

      <a href="#">
        <Image
          src="/upgrade-banner-dark.png"
          alt="Upgrade to Pro"
          width={500}
          height={336}
        />
      </a>
    </aside>
  )
}
