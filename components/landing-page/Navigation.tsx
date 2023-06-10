"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { navigation } from "@/constants/landing-page"
import dynamic from "next/dynamic"

const NavigationMenu = dynamic(() =>
  import("@/components/ui/navigation-menu")
    .then((module) => module.NavigationMenu)
)
const NavigationMenuList = dynamic(() =>
  import("@/components/ui/navigation-menu")
    .then((module) => module.NavigationMenuList)
)
const NavigationMenuItem = dynamic(() =>
  import("@/components/ui/navigation-menu")
    .then((module) => module.NavigationMenuItem)
)
const NavigationMenuTrigger = dynamic(() =>
  import("@/components/ui/navigation-menu")
    .then((module) => module.NavigationMenuTrigger)
)
const NavigationMenuContent = dynamic(() =>
  import("@/components/ui/navigation-menu")
    .then((module) => module.NavigationMenuContent)
)
const NavigationMenuLink = dynamic(() =>
  import("@/components/ui/navigation-menu")
    .then((module) => module.NavigationMenuLink)
)

export function Navigation() {
  return (
    <header className="w-full absolute top-0 left-0 z-50">
      <React.Suspense>
        <NavigationMenu className="md:hidden flex justify-start pt-8 lg:pt-10 px-10 lg:px-20">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                Menu
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <nav>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {navigation.map((nav, index) => (
                      <ListItem
                        key={nav.id}
                        title={nav.title}
                        href={nav.href}
                        className={`${index === 0 ? 'text-tertiary font-semibold' : ''} hover:underline underline-offset-4`}
                      />
                    ))}
                  </ul>
                </nav>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </React.Suspense>
      <nav className="hidden md:block">
        <ul className="w-full flex gap-7 justify-end items-center py-8 lg:py-10 px-10 lg:px-20 lg:text-xl">
          {navigation.map((nav, index) => (
            <li key={nav.id}>
              <Link
                href={nav.href}
                className={`${index === 0 ? 'text-tertiary font-semibold' : ''} hover:underline underline-offset-4`}
              >
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={props.href as string}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})

ListItem.displayName = "ListItem"
