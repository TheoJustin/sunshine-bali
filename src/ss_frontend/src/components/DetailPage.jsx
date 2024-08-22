import React from 'react'
import blank from '../assets/logo/blankprofpic.png'
import { IoIosHeartEmpty } from "react-icons/io";
import { FaRegComments } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";
import { RiMoneyDollarCircleLine } from 'react-icons/ri';

const DetailPage = () => {
    return (

        <div className='border-gray-200 w-1/2 border rounded-xl h-fit p-8 '>
            <div className=' w-full flex gap-5 justify-between'>
                <img className='rounded-full size-16' src={blank} alt="" />
                <div className='w-full gap-4 flex flex-col'>
                    <div className='flex justify-between items-center'>
                        <p className='text-3xl font-medium'>Name</p>
                    </div>
                    <p className='text-xl '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque labore sit velit laborum adipisci tenetur, quas assumenda culpa ipsa quasi explicabo cum nostrum facere est tempora corrupti, obcaecati, porro dolor!</p>
                    <div className='w-full flex justify-start gap-4 p-4 overflow-x-scroll'>
                        <img className='max-w-11/12 max-h-52  px rounded-lg' src={blank} alt="" />
                        <img className='max-w-11/12 max-h-52  px rounded-lg' src={blank} alt="" />
                        <img className='max-w-11/12 max-h-52  px rounded-lg' src={blank} alt="" />
                        <img className='max-w-11/12 max-h-52  px rounded-lg' src={blank} alt="" />
                        <img className='max-w-11/12 max-h-52  px rounded-lg' src={blank} alt="" />
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-4'>

                <div className='flex gap-8 justify-end'>
                    <div className='flex items-center gap-2'>
                        <IoIosHeartEmpty className='size-8' />
                        <p className='text-xl text-gray-500'>111</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaRegComments className='size-8' />
                        <p className='text-xl text-gray-500'>111</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <RiMoneyDollarCircleLine className='size-8' />
                        <p className='text-xl text-gray-500'>funded by 111 users</p>
                    </div>
                </div>
                <button class="btn btn-warning text-lg h-[4rem]">I'm interested in funding this project</button>
                <details className="dropdown">
                    <summary className="btn text-gray-500 text-lg m-1 w-full">We've detected that this project may have low reliability. Do you agree?</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-full text-lg p-2 shadow">
                        <li><a>Yes</a></li>
                        <li><a>No</a></li>
                    </ul>
                </details>
                
            </div>
        </div>
    )
}

export default DetailPage