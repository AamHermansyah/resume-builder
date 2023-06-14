import { Label } from '@radix-ui/react-label'
import React from 'react'
import { Textarea } from '../ui/textarea'

type propTypes = {
  label: string,
  id: string
}

function InputTextArea({ label, id }: propTypes) {
  return (
    <div>
      <Label
        htmlFor={id}
        className="px-[15px] text-[15px] font-medium text-tertiary-semi"
      >
        {label}
      </Label>
      <Textarea
        name={id}
        id={id}
        className="w-full py-2 rounded-[20px] bg-gray-200 border-none h-[200px] resize-none"
      />
    </div>
  )
}

export default InputTextArea