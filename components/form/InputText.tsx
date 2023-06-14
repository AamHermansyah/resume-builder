import { Label } from '@radix-ui/react-label'
import React from 'react'
import { Input } from '../ui/input'
import { cn } from '@/lib/utils'

type propTypes = {
  required?: boolean,
  label: string,
  id: string,
  className?: string,
  placeholder?: string,
  type?: string
}

function InputText({ required = true, label, id, className, placeholder, type, ...props }: propTypes) {
  return (
    <div>
      <Label
        htmlFor={id}
        className="px-[15px] text-[15px] font-medium text-tertiary-semi"
      >
        {label} {!required && <span className="text-xs text-slate-400 font-medium">(Optional)</span>}
      </Label>
      <Input
        type={type || 'text'}
        id={id}
        name={id}
        className={cn('py-6 rounded-[20px] bg-gray-200 border-none', className)}
        placeholder={placeholder || ''}
        {...props}
      />
    </div>
  )
}

export default InputText