import React from 'react'

export default function Tab({data}) {
  return (
    <div className='flex gap-[2px]'>
        {/* Tabs */}
        {
            data.map((tab, index) => {
                return (
                    <div className='bg-white px-[18px] py-[15px] flex items-center gap-1 rounded-md min-w-[115px] justify-center cursor-pointer' key={index}>
                        {/* Img */}
                        <div>
                            <img src={tab.img} alt="" />
                        </div>

                        {/* Tab title */}
                        <p className='font-medium text-[0.813rem] text-secondaryBlack 2xl:text-[0.9rem]'>{tab.title}</p>
                    </div>
                )
            })
        }
    </div>
  )
}