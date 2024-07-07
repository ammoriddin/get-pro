import React from 'react'
import arrow from '@assets/icons/arrow.svg'
import globalIcon from '@assets/icons/global.svg'
import plusIcon from '@assets/icons/plus.svg'
import Projects from '@components/projects'
import { useLocation } from 'react-router-dom'

export default function Sidebar() {
  const path = useLocation()

  const projects = [
    {
      id: 1,
      title: "Oasis",
    },
    {
      id: 2,
      title: "Getter web site",
    },
    {
      id: 3,
      title: "Chempionat platforma",
    },
    {
      id: 4,
      title: "Bvir.uz",
    },
    {
      id: 5,
      title: "Istanbul city",
    }
  ]

  return (
    <div className='min-w-[250px] bg-white h-screen flex flex-col'>
      {/* Sidebar Top */}
      <div className='flex items-center justify-between px-10 py-5'>

        {/* Sidebar Arrows Wrapper */}
        <div className='flex gap-[23.17px]'>
  
          {/* Sidebar Left Arrow */}
          <div className='w-[6.5px] 2xl:w-[8px] cursor-pointer'>
            <img className='w-full' src={arrow} alt="left-arrow" />
          </div>
  
          {/* Sidebar Right Arrow */}
          <div className='w-[6.5px] 2xl:w-[8px] cursor-pointer'>
            <img className='w-full rotate-180' src={arrow} alt="right-arrow" />
          </div>
        </div>

        {/* Profile Img */}
        <div className='w-[56px] h-[56px]'>
          <img className='w-full  h-full rounded-[50%] object-cover' src="https://wallpapers.com/images/hd/professional-profile-pictures-1080-x-1080-460wjhrkbwdcp1ig.jpg" alt="" />
        </div>

        {/* Comunity */}
        {/* <Link> */}
          <div className='w-[18px] 2xl:w-[21px] cursor-pointer'>
            <img className='w-full' src={globalIcon} alt="global-icon" />
          </div>
        {/* </Link> */}

      </div>

      {/* Main Content */}
      <div className='flex flex-col justify-between flex-grow-[1] pb-[60px]'>

        <div>

          {/* Create Project Section */}
          <div className='flex items-center justify-between px-10 py-5 border-t-[1px] border-b-[1px] border-primaryBorder mb-[30px]'>
            <p className='font-[500] text-[0.75rem] 2xl:text-[0.95rem] leading-[14.52px]'>Create project</p>
            <div className=''>
              <img src={plusIcon} alt="" />
            </div>
          </div>

          {/* Projects */}
          <div className='flex flex-col gap-2 px-[15px]'>
            {
              projects.map(project => (
                <Projects key={project.id} projectId={project.id} projectName={project.title} isActive={path.pathname === `/tasks/project/${project.id}`} />
              ))
            }
          </div>

        </div>


        {/* Archive projects */}
        <div className='px-10'>
          <p className='font-[400] text-[0.75rem] 2xl:text-[0.95rem] leading-[14.52px]'>Archive projects</p>
        </div>
      </div>

    </div>
  )
}