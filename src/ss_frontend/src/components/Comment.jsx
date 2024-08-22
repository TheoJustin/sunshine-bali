import React from 'react'
import blank from '../assets/logo/blankprofpic.png'


const Comment = ({chatId}) => {
    return (
        <div className='text-3xl  h-20 flex items-center gap-5'>
            <img src={blank} className='h-[60%] rounded-full' alt="" />
            <div className='flex-grow'>
                <h1 className='text-xl font-medium'>name</h1>
                <p className='text-base '>aaaaaaa</p>
            </div>
        </div>
    )
}

export default Comment