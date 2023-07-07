import { cn } from "@/lib/utils"
import Link from "next/link"

type propTypes = {
  href?: string,
  title: string,
  className?: string,
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

function Button({ href = '', title, className = '', onClick }: propTypes) {
  return (
    <Link
      href={href}
      className={cn('block w-max py-4 px-10 text-lg font-semibold bg-tertiary text-white rounded-[10px] hover:bg-white hover:text-tertiary active:scale-95 transition-all duration-200', className)}
      style={{
        boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)'
      }}
      onClick={(e) => {
        if (onClick) {
          onClick(e);
        }
      }}
    >
      {title}
    </Link>
  )
}

export default Button