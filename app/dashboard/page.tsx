import { Metadata } from "next"
import type { AppProps } from "next/app"
import Image from "next/image"
import { Button } from "components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "components/ui/card"
import { Input } from "components/ui/input"
import { Separator } from "components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "components/ui/tabs"

import { Overview } from "@/components/layout/overview"
import { RecentSales } from "@/components/layout/recent-sales"
import { DemoShareDocument } from "@/components/layout/share-document"
import { SiteHeader } from "@/components/layout/site-header"

import RootLayout from "../layout"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
}

export default function DashboardPage() {
  return (
    <>
      <div className="container mx-auto px-1">
        <div className="ml-auto flex items-center space-x-4"></div>
        <SiteHeader />
        <div className="md:hidden">
          <Image
            src="/examples/dashboard-light.png"
            width={1280}
            height={866}
            alt="Dashboard"
            className="block dark:hidden"
          />
          <Image
            src="/examples/dashboard-dark.png"
            width={1280}
            height={866}
            alt="Dashboard"
            className="hidden dark:block"
          />
        </div>
        <div className="hidden flex-col md:flex">
          <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
              <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
              <div className="flex items-center space-x-2"></div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Revenue
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$45,231.89</div>
                  <p className="text-xs text-muted-foreground">
                    +20.1% from last month
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Betting Volume
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+102,234</div>
                  <p className="text-xs text-muted-foreground">
                    +19% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Revenue Reward
                  </CardTitle>
                  <Button size="sm">Claim Reward</Button>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">0.143 ETH</div>
                  <p className="text-xs text-muted-foreground">
                    +29% since last hour
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <Overview />
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Staking</CardTitle>
                  <CardDescription>
                    Stake 300k SEND for 3x payouts. Unstake anytime with a 2 day
                    release time.
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="mb-5 flex space-x-4">
                    <Input
                      name="Stake"
                      className="py-5"
                      placeholder="Enter stake amount"
                    />
                    <Button>Stake</Button>
                  </div>
                  <Separator className="my-5" />
                  <div className="flex space-x-2">
                    <Input className="py-5" placeholder="Enter stake amount" />
                    <Button variant="secondary">Withdraw</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
