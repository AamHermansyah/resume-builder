import React from 'react';
import { Label } from '../ui/label';

type propTypes = {
  id: string;
  label: string;
  options: {
    value: string;
    title: string;
    isSelected?: boolean;
    isDisabled?: boolean;
  }[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string | number;
};

function SelectOption({ id, label, options, onChange, value }: propTypes) {
  return (
    <div>
      <Label
        htmlFor={id}
        className="px-[15px] text-[15px] font-medium text-tertiary-semi"
      >
        {label}
      </Label>
      <select
        name={id}
        id={id}
        defaultValue={value}
        onChange={onChange}
        className="block w-full py-[13px] px-2 rounded-[20px] bg-gray-200 border-none outline-gray-400"
      >
        {options.map((option, index) => (
          <option
            value={option.value}
            key={index}
            selected={option.isSelected || false}
            disabled={option.isDisabled || false}
          >
            {option.title}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectOption;
