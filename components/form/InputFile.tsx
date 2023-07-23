import Image from 'next/image'
import React, { forwardRef, useState } from 'react'

type propTypes = {
  id: string,
  onChange: (base64: string) => void,
  value: string
}

const DEFAULT_IMAGE = 'https://randomuser.me/api/portraits/men/18.jpg'

const InputFile = forwardRef<HTMLInputElement, propTypes>(({ id, onChange, value, ...props }, ref) => {
  const [srcImage, setSrcImage] = useState<null | string>(value !== DEFAULT_IMAGE ? value : null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Add null check using the optional chaining operator

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const imageBase64 = reader.result as string;
        setSrcImage(imageBase64);
        onChange(imageBase64);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <label
        htmlFor={id}
        className="relative flex flex-col items-center justify-center w-full max-w-[150px] aspect-square border-[5px] border-tertiary-semi rounded-full cursor-pointer"
      >
        <div className={`${srcImage ? 'w-full' : 'w-[60%]'} absolute aspect-square flex flex-col items-center justify-center rounded-full overflow-hidden`}>
          <Image
            src={srcImage || '/icons/builder/camera-icon.svg'}
            alt="camera-file-upload"
            fill={true}
            className={srcImage ? 'object-cover' : 'object-contain'}
          />
        </div>
        <div className="absolute bottom-1 right-[10%] w-6 aspect-square">
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
          onChange={handleImageUpload}
          ref={ref}
          {...props}
        />
      </label>
    </div>
  )
});

export default InputFile;
