import { form } from '@/constants/builder'
import Image from 'next/image'
import React from 'react'

type propTypes = {
  onClickButton: (id: string) => void
}

function FormHeader({ onClickButton }: propTypes) {
  return (
    <>
      {form.map((item) => (
        <button
          key={item.id}
          className={`mx-2.5 sm:mx-5 py-4 cursor-pointer group active:scale-95 transition`}
          onClick={() => onClickButton(item.id)}
        >
          <Image
            src={item.iconUrl}
            alt={item.title}
            width={25}
            height={25}
            className="object-cover group-hover:scale-110 transition"
          />
        </button>
      ))}
    </>
  )
}

export default FormHeader