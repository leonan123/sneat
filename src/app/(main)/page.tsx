'use client'

import * as Select from '@radix-ui/react-select'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import {
  BiChevronDown,
  BiDollar,
  BiDotsVertical,
  BiDownArrowAlt,
  BiUpArrowAlt,
  BiWallet,
} from 'react-icons/bi'

import { Button } from '@/components/ui/button'
import * as Card from '@/components/ui/card'

const TotalRevenueBarChart = dynamic(
  () =>
    import('@/components/total-revenue-charts').then(
      (mod) => mod.TotalRevenueBarChart,
    ),
  {
    ssr: false,
  },
)

const TotalRevenueRadialChart = dynamic(
  () =>
    import('@/components/total-revenue-charts').then(
      (mod) => mod.TotalRevenueRadialChart,
    ),
  {
    ssr: false,
    loading: () => <p>loading...</p>,
  },
)
export default function Home() {
  return (
    <main className="ml-0 mt-6 px-6 pb-3 md:ml-64">
      <div className="grid grid-cols-12 gap-6">
        <Card.Root className="col-span-8">
          <div className='absolute bottom-0 right-14 h-[175px] w-[213px] bg-contain dark:bg-[url("/illustration-john-dark.png")]' />

          <Card.Header>
            <h2 className="text-2xl text-secondary">
              Congratulations Jhon! 🎉
            </h2>
          </Card.Header>

          <Card.Content>
            <p className="mt-6 text-muted">
              You have done 72% 🤩 more sales today. <br />
              Check your new raising badge in your profile.
            </p>

            <Button variant="secondary" size="sm" className="mt-4">
              VIEW BADGES
            </Button>
          </Card.Content>
        </Card.Root>

        <Card.Root className="col-span-2 space-y-5">
          <Card.Header>
            <Image src="/pizza-green.png" width={42} height={42} alt="" />

            <Button variant="ghost" size="none">
              <BiDotsVertical size={22} />
              <span className="sr-only">toggle dropdown</span>
            </Button>
          </Card.Header>

          <Card.Content className="space-y-4">
            <div>
              <p className="text-muted">Profit</p>
              <h5 className="text-2xl font-medium">$12,628</h5>
            </div>

            <span className="text-success flex items-center gap-1 text-sm">
              <BiUpArrowAlt size={18} /> 72.8%
            </span>
          </Card.Content>
        </Card.Root>

        <Card.Root className="col-span-2 space-y-5">
          <Card.Header>
            <Image src="/folder-blue.png" width={42} height={42} alt="" />

            <Button variant="ghost" size="none">
              <BiDotsVertical size={22} />
              <span className="sr-only">toggle dropdown</span>
            </Button>
          </Card.Header>

          <Card.Content className="space-y-4">
            <div>
              <p className="text-muted">Sales</p>
              <h5 className="text-2xl font-medium">$4,679</h5>
            </div>

            <span className="text-success flex items-center gap-1 text-sm">
              <BiUpArrowAlt size={18} /> 28.42%
            </span>
          </Card.Content>
        </Card.Root>
      </div>

      <div className="mt-6 grid grid-cols-12 gap-6">
        <Card.Root className="col-span-8">
          <Card.Content className="flex items-center gap-2">
            <div className="h-full flex-1 border-r border-muted/20">
              <Card.Header>
                <h3 className="text-xl">Total revenue</h3>

                <Button variant="ghost" size="none">
                  <BiDotsVertical size={22} />
                  <span className="sr-only">toggle dropdown</span>
                </Button>
              </Card.Header>

              <TotalRevenueBarChart />
            </div>

            <div className="h-full w-full max-w-[33.33%]">
              <div className="flex items-center justify-center">
                <Select.Root defaultValue="2023">
                  <Select.Trigger className="mb-4 flex items-center justify-between gap-2 rounded-md bg-tertiary/75 px-3 py-2 text-secondary first-of-type:text-xs hover:bg-tertiary focus:outline-secondary">
                    <Select.Value />
                    <Select.Icon>
                      <BiChevronDown size={18} />
                    </Select.Icon>
                  </Select.Trigger>

                  <Select.Portal>
                    <Select.Content
                      className="overflow-hidden rounded-md bg-secondary data-[state=closed]:animate-fadeOut data-[state=open]:animate-fadeIn"
                      sideOffset={5}
                      position="popper"
                      side="bottom"
                      align="center"
                    >
                      <Select.Viewport>
                        <Select.Item
                          value="2023"
                          className="flex cursor-pointer items-center justify-center rounded-t-md px-5 py-2 text-sm transition-colors hover:bg-hover-secondary focus-visible:outline-none"
                        >
                          <Select.ItemText>2023</Select.ItemText>
                        </Select.Item>

                        <Select.Item
                          value="2022"
                          className="flex cursor-pointer items-center justify-center px-5 py-2 text-sm transition-colors hover:bg-hover-secondary focus-visible:outline-none"
                        >
                          <Select.ItemText>2022</Select.ItemText>
                        </Select.Item>

                        <Select.Item
                          value="2021"
                          className="flex cursor-pointer items-center justify-center rounded-b-md px-5 py-2 text-sm transition-colors hover:bg-hover-secondary focus-visible:outline-none"
                        >
                          <Select.ItemText>2021</Select.ItemText>
                        </Select.Item>
                      </Select.Viewport>
                    </Select.Content>
                  </Select.Portal>
                </Select.Root>
              </div>

              <TotalRevenueRadialChart />

              <p className="text-center">62% Company Growth</p>

              <div className="mt-6 flex items-center justify-center gap-8">
                <div className="flex items-center gap-2.5">
                  <div className="flex size-10 items-center justify-center rounded-md bg-tertiary/75 text-secondary">
                    <BiDollar size={28} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-muted">2023</span>
                    <h6 className="font-semibold">$32.5k</h6>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="bg-info/10 text-info flex size-10 items-center justify-center rounded-md">
                    <BiWallet size={28} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-muted">2022</span>
                    <h6 className="font-semibold">$41.2k</h6>
                  </div>
                </div>
              </div>
            </div>
          </Card.Content>
        </Card.Root>

        <div className="col-span-4 grid grid-cols-2 grid-rows-2 gap-6">
          <Card.Root className="col-span-1 space-y-5">
            <Card.Header>
              <Image src="/red-power.png" width={42} height={42} alt="" />

              <Button variant="ghost" size="none">
                <BiDotsVertical size={22} />
                <span className="sr-only">toggle dropdown</span>
              </Button>
            </Card.Header>

            <Card.Content className="space-y-4">
              <div>
                <p className="text-muted">Payments</p>
                <h5 className="text-2xl font-medium">$2,468</h5>
              </div>

              <span className="text-error flex items-center gap-1 text-sm">
                <BiDownArrowAlt size={18} /> 14.82%
              </span>
            </Card.Content>
          </Card.Root>

          <Card.Root className="col-span-1 space-y-5">
            <Card.Header>
              <Image src="/credit-card.png" width={42} height={42} alt="" />

              <Button variant="ghost" size="none">
                <BiDotsVertical size={22} />
                <span className="sr-only">toggle dropdown</span>
              </Button>
            </Card.Header>

            <Card.Content className="space-y-4">
              <div>
                <p className="text-muted">Transactions</p>
                <h5 className="text-2xl font-medium">$14,857</h5>
              </div>

              <span className="text-success flex items-center gap-1 text-sm">
                <BiUpArrowAlt size={18} /> 28.14%
              </span>
            </Card.Content>
          </Card.Root>

          <Card.Root className="col-span-2"></Card.Root>
        </div>
      </div>
    </main>
  )
}
