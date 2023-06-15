import React, { forwardRef, ButtonHTMLAttributes } from 'react';
import { Checkbox } from '../ui/checkbox';

type CustomCheckboxProps = {
  id: string;
  label: string;
  checked?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const CustomCheckbox = forwardRef<HTMLButtonElement, CustomCheckboxProps>(
  ({ id, label, checked, ...props }, ref) => {
    return (
      <div className="flex items-center gap-[10px]">
        <Checkbox
          id={id}
          className="w-[21px] h-[21px] bg-gray-300 border-gray-300"
          ref={ref}
          {...props}
          defaultChecked={checked}
        />
        <label
          htmlFor={id}
          className="text-[15px] font-medium text-tertiary-semi"
        >
          {label}
        </label>
      </div>
    );
  }
);

export default CustomCheckbox;
