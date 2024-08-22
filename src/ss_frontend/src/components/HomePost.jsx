import React from 'react'
import blank from '../assets/logo/blankprofpic.png'
import { CiCircleCheck } from "react-icons/ci";
import { IoCheckmark } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaRegComments } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";

const HomePost = ({ postId }) => {
    return (
        <div className='border-black border w-full flex gap-4 justify-between p-4'>
            <img className='rounded-full size-16' src={blank} alt="" />
            <div className='w-full gap-4 flex flex-col'>
                <div className='flex justify-between items-center'>
                    <p className='text-3xl'>Name</p>
                    <div className='flex items-center'>
                        <IoCheckmark className='size-10' />
                        <IoCloseOutline className='size-10' />

                    </div>
                </div>
                <p className='text-xl '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque labore sit velit laborum adipisci tenetur, quas assumenda culpa ipsa quasi explicabo cum nostrum facere est tempora corrupti, obcaecati, porro dolor!</p>
                <div className='w-full flex justify-center p-4'>
                    <img className='max-w-11/12  px rounded-lg' src={blank} alt="" />
                </div>
                <div className='flex gap-8'>
                    <div className='flex items-center gap-2'>
                        <IoIosHeartEmpty className='size-8' />
                        <p className='text-xl text-gray-500'>111</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaRegComments className='size-8' />
                        <p className='text-xl text-gray-500'>111</p>
                    </div>
                </div>

                <hr />
                <div className='flex items-center gap-3'>
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered pt-6 pb-6 w-full"
                    />
                    <div className='bg-orange-500 aspect-square h-full flex items-center justify-center rounded-lg'>
                        <FaRegComment className='size-8 fill-white self-center' />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePost