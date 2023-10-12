"use client"

import { useState } from "react"

import useScroll from "@/lib/hooks/use-scroll"
import { cn } from "@/lib/utils"
import { MainNav } from "@/components/layout/main-nav"

// If these paths are correct, there should be no issue. If there is still an error,
// you need to check if WalletConnect is properly exported from the mentioned path
import { WalletConnect } from "../blockchain/wallet-connect"

export function SiteHeader() {
  const scrolled = useScroll(0)

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b backdrop-blur transition-all",
        scrolled && "bg-background/50"
      )}
    >
      <div className="container flex h-20 items-center">
        <MainNav />

        <div className="hidden flex-1 items-center justify-between space-x-2 md:flex md:justify-end">
          <WalletConnect />
        </div>
      </div>
    </header>
  )
}
