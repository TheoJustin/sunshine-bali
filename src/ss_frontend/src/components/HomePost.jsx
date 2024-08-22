import React from 'react'
import blank from '../assets/logo/blankprofpic.png'
import { CiCircleCheck } from "react-icons/ci";
import { IoCheckmark } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaRegComments } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

const HomePost = ({ postId, choosePost }) => {
    return (
        <div className='border-gray-200 border rounded-xl p-6 cursor-pointer' onClick={() => { choosePost(postId) }}>
            <div className=' w-full flex gap-5 justify-between'>
                <img className='rounded-full w-[10%] h-[10%]' src={blank} alt="" />
                <div className='w-[85%] gap-3 flex flex-col'>
                    <div className='flex justify-between items-center'>
                        <p className='text-xl font-medium'>Name</p>
                    </div>
                    <p className='text-base '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque labore sit velit laborum adipisci tenetur, quas assumenda culpa ipsa quasi explicabo cum nostrum facere est tempora corrupti, obcaecati, porro dolor!</p>
                    <div className='w-full flex justify-start gap-4 p-4 overflow-x-scroll'>
                        <img className='max-w-52 max-h-36  px rounded-lg' src={blank} alt="" />
                        <img className='max-w-52 max-h-36  px rounded-lg' src={blank} alt="" />
                        <img className='max-w-52 max-h-36  px rounded-lg' src={blank} alt="" />
                        <img className='max-w-52 max-h-36  px rounded-lg' src={blank} alt="" />
                        <img className='max-w-52 max-h-36  px rounded-lg' src={blank} alt="" />
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-4'>

                <div className='flex gap-8 justify-end'>
                    <div className='flex items-center gap-2'>
                        <IoIosHeartEmpty className='size-6' />
                        <p className='text-lg text-gray-500'>111</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaRegComments className='size-6' />
                        <p className='text-lg text-gray-500'>111</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <RiMoneyDollarCircleLine className='size-6' />
                        <p className='text-lg text-gray-500'>funded by 111 users</p>
                    </div>
                </div>
                <details className="dropdown">
                    <summary className="btn text-gray-500 text-base m-1 w-full">We've detected that this project may have low reliability</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-full text-lg p-2 shadow">
                        <li><a>Yes</a></li>
                        <li><a>No</a></li>
                    </ul>
                </details>
                {/* <hr /> */}
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
        </div>
    )
}

export default HomePost