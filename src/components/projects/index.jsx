import React from 'react'
import { useNavigate } from 'react-router-dom'
import burgerMenu from '@assets/icons/burger.svg'

export default function Projects({projectName, projectId, isActive}) {
    const navigate = useNavigate()

    return (
        <div onClick={() => navigate(`/tasks/project/${projectId}`)} className={`w-full pl-[10px] gap-[10px] pr-[30px] flex cursor-pointer rounded-md ${isActive ? "bg-primaryGray" : "bg-white"} pb-[4px] py-[10px]`}>
            {/* Project Settins Controller */}
            <div className='w-[15px]'>
                <img className='w-full' src={burgerMenu} alt="" />
            </div>

            {/* Project Name */}
            <div>
                <p className='font-medium text-[0.75rem] 2xl:text-[0.95rem] leading-none'>{projectName}</p>
                <span className='text-[0.70rem] uppercase text-secondaryColor'>13 kun</span>
            </div>
        </div>
    )
}