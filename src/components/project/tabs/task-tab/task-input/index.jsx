import React from 'react'
import { DatePicker } from 'rsuite'
import replay from '@assets/icons/replay.svg'

const TaskInput = () => {
  return (
    <div className='w-full bg-white z-30 px-[20px] absolute bottom-[20px] flex items-stretch gap-[10px]'>
        <div className='w-[75%] relative'>
            <input type="text" placeholder='New Task' className='w-full h-full py-[12px] px-[20px] bg-primaryGray rounded-[7px] placeholder:text-black' />
            <div className='w-[10px] cursor-pointer absolute right-[24px] top-[50%] translate-y-[-50%]'>
                <img className='w-full' src={replay} alt="replay" />
            </div>
        </div>

        <div className="relative w-[30%]">
            <DatePicker className='h-full custom-datepicker' />
        </div>
    </div>
  )
}

export default TaskInput