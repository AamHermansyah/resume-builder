import { NavigationChild as NavigationChildTypes, navigation } from '@/constants/builder'
import React from 'react'
import NavigationChild from './NavigationChild'

import dynamic from "next/dynamic"
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

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

type propTypes = {
  onClickPreview: () => void
}

function Navigation({ onClickPreview }: propTypes) {
  return (
    <header id="nav-builder" className="fixed w-full top-0 z-50 print:hidden">
      <div className="px-5 py-4 bg-tertiary-semi text-white">
        <div className="w-full flex justify-between items-center gap-2 sm:gap-10">
          <div className="flex-1 flex gap-4 items-center">
            {navigation.navLeft.map((nav, index) => (
              <NavigationChild
                key={nav.id}
                {...nav}
              />
            ))}
          </div>

          <React.Suspense>
            <NavigationMenu className="md:hidden flex justify-start">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">
                    Menu
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <nav>
                      <ul className="grid w-[150px] sm:w-[250px] p-4">
                        {navigation.navRight.map((nav, index) => (
                          <ListItem
                            key={nav.id}
                            onClick={(e) => {
                              if (nav.title === 'Print') {
                                e.preventDefault();
                                globalThis?.print();
                                return
                              }

                              if (nav.title === 'Preview') {
                                e.preventDefault();
                                onClickPreview();
                                return
                              }
                            }}
                            {...nav}
                            className="hover:underline underline-offset-4"
                          />
                        ))}
                      </ul>
                    </nav>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </React.Suspense>

          <div className="flex-initial flex items-center justify-center gap-[25px]">
            {navigation.navCenter.map((nav) => (
              <NavigationChild
                key={nav.id}
                {...nav}
              />
            ))}
          </div>

          <div className="hidden md:flex flex-1 items-center justify-end gap-[25px]">
            {navigation.navRight.map((nav) => (
              <NavigationChild
                onClick={(e) => {
                  if (nav.title === 'Print') {
                    e.preventDefault();
                    globalThis?.print();
                  }

                  if (nav.title === 'Preview') {
                    e.preventDefault();
                    onClickPreview();
                    return
                  }
                }}
                key={nav.id}
                {...nav}
              />
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

type ListItemPropsTypes = Pick<NavigationChildTypes, 'title' | 'iconUrl' | 'iconSize' | 'alt' | 'href'> & {
  className: string,
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  ListItemPropsTypes
>(({ iconUrl, iconSize, title, alt, href, className, onClick }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={href as string}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          onClick={(e) => {
            onClick(e);
          }}
        >
          <div className="flex gap-4 items-center justify-between text-sm font-medium leading-none">
            {title}
            <Image
              src={iconUrl}
              alt={alt}
              width={iconSize}
              height={iconSize}
              className="object-cover group-hover:scale-110 transition invert"
            />
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})

ListItem.displayName = "ListItem"

export default Navigation