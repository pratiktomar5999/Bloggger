import PreviousMap from 'postcss/lib/previous-map'
import React from 'react'

export const Button = ({
    children,
    type='button',
    bgColor = 'bj-blue-600',
    textColor='text-black',
    className='',
    ...props
}) => {
  return (
    <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className} `} {...props}>{children}</button>
  )
}
