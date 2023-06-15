import { Label } from '@radix-ui/react-label';
import React, { forwardRef } from 'react';
import { Textarea } from '../ui/textarea';

type InputTextAreaProps = {
  label: string;
  id: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const InputTextArea = forwardRef<HTMLTextAreaElement, InputTextAreaProps>(
  ({ label, id, ...props }, ref) => {
    return (
      <div>
        <Label
          htmlFor={id}
          className="px-[15px] text-[15px] font-medium text-tertiary-semi"
        >
          {label}
        </Label>
        <Textarea
          id={id}
          name={id}
          className="w-full py-2 rounded-[20px] bg-gray-200 border-none h-[200px] resize-none"
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

export default InputTextArea;
