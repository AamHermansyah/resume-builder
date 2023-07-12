import { NavigationChild } from '@/constants/builder'
import { cn } from '@/lib/utils';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

type propTypes = Pick<NavigationChild, 'title' | 'iconUrl' | 'iconSize' | 'alt' | 'href' | 'className'> & {
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
};

function NavigationChild({ iconUrl, iconSize, title, alt, href, onClick, className }: propTypes) {
  return (
    <Link
      href={href}
      onClick={(e) => {
        if (onClick) {
          onClick(e);
        }
      }}
      className={cn('flex items-center gap-[10px] group', className)}
    >
      {title && (
        <span className="text-xs sm:text-sm md:text-[15px] font-medium">
          {title}
        </span>
      )}
      {iconSize && iconUrl && alt && (
        <Image
          src={iconUrl}
          alt={alt}
          width={iconSize}
          height={iconSize}
          className="object-cover group-hover:scale-110 transition"
        />
      )}
    </Link>
  )
}

export default NavigationChild