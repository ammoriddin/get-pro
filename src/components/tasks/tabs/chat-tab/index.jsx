import Badge from '@components/badge'
import React from 'react'
import replayIcon from '@assets/icons/replay.svg'
import dots from '@assets/png-icons/three-dots.png'
import dateIcon from '@assets/icons/date-icon.svg'

export default function Chat() {
    const messages = [
        {
            date: '12-May',
            data: [
                {
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIJCBj5EDeXUk3RWEgqwZn_K8YnMZ8UOQNHA&s',
                    user_name: 'Avatarbek',
                    text: 'Hello guys how are you?',
                    time: '12:32',
                },
                {
                    avatar: 'https://image.api.playstation.com/cdn/UP1018/CUSA00133_00/XlkEcZSBzuJPIJo8BI7l0KuY0hBYrO8c.png?w=440&thumb=false',
                    user_name: 'Batmanjon',
                    text: 'nima gap jigarim?',
                    time: '12:33',
                },
                {
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfV6VSWQ9n7T7GVV1u3-dau3VtPeAjwoBtqA&s',
                    user_name: 'Tarzanxon',
                    text: 'Bir junglilada aylanib kemimizmi jigarlarim',
                    time: '12:34',
                },
            ]
        },
        {
            date: '13-May',
            data: [
                {
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIJCBj5EDeXUk3RWEgqwZn_K8YnMZ8UOQNHA&s',
                    user_name: 'Avatarbek',
                    text: "endi ingiliz tiliga o'qivommande",
                    time: '12:32',
                },
            ]
        },
        {
            date: '12-May',
            data: [
                {
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIJCBj5EDeXUk3RWEgqwZn_K8YnMZ8UOQNHA&s',
                    user_name: 'Avatarbek',
                    text: 'Hello guys how are you?',
                    time: '12:32',
                },
                {
                    avatar: 'https://image.api.playstation.com/cdn/UP1018/CUSA00133_00/XlkEcZSBzuJPIJo8BI7l0KuY0hBYrO8c.png?w=440&thumb=false',
                    user_name: 'Batmanjon',
                    text: 'nima gap jigarim?',
                    time: '12:33',
                },
                {
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfV6VSWQ9n7T7GVV1u3-dau3VtPeAjwoBtqA&s',
                    user_name: 'Tarzanxon',
                    text: 'Bir junglilada aylanib kemimizmi jigarlarim',
                    time: '12:34',
                },
            ]
        },
        {
            date: '13-May',
            data: [
                {
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIJCBj5EDeXUk3RWEgqwZn_K8YnMZ8UOQNHA&s',
                    user_name: 'Avatarbek',
                    text: "endi ingiliz tiliga o'qivommande",
                    time: '12:32',
                },
            ]
        },
    ]

    return (
        <div className='h-full overflow-auto pb-[90px]'>
            {/* Task Name */}
            <div className='flex gap-[10px] sticky top-0 bg-white z-30 items-center px-[2px] mb-[30px]'>
                <Badge text="Oasis International Travel" />
                <span className='font-[500] text-[0.75rem] 2xl:text-[0.95rem]'>14 kun</span>
            </div>

            {/* Chat */}
            <section className='pl-[40px] pr-[30px]'>
                {
                    messages.map((message, index) => (
                        <div key={index} className='flex flex-col gap-[20px]'>

                            {/* Date */}
                            <p className='w-full flex items-center gap-[4.5px] mt-[10px] mb-[10px] py-[5px] px-[5.65px] bg-primaryGray rounded-[3px] text-[0.75rem] 2xl:text-[0.95rem] text-secondaryGrayText font-medium leading-[auto]'>
                                <img src={dateIcon} alt="" />
                                <span>{message.date}</span>
                            </p>
                            {
                                message.data.map((userMessage, index) => (
                                    // Message
                                    <div className='flex cursor-pointer' key={index}>
                                        {/* Profile Photo */}
                                        <div className='w-[40px] mr-[6px] h-[40px] 2xl:w-[50px] 2xl:h-[50px] border-[4px] border-lightBlue border-solid rounded-[50%]'>
                                            <img className='w-full rounded-[50%] border-[1px] object-cover border-[#4B4A92] border-solid' src={userMessage.avatar} alt="user avatar" />
                                        </div>

                                        {/* Message */}
                                        <div className='bg-[transparent] transition-[background-color] hover:bg-primaryGray p-[9px] w-full rounded-[8px] flex justify-between'>
                                            {/* Message Data */}
                                            <div className='flex flex-col gap-[5px]'>
                                                <h3 className='font-medium text-[0.875rem] leading-[auto] text-secondaryBlack'>{userMessage.user_name}</h3>
                                                <p className='font-[400] text-[0.875rem] leading-[19px] text-secondayrDarkBlack'>{userMessage.text}</p>
                                                <span className='font-[400] text-[0.75rem] 2xl:text-[0.95rem] text-secondaryColor'>{userMessage.time}</span>
                                            </div>

                                            {/* Message Edit section */}
                                            <div className='flex items-start'>
                                                <div className='flex items-stretch gap-[2px]'>
                                                    <button className='flex items-center rounded-xl py-[4.5px] px-[7px] gap-[5.67px] bg-white'>
                                                        <img className='w-[10px]' src={replayIcon} alt="Replay Icon" />
                                                        <span className='text-[0.75rem] 2xl:text-[0.8rem] font-[400] leading-[auto]'>Replay</span>
                                                    </button>
                                                    <button className='bg-white p-[4px] rounded-md'>
                                                        <img className='h-[16px] rotate-90' src={dots} alt="" />
                                                    </button>
                                                </div>
                                            </div>                                        
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </section>
        </div>
    )
}