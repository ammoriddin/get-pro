import React from 'react'
import addUserIcon from '@assets/icons/add-user.svg'
import settings from '@assets/icons/settings.svg'

export default function Users({data}) {
  return (
    <div className='flex items-center flex-col justify-between h-full pb-[60px] mr-[44px]'>
        <div className='flex items-center flex-col gap-[10px]'>
            {/* Project Avatar */}
            <div className='bg-white p-[3px] border-[1px] border-solid border-primaryBlue rounded-[50%]'>
                <div className='w-[62px] h-[62px] clear-start bg-yellow rounded-[50%] flex justify-center items-center'>
                    <span className='text-secondaryBlack font-bold texxt-[15px]'>OIT</span>
                </div>
            </div>

            {/* Add User Section */}
            <div className='w-[56px] h-[56px] rounded-[50%] bg-primaryGray border-[1px] border-solid border-secondaryColor flex justify-center items-center'>
                <img className='w-[15px] 2xl:w-[17px]' src={addUserIcon} alt="" />
            </div>

            {/* Users */}
            {
                data.map((user) => (
                    <div className='w-[56px] h-[56px]' key={user.id}>
                        <img className='w-full h-full rounded-[50%] object-cover' src={user.img} alt="user avatar" />
                    </div>
                ))
            }
        </div>

        <div className='w-[18px] h-[18px] cursor-pointer'>
            <img className='w-full h-full' src={settings} alt="settings" />
        </div>
    </div>
  )
}