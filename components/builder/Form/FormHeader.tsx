import { form } from '@/constants/builder'
import Image from 'next/image'
import React from 'react'

type propTypes = {
  onClickButton: (id: string) => void,
  isActiveButton: string
}

function FormHeader({ onClickButton, isActiveButton }: propTypes) {
  return (
    <>
      {form.map((item) => (
        <button
          key={item.id}
          className={`${isActiveButton === item.id ? '' : 'group active:scale-95 transition'} mx-2 sm:mx-3 py-4 cursor-pointer`}
          onClick={() => onClickButton(item.id)}
        >
          <Image
            src={item.iconUrl}
            alt={item.title}
            width={25}
            height={25}
            className={`${isActiveButton === item.id ? 'scale-125' : ''} object-cover group-hover:scale-110 transition`}
          />
        </button>
      ))}
    </>
  )
}

export default FormHeader