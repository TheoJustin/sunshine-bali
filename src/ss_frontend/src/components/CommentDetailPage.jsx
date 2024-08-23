import React, { useEffect, useState } from 'react'
import blank from '../assets/logo/blankprofpic.png'
import Comment from './Comment'
import { FaRegComment } from 'react-icons/fa6'
// import { useMutation } from 'react-query'
import { useMutation, useMutationState } from '@tanstack/react-query'
import { ss_backend } from '../../../declarations/ss_backend'
import { useAuth } from '../hooks/UseAuth'

const CommentDetailPage = ({ currPost, setCurrPost }) => {
    const [comments, setComments] = useState([]);
    const {principal} = useAuth();
    const [comment, setComment] = useState("");
    const { status: statusFetchingData, mutate: dataMutate } = useMutation({
        mutationKey: ["checkFetch"],
        mutationFn: fetchDatas,
    });
    async function refetch() {
        const post = await ss_backend.getPostById(currPost.id);
        if (post.ok) {
            setCurrPost(post);
        }
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
                console.log(principal, currPost.id, comment, data);
                alert(`Classification: ${data.classification}`);
                
                const result = await ss_backend.makeComment(principal, currPost.id, comment, data.classification);
            } else {
                alert(`Error: ${data.error}`);
            }
        } catch (error) {
            alert("Failed to send comment. Please try again later.");
        }
        window.location.reload();
        // dataMutate();
        // refetch();
    }

    async function fetchDatas() {
        await fetchComments();

        // await fetchFriendHeader();
        return true;
    }


    async function fetchComments() {
        const fetchedComments = await ss_backend.getAllCommentsAccordingToPost(currPost);
        // console.log("ini komennyaa" + fetchedComments);

        if (fetchedComments.ok) {
            // console.log(fetchedComments.ok);

            setComments(fetchedComments.ok);

        }
    }

    useEffect(() => {
        dataMutate();
    }, [currPost, comments]);

    return (
        <div className='border-gray-200 border flex justify-between flex-col rounded-xl h-[87vh]  p-5 w-[25vw]'>
            <p className='text-zinc-2xl font-medium'>Comments</p>
            {/* <hr /> */}
            <div className='flex flex-col gap-3 h-[80%] overflow-y-scroll'>
                {comments.length != 0 && comments.map((comment) => {
                    // console.log(comment);
                    return (
                        <Comment comment={comment} />

                    )
                })}
            </div>
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
    )
}

export default CommentDetailPage