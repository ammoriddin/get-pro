import React from 'react'
import Left from '@components/project/left/left'
import Right from '@components/project/right/right'

export default function Tasks() {
  return (
    <section className='text-black w-full px-10 py-[16px] flex'>
        {/* Left Section */}
        <Left />

        {/* Right Section */}
        <Right />
    </section>
  )
}