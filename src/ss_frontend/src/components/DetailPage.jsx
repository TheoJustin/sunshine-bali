import React, { useEffect, useState } from 'react'
import blank from '../assets/logo/blankprofpic.png'
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import { FaRegComments } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { useAuth } from '../hooks/UseAuth';
import { ss_backend } from '../../../declarations/ss_backend';

const DetailPage = ({ currPost, setCurrPost }) => {
    const [name, setName] = useState("");
    const { principal } = useAuth();
    const [comment, setComment] = useState("");
    const [liked, setLiked] = useState(false);
    // console.log("likes" + post.likes);
    async function checkLiked() {
        const liked = await ss_backend.isLiked(principal, currPost.id);
        setLiked(liked);
    }
    async function refetch() {
        const post = await ss_backend.getPostById(currPost.id);
        if (post.ok) {
            setCurrPost(post);
        }
    }
    useEffect(() => {
        checkLiked();
        const user = ss_backend.getUserById(currPost.sender);
        if (user.ok) {
            setName(user.ok.name);
        }
    }, [liked, principal])

    async function handleLike() {
        const result = await ss_backend.likePost(principal, currPost.id);
        if (result.ok) {
            console.log(result.ok);
        }
        else {
            console.log("Error");
        }
        refetch();
        checkLiked();
    }

    async function handleVote(sentiment) {
        const result = await ss_backend.votePost(principal, currPost.id, sentiment);
        console.log(result);
        
        refetch();
    }

    return (

        <div className='border-gray-200 w-1/2 border rounded-xl h-fit p-8 '>
            <div className=' w-full flex gap-5 justify-between'>
                <img className='rounded-full w-[10%] h-[10%]' src={blank} alt="" />
                <div className='w-[85%] gap-3 flex flex-col'>
                    <div className='flex justify-between items-center'>
                        <p className='text-xl font-medium'>{name}</p>
                    </div>
                    <p className='text-base '>{currPost && currPost.description}</p>
                    {/* <div className='w-full flex justify-start gap-4 p-4 overflow-x-scroll'>
                        <img className='max-w-11/12 max-h-52  px rounded-lg' src={blank} alt="" />
                        <img className='max-w-11/12 max-h-52  px rounded-lg' src={blank} alt="" />
                        <img className='max-w-11/12 max-h-52  px rounded-lg' src={blank} alt="" />
                        <img className='max-w-11/12 max-h-52  px rounded-lg' src={blank} alt="" />
                        <img className='max-w-11/12 max-h-52  px rounded-lg' src={blank} alt="" />
                    </div> */}
                    {currPost && currPost.images && currPost.images.length != 0 && (
                        <div className="items-center w-full flex justify-start gap-4 p-4 overflow-x-scroll">
                            {currPost.images.map((imageUrl) => {
                                return (
                                    <div className="">
                                        <img
                                            src={imageUrl}
                                            className="max-w-52 max-h-36 rounded-lg"
                                            alt=""
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
            <div className='flex flex-col gap-4'>

                <div className='flex gap-8 justify-end'>
                    <div className='flex items-center gap-2 cursor-pointer' onClick={handleLike}>
                        {liked == true ? <>
                            <IoMdHeart className='size-6' />
                            <p className='text-lg text-gray-500'>{currPost && currPost.likes && currPost.likes.length}</p>
                        </> : <><IoIosHeartEmpty className='size-6' />
                            <p className='text-lg text-gray-500'>{currPost && currPost.likes && currPost.likes.length}</p></>}

                    </div>
                    <div className='flex items-center gap-2'>
                        <FaRegComments className='size-6' />
                        <p className='text-lg text-gray-500'>{currPost && currPost.comments && currPost.comments.length}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <RiMoneyDollarCircleLine className='size-6' />
                        <p className='text-lg text-gray-500'>{currPost && currPost.investors && currPost.investors.length}</p>
                    </div>
                </div>
                <button className="btn btn-warning text-lg h-[4rem]">I'm interested in funding this project</button>
                {
                    currPost.votingTriggered && <details className="dropdown">
                        <summary className="btn text-gray-500 text-base m-1 w-full">We've detected that this project may have low reliability</summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-full text-lg p-2 shadow">
                            <li onClick={() => { handleVote("Yes") }}><a>Yes</a></li>
                            <li onClick={() => { handleVote("No") }}><a>No</a></li>
                        </ul>
                    </details>
                }

            </div>
        </div>
    )
}

export default DetailPage