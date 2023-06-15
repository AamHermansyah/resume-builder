import Image from 'next/image'
import React, { forwardRef } from 'react'

type propTypes = {
  id: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputFile = forwardRef<HTMLInputElement, propTypes>(({ id, onChange, ...props }, ref) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div>
      <label
        htmlFor={id}
        className="relative flex flex-col items-center justify-center w-full max-w-[150px] aspect-square border-[5px] border-tertiary-semi rounded-full cursor-pointer"
      >
        <div className="absolute w-[60%] aspect-square flex flex-col items-center justify-center">
          <Image
            src="/icons/builder/camera-icon.svg"
            alt="camera-file-upload"
            fill={true}
            className="object-contain"
          />
        </div>
        <div className="absolute bottom-1 right-[10%] w-5 lg:w-10 aspect-square">
          <Image
            src="/icons/builder/file-edit-icon.svg"
            alt="file-edit-upload"
            fill={true}
            className="bg-white object-contain z-10"
          />
        </div>
        <input 
          id={id} 
          name={id} 
          accept="image/*" 
          type="file" 
          className="hidden" 
          onChange={handleFileChange} 
          ref={ref} 
          {...props}
        />
      </label>
    </div>
  )
});

export default InputFile;
