import { Hero } from '@/constants/data'
import React from 'react'

type propTypes = Pick<Hero, 'backgroundClass' | 'positionClass' | 'sizeClass'> & {
  rounded?: string
}

function BlurComponent({ positionClass, sizeClass, backgroundClass, rounded }: propTypes) {
  return (
    <div
      className={`
        absolute 
        ${positionClass} 
        ${sizeClass} 
        ${rounded ? rounded: 'rounded-full'} 
        blur-[100px]
      `}
      style={{
        background: `${backgroundClass}`
      }}
    />
  )
}

export default BlurComponent