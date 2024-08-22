import React from 'react'
import blank from '../assets/logo/blankprofpic.png'


const ProfileItem = ({name, followers, id}) => {
    return (
        <div className='text-3xl  h-20 flex items-center gap-5'>
            <img src={blank} className='h-[75%] rounded-full' alt="" />
            <div className='flex-grow'>
                <h1 className='text-2xl font-medium'>{name}</h1>
                <p className='text-lg text-gray-400'>{followers}</p>
            </div>
            <button className="btn btn-primary text-lg ">Follow</button>
        </div>
    )
}

export default ProfileItem