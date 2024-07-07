import React from 'react'

export default function Badge({text}) {
  return (
    <h3 className='bg-darkYellow py-[4px] px-[8px] rounded-[6px] text-[0.75rem] 2xl:text-[0.95rem] font-[500] leading-[16px]'>{text}</h3>
  )
}