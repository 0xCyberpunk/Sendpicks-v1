"use client"

import React from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Separator } from "@/components/ui/separator"
import { LightDarkImage } from "@/components/shared/light-dark-image"

function MainNav({ onOpenSettings }: { onOpenSettings: () => void }) {
  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" passHref>
        {" "}
        {/* Note the passHref prop */}
        <div className="mr-6 flex cursor-pointer items-center space-x-2">
          {" "}
          {/* Replaced <a> with <div> */}
          <LightDarkImage
            LightImage="/Green_Sendpicks.png"
            DarkImage="/Green_Sendpicks.png"
            alt="Sendpicks"
            height={50}
            width={50}
          />
        </div>
      </Link>
      <nav className="flex items-center space-x-6 text-base font-medium">
        <MainNavMenu onOpenSettings={onOpenSettings} />
      </nav>
    </div>
  )
}

function MainNavMenu({ onOpenSettings }: { onOpenSettings: () => void }) {
  return (
    <NavigationMenu>
      <NavigationMenuList></NavigationMenuList>
    </NavigationMenu>
  )
}

interface NavMenuListItemProps {
  name: string
  description: string
  href: string
  lightImage: string
  darkImage: string
}

const NavMenuListItem = ({
  name,
  description,
  href,
  lightImage,
  darkImage,
}: NavMenuListItemProps) => {
  return (
    <li key={name}>
      <NavigationMenuLink asChild>
        <a
          href={href}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          <div className="flex items-center space-x-2">
            <LightDarkImage
              LightImage={lightImage}
              DarkImage={darkImage}
              alt="icon"
              height={24}
              width={24}
              className="h-6 w-6"
            />
            <span className="text-base font-medium leading-none">{name}</span>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {description}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
}

export { MainNav, NavMenuListItem }
