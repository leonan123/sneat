import { ReactNode } from 'react'

import { Sidebar } from '@/components/sidebar'

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Sidebar />

      {children}
    </>
  )
}
