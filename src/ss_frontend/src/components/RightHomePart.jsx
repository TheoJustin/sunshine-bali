import React from 'react'
import ProfileItem from './ProfileItem'

const RightHomePart = () => {
  return (
    <div className='w-[25vw]  flex flex-col gap-6 '>
        <div className='flex flex-col gap-6 p-5 border-gray-200 border rounded-xl'>
            <p className='text-2xl font-medium'>Categories</p>
            <hr />
            <div className='flex flex-col gap-4'>
                <div className='  h-20'>
                    <p className='text-lg font-medium'>Art</p>
                    <p className='text-base text-gray-400'>17k posts</p>
                </div>
                <div className=' h-20'>
                    <p className='text-lg font-medium'>Application</p>
                    <p className='text-base text-gray-400'>17k posts</p>
                </div>
                <div className='  h-20'>
                    <p className='text-lg font-medium'>Product</p>
                    <p className='text-base text-gray-400'>17k posts</p>
                </div>
            </div>
        </div>
        <div className='flex flex-col gap-6 p-5 border-gray-200 border rounded-xl'>
            <p className='text-2xl font-medium'>Shining Creators</p>
            <hr />
            <div className='flex flex-col gap-4'>
                <ProfileItem followers={"17k"} name={"Ryan Wawan"}/>
                <ProfileItem followers={"20k"} name={"Jojos Jonathan"}/>
                <ProfileItem followers={"23k"} name={"Theow Aman"}/>
            </div>
        </div>
    </div>
  )
}

export default RightHomePart