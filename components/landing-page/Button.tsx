import { cn } from "@/lib/utils"
import Link from "next/link"

type propTypes = {
  href: string,
  title: string,
  className?: string
}

function Button({ href, title, className = ''}: propTypes) {
  return (
    <Link
      href={href}
      className={cn('block w-max py-4 px-10 text-lg font-semibold bg-tertiary text-white rounded-[10px] hover:bg-white hover:text-tertiary active:scale-95 transition-all duration-200', className)}
      style={{
        boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)'
      }}
    >
      {title}
    </Link>
  )
}

export default Button