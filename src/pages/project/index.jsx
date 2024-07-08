import React from 'react'
import Left from '@components/tasks/left/left'
import Right from '@components/tasks/right/right'

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