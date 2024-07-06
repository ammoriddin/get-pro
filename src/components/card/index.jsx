import React from 'react'

export default function Card({data, version = 1}) {
  return (
    <>
        {
            version === 1 && 
            <div className='w-[390px]'>

                {/* Card Top */}
                <div className='text-white rounded-t-md py-[25px] px-[30px] card-bg'>

                    {/* Date */}
                    <h2 className='font-[800] text-[3.375rem] leading-[65.35px] mb-[5px]'>{data.time}</h2>
                    <p className='font-[700] text-[1.375rem] leading-[21px] mb-[3px]'>{data.title}</p>
                    <span className='font-[500] text-[0.813rem] 2xl:text-[0.9rem]'>{data.date}</span>
                </div>

                {/* Card Main Text */}
                <div className='pt-[18px] rounded-b-md bg-white pb-[30px] px-[30px]'>
                    <p className='font-[500] text-[0.813rem] 2xl:text-[0.9rem] leading-[20px] mb-[10px]'>{data.text}</p>
                    <span className='font-[400] text-[0.813rem] 2xl:text-[0.9rem] leading-[15.73px]'><i>{data.author}</i></span>
                </div>
            </div>
        }
    </>
  )
}