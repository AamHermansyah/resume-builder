"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string }[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "/",
  },
  {
    title: "Create Resume",
    href: "/",
  },
  {
    title: "Contribute",
    href: "/",
  },
  {
    title: "FAQs",
    href: "/",
  },
]

export function Navbar() {
  return (
    <header className="w-full absolute top-0 left-0 z-50">
      <NavigationMenu className="md:hidden flex justify-start pt-8 lg:pt-10 px-10 lg:px-20">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              Menu
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <nav className="hidden md:block">
        <ul className="w-full flex gap-7 justify-end items-center py-8 lg:py-10 px-10 lg:px-20 lg:text-xl">
          <li>
            <Link href="/" className="text-tertiary font-semibold">Home</Link>
          </li>
          <li>
            <Link href="/">About Us</Link>
          </li>
          <li>
            <Link href="/">Create Resume</Link>
          </li>
          <li>
            <Link href="/">Contribute</Link>
          </li>
          <li>
            <Link href="/">FAQs</Link>
          </li>
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
