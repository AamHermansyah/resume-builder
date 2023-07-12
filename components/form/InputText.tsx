import { Label } from '@radix-ui/react-label'
import React, { forwardRef } from 'react'
import { Input } from '../ui/input'
import { cn } from '@/lib/utils'

type InputTextProps = {
  required?: boolean,
  label: string,
  id: string,
  className?: string,
  placeholder?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputText = forwardRef<HTMLInputElement, InputTextProps>(({
  required = true,
  label,
  id,
  className,
  onChange,
  ...props
}, ref) => {
  return (
    <div>
      <Label
        htmlFor={id}
        className="px-[15px] text-[15px] font-medium text-tertiary-semi"
      >
        {label} {!required && <span className="text-xs text-slate-400 font-medium">(Optional)</span>}
      </Label>
      <Input
        type="text"
        id={id}
        className={cn('py-6 rounded bg-gray-200 border-none', className)}
        onChange={onChange}
        ref={ref}
        {...props}
      />
    </div>
  )
});

export default InputText;
