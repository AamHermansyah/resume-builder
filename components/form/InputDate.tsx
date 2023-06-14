import { Label } from '@radix-ui/react-label'
import React from 'react'
import { Input } from '../ui/input'
import { cn } from '@/lib/utils'

type propTypes = {
  id: string,
  label: string,
  className?: string
}

function InputDate({ id, label, className }: propTypes) {
  return (
    <div>
      <Label
        htmlFor="dob"
        className="px-[15px] text-[15px] font-medium text-tertiary-semi"
      >
        {label}
      </Label>
      <Input
        type="date"
        id={id}
        name={id}
        className={cn('py-6 rounded-[20px] bg-gray-200 border-none text-[15px] font-medium text-tertiary-semi uppercase', className)}
      />
    </div>
  )
}

export default InputDate