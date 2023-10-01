"use client"
import { useState } from 'react';
import Link from "next/link"

import useScroll from "@/lib/hooks/use-scroll"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { MainNav } from "@/components/layout/main-nav"
import { MobileNav } from "@/components/layout/mobile-nav"
import { ModeToggle } from "@/components/shared/mode-toggle"
import { WalletConnect } from "../blockchain/wallet-connect"
import { DemoCreateAccount } from "@/components/layout/create-account" // Adjust the path accordingly

export function SiteHeader() {
  const scrolled = useScroll(0);
  const [showModal, setShowModal] = useState(false);

  return (
    <header className={cn("sticky top-0 z-50 w-full border-b backdrop-blur transition-all", scrolled && "bg-background/50")}>
      <div className="container flex h-20 items-center">
        <MainNav onOpenSettings={() => setShowModal(true)} />
        <MobileNav />
        <div className="hidden flex-1 items-center justify-between space-x-2 md:flex md:justify-end">
          <WalletConnect />
        </div>
      </div>
      {showModal && <DemoCreateAccount onClose={() => setShowModal(false)} />}
    </header>
  );
}
