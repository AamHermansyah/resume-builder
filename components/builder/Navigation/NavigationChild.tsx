import { NavigationChild } from '@/constants/builder'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

type propTypes = Pick<NavigationChild, 'title' | 'iconUrl' | 'iconSize' | 'alt' | 'href'>;

function NavigationChild({ iconUrl, iconSize, title, alt, href }: propTypes) {
  return (
    <Link href={href} className="flex items-center gap-[10px] group">
      {title && (
        <span className="text-xs sm:text-sm md:text-[15px] font-medium">
          {title}
        </span>
      )}
      <Image
        src={iconUrl}
        alt={alt}
        width={iconSize}
        height={iconSize}
        className="object-cover group-hover:scale-110 transition"
      />
    </Link>
  )
}

export default NavigationChild