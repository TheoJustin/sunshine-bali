import React from 'react'
import blank from '../assets/logo/blankprofpic.png'
import Comment from './Comment'
import { FaRegComment } from 'react-icons/fa6'

const CommentDetailPage = () => {
    return (
        <div className='border-gray-200 border flex justify-between flex-col rounded-xl h-[87vh]  p-5 w-[25vw]'>
            <p className='text-4xl font-medium'>Comments</p>
            {/* <hr /> */}
            <div className='flex flex-col gap-4 h-[80%] overflow-y-scroll'>
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </div>
            <div className='flex items-center h-[3rem] gap-3'>
                <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered pt-6 pb-6 w-full"
                />
                <div className='bg-orange-500 aspect-square h-full flex items-center justify-center rounded-lg'>
                    <FaRegComment className='size-7 fill-white ' />

                </div>
            </div>
        </div>
    )
}

export default CommentDetailPage