"use client"

import * as React from "react"
import Link from "next/link"
import { navigation } from "@/constants/landing-page"
import { FiMenu } from "react-icons/fi"
import { MdClose } from "react-icons/md"

export function Navigation() {
  const [isActive, setIsActive] = React.useState(navigation[0].id)
  const [navbarActive, setNavbarActive] = React.useState(false);

  const headerRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const listener = function() {
      if (headerRef.current) {
        headerRef.current.classList.toggle('nav-active', window.scrollY > 0);
      }
    }

    window.addEventListener('scroll', listener);

    return () => {
      window.removeEventListener('scroll', listener);
    }
  }, []);

  return (
    <header>
      <div className="block md:hidden">
        <div
          className={`
            ${navbarActive ? 'translate-x-0' : 'translate-x-[100%]'} 
            fixed inset-0 flex flex-col items-center justify-center bg-white z-[99] transition-transform duration-200 ease-in`
          }
        >
          <div className="p-4 absolute top-0 right-0">
            <button
              className="w-[30px] aspect-square rounded border border-gray-600 flex items-center justify-center"
              onClick={() => setNavbarActive(false)}
            >
              <MdClose fontSize={24} />
            </button>
          </div>
          <nav>
            <ul className="w-full flex flex-col gap-4 items-center py-8 lg:py-10 px-10 lg:px-20 lg:text-xl">
              {navigation.map((nav) => (
                <li key={nav.id}>
                  <Link
                    href={nav.href}
                    className={`${isActive === nav.id ? 'text-tertiary font-semibold' : ''} font-medium hover:underline underline-offset-4`}
                    onClick={() => {
                      setIsActive(nav.id);
                      setNavbarActive(false);
                    }}
                  >
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div ref={headerRef} className="w-full fixed top-0 left-0 flex justify-end z-50 py-4 lg:py-0 transition">
        <div className="px-4 block md:hidden">
          <button
            className="w-[30px] aspect-square rounded border border-gray-600 flex items-center justify-center"
            onClick={() => setNavbarActive(true)}
          >
            <FiMenu fontSize={24} />
          </button>
        </div>
        <nav className="hidden md:block">
          <ul className="w-full flex gap-7 justify-end items-center py-6 px-10 lg:px-20 lg:text-lg">
            {navigation.map((nav) => (
              <li key={nav.id}>
                <Link
                  href={nav.href}
                  className={`${isActive === nav.id ? 'text-tertiary font-semibold' : ''} hover:underline underline-offset-4`}
                  onClick={() => setIsActive(nav.id)}
                >
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
