import React from 'react'
import { Checkbox } from '../ui/checkbox'

type propTypes = {
  id: string,
  label: string,
}

function CustomCheckbox({ id, label }: propTypes) {
  return (
    <div className="flex items-center gap-[10px]">
      <Checkbox
        id={id}
        className="w-[21px] h-[21px] bg-gray-300 border-gray-300"
      />
      <label
        htmlFor={id}
        className="text-[15px] font-medium text-tertiary-semi"
      >
        {label}
      </label>
    </div>
  )
}

export default CustomCheckbox