import { ReactNode } from 'react'

import { Header } from '@/components/header'
import { Sidebar } from '@/components/sidebar'
import { SidebarProvider } from '@/contexts/sidebar'

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SidebarProvider>
        <Sidebar />
        <Header />
      </SidebarProvider>

      {children}
    </>
  )
}
