import Badge from '@components/badge'
import ChustomCheckbox from '@components/custom-checkbox'
import { useDateColor } from '@hooks/useDateColor'
import React, { useState } from 'react'

export default function Task({tasks}) {
  return (
    <div className='h-full overflow-auto'>
        {/* Task Name */}
        <div className='flex gap-[10px] sticky top-0 bg-white z-30 items-center px-[2px] mb-[40px]'>
            <Badge text="Oasis International Travel" />
            <span className='font-[500] text-[0.75rem] 2xl:text-[0.95rem]'>14 kun</span>
        </div>

        {/* Main Task */}
        <div className='px-[40px]'>
            {
                tasks.map((task, index) => {
                    return (
                        <div key={index}>
                            <h2 className={`${useDateColor(task.date)} text-[0.813rem] 2xl:text-[0.9rem] font-[500] leading-[20px] mb-[10px]`}>{task.date}</h2>

                            {/* Tasks Wrapper */}
                            <div className='flex flex-col gap-[20px] mb-10'>
                                {
                                    task.tasks.map((task) => {
                                        const [isChecked, setIsChecked] = useState(task.isDone)
                                        return (
                                            <div key={task.id} className='flex items-start gap-[10px]'>
                                                <ChustomCheckbox bg={"bg-primaryGreen"} isChecked={isChecked} setIsChecked={setIsChecked} />
                                                <p className={`${isChecked   ? "line-through text-secondaryGray" : ""} text-[0.875rem] 2xl:text-[0.95rem] font-[400]`}>{task.title}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}