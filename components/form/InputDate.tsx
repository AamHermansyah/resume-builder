import { Label } from '@radix-ui/react-label';
import React, { forwardRef, InputHTMLAttributes } from 'react';
import { Input } from '../ui/input';
import { cn } from '@/lib/utils';

type InputDateProps = {
  id: string;
  label: string;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const InputDate = forwardRef<HTMLInputElement, InputDateProps>(
  ({ id, label, className, ...props }, ref) => {
    return (
      <div>
        <Label
          htmlFor={id}
          className="px-[15px] text-[15px] font-medium text-tertiary-semi"
        >
          {label}
        </Label>
        <Input
          type="date"
          id={id}
          name={id}
          className={cn(
            'py-6 rounded bg-gray-200 border-none text-[15px] font-medium text-tertiary-semi uppercase',
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

export default InputDate;
