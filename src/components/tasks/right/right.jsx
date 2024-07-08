import React, { useState } from 'react'
import taskIcon from '@assets/png-icons/task.png'
import chatIcon from '@assets/png-icons/chat.png'
import lampIcon from '@assets/png-icons/lamp.png'
import Tab from '@components/tab'
import ChustomCheckbox from '@components/custom-checkbox/index'
import replay from '@assets/icons/replay.svg'
import { useTab } from '@hooks/useTab/useTab'
import Task from '../tabs/task-tab'
import Chat from '../tabs/chat-tab'

export default function Right() {
    const [isChecked, setIsChecked] = useState(false)

    const tabs = [
        {
            img: taskIcon,
            title: "Tasks"
        },
        {
            img: chatIcon,
            title: "Chat"
        },
        {
            img: lampIcon,
            title: "Brain"
        },
    ]

    const tasks = [
        {
            date: '10 dekabr 2023. 12:56',
            tasks: [
                {
                    id: 1, 
                    title: 'Korrektirovka qilish kerak tekstlarini',
                    isDone: true,
                },
                {
                    id: 2, 
                    title: 'Ichki sahifalarda havolalar side bar menu',
                    isDone: true,
                },
                {
                    id: 3, 
                    title: 'Bu yangi zadacha emas',
                    isDone: true,
                },
            ]
        },
        {
            date: '7 iyul 2024. 22:56',
            tasks: [
                {
                    id: 4, 
                    title: 'Agar berilgan taskni deadline tugagan bo’lsa rangi qizil bo’ladi',
                    isDone: false,
                },
                {
                    id: 5, 
                    title: "You shouldn't focus on why you cant do something, which is what most people do. You should focus on why perhaps you can, and be one of the exceptions.",
                    isDone: false,
                },
            ]
        },
        {
            date: '12 dekabr 2024. 12:56',
            tasks: [
                {
                    id: 6, 
                    title: 'Mobile version design',
                    isDone: false,
                },
                {
                    id: 7, 
                    title: "It's not about ideas. It's about making ideas happen. It's not about ideas. It's about making ideas happen. It's not about ideas. It's about making.",
                    isDone: false,
                },
                {
                    id: 8, 
                    title: "Yangi zadacha rangi va edit holati shunaqa bo’ladi  jbsnnos ojslncos cosoj coso cois o os osoosn olahsb uhuijonu ou |",
                    isDone: false,
                },
            ]
        },
        {
            date: '10 dekabr 2023. 12:56',
            tasks: [
                {
                    id: 1, 
                    title: 'Korrektirovka qilish kerak tekstlarini',
                    isDone: true,
                },
                {
                    id: 2, 
                    title: 'Ichki sahifalarda havolalar side bar menu',
                    isDone: true,
                },
                {
                    id: 3, 
                    title: 'Bu yangi zadacha emas',
                    isDone: true,
                },
            ]
        },
        {
            date: '7 iyul 2024. 22:56',
            tasks: [
                {
                    id: 4, 
                    title: 'Agar berilgan taskni deadline tugagan bo’lsa rangi qizil bo’ladi',
                    isDone: false,
                },
                {
                    id: 5, 
                    title: "You shouldn't focus on why you cant do something, which is what most people do. You should focus on why perhaps you can, and be one of the exceptions.",
                    isDone: false,
                },
            ]
        },
        {
            date: '12 dekabr 2024. 12:56',
            tasks: [
                {
                    id: 6, 
                    title: 'Mobile version design',
                    isDone: false,
                },
                {
                    id: 7, 
                    title: "It's not about ideas. It's about making ideas happen. It's not about ideas. It's about making ideas happen. It's not about ideas. It's about making.",
                    isDone: false,
                },
                {
                    id: 8, 
                    title: "Yangi zadacha rangi va edit holati shunaqa bo’ladi  jbsnnos ojslncos cosoj coso cois o os osoosn olahsb uhuijonu ou |",
                    isDone: false,
                },
            ]
        }
    ]

    const [value, setValue] = useTab()

    return (
        <div className='w-[700px] 2xl:w-[70%]'>
            {/* Header */}
            <div className='flex items-center justify-between mb-5 w-[700px] 2xl:w-[70%]'>
                {/* Tabfilter */}
                <Tab onChange={setValue} data={tabs} />

                <div className='flex items-center gap-[20px]'>
                    <ChustomCheckbox bg={"bg-primaryGreen"} isChecked={isChecked} setIsChecked={setIsChecked} />

                    <button className='flex items-center px-[31px] gap-[7px] py-[16px] bg-white rounded-md'>
                        <svg width="24" height="20" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.333252 13.1665V14.8332C0.333252 20.3115 0.333252 23.0515 1.84659 24.8965C2.12341 25.2338 2.43267 25.543 2.76992 25.8198C4.61659 27.3332 7.35325 27.3332 12.8333 27.3332C18.3116 27.3332 21.0516 27.3332 22.8966 25.8198C23.2333 25.5432 23.5433 25.2332 23.8199 24.8965C24.9899 23.4715 25.2549 21.5115 25.3149 18.1665L26.4316 18.7165C29.6733 20.3365 31.2949 21.1482 32.4816 20.4148C33.6666 19.6815 33.6666 17.8698 33.6666 14.2432V13.7565C33.6666 10.1315 33.6666 8.31817 32.4816 7.58484C31.2949 6.8515 29.6733 7.66317 26.4316 9.28484L25.3149 9.83317C25.2549 6.48817 24.9899 4.52817 23.8199 3.10317C23.5431 2.76592 23.2338 2.45666 22.8966 2.17984C21.0499 0.666504 18.3133 0.666504 12.8333 0.666504C7.35492 0.666504 4.61492 0.666504 2.76992 2.17984C2.43267 2.45666 2.12341 2.76592 1.84659 3.10317C0.333252 4.94984 0.333252 7.6865 0.333252 13.1665Z" fill="#4EC33B"/>
                        </svg>
                        <span className='text-[0.813rem] leading-[24px] font-[500] text-secondaryBlack'>Call</span>
                    </button>
                </div>
            </div>

            {/* Main Content */}

            <section className='bg-white relative h-[87vh] rounded-[7px] pt-[2px] pb-[20px] w-[700px] 2xl:w-[70%]'>

                {
                    value === "default"  &&
                    <Task tasks={tasks} />
                }

                {
                    value === "Tasks"  &&
                    <Task tasks={tasks} />
                }

                {
                    value == "Chat" &&
                    <Chat />
                }

                {/* Add Task Section */}
                <div className='w-full bg-white z-30 px-[20px] absolute bottom-[20px] flex items-stretch gap-[10px]'>
                    <div className='w-[75%] relative'>
                        <input type="text" placeholder='New Task' className='w-full h-full p-5 bg-primaryGray rounded-[7px] placeholder:text-black' />
                        <div className='w-[10px] cursor-pointer absolute right-[24px] top-[50%] translate-y-[-50%]'>
                            <img className='w-full' src={replay} alt="replay" />
                        </div>
                    </div>

                    <div className="relative w-[30%]">
                        <input id="datepicker-actions" datepicker datepickerButtons datepickerAutoselectToday type="date" className="bg-white outline-none border h-full border-primaryBorder text-sm rounded-lg block w-full px-[18px] placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500" placeholder="Select date" />
                    </div>

                </div>
            </section>
        </div>
    )
}