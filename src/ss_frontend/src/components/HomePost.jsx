import React, { useEffect, useState } from 'react'
import blank from '../assets/logo/blankprofpic.png'
import { CiCircleCheck } from "react-icons/ci";
import { IoCheckmark } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import { FaRegComments } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { ss_backend } from '../../../declarations/ss_backend';
import { useAuth } from '../hooks/UseAuth';

const HomePost = ({ post, choosePost, refetch }) => {
    const [name, setName] = useState("");
    const { principal } = useAuth();
    const [comment, setComment] = useState("");
    const [liked, setLiked] = useState(false);
    // console.log("likes" + post.likes);
    async function checkLiked() {
        const liked = await ss_backend.isLiked(principal, post.id);
        setLiked(liked);
    }
    useEffect(() => {
        checkLiked();
        const user = ss_backend.getUserById(post.sender);
        if(user.ok){
            setName(user.ok.name);
        }
    }, [liked, principal])

    async function handleLike() {
        const result = await ss_backend.likePost(principal, post.id);
        if (result.ok) {
            console.log(result.ok);
        }
        else {
            console.log("Error");
        }
        refetch();
        checkLiked();
    }

    async function handleVote(sentiment){
        const result = await ss_backend.votePost(principal, post.id, sentiment);
        console.log(result);
        
        refetch();
    }

    
    async function handleComment() {
        try {
            const response = await fetch(
                "https://web-production-d8ae.up.railway.app/analyze",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ comment: comment }),
                }
            );

            const data = await response.json();
            if (response.ok) {
                alert(`Classification: ${data.classification}`);
                const result = await ss_backend.makeComment(principal, post.id, comment, data.classification);
            } else {
                alert(`Error: ${data.error}`);
            }
        } catch (error) {
            alert("Failed to send comment. Please try again later.");
        }
        refetch();
    }
    return (
        <div className='border-gray-200 border rounded-xl p-6 ' >
            <div className=' w-full flex gap-5 justify-between cursor-pointer' onClick={() => { choosePost(post) }}>
                <img className='rounded-full w-[10%] h-[10%]' src={blank} alt="" />
                <div className='w-[85%] gap-3 flex flex-col'>
                    <div className='flex justify-between items-center'>
                        <p className='text-xl font-medium'>{name}</p>
                    </div>
                    <p className='text-base '>{post.description}</p>
                    {post && post.images && post.images.length != 0 && (
                        <div className="items-center w-full flex justify-start gap-4 p-4 overflow-x-scroll">
                            {post.images.map((imageUrl) => {
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
                            <p className='text-lg text-gray-500'>{post && post.likes && post.likes.length}</p>
                        </> : <><IoIosHeartEmpty className='size-6' />
                            <p className='text-lg text-gray-500'>{post && post.likes && post.likes.length}</p></>}

                    </div>
                    <div className='flex items-center gap-2'>
                        <FaRegComments className='size-6' />
                        <p className='text-lg text-gray-500'>{post && post.comments && post.comments.length}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <RiMoneyDollarCircleLine className='size-6' />
                        <p className='text-lg text-gray-500'>{post && post.investors && post.investors.length}</p>
                    </div>
                </div>
                {
                    post.votingTriggered && <details className="dropdown">
                        <summary className="btn text-gray-500 text-base m-1 w-full">We've detected that this project may have low reliability</summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-full text-lg p-2 shadow">
                            <li onClick={()=>{handleVote("Yes")}}><a>Yes</a></li>
                            <li onClick={()=>{handleVote("No")}}><a>No</a></li>
                        </ul>
                    </details>
                }

                {/* <hr /> */}
                <div className='flex items-center h-[3rem] gap-3'>
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered pt-6 pb-6 w-full"
                        value={comment}
                        onChange={(e) => {
                            setComment(e.target.value);
                        }}
                    />
                    <div className='bg-orange-500 aspect-square h-full flex items-center justify-center rounded-lg' onClick={handleComment}>
                        <FaRegComment className='size-7 fill-white ' />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePost