'use client'
import { createContext, useContext, useEffect, useState } from 'react'
import { theme } from 'tailwindcss/defaultConfig'

import { IAvailableScreens } from '@/types'

interface ISidebarContext {
  isOpen: boolean
  toggleSidebar: () => void
}

export const SidebarContext = createContext({} as ISidebarContext)

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const themeScreens = theme?.screens as unknown as IAvailableScreens

  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    window.addEventListener('resize', () => {
      const isScreenSizeSmall =
        Number(themeScreens.md.replace('px', '')) < document.body.clientWidth

      if (isScreenSizeSmall) {
        setIsOpen(true)
        return
      }

      setIsOpen(false)
    })

    if (typeof window !== 'undefined') {
      setIsOpen(
        Number(themeScreens.md.replace('px', '')) < document.body.clientWidth,
      )
    }
  }, [themeScreens.md])

  function toggleSidebar() {
    setIsOpen(!isOpen)
  }

  return (
    <SidebarContext.Provider
      value={{
        isOpen,
        toggleSidebar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebar = () => useContext(SidebarContext)
