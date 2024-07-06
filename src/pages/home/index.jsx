import React from 'react'
import plusIcon from '@assets/icons/plus-bold.svg'
import taskIcon from '@assets/icons/task.svg'
import chatIcon from '@assets/icons/chat.svg'
import videoCallIcon from '@assets/icons/video-call.svg'
import lampIcon from '@assets/icons/lamp.svg'
import Card from '@components/card'

export default function Home() {
  const sectionsData = [
    {
      title: "New Project",
      icon: plusIcon,
      link: '/',
    },
    {
      title: "Tasks",
      icon: taskIcon,
      link: '/tasks',
    },
    {
      title: "Chat",
      icon: chatIcon,
      link: '/',
      notification: true,
    },
    {
      title: "Video Call",
      icon: videoCallIcon,
      link: '/',
      background: 'primaryBlue'
    },
    {
      title: "Brain",
      icon: lampIcon,
      link: '/',
    },
  ]

  const cardData = {
    time: '11·21·14',
    title: 'Evening, Getter_CEO',
    date: '1·3·2024',
    text: 'Timing, perseverance, and ten years of trying will eventually make you look like an overnight success.',
    author: 'Stive Jobs'
  }

  return (
    <section className='py-[180px] px-[160px]'>
      
      {/* Main Content Wrapper */}
      <div className='flex gap-[60px]'>

        {/* Sections */}
        <div className='grid grid-rows-2 grid-cols-3 gap-[25px]'>
          {
            sectionsData.map((section, index) => (
              <div className='w-[100px] flex flex-col gap-[10px] items-center' key={index}>
                <div className={`w-[100px] cursor-pointer relative h-[100px] ${section.background ? `bg-${section.background}` : "bg-white"} rounded-[50%] flex justify-center items-center`}>
                  {section.notification && <span className='absolute w-[6px] h-[6px] rounded-[50%] bg-yellow top-[30px] right-[33px]'></span>}
                  <img src={section.icon} alt={section.title} />
                </div>

                <p className='font-[500] text-[0.813rem] 2xl:text-[0.9rem] text-secondaryColor'>{section.title}</p>
              </div>
            ))
          }
        </div>

        {/* Card Section */}
        <Card data={cardData} />

      </div>
    </section>
  )
}