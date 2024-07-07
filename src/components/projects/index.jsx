import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Projects({projectName, projectId, isActive}) {
    const navigate = useNavigate()

    return (
        <div onClick={() => navigate(`/tasks/project/${projectId}`)} className={`w-full px-[30px] cursor-pointer rounded-md ${isActive ? "bg-primaryGray" : "hover:bg-primaryGray bg-white transition-[background-color]"} py-[10px]`}>
            <p className='font-medium text-[0.75rem] 2xl:text-[0.95rem] leading-none'>{projectName}</p>
        </div>
    )
}